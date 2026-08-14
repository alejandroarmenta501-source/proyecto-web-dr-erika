"use client"

import Image from "next/image"
import { Shield, Heart, Activity } from "lucide-react"

export function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-primary/5 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Título en Móvil (visible antes de la foto en pantallas pequeñas) */}
        <div className="block md:hidden mb-8">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            Sobre Mí
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance leading-tight">
            Medicina Preventiva con Base Científica
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image - Left Column */}
          <div className="relative aspect-[3/4] max-w-md mx-auto w-full">
            <div className="absolute -inset-3 bg-primary/15 rounded-3xl rotate-2 transition-transform" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-md">
              <Image
                src="/images/Fotos_ErikaWeb2.jpg"
                alt="Dra. Erika - Médico Internista"
                fill
                className="object-cover"
                sizes="(max-w-md) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Content - Right Column */}
          <div className="space-y-6">
            {/* Título en Desktop */}
            <div className="hidden md:block">
              <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
                Sobre Mí
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
                Medicina Preventiva con Base Científica
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Como médica internista con más de diez años de experiencia, entiendo la medicina como el arte de enseñar a vivir mejor. Mi propósito es traducir la ciencia en herramientas prácticas para que tomes el control de tu salud.
            </p>

            <div className="space-y-5 pt-2">
              {/* Anticipación */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Shield className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-base">Anticipación</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    No espero a que aparezca la enfermedad; intervengo en sus causas para cambiar su curso.
                  </p>
                </div>
              </div>

              {/* Longevidad Activa */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Heart className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-base">Longevidad Activa</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    El objetivo real no es solo sumar años, sino vivirlos con absoluta calidad, autonomía y bienestar.
                  </p>
                </div>
              </div>

              {/* Decisiones Informadas */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Activity className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-base">Decisiones Informadas</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Te acompaño a diseñar una estrategia científica y personalizada para proteger tu presente y asegurar tu futuro.
                  </p>
                </div>
              </div>
            </div>

            {/* Cierre */}
            <div className="pt-6 border-t border-primary/10">
              <p className="italic text-primary font-medium text-lg leading-relaxed">
                "Prevenir no es seguir una lista de consejos; es tomar decisiones cotidianas que transformen tu vida."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
