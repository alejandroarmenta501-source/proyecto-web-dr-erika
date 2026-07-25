# Contexto del Proyecto: Web de la Dra. Erika

Este documento sirve como base de conocimiento para comprender el estado actual, stack tecnológico, objetivos y reglas de negocio del proyecto de la web de la Dra. Erika (Médica Internista).

## 1. Stack Tecnológico

*   **Framework**: Next.js v16.1.6 (App Router).
*   **Lenguaje**: TypeScript v5.7.3.
*   **Biblioteca de UI**: React v19.2.4 con Radix UI.
*   **Diseño**: Tailwind CSS v4 con Shadcn UI (Estilo: Quiet Luxury / Minimalista).
*   **Formularios/Validación**: React Hook Form y Zod.
*   **Gestor de Paquetes**: `pnpm`.

## 2. Objetivo Principal (ACTUALIZADO)

El objetivo es implementar la sección de contacto y selección de programas preventivos, adaptada a la realidad profesional de la Dra. Erika (quien mantiene su labor en la EPS). 

El sistema **NO** funcionará como un agendamiento masivo automático. Se transformará en un **Sistema de Solicitud de Citas Previamente Pactadas**. El flujo guiará al usuario para proponer sus datos y disponibilidad, permitiendo que la asignación final sea coordinada en beneficio de ambas partes de forma personalizada.

## 3. Reglas de Negocio Adaptadas

### A. Programas de Prevención (Enfoque de la Consulta)
El paciente selecciona el área de interés para su valoración preventiva:
1. Medicina del Estilo de Vida
2. Salud Cardiovascular
3. Prevención de Demencia
4. Salud Renal
5. Prevención Salud Mental

### B. Políticas de Solicitud de Espacio (Sin Calendario)
*   **Eliminación de Fechas Exactas**: Se retira el componente de calendario interactivo para evitar expectativas de agendamiento inmediato o automático.
*   **Selector de Preferencia de Jornada**: El paciente indicará únicamente su preferencia general:
    *   **Jornada Mañana**: Solo disponible Sábados de 07:00 AM a 12:00 PM.
    *   **Jornada Tarde**: Disponible Lunes a Jueves (05:00 PM a 07:00 PM) o Sábados (01:00 PM a 06:00 PM).
    *   **Disponibilidad**: El espacio definitivo está sujeto a disponibilidad previa validación de la Dra. Erika.
*   **Flujo de Conciliación**: El backend registrará los datos de contacto del paciente y sus preferencias. La asignación final del espacio de la cita se concertará mediante un contacto personalizado directo posterior (vía WhatsApp o llamada telefónica).

## 4. Estructura de Carpetas y Backend

El proyecto sigue la siguiente estructura de archivos:

```
├── app/                      # Rutas, layouts y estilos globales de Next.js
│   ├── api/                  # Backend Serverless
│   │   └── solicitudes/      # [NUEVO] endpoint para persistir solicitudes de citas
│   │       └── route.ts
│   ├── layout.tsx            # Layout principal (metadatos, fuentes)
│   ├── page.tsx              # Landing page principal
│   └── globals.css           # Estilos globales
├── components/               # Componentes de React
│   ├── ui/                   # Componentes base de Shadcn UI
│   ├── about.tsx             # Sección "Sobre Mí"
│   ├── cta.tsx               # Sección de llamado a la acción (contiene el formulario)
│   ├── footer.tsx            # Pie de página
│   ├── header.tsx            # Barra de navegación
│   ├── hero.tsx              # Sección principal de bienvenida
│   ├── scheduling-form.tsx   # Formulario de solicitud adaptado (Selector de preferencia)
│   ├── services.tsx          # Sección de programas de prevención
│   └── value-prop.tsx        # Sección de propuesta de valor
├── hooks/                    # Hooks personalizados (toast, mobile)
├── lib/                      # Funciones utilitarias (utils.ts)
├── public/                   # Recursos estáticos (imágenes de la doctora, logotipos)
└── package.json              # Configuración de dependencias
```

*   **Próximo paso en Backend**: Crear una ruta API ligera en `app/api/solicitudes/route.ts` para procesar el envío del formulario.
