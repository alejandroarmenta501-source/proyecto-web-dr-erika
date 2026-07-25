"use client"

import { Clock, Heart, TrendingUp, Circle } from "lucide-react"

const values = [
  {
    icon: Clock,
    title: "Cerebro Sano",
    description:
      "Protege tu agilidad mental. \nAprende a prevenir el deterioro cognitivo y manejar el impacto del estrés en tu mente con bases científicas.",
  },
  {
    icon: Heart,
    title: "Prevención\nCardiometabólica",
    description:
      "Más allá de los números. \nEntiende qué significan tus cifras de tensión y azúcar para evitar infartos antes de que ocurran.",
  },
  {
    icon: TrendingUp,
    title: "Medicina del \nEstilo de Vida",
    description:
      "Tu hábito es tu medicina. \nUn taller práctico sobre epigenética, sueño y nutrición para hackear tu bienestar.",
  },
  {
    icon: Circle,
    title: "Envejecimiento\nSaludable",
    description:
      "Vivir mejor, por más tiempo. \nConstruye hoy la fuerza muscular y la densidad ósea que necesitarás mañana.",
  },
]

export function ValueProp() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
            ¿Por qué invertir en tu salud?
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            La educación transforma decisiones todos los días.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            La consulta médica tradicional suele quedarse corta para todo lo que necesitas saber. He diseñado estos espacios para que tú seas el protagonista de tu salud, con herramientas científicas claras y prácticas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/40 hover:bg-primary/5 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3 whitespace-pre-line">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
