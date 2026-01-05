import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Cloud VPS Chất lượng cao, giá cả hợp lý
            </h1>
            <p className="text-xl text-foreground/70 mb-8 text-balance">
              Dịch vụ máy chủ ảo nhanh, an toàn và đáng tin cậy. Được sử dụng bởi hàng ngàn doanh nghiệp trên thế giới.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Bắt đầu ngay <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                Xem thêm
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-12 border border-primary/20">
              <div className="space-y-4">
                <div className="h-48 bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-primary font-bold text-2xl">99.9%</div>
                    <div className="text-foreground/60 text-sm">Uptime Guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
