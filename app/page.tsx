import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { VpsPackages } from "@/components/vps-packages"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <VpsPackages />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  )
}
