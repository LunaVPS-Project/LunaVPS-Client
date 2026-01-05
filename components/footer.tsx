import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-foreground mb-4">CloudVPS</h3>
            <p className="text-sm text-foreground/60">Giải pháp máy chủ ảo hàng đầu cho doanh nghiệp của bạn.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Sản phẩm</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Hosting VPS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Cloud Storage
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Dedicated Server
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Email Hosting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Công ty</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Sự nghiệp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Liên hệ</h4>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@cloudvps.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Hà Nội, Việt Nam</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">&copy; 2025 CloudVPS. Tất cả các quyền được bảo lưu.</p>
          <div className="flex gap-4">
            <a href="#" className="text-foreground/60 hover:text-foreground transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
