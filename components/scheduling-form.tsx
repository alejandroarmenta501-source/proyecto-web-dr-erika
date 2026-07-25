"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Shield, 
  Stethoscope, 
  Heart, 
  Brain, 
  Activity,
  Apple,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Clock,
  User,
  Mail,
  Phone,
  Sun,
  Sunset,
  Loader2,
  MessageCircle,
  Sparkles
} from "lucide-react"
import { cn } from "@/lib/utils"

interface Topic {
  id: string
  label: string
  icon: React.ReactNode
}

const topics: Topic[] = [
  { id: "estilo-vida", label: "Medicina del Estilo de Vida", icon: <Stethoscope className="h-5 w-5" /> },
  { id: "cardiovascular", label: "Salud Cardiovascular", icon: <Heart className="h-5 w-5" /> },
  { id: "demencia", label: "Prevención de Demencia", icon: <Brain className="h-5 w-5" /> },
  { id: "renal", label: "Salud Renal", icon: <Activity className="h-5 w-5" /> },
  { id: "salud-mental", label: "Prevención Salud Mental", icon: <Sparkles className="h-5 w-5" /> },
]

const steps = [
  { number: 1, label: "Tema", icon: <Stethoscope className="h-4 w-4" /> },
  { number: 2, label: "Preferencia", icon: <Clock className="h-4 w-4" /> },
  { number: 3, label: "Confirmación", icon: <CheckCircle2 className="h-4 w-4" /> },
]

export function SchedulingForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)

  useEffect(() => {
    const handleServiceSelection = (e: CustomEvent<{ serviceId: string }>) => {
      if (e.detail?.serviceId) {
        setSelectedTopic(e.detail.serviceId)
        setCurrentStep(2)
      }
    }

    window.addEventListener("select-service-and-schedule" as any, handleServiceSelection)
    return () => {
      window.removeEventListener("select-service-and-schedule" as any, handleServiceSelection)
    }
  }, [])
  
  // Datos del paciente y jornada seleccionada
  const [patientName, setPatientName] = useState("")
  const [patientEmail, setPatientEmail] = useState("")
  const [patientPhone, setPatientPhone] = useState("")
  const [selectedJornada, setSelectedJornada] = useState<"mañana" | "tarde" | null>(null)

  // Estados de envío y errores
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const canProceed = () => {
    if (currentStep === 1) return selectedTopic !== null
    if (currentStep === 2) {
      return (
        patientName.trim() !== "" &&
        patientPhone.trim() !== "" &&
        patientEmail.trim() !== "" &&
        selectedJornada !== null
      )
    }
    return true
  }

  const handleNext = async () => {
    if (!canProceed()) return

    if (currentStep === 2) {
      setIsSubmitting(true)
      setSubmitError(null)

      try {
        const response = await fetch("/api/solicitudes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            patientName,
            patientPhone,
            patientEmail,
            selectedTopic,
            selectedJornada,
          }),
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || "Ocurrió un error al procesar tu solicitud.")
        }

        // Si fue exitoso, avanzamos a la confirmación
        setCurrentStep(3)
      } catch (err: any) {
        setSubmitError(err.message || "Error de red al conectar con el servidor.")
      } finally {
        setIsSubmitting(false)
      }
    } else if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1 && !isSubmitting) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleReset = () => {
    setCurrentStep(1)
    setSelectedTopic(null)
    setPatientName("")
    setPatientEmail("")
    setPatientPhone("")
    setSelectedJornada(null)
    setSubmitError(null)
  }

  const goToStep = (step: number) => {
    if (step < currentStep && !isSubmitting) {
      setCurrentStep(step)
    }
  }

  const handleWhatsAppRedirection = () => {
    const topicLabel = topics.find((t) => t.id === selectedTopic)?.label || ""
    const message = encodeURIComponent(
      `Hola Dra. Erika, he enviado una solicitud de valoración preventiva sobre "${topicLabel}" en su sitio web. Mi nombre es ${patientName} y prefiero la jornada de la ${selectedJornada === "mañana" ? "mañana (Sábados)" : "tarde (Lunes a Jueves o Sábados)"}. Quedo atento para coordinar la cita.`
    )
    window.open(`https://wa.me/573136343077?text=${message}`, "_blank")
  }

  return (
    <div id="agendamiento" className="bg-card rounded-3xl border border-border shadow-sm overflow-hidden scroll-mt-24">
      {/* Progress Bar */}
      <div className="bg-primary/5 border-b border-border/50 px-6 py-4">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <button
                type="button"
                onClick={() => goToStep(step.number)}
                disabled={currentStep < step.number || isSubmitting}
                className={cn(
                  "flex items-center gap-2 transition-opacity",
                  currentStep > step.number && !isSubmitting
                    ? "cursor-pointer hover:opacity-70"
                    : currentStep === step.number
                    ? "cursor-default"
                    : "cursor-not-allowed opacity-60"
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                    currentStep >= step.number
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {currentStep > step.number ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    step.icon
                  )}
                </div>
                <span
                  className={cn(
                    "text-sm font-medium hidden sm:inline",
                    currentStep >= step.number
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {step.label}
                </span>
              </button>
              {index < steps.length - 1 && (
                <ChevronRight
                  className={cn(
                    "h-4 w-4 mx-2 sm:mx-4",
                    currentStep > step.number
                      ? "text-primary"
                      : "text-muted-foreground/40"
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="p-6 sm:p-8 lg:p-12">
        {/* Step 1: Topic Selection */}
        {currentStep === 1 && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Shield className="h-4 w-4" />
                Plan de Prevención
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                ¿Qué tema te gustaría abordar?
              </h3>
              <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                Elige el área de salud en la que quieres anticiparte. Cada espacio está diseñado para enseñarte a proteger tu cuerpo antes de que aparezcan los síntomas.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic.id)}
                  className={cn(
                    "group relative p-4 rounded-xl border-2 text-left transition-all duration-300",
                    selectedTopic === topic.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50 hover:bg-secondary/50"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors",
                      selectedTopic === topic.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    )}
                  >
                    {topic.icon}
                  </div>
                  <p
                    className={cn(
                      "text-sm font-medium transition-colors",
                      selectedTopic === topic.id
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    )}
                  >
                    {topic.label}
                  </p>
                  {selectedTopic === topic.id && (
                    <div className="absolute top-2 right-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Contact Info & Preference Selection */}
        {currentStep === 2 && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                Datos de Contacto y Preferencia
              </h3>
              <p className="mt-2 text-muted-foreground">
                Completa tus datos y selecciona la jornada de tu preferencia. Nos comunicaremos contigo para coordinar el día y la hora de tu cita.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Información Personal */}
              <div className="space-y-5 bg-secondary/15 rounded-2xl border border-border p-6">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  Información Personal
                </h4>
                
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    Nombre Completo
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    disabled={isSubmitting}
                    placeholder="ej. Juan Pérez"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="bg-background border-border py-5 rounded-lg disabled:opacity-50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    Teléfono / WhatsApp
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    disabled={isSubmitting}
                    placeholder="ej. +57 300 123 4567"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="bg-background border-border py-5 rounded-lg disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    Correo Electrónico
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    disabled={isSubmitting}
                    placeholder="ej. juan@ejemplo.com"
                    value={patientEmail}
                    onChange={(e) => setPatientEmail(e.target.value)}
                    className="bg-background border-border py-5 rounded-lg disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Selector de Jornada */}
              <div className="space-y-5 bg-secondary/15 rounded-2xl border border-border p-6">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  Preferencia de Jornada
                </h4>
                <p className="text-xs text-muted-foreground">
                  Selecciona en qué jornada prefieres ser atendido. La cita definitiva se concertará vía WhatsApp o llamada telefónica.
                </p>
                <p className="text-xs text-muted-foreground/80 italic mt-1.5">
                  * Espacio sujeto a disponibilidad previa validación.
                </p>
                <div className="grid gap-3">
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => setSelectedJornada("mañana")}
                    className={cn(
                      "group p-4 rounded-xl border-2 text-left transition-all duration-300 flex items-center gap-4 cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
                      selectedJornada === "mañana"
                        ? "border-primary bg-primary/5"
                        : "border-border bg-background hover:border-primary/50 hover:bg-secondary/50"
                    )}
                  >
                    <div
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                        selectedJornada === "mañana"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                      )}
                    >
                      <Sun className="h-5 w-5" />
                    </div>
                    <div>
                      <p className={cn(
                        "font-medium text-sm transition-colors",
                        selectedJornada === "mañana" ? "text-foreground font-semibold" : "text-muted-foreground group-hover:text-foreground"
                      )}>
                        Jornada de la Mañana
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Sugerido para Sábados de 07:00 AM a 12:00 PM
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => setSelectedJornada("tarde")}
                    className={cn(
                      "group p-4 rounded-xl border-2 text-left transition-all duration-300 flex items-center gap-4 cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
                      selectedJornada === "tarde"
                        ? "border-primary bg-primary/5"
                        : "border-border bg-background hover:border-primary/50 hover:bg-secondary/50"
                    )}
                  >
                    <div
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                        selectedJornada === "tarde"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                      )}
                    >
                      <Sunset className="h-5 w-5" />
                    </div>
                    <div>
                      <p className={cn(
                        "font-medium text-sm transition-colors",
                        selectedJornada === "tarde" ? "text-foreground font-semibold" : "text-muted-foreground group-hover:text-foreground"
                      )}>
                        Jornada de la Tarde
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Sugerido para Lunes a Jueves (05:00 PM a 07:00 PM) o Sábados (01:00 PM a 06:00 PM)
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Visualización de Errores de envío */}
            {submitError && (
              <div className="mt-6 p-4 rounded-xl bg-destructive/10 text-destructive text-sm font-medium border border-destructive/20 text-center">
                {submitError}
              </div>
            )}
          </div>
        )}

        {/* Step 3: Confirmation */}
        {currentStep === 3 && (
          <div className="max-w-lg mx-auto text-center py-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
              ¡Solicitud Recibida!
            </h3>
            <p className="text-lg text-muted-foreground mb-2">
              Hemos registrado tus preferencias de consulta preventiva.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              La Dra. Erika o su equipo se pondrán en contacto contigo a la brevedad para pactar el espacio definitivo.
            </p>
            <div className="bg-secondary/50 rounded-2xl p-6 mb-8 border border-border/50 text-left">
              <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-4 border-b border-border/50 pb-2">
                Resumen de la Solicitud
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Paciente:</span>
                  <span className="font-medium text-foreground">{patientName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tema de Consulta:</span>
                  <span className="font-medium text-foreground">
                    {topics.find((t) => t.id === selectedTopic)?.label}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Preferencia:</span>
                  <span className="font-medium text-foreground capitalize">
                    Jornada {selectedJornada === "mañana" ? "Mañana (Sábados)" : "Tarde (Lunes a Jueves o Sábados)"}
                  </span>
                </div>
                <div className="flex justify-between border-t border-border/30 pt-3">
                  <span className="text-muted-foreground">Contacto:</span>
                  <span className="font-medium text-foreground">{patientPhone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Correo:</span>
                  <span className="font-medium text-foreground">{patientEmail}</span>
                </div>
              </div>
            </div>
            
            {/* Botones de acción final (WhatsApp y Reiniciar) */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button
                onClick={handleWhatsAppRedirection}
                className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 py-6 px-6 rounded-xl font-medium cursor-pointer w-full sm:w-auto shadow-sm transition-all"
              >
                <MessageCircle size={18} />
                Confirmar por WhatsApp
              </Button>
              
              <Button
                onClick={handleReset}
                variant="outline"
                className="border-border text-foreground hover:bg-secondary rounded-xl px-6 py-6 w-full sm:w-auto cursor-pointer"
              >
                Volver al inicio
              </Button>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        {currentStep < 3 && (
          <div className="flex items-center justify-between max-w-2xl mx-auto mt-8 pt-6 border-t border-border">
            <Button
              onClick={handleBack}
              variant="ghost"
              disabled={isSubmitting}
              className={cn(
                "text-muted-foreground hover:text-foreground cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
                (currentStep === 1 || isSubmitting) && "invisible"
              )}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Anterior
            </Button>
            <Button
              onClick={handleNext}
              disabled={!canProceed() || isSubmitting}
              className="bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 cursor-pointer px-6 py-5 rounded-xl font-medium transition-colors min-w-[140px] flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  {currentStep === 2 ? "Confirmar" : "Siguiente"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
