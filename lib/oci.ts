import * as common from "oci-common";
import * as core from "oci-core";
import * as identity from "oci-identity";
import { OCI_CONFIG } from "./oci-config";
import fs from "fs";

// Load private key
const privateKey = fs.readFileSync(OCI_CONFIG.privateKeyPath, "utf8");

const provider = new common.SimpleAuthenticationDetailsProvider(
    OCI_CONFIG.tenancy,
    OCI_CONFIG.user,
    OCI_CONFIG.fingerprint,
    privateKey,
    null,
    common.Region.fromRegionId(OCI_CONFIG.region)
);

export class OciService {
    private computeClient: core.ComputeClient;
    private identityClient: identity.IdentityClient;
    private virtualNetworkClient: core.VirtualNetworkClient;

    constructor() {
        this.computeClient = new core.ComputeClient({ authenticationDetailsProvider: provider });
        this.identityClient = new identity.IdentityClient({ authenticationDetailsProvider: provider });
        this.virtualNetworkClient = new core.VirtualNetworkClient({ authenticationDetailsProvider: provider });
    }

    async getCompartmentId() {
        return OCI_CONFIG.tenancy; // Using root compartment for simplicity
    }

    async getFirstSubnet(compartmentId: string) {
        const vcns = await this.virtualNetworkClient.listVcns({ compartmentId });
        if (vcns.items.length === 0) throw new Error("No VCN found");

        const subnets = await this.virtualNetworkClient.listSubnets({
            compartmentId,
            vcnId: vcns.items[0].id
        });

        if (subnets.items.length === 0) throw new Error("No Subnet found in VCN");
        return subnets.items[0].id;
    }

    async launchInstance(name: string) {
        const compartmentId = await this.getCompartmentId();
        const subnetId = await this.getFirstSubnet(compartmentId);

        // Default to ARM Ampere A1 (The "Poor Genius" choice for free tier)
        // Shape: VM.Standard.A1.Flex
        // Memory: 6GB per OCPU, max 24GB for free tier
        const launchDetails: core.models.LaunchInstanceDetails = {
            compartmentId,
            displayName: name,
            shape: "VM.Standard.A1.Flex",
            shapeConfig: {
                ocpus: 1,
                memoryInGBs: 6,
            },
            createVnicDetails: {
                subnetId,
                assignPublicIp: true,
            },
            sourceDetails: {
                sourceType: "image",
                // This is a placeholder for Ubuntu 22.04 image OCID in ap-singapore-1
                // Usually, we should fetch the latest image ID
                imageId: await this.getLatestUbuntuImage(compartmentId),
            },
            metadata: {
                // Cloud-init to install LXD
                ssh_authorized_keys: "ssh-rsa YOUR_PUBLIC_KEY", // TODO: Get from user or generate
                user_data: Buffer.from(this.getCloudInitScript()).toString("base64"),
            }
        };

        const response = await this.computeClient.launchInstance({ launchInstanceDetails: launchDetails });
        return response.instance;
    }

    private async getLatestUbuntuImage(compartmentId: string) {
        const images = await this.computeClient.listImages({
            compartmentId,
            operatingSystem: "Canonical Ubuntu",
            operatingSystemVersion: "22.04",
            shape: "VM.Standard.A1.Flex"
        });

        if (images.items.length === 0) throw new Error("No Ubuntu image found");
        return images.items[0].id;
    }

    private getCloudInitScript() {
        return `
#cloud-config
package_update: true
package_upgrade: true
packages:
  - lxd
  - lxd-client
runcmd:
  - sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/g' /etc/ssh/sshd_config
  - systemctl restart ssh
  - lxd init --auto
  - lxc network create lxdbr0 ipv4.address=10.0.8.1/24 ipv4.nat=true
  - lxc profile device add default eth0 nic nictype=bridged parent=lxdbr0 name=eth0
    `.trim();
    }
}

export const ociService = new OciService();
