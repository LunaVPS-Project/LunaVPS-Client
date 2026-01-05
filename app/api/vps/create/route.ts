import { NextResponse } from "next/server";
import { ociService } from "@/lib/oci";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name } = body;

        if (!name) {
            return NextResponse.json({ error: "Name is required" }, { status: 400 });
        }

        console.log(`Launching instance: ${name}...`);
        const instance = await ociService.launchInstance(name);

        return NextResponse.json({
            message: "VPS creation initiated",
            instanceId: instance.id,
            displayName: instance.displayName,
            lifecycleState: instance.lifecycleState,
        });
    } catch (error: any) {
        console.error("Error creating VPS:", error);
        return NextResponse.json(
            { error: error.message || "Failed to create VPS" },
            { status: 500 }
        );
    }
}
