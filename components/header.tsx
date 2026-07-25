"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a 
            href="#hero" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <span className="font-serif text-xl font-medium text-foreground">
              Dra. Erika
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#servicios" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Servicios
            </a>
            <a 
              href="#sobre-mi" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("sobre-mi")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Sobre Mí
            </a>
            <a 
              href="#contacto" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contacto
            </a>
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
              onClick={() => {
                document.getElementById("agendamiento")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Agendar Cita
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <a 
              href="#servicios" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault()
                setIsMenuOpen(false)
                document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Servicios
            </a>
            <a 
              href="#sobre-mi" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault()
                setIsMenuOpen(false)
                document.getElementById("sobre-mi")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Sobre Mí
            </a>
            <a 
              href="#contacto" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault()
                setIsMenuOpen(false)
                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contacto
            </a>
            <Button 
              size="sm" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
              onClick={() => {
                setIsMenuOpen(false)
                document.getElementById("agendamiento")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Agendar Cita
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
