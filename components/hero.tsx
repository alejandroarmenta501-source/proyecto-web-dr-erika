"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-14">
          {/* Content */}
          <div className="order-1">
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
              Medicina Interna Personalizada
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground text-balance">
              Construyamos hoy el plan que tu{" "}
              <span className="text-primary">salud merece</span>{" "}
              para el futuro.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Medicina Interna enfocada en la prevención y educación continua. Aprende a proteger tu cerebro, tu corazón y tu futuro.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="#agendamiento"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("agendamiento")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="inline-flex items-center justify-center h-11 px-8 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-medium group transition-colors cursor-pointer"
              >
                Agenda tu Consulta
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#servicios"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="inline-flex items-center justify-center h-11 px-8 rounded-md border border-border text-foreground hover:bg-primary/5 font-medium transition-colors cursor-pointer"
              >
                Conoce mis Servicios
              </a>
            </div>
            

          </div>
          
          {/* Image */}
          <div className="order-2 relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-primary/15 rounded-3xl -rotate-3 transition-transform" />
              <div className="relative rounded-3xl overflow-hidden shadow-md">
                <Image
                  src="/images/Fotos_ErikaWeb1.jpg"
                  alt="Dra. Erika - Médico Internista"
                  width={600}
                  height={750}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
