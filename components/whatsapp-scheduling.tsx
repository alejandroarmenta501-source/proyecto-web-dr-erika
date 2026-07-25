"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle } from "lucide-react"

export function WhatsAppScheduling() {
  const [topic, setTopic] = useState("")
  
  // Número de WhatsApp de la Dra. Erika
  const phoneNumber = "573022875637"
  
  const handleSchedule = () => {
    if (!topic) {
      alert("Por favor, selecciona un tema de interés para tu consulta preventiva.")
      return
    }
    
    const message = encodeURIComponent(
      `Hola Dra. Erika, vi su sitio web y me gustaría agendar una consulta de medicina interna enfocada en: ${topic}.`
    )
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="flex flex-col gap-4 p-6 bg-card rounded-xl border border-border w-full max-w-md">
      <h3 className="text-primary font-serif font-semibold text-lg">
        Agenda tu Consulta Preventiva
      </h3>
      <p className="text-sm text-muted-foreground">
        Selecciona el área en la que deseas enfocarte:
      </p>
      
      <Select onValueChange={(value) => setTopic(value)}>
        <SelectTrigger className="bg-background border-border">
          <SelectValue placeholder="Elige un programa de prevención" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Riesgo Cardiovascular">Riesgo Cardiovascular</SelectItem>
          <SelectItem value="Prevención de Hipertensión">Prevención de Hipertensión Arterial</SelectItem>
          <SelectItem value="Prevención de Diabetes">Prevención de Diabetes Mellitus</SelectItem>
          <SelectItem value="Prevención de Demencia">Prevención de Demencia (Adulto Mayor)</SelectItem>
          <SelectItem value="Salud del Hígado Graso">Hígado Graso</SelectItem>
          <SelectItem value="Insuficiencia Venosa">Insuficiencia Venosa</SelectItem>
          <SelectItem value="Prevención de Cáncer">Prevención de Cáncer</SelectItem>
          <SelectItem value="Control de Obesidad">Obesidad</SelectItem>
          <SelectItem value="Osteoartrosis">Osteoartrosis</SelectItem>
          <SelectItem value="Colon Irritable">Síndrome de Colon Irritable</SelectItem>
          <SelectItem value="Manejo de Ansiedad">Trastorno de Ansiedad</SelectItem>
        </SelectContent>
      </Select>

      <Button 
        onClick={handleSchedule}
        className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 py-6 text-lg transition-all duration-300"
      >
        <MessageCircle size={20} />
        Agendar por WhatsApp
      </Button>
    </div>
  )
}
