import { Card } from "@/components/ui/card"
import { Zap, Shield, BarChart3, Headphones, Globe, Lock } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Hiệu suất cao",
    description: "Máy chủ SSD nhanh với cơ sở hạ tầng hiện đại nhất",
  },
  {
    icon: Shield,
    title: "Bảo mật tuyệt đối",
    description: "Tường lửa DDoS, SSL miễn phí, và bảo vệ mối đe dọa 24/7",
  },
  {
    icon: BarChart3,
    title: "Dễ dàng mở rộng",
    description: "Nâng cấp tài nguyên bất cứ lúc nào mà không có thời gian chết",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ chuyên gia sẵn sàng giúp đỡ bạn bất kỳ lúc nào",
  },
  {
    icon: Globe,
    title: "Nhiều vị trí",
    description: "Máy chủ tại các trung tâm dữ liệu trên khắp thế giới",
  },
  {
    icon: Lock,
    title: "Sao lưu tự động",
    description: "Sao lưu hàng ngày để bảo vệ dữ liệu của bạn",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Tính năng vượt trội</h2>
          <p className="text-xl text-foreground/60 text-balance">
            Tất cả những gì bạn cần để chạy ứng dụng của mình với hiệu quả tối đa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Card key={idx} className="p-6">
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/70 text-sm">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
