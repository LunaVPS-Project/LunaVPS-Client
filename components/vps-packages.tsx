"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { useState } from "react"

interface Package {
  id: string
  name: string
  price: number
  period: string
  description: string
  specs: {
    cpu: string
    ram: string
    storage: string
    bandwidth: string
  }
  features: string[]
  popular?: boolean
}

const packages: Package[] = [
  {
    id: "basic",
    name: "Basic",
    price: 4.99,
    period: "/tháng",
    description: "Hoàn hảo cho các trang web nhỏ",
    specs: {
      cpu: "1 vCore",
      ram: "1 GB",
      storage: "20 GB SSD",
      bandwidth: "1 TB",
    },
    features: ["cPanel/WHM", "Free SSL Certificate", "Daily Backups", "Email Accounts", "WordPress Compatible"],
  },
  {
    id: "professional",
    name: "Professional",
    price: 9.99,
    period: "/tháng",
    description: "Cho các doanh nghiệp vừa",
    specs: {
      cpu: "2 vCore",
      ram: "4 GB",
      storage: "60 GB SSD",
      bandwidth: "3 TB",
    },
    features: [
      "cPanel/WHM",
      "Free SSL Certificate",
      "Daily Backups",
      "Email Accounts",
      "WordPress Compatible",
      "DDoS Protection",
      "Priority Support",
    ],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 19.99,
    period: "/tháng",
    description: "Cho các doanh nghiệp lớn",
    specs: {
      cpu: "4 vCore",
      ram: "8 GB",
      storage: "160 GB SSD",
      bandwidth: "Unlimited",
    },
    features: [
      "cPanel/WHM",
      "Free SSL Certificate",
      "Daily Backups",
      "Email Accounts",
      "WordPress Compatible",
      "DDoS Protection",
      "Priority Support",
      "Dedicated IP",
      "Root Access",
    ],
  },
]

export function VpsPackages() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Gói cước linh hoạt theo nhu cầu
          </h2>
          <p className="text-xl text-foreground/60 mb-8 text-balance">
            Chọn gói phù hợp với nhu cầu của bạn. Có thể nâng cấp hoặc hạ cấp bất kỳ lúc nào.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                billingCycle === "monthly"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground/70 hover:bg-secondary/80"
              }`}
            >
              Theo tháng
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                billingCycle === "yearly"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground/70 hover:bg-secondary/80"
              }`}
            >
              Theo năm (Tiết kiệm 30%)
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`p-8 flex flex-col relative overflow-hidden transition hover:shadow-lg ${
                pkg.popular ? "border-primary/50 lg:scale-105" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-primary/20 border border-primary text-primary px-3 py-1 rounded-full text-xs font-semibold">
                  Phổ biến nhất
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
              <p className="text-foreground/60 text-sm mb-6">{pkg.description}</p>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">
                    ${billingCycle === "monthly" ? pkg.price : Math.round(pkg.price * 12 * 0.7)}
                  </span>
                  <span className="text-foreground/60">{pkg.period}</span>
                </div>
              </div>

              <div className="bg-secondary/40 rounded-lg p-4 mb-8">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground/70">CPU:</span>
                    <span className="font-semibold text-foreground">{pkg.specs.cpu}</span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-3">
                    <span className="text-foreground/70">RAM:</span>
                    <span className="font-semibold text-foreground">{pkg.specs.ram}</span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-3">
                    <span className="text-foreground/70">Storage:</span>
                    <span className="font-semibold text-foreground">{pkg.specs.storage}</span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-3">
                    <span className="text-foreground/70">Bandwidth:</span>
                    <span className="font-semibold text-foreground">{pkg.specs.bandwidth}</span>
                  </div>
                </div>
              </div>

              <Button
                className={`w-full mb-8 ${
                  pkg.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                Chọn gói này
              </Button>

              <div className="space-y-3 flex-grow">
                <p className="text-xs font-semibold text-foreground/60 uppercase">Tính năng bao gồm</p>
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/70">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
