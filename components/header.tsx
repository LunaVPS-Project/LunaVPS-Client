"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">VPS</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">CloudVPS</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#packages" className="text-foreground/70 hover:text-foreground transition">
              Gói cước
            </a>
            <a href="#features" className="text-foreground/70 hover:text-foreground transition">
              Tính năng
            </a>
            <a href="#about" className="text-foreground/70 hover:text-foreground transition">
              Về chúng tôi
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-foreground transition">
              Liên hệ
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-foreground/70">
              Đăng nhập
            </Button>
            <Button className="bg-primary hover:bg-primary/90">Mua ngay</Button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3">
            <a href="#packages" className="block text-foreground/70 hover:text-foreground py-2">
              Gói cước
            </a>
            <a href="#features" className="block text-foreground/70 hover:text-foreground py-2">
              Tính năng
            </a>
            <a href="#about" className="block text-foreground/70 hover:text-foreground py-2">
              Về chúng tôi
            </a>
            <a href="#contact" className="block text-foreground/70 hover:text-foreground py-2">
              Liên hệ
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" className="w-full text-foreground/70">
                Đăng nhập
              </Button>
              <Button className="w-full bg-primary">Mua ngay</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
