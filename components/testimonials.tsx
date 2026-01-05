import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Nguyễn Văn A",
    company: "Tech Startup",
    rating: 5,
    text: "Dịch vụ VPS này rất tuyệt vời. Uptime ổn định, hỗ trợ nhanh chóng. Tôi rất hài lòng với lựa chọn này.",
  },
  {
    name: "Trần Thị B",
    company: "E-commerce Business",
    rating: 5,
    text: "Tôi đã chuyển từ nhà cung cấp khác và không thể hạnh phúc hơn. Giá tốt và hiệu suất vượt trội.",
  },
  {
    name: "Lê Quốc C",
    company: "Digital Agency",
    rating: 5,
    text: "Dịch vụ khách hàng tuyệt vời, máy chủ ổn định và nhanh. Khuyến nghị cao nhất cho bất cứ ai.",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Được tin tưởng bởi hàng ngàn khách hàng
          </h2>
          <p className="text-xl text-foreground/60 text-balance">
            Nghe những câu chuyện thành công từ các doanh nghiệp sử dụng dịch vụ của chúng tôi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/70 mb-6">{testimonial.text}</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
