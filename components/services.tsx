"use client"

import { useState } from "react"
import { Brain, Activity, ArrowRight, Stethoscope, Heart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const services = [
  {
    id: "estilo-vida",
    icon: Stethoscope,
    title: "Medicina del Estilo de Vida",
    subtitle: "Tu hábito es tu medicina",
    description:
      "Un enfoque clínico y práctico enfocado en epigenética, sueño, nutrición y movimiento para optimizar tu bienestar. A través de este programa, obtendrás herramientas personalizadas para construir desde hoy la vitalidad y la longevidad que tu futuro de salud demanda.",
    features: [
      "Diagnóstico integral de hábitos y entorno diario",
      "Plan personalizado de sueño y alimentación inteligente",
      "Estrategias de movimiento y ejercicio sostenible",
      "Educación y asesoría en longevidad y epigenética aplicada",
    ],
  },
  {
    id: "cardiovascular",
    icon: Heart,
    title: "Salud Cardiovascular",
    subtitle: "Adelántate al infarto y protege tu corazón",
    description:
      "Más allá de las cifras de tensión arterial y perfil lipídico tradicionales. Aprenderás a comprender y gestionar tus indicadores metabólicos antes de que se consoliden en una enfermedad. Un plan preventivo diseñado con rigor para resguardar tu salud cardíaca y tu energía vital.",
    features: [
      "Evaluación y mapeo avanzado de riesgo cardiovascular",
      "Interpretación profunda de lípidos e indicadores precoces",
      "Planificación y acompañamiento en hábitos cardioprotectores",
      "Monitoreo continuo para la prevención y balance metabólico",
    ],
  },
  {
    id: "demencia",
    icon: Brain,
    title: "Prevención de Demencia",
    subtitle: "Protege tu mente a tiempo",
    description:
      "Un programa de acompañamiento clínico y educativo diseñado para anticiparse al deterioro cognitivo. Descubre cómo factores como el sueño profundo, el manejo del estrés y la reserva cognitiva moldean la salud de tu cerebro, creando un plan basado en evidencia científica para preservar tu agilidad mental.",
    features: [
      "Evaluación cognitiva y neurocognitiva preventiva",
      "Análisis detallado de factores de riesgo modificables",
      "Plan personalizado de hábitos de neuroprotección",
      "Acompañamiento clínico para la estimulación de reserva cognitiva",
    ],
  },
  {
    id: "renal",
    icon: Activity,
    title: "Salud Renal",
    subtitle: "Preserva la función de tus riñones",
    description:
      "Una aproximación proactiva dedicada a proteger tus riñones y optimizar tu equilibrio metabólico y de filtración. Identificaremos a tiempo las señales sutiles de sobrecarga renal para intervenir con precisión mediante nutrición guiada y optimización de hábitos, salvaguardando un pilar vital de tu salud.",
    features: [
      "Monitoreo preventivo de la función renal y depuración",
      "Análisis del impacto de la presión arterial en el sistema renal",
      "Plan nutricional personalizado para la protección del riñón",
      "Estrategias de hidratación y desintoxicación corporal seguras",
    ],
  },
  {
    id: "salud-mental",
    icon: Sparkles,
    title: "Prevención Salud Mental",
    subtitle: "Cultiva tu bienestar emocional y resiliencia",
    description:
      "Un espacio terapéutico y preventivo dedicado al cuidado de tu salud mental y emocional. Utilizando herramientas de neurociencia aplicada, técnicas avanzadas de modulación del estrés y equilibrio del eje cerebro-intestino-microbiota, aprenderás a mitigar el desgaste cotidiano para sostener una vida armónica y plena.",
    features: [
      "Valoración preventiva del estrés crónico y fatiga mental",
      "Herramientas de neurociencia práctica para la modulación emocional",
      "Plan de higiene del sueño y desconexión digital adaptado",
      "Tácticas personalizadas para la resiliencia y el balance integral diario",
    ],
  },
]

export function Services() {
  const [activeService, setActiveService] = useState(services[0].id)
  const active = services.find((s) => s.id === activeService) || services[0]

  return (
    <section id="servicios" className="py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
            Servicios Especializados
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Medicina preventiva para una vida plena
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Aquí no tratamos enfermedades ya instaladas. Diseñé estos programas para enseñarte a anticiparte, leer las señales de tu cuerpo y proteger tu salud antes de que aparezcan los síntomas.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8">
          {/* Service Tabs */}
          <div className="flex flex-col gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={cn(
                  "group flex items-start gap-4 p-6 rounded-2xl border text-left transition-all duration-300",
                  activeService === service.id
                    ? "bg-primary border-primary"
                    : "bg-card border-border hover:border-primary/30"
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                    activeService === service.id
                      ? "bg-primary-foreground/20"
                      : "bg-primary/10 group-hover:bg-primary/20"
                  )}
                >
                  <service.icon
                    className={cn(
                      "h-6 w-6 transition-colors",
                      activeService === service.id
                        ? "text-primary-foreground"
                        : "text-primary"
                    )}
                  />
                </div>
                <div>
                  <h3
                    className={cn(
                      "font-serif text-lg font-bold transition-colors",
                      activeService === service.id
                        ? "text-primary-foreground"
                        : "text-foreground"
                    )}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      "text-sm transition-colors",
                      activeService === service.id
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    )}
                  >
                    {service.subtitle}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Service Detail */}
          <div className="bg-card p-8 lg:p-10 rounded-2xl border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <active.icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  {active.title}
                </h3>
                <p className="text-primary font-medium">{active.subtitle}</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {active.description}
            </p>

            <div className="mb-8">
              <h4 className="text-sm uppercase tracking-widest text-foreground font-medium mb-4">
                Incluye:
              </h4>
              <ul className="space-y-3">
                {active.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground group cursor-pointer"
              onClick={() => {
                window.dispatchEvent(
                  new CustomEvent("select-service-and-schedule", {
                    detail: { serviceId: activeService },
                  })
                )
                document.getElementById("agendamiento")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Agendar mi Plan de Prevención
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
