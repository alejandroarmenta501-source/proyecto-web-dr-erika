import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import fs from "fs/promises"
import path from "path"
import crypto from "crypto"

// Esquema de validación en el servidor con Zod
const solicitudSchema = z.object({
  patientName: z.string().min(1, "El nombre completo es requerido"),
  patientPhone: z.string().min(1, "El número de teléfono es requerido"),
  patientEmail: z.string().email("El correo electrónico no es válido"),
  selectedTopic: z.string().min(1, "El tema de interés es requerido"),
  selectedJornada: z.enum(["mañana", "tarde"], {
    required_error: "La jornada es requerida",
  }),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validar datos de la solicitud
    const validation = solicitudSchema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(
        { 
          error: "Datos inválidos", 
          details: validation.error.flatten().fieldErrors 
        }, 
        { status: 400 }
      )
    }

    // Estructura del nuevo registro con ID único y timestamp
    const newSolicitud = {
      id: crypto.randomUUID(),
      ...validation.data,
      createdAt: new Date().toISOString(),
    }

    // Definición de rutas físicas
    const dirPath = path.join(process.cwd(), "data")
    const filePath = path.join(dirPath, "solicitudes.json")

    // Crear la carpeta 'data' si no existe
    try {
      await fs.access(dirPath)
    } catch {
      await fs.mkdir(dirPath, { recursive: true })
    }

    // Leer registros existentes o iniciar array vacío si no existe el archivo
    let solicitudes: any[] = []
    try {
      const fileContent = await fs.readFile(filePath, "utf-8")
      solicitudes = JSON.parse(fileContent)
    } catch {
      // El archivo no existe o está vacío, procedemos con un array nuevo
    }

    // Agregar el nuevo registro
    solicitudes.push(newSolicitud)

    // Escribir los datos actualizados de forma asíncrona
    await fs.writeFile(filePath, JSON.stringify(solicitudes, null, 2), "utf-8")

    return NextResponse.json(
      { 
        success: true, 
        message: "Solicitud registrada con éxito", 
        data: newSolicitud 
      }, 
      { status: 201 }
    )
  } catch (error) {
    console.error("Error al registrar solicitud:", error)
    return NextResponse.json(
      { error: "Error interno del servidor al registrar la solicitud" }, 
      { status: 500 }
    )
  }
}
