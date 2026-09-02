"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { SchedulingForm } from "./scheduling-form"

export function CTA() {
  return (
    <section id="agendamiento" className="py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
            Agenda tu Plan de Prevención
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Tu salud no puede esperar
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Da el primer paso hacia una medicina que se anticipa. Aquí solo trabajamos con un enfoque: prevenir, educar y proteger tu salud antes de que aparezcan los síntomas.
          </p>
        </div>

        {/* Multi-step Scheduling Form */}
        <div className="mb-16">
          <SchedulingForm />
        </div>

        {/* Contact Info Card */}
        <div className="relative bg-primary rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" fill="currentColor" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative px-8 py-12 lg:px-16">
            <div className="grid md:grid-cols-3 gap-8">
              <a
                href="tel:+573022875637"
                className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Teléfono</p>
                  <p className="font-medium">+57 302 287 5637</p>
                </div>
              </a>
              <a
                href="mailto:erikabuenpronostico@gmail.com"
                className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Email</p>
                  <p className="font-medium">erikabuenpronostico@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 text-primary-foreground/80">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Ubicación</p>
                  <p className="font-medium">Centro Médico Especializado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
