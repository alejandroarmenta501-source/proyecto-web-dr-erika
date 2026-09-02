"use client"

import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="py-12 border-t border-border scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-medium text-foreground">
              Dra. Erika
            </span>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">
              Médica Internista
            </span>
          </div>

          <a
            href="mailto:erikabuenpronostico@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-4 w-4 text-primary" />
            <span>erikabuenpronostico@gmail.com</span>
          </a>

          <nav className="flex flex-wrap justify-center gap-6">
            <Link
              href="#servicios"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="#sobre-mi"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre Mí
            </Link>
            <Link
              href="#contacto"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dra. Erika. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
