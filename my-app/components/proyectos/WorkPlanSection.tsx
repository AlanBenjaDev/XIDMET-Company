'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

interface Phase {
  id: number
  code: string
  title: string
  subtitle: string
  duration: string
  status: 'Completado' | 'En Proceso' | 'Programado'
  isConditional?: boolean
  progress: number
  objectives: string[]
  technicalDetails: string[]
  standards: string
  tools: string[]
  deliverables: string[]
}

const PHASES: Phase[] = [
  {
    id: 1,
    code: 'ETAPA 1',
    title: 'Relevamiento Inicial y Revisión de la Casa',
    subtitle: 'Inspección general de la vivienda para identificar la distribución espacial, canalizaciones existentes y requerimientos técnicos específicos.',
    duration: '2 Días Hábiles',
    status: 'Completado',
    progress: 100,
    objectives: [
      'Cálculos de superficie y Área para tener en claro qué medidas de cables necesitamos.',
      'Identificación de accesos clave, perímetros e infraestructura a acondicionar.',
      'Definición de requerimientos técnicos junto al cliente.'
    ],
    technicalDetails: [
      'Medición de distancias críticas desde el pilar/tablero principal hasta zonas de consumo, portón y puntos de cámaras.',
      'Inspección de canalizaciones existentes para evaluar reutilización o necesidad de nuevas rozas independientes.',
      'Determinación de puntos de alimentación continua y líneas prioritarias.'
    ],
    standards: 'Relevamiento preliminar según Guía AEA 90364 / Criterios de Arquitectura Domótica',
    tools: ['Telémetro láser digital de precisión', 'Cinta métrica metálica', 'Cámara y ficha técnica de relevamiento', 'Software de dimensionamiento CAD'],
    deliverables: [
      'Planilla de cómputo de áreas y metros lineales de cables estimados',
      'Matriz de requerimientos técnicos consensuada con el propietario'
    ]
  },
  {
    id: 2,
    code: 'ETAPA 2',
    title: 'Instalación Eléctrica General (Condicional)',
    subtitle: 'Ejecución o adecuación de la infraestructura eléctrica base (en caso de contar con la instalación completa, se saltea esta etapa).',
    duration: '5 Días Hábiles',
    status: 'Completado',
    isConditional: true,
    progress: 100,
    objectives: [
      'Instalación y armado de tableros eléctricos, térmicas y disyuntores de protección.',
      'Montaje de tomacorrientes, cajas de paso e interruptores generales.',
      'Medición e instalación de la puesta a tierra (jabalina y circuito de protección).'
    ],
    technicalDetails: [
      'Montaje de protecciones termomagnéticas y disyuntores de alta sensibilidad (30mA) en gabinete normalizado.',
      'Distribución de cajas de paso 10x5 y octogonales respetando alturas reglamentarias.',
      'Hincado de jabalina de acero-cobre de 5/8" con cámara de inspección y medición con telurímetro para asegurar R < 5 Ω.'
    ],
    standards: 'Reglamentación AEA 90364-7-771 / Ley Provincial de Seguridad Eléctrica 10.281',
    tools: ['Telurímetro digital para puesta a tierra', 'Destornillador dinamométrico para bornes', 'Acanaladora y rotomartillo', 'Multímetro True RMS'],
    deliverables: [
      'Protocolo de medición de puesta a tierra reglamentario',
      'Tablero eléctrico principal y seccional armado y rotulado'
    ]
  },
  {
    id: 3,
    code: 'ETAPA 3',
    title: 'Verificación de Cobertura Wi-Fi en la Mayoría de Puntos',
    subtitle: 'Medición y análisis de la señal inalámbrica en interiores y exteriores para garantizar la conectividad de los dispositivos domóticos.',
    duration: '2 Días Hábiles',
    status: 'Completado',
    progress: 100,
    objectives: [
      'Mapeo de cobertura Wi-Fi (potencia de señal RSSI y niveles de interferencia).',
      'Detección de zonas ciegas o de baja recepción.',
      'Determinación de puntos estratégicos para repetir o extender la señal de red.'
    ],
    technicalDetails: [
      'Barrido espectral en bandas 2.4 GHz (mayor penetración para sensores IoT) y 5 GHz (alta velocidad).',
      'Garantía de nivel RSSI superior a -65 dBm en todos los nodos de domótica, cámaras y zona de portón.',
      'Ubicación de Access Points cableados (PoE) para crear una red Wi-Fi Mesh unificada sin microcortes.'
    ],
    standards: 'Estándar IEEE 802.11 ax/ac/b/g/n / Protocolo de Calidad de Servicio RF',
    tools: ['Analizador de espectro Wi-Fi', 'App de Site Survey para mapa de calor (Heatmap)', 'Notebook técnica de diagnóstico de red', 'Generador de tráfico iPerf'],
    deliverables: [
      'Mapa de calor de cobertura inalámbrica (Heatmap)',
      'Plano con ubicación definitiva de Access Points y repetidores de red'
    ]
  },
  {
    id: 4,
    code: 'ETAPA 4',
    title: 'Preparación para la Instalación de Portón Automático',
    subtitle: 'Adecuación física y estructural requerida previa al montaje de la automatización.',
    duration: '3 Días Hábiles',
    status: 'Completado',
    progress: 100,
    objectives: [
      'Preparación de la infraestructura base, vigas de soporte y refuerzos mecánicos.',
      'Trazado y tendido de tuberías/canalizaciones eléctricas hacia la zona del portón.',
      'Definición de las bases fijas para el motor y accesorios de apertura/cierre.'
    ],
    technicalDetails: [
      'Cálculo y vertido de base de hormigón nivelada para anclaje firme de la placa del motor reductor.',
      'Tendido de cañería subterránea reforzada con curva amplia desde tablero hasta la base del portón.',
      'Verificación del desplazamiento libre, nivelación y balanceo del portón para evitar sobreesfuerzo del motor.'
    ],
    standards: 'Normas de Seguridad para Portones Motorizados / Canalizaciones Subterráneas IRAM 62386',
    tools: ['Nivel de burbuja y nivel láser óptico', 'Soldadora inverter y electrodos de refuerzo', 'Taladro percutor de alta potencia', 'Zanjadora / herramientas de canalización'],
    deliverables: [
      'Base estructural de hormigón fraguada y anclajes mecánicos fijados',
      'Canalización subterránea y pasacables listo en la columna de acceso'
    ]
  },
  {
    id: 5,
    code: 'ETAPA 5',
    title: 'Instalación del Portón Automático',
    subtitle: 'Montaje electromecánico del sistema de apertura y alineación operativa del mecanismo.',
    duration: '2 Días Hábiles',
    status: 'En Proceso',
    progress: 85,
    objectives: [
      'Fijación del motor y ensamble de componentes (guías, crestas o brazos articulados).',
      'Conexión eléctrica y vinculación con la unidad de control central.',
      'Ajuste de fines de carrera, calibración de fuerza, sensores anti-aplastamiento y pruebas de apertura/cierre.'
    ],
    technicalDetails: [
      'Alineación milimétrica de cremallera de nylon/acero con el piñón de tracción (luz de dilatación de 1.5mm).',
      'Conexión y calibración de barreras infrarrojas fotocélulas de seguridad para reversión automática ante obstáculos.',
      'Programación de desaceleración suave al final del recorrido (Soft Stop) y vinculación con la app móvil y controles remotos rolling code.'
    ],
    standards: 'Seguridad en Cerramientos Motorizados / Cifrado RF Rolling Code anti-clonación',
    tools: ['Juego de llaves combinadas y tubo', 'Destornilladores dieléctricos aislados', 'Programador de central electrónica', 'Tacómetro / medidor de fuerza'],
    deliverables: [
      'Portón automatizado operativo con doble comando (control remoto + app móvil)',
      'Protocolo de calibración de fotocélulas anti-aplastamiento comprobado'
    ]
  },
  {
    id: 6,
    code: 'ETAPA 6',
    title: 'Selección de Espacios para Cámaras, Alarmas y Sensores',
    subtitle: 'Determinación estratégica de las ubicaciones para los elementos del sistema de seguridad.',
    duration: '2 Días Hábiles',
    status: 'Programado',
    progress: 50,
    objectives: [
      'Ubicación de cámaras de seguridad garantizando ángulos de visión sin puntos ciegos.',
      'Definición de posiciones fijas para la alarma Sem Suri y sirenas.',
      'Ubicación estratégica de sensores de movimiento (PIR) evitando fuentes directas de falso disparo.'
    ],
    technicalDetails: [
      'Altura de montaje de cámaras entre 2.80m y 3.20m para óptimo reconocimiento facial sin vulnerabilidad a vandalismo.',
      'Orientación de sensores PIR lejos de fuentes térmicas (estufas, aires acondicionados y luz solar directa sobre cristales).',
      'Ubicación disimulada de la central de alarma Sem Suri y colocación de sirena exterior estanca con flash disuasivo a más de 3.5m.'
    ],
    standards: 'Sistemas de Seguridad Electrónica / Cobertura CCTV perimetral',
    tools: ['Comprobador de campo visual óptico', 'Detector de metales y vigas de pared', 'Escalera de seguridad dieléctrica', 'Nivel de precisión'],
    deliverables: [
      'Diagrama de zonas de seguridad y ángulos de cobertura de cámaras',
      'Puntos físicos marcados y autorizados para anclaje de dispositivos'
    ]
  },
  {
    id: 7,
    code: 'ETAPA 7',
    title: 'Instalación de Cañerías para Cables UTP y Aislamiento de Interferencias',
    subtitle: 'Despliegue de la red física cableada asegurando integridad en la transmisión de datos.',
    duration: '4 Días Hábiles',
    status: 'Programado',
    progress: 20,
    objectives: [
      'Montaje de Cañerías para todos los datos (cables UTP).',
      'Instalación de un Cable UTP de la mejor calidad para las Cámaras y Wi-Fi.',
      'Separación física obligatoria respecto a las líneas de alta tensión 220V para prevenir interferencias magnéticas y electromagnéticas.',
      'Peinado, etiquetado y pruebas de continuidad en las tiradas cableadas UTP.'
    ],
    technicalDetails: [
      'Uso exclusivo de canalizaciones independientes para corrientes débiles (UTP Cat6 100% cobre puro).',
      'Separación física obligatoria mínima de 20 cm respecto a conductores de 220V/380V según norma TIA/EIA 568 y AEA.',
      'Crimpeado bajo norma T568B con conectores RJ45 apantallados y certificación de ancho de banda hasta 1 Gbps / PoE (Power over Ethernet).'
    ],
    standards: 'Norma ANSI/TIA/EIA-568-C.2 (Cableado Estructurado) / ISO/IEC 11801 / AEA 90364',
    tools: ['Tester de cable de red UTP Cat6 con mapeo de hilos', 'Crimpadora RJ45 profesional', 'Guía pasacables con teflón', 'Rotuladora de cables con etiquetas bandera indelebles'],
    deliverables: [
      'Certificación de continuidad y mapa de conexiones de cada boca de red UTP',
      'Rack / gabinete de datos ordenado con patch panel peinado y numerado'
    ]
  }
]

export default function WorkPlanSection() {
  const [selectedPhase, setSelectedPhase] = useState<Phase>(PHASES[0])

  return (
    <div className="w-full bg-[#0a0f1d] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
      
      {/* CABECERA OFICIAL DEL DOCUMENTO */}
      <div className="bg-[#0f172a] border-b border-slate-800 p-5 sm:p-7">
        
        {/* Metadatos superiores del documento */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-[#10b981]/15 text-[#34d399] font-mono font-bold uppercase tracking-wider">
              Documento Oficial
            </span>
            <span className="text-slate-400 font-mono">
              Cronograma de Ejecución • Versión 1.0 (Simplificado)
            </span>
          </div>
          <div className="text-slate-400 font-mono text-[11px]">
            Proyecto: <span className="text-white font-bold">Vivienda Unifamiliar</span>
          </div>
        </div>

        {/* Título principal del plan */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="text-[#10b981] text-xs font-mono font-bold tracking-[0.25em] uppercase mb-1">
              INSTALACIÓN DOMÓTICA, REDES Y AUTOMATIZACIÓN
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              PLAN DE TRABAJO
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-left">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                Total de Etapas
              </span>
              <span className="text-sm font-mono font-bold text-white">
                7 Fases Secuenciales
              </span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-left">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                Progreso General
              </span>
              <span className="text-sm font-mono font-bold text-[#10b981]">
                65% en Ejecución
              </span>
            </div>
          </div>
        </div>

        {/* Objetivo del proyecto destacado */}
        <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/80 to-slate-900 border-l-4 border-sky-500 border-r border-t border-b border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <span className="font-bold text-sky-400 block mb-1 uppercase font-mono text-[11px] tracking-wider">
            Objetivo del proyecto:
          </span>
          Coordinar la ejecución secuencial de la inspección inicial, acondicionamiento de red Wi-Fi, obras de infraestructura e instalación del portón automático, así como el despliegue de sistemas de seguridad y canalizaciones separadas para evitar interferencias electromagnéticas.
        </div>

      </div>

      {/* SELECTOR DE LAS 7 ETAPAS (BARRA DE NAVEGACIÓN DE ETAPAS) */}
      <div className="p-4 sm:p-6 bg-[#030712] border-b border-slate-800 overflow-x-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 min-w-[700px] lg:min-w-0">
          {PHASES.map((phase) => {
            const isSelected = selectedPhase.id === phase.id

            return (
              <button
                key={phase.id}
                onClick={() => setSelectedPhase(phase)}
                className={`p-3 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.25)]'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold text-[#34d399] uppercase">
                      {phase.code}
                    </span>
                    {phase.isConditional && (
                      <span className="text-[8px] font-mono uppercase bg-amber-500/20 text-amber-300 px-1 py-0.2 rounded font-bold">
                        Cond.
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-xs font-bold text-white line-clamp-2 leading-snug">
                    {phase.title.replace(' (Condicional)', '')}
                  </h4>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 mb-1">
                    <span>{phase.duration.split(' ')[0]} {phase.duration.split(' ')[1]}</span>
                    <span className="text-white font-bold">{phase.progress}%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#10b981] to-[#0ea5e9] rounded-full transition-all duration-300"
                      style={{ width: `${phase.progress}%` }}
                    />
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* DETALLE COMPLETO DE LA ETAPA SELECCIONADA */}
      <div className="p-6 sm:p-8 bg-[#091124]">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPhase.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            
            {/* Cabecera de la etapa */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-black font-mono px-2.5 py-0.5 rounded bg-[#10b981]/20 text-[#34d399] uppercase">
                    {selectedPhase.code} • {selectedPhase.duration}
                  </span>
                  {selectedPhase.isConditional && (
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Condicional (se saltea si la vivienda cuenta con instalación completa)
                    </span>
                  )}
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    selectedPhase.status === 'Completado'
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : selectedPhase.status === 'En Proceso'
                      ? 'bg-sky-500/20 text-sky-300 animate-pulse'
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {selectedPhase.status}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {selectedPhase.title}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed max-w-4xl">
                  {selectedPhase.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="px-5 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                    Avance de Etapa
                  </span>
                  <span className="text-2xl font-black font-mono text-[#10b981]">
                    {selectedPhase.progress}%
                  </span>
                </div>
              </div>
            </div>

            {/* Grilla de Tareas / Procedimientos y Criterios Técnicos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Tareas Principales según Documento Oficial */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider">
                  <Icon icon="mdi:checkbox-marked-circle-outline" className="text-xl text-[#10b981]" />
                  Procedimientos del Cronograma Oficial
                </div>
                <ul className="space-y-3">
                  {selectedPhase.objectives.map((obj, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-200 flex items-start gap-3 leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consideraciones de Ingeniería y Aislamiento */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider">
                  <Icon icon="mdi:shield-check-outline" className="text-xl text-sky-400" />
                  Criterios Técnicos & Seguridad
                </div>
                <ul className="space-y-3">
                  {selectedPhase.technicalDetails.map((detail, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-3 leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Instrumental, Estándar y Entregables */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              
              {/* Normativa */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 font-mono">
                  Normas & Protocolos:
                </span>
                <span className="text-xs text-slate-300 font-medium leading-relaxed block">
                  {selectedPhase.standards}
                </span>
              </div>

              {/* Herramientas */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 font-mono">
                  Instrumental Utilizado:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedPhase.tools.map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Entregables */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 font-mono">
                  Entregables de la Etapa:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedPhase.deliverables.map((d, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/25 font-medium">
                      ✓ {d}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  )
}
