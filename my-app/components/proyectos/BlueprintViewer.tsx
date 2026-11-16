'use client'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { useLanguage } from '@/components/TranslateButton'

type AmbienteId = 'dorm1' | 'bano1' | 'bano2' | 'dorm2' | 'social' | 'galeria' | 'exterior'

interface AmbienteInfo {
  id: AmbienteId
  nombre: string
  circuito: string
  area: string
  descripcion: string
  iluminacion: string[]
  tomas: string[]
  seguridad: string[]
}

export default function BlueprintViewer() {
  const { idioma } = useLanguage()
  const isEn = idioma === 'en'

  const [showIlum, setShowIlum] = useState(true)
  const [showTomas, setShowTomas] = useState(true)
  const [showSeguridad, setShowSeguridad] = useState(true)
  const [selectedAmb, setSelectedAmb] = useState<AmbienteId>('social')

  const ambientes: Record<AmbienteId, AmbienteInfo> = {
    dorm1: {
      id: 'dorm1',
      nombre: isEn ? 'Bedroom 1 (North-West)' : 'Dormitorio 1 (Sup. Izquierda)',
      circuito: 'C1 (ILUM) • C3 (TOMAS)',
      area: '10.5 m²',
      descripcion: isEn
        ? 'Master bedroom with two-way lighting control (entrance and bedside) and perimeter double outlets.'
        : 'Dormitorio principal con comando de luz en combinación (acceso y cabecera) y tomas perimetrales.',
      iluminacion: [
        isEn ? '1x Central ceiling luminaire (C1 - IUG)' : '1x Boca de iluminación central en techo (C1 - IUG)',
        isEn ? '1x Two-way combination switch' : '1x Llave de combinación (encendido desde 2 puntos)',
      ],
      tomas: [
        isEn ? '2x Double TUG sockets (10A) on north and west walls' : '2x Bocas de tomacorriente doble TUG (10A) en muros superior e izquierdo',
      ],
      seguridad: [
        isEn ? '1x Optical smoke detector linked to CEM Suri 500' : '1x Detector óptico de humo vinculado a central CEM Suri 500',
      ],
    },
    bano1: {
      id: 'bano1',
      nombre: isEn ? 'Bathroom 1 (En-suite / Upper)' : 'Baño 1 (Medio-Superior)',
      circuito: 'C1 (ILUM) • C3 (TOMAS)',
      area: '3.8 m²',
      descripcion: isEn
        ? 'Wet zone protected by 30mA differential breaker with single-pole lighting and vanity outlet.'
        : 'Zona húmeda protegida por interruptor diferencial de 30 mA con iluminación de 1 efecto y toma junto a vanitory.',
      iluminacion: [
        isEn ? '1x Central moisture-rated luminaire (C1 - IUG)' : '1x Boca de iluminación central (C1 - IUG)',
        isEn ? '1x Single-pole wall switch' : '1x Llave de 1 efecto en acceso',
      ],
      tomas: [
        isEn ? '1x TUG socket (10A) protected by 30mA RCD' : '1x Boca de tomacorriente TUG (10A) protegida por diferencial 30 mA',
      ],
      seguridad: [
        isEn ? 'Equipotential grounding verification under AEA 90364' : 'Vinculación equipotencial a puesta a tierra según AEA 90364',
      ],
    },
    bano2: {
      id: 'bano2',
      nombre: isEn ? 'Bathroom 2 (Lower-Middle)' : 'Baño 2 (Medio-Inferior)',
      circuito: 'C1 (ILUM) • C3 (TOMAS)',
      area: '3.8 m²',
      descripcion: isEn
        ? 'Secondary bathroom with independent single-pole lighting switch and RCD-protected socket.'
        : 'Segundo baño con comando independiente de 1 efecto y tomacorriente protegido por diferencial.',
      iluminacion: [
        isEn ? '1x Central luminaire (C1 - IUG)' : '1x Boca de iluminación central (C1 - IUG)',
        isEn ? '1x Single-pole wall switch' : '1x Llave de 1 efecto en acceso',
      ],
      tomas: [
        isEn ? '1x TUG socket (10A) next to access door' : '1x Boca de tomacorriente TUG (10A) junto a puerta de acceso',
      ],
      seguridad: [
        isEn ? '30mA life-protection differential coverage' : 'Cobertura diferencial de alta sensibilidad (30 mA)',
      ],
    },
    dorm2: {
      id: 'dorm2',
      nombre: isEn ? 'Bedroom 2 (South-West)' : 'Dormitorio 2 (Inf. Izquierda)',
      circuito: 'C1 (ILUM) • C3 (TOMAS)',
      area: '10.5 m²',
      descripcion: isEn
        ? 'Secondary bedroom with two-way combination switching and dual perimeter outlets.'
        : 'Segundo dormitorio equipado con llave combinación y dos bocas de tomacorrientes en muros perimetrales.',
      iluminacion: [
        isEn ? '1x Central ceiling luminaire (C1 - IUG)' : '1x Boca de iluminación central en techo (C1 - IUG)',
        isEn ? '1x Two-way combination switch' : '1x Llave de combinación',
      ],
      tomas: [
        isEn ? '2x Double TUG sockets (10A) on west and south walls' : '2x Bocas de tomacorriente doble TUG (10A) en muros izquierdo e inferior',
      ],
      seguridad: [
        isEn ? '1x Infrared motion sensor (PIR) interior zone' : '1x Sensor infrarrojo de movimiento (PIR) zona interior',
      ],
    },
    social: {
      id: 'social',
      nombre: isEn ? 'Living - Dining - Kitchen' : 'Estar - Comedor - Cocina',
      circuito: 'C2 • C4 • C5 (TUE) • C6',
      area: '37.4 m²',
      descripcion: isEn
        ? 'Main integrated social area with 6 ceiling luminaires, 7 TUG sockets, dedicated TUE lines for electric oven & A/C, and Main Panel (TPG).'
        : 'Ambiente principal integrado con 6 bocas de luz en dos filas, 7 tomas TUG, líneas dedicadas TUE (horno y aire) y Tablero Principal (TPG).',
      iluminacion: [
        isEn ? '6x Ceiling luminaires arranged in 2 symmetric rows (C2 - IUG)' : '6x Bocas de iluminación en techo en 2 filas de 3 (C2 - IUG)',
        isEn ? '3x Double-pole switches on east wall (controlling interior, gallery & exterior)' : '3x Llaves de doble efecto en muro derecho (comandando interior, galería y exterior)',
      ],
      tomas: [
        isEn ? '7x Double TUG sockets (10A) across kitchen countertop, dining & living' : '7x Bocas de tomacorriente TUG (10A) en mesada de cocina, comedor y estar',
        isEn ? '2x Dedicated TUE/ACU feeds (20A) for Electric Oven & Split A/C (C5)' : '2x Alimentaciones dedicadas TUE/ACU (20A) para Horno Eléctrico y Aire Acondicionado (C5)',
      ],
      seguridad: [
        isEn ? 'Main 12-Module Panel (TPG) + CEM Suri 500 Alarm + Dahua 4CH XVR (C6)' : 'Tablero Principal 12 Módulos (TPG) + Central CEM Suri 500 + XVR Dahua 4CH (C6)',
      ],
    },
    galeria: {
      id: 'galeria',
      nombre: isEn ? 'Semi-Covered Gallery' : 'Galería Semicubierta',
      circuito: 'C2 (ILUM) • C4 (TOMAS)',
      area: '26.0 m²',
      descripcion: isEn
        ? 'Covered outdoor gallery with 2 ceiling luminaires and 2 weatherproof sockets on the dividing wall.'
        : 'Galería semicubierta con 2 bocas de iluminación y 2 tomacorrientes exteriores sobre el muro divisor.',
      iluminacion: [
        isEn ? '2x Semi-outdoor ceiling luminaires (C2 - IUG)' : '2x Bocas de iluminación en cielorraso de galería (C2 - IUG)',
      ],
      tomas: [
        isEn ? '2x Weather-protected TUG sockets (10A) on south gallery wall' : '2x Bocas de tomacorriente TUG (10A) con tapa protectora en muro de galería',
      ],
      seguridad: [
        isEn ? '1x Dahua HD Bullet Camera covering gallery & rear access (C6)' : '1x Cámara Bullet HD Dahua cubriendo galería y acceso posterior (C6)',
      ],
    },
    exterior: {
      id: 'exterior',
      nombre: isEn ? 'Front Entrance & Automatic Gate' : 'Acceso Exterior & Portón Automático',
      circuito: 'C2 (ILUM) • C6 (ACU)',
      area: 'Perímetro',
      descripcion: isEn
        ? 'Exterior entrance luminaire, automated sliding gate motor on dedicated circuit C6, and water tank level automation.'
        : 'Luminaria exterior de acceso, automatización de portón en circuito exclusivo C6 y control de nivel de tanque.',
      iluminacion: [
        isEn ? '1x Exterior entrance wall/ceiling luminaire (C2 - IUG)' : '1x Boca de iluminación exterior sobre acceso derecho (C2 - IUG)',
      ],
      tomas: [
        isEn ? '1x Dedicated ACU feeder (2.5 mm²) for Automatic Gate Motor (C6)' : '1x Alimentación exclusiva ACU (2,5 mm²) para Motor de Portón Automático (C6)',
      ],
      seguridad: [
        isEn ? '2x Exterior Dahua CCTV cameras + Water tank level float sensor (C6)' : '2x Cámaras exteriores Dahua + Sensor de nivel de tanque elevado (C6)',
      ],
    },
  }

  const activo = ambientes[selectedAmb]

  // Coordenadas exactas de las 13 bocas de luz (⊗) según plano CAD
  const puntosLuz = [
    { x: 145, y: 85, amb: 'dorm1' as AmbienteId, tipo: 'comb' },
    { x: 135, y: 205, amb: 'bano1' as AmbienteId, tipo: '1ef' },
    { x: 135, y: 280, amb: 'bano2' as AmbienteId, tipo: '1ef' },
    { x: 145, y: 395, amb: 'dorm2' as AmbienteId, tipo: 'comb' },
    // Galería (2)
    { x: 255, y: 95, amb: 'galeria' as AmbienteId, tipo: 'gal' },
    { x: 335, y: 95, amb: 'galeria' as AmbienteId, tipo: 'gal' },
    // Estar - Comedor - Cocina (6 en 2 filas de 3)
    { x: 265, y: 175, amb: 'social' as AmbienteId, tipo: 'soc' },
    { x: 345, y: 175, amb: 'social' as AmbienteId, tipo: 'soc' },
    { x: 265, y: 265, amb: 'social' as AmbienteId, tipo: 'soc' },
    { x: 345, y: 265, amb: 'social' as AmbienteId, tipo: 'soc' },
    { x: 265, y: 355, amb: 'social' as AmbienteId, tipo: 'soc' },
    { x: 345, y: 355, amb: 'social' as AmbienteId, tipo: 'soc' },
    // Exterior derecha (1)
    { x: 432, y: 155, amb: 'exterior' as AmbienteId, tipo: 'ext' },
  ]

  // Llaves de punto/combinación del plano CAD
  const llavesLuz = [
    { x: 92, y: 80, label: 'Comb.' },
    { x: 120, y: 172, label: '1 Ef.' },
    { x: 120, y: 248, label: '1 Ef.' },
    { x: 92, y: 365, label: 'Comb.' },
    { x: 382, y: 162, label: '2 Ef.' },
    { x: 388, y: 265, label: '2 Ef.' },
    { x: 382, y: 345, label: '2 Ef.' },
  ]

  // Coordenadas exactas de los 15 tomacorrientes (⊐) según plano CAD
  const puntosTomas = [
    // Dormitorio 1 (2)
    { x: 155, y: 58, amb: 'dorm1' as AmbienteId },
    { x: 76, y: 125, amb: 'dorm1' as AmbienteId },
    // Baño 1 (1)
    { x: 162, y: 215, amb: 'bano1' as AmbienteId },
    // Baño 2 (1)
    { x: 162, y: 270, amb: 'bano2' as AmbienteId },
    // Dormitorio 2 (2)
    { x: 76, y: 395, amb: 'dorm2' as AmbienteId },
    { x: 155, y: 434, amb: 'dorm2' as AmbienteId },
    // Galería (2 sobre muro divisor)
    { x: 245, y: 128, amb: 'galeria' as AmbienteId },
    { x: 325, y: 128, amb: 'galeria' as AmbienteId },
    // Estar - Comedor - Cocina (7)
    { x: 245, y: 148, amb: 'social' as AmbienteId },
    { x: 288, y: 148, amb: 'social' as AmbienteId },
    { x: 375, y: 148, amb: 'social' as AmbienteId },
    { x: 242, y: 345, amb: 'social' as AmbienteId },
    { x: 242, y: 372, amb: 'social' as AmbienteId },
    { x: 388, y: 372, amb: 'social' as AmbienteId },
    { x: 305, y: 434, amb: 'social' as AmbienteId },
  ]

  return (
    <div className="rounded-3xl bg-[#0b1120] border border-slate-800 overflow-hidden shadow-2xl">
      {/* BARRA SUPERIOR DE CAPAS */}
      <div className="px-6 py-4 bg-slate-900/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] flex items-center justify-center">
            <Icon icon="mdi:floor-plan" className="text-xl" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm sm:text-base font-bold text-white">
                {isEn
                  ? 'Electrical & Security Floor Plan (66 m² + 26 m² Gallery)'
                  : 'Plano de Distribución Eléctrica & Seguridad (66 m² + 26 m² Galería)'}
              </h3>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30">
                PLANO REAL CAD
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {isEn
                ? '13 Lighting Outlets (IUG) • 15 Sockets (TUG) • Dedicated TUE/ACU Lines'
                : '13 Bocas de Iluminación (IUG) • 15 Tomacorrientes (TUG) • Líneas Dedicadas TUE/ACU'}
            </p>
          </div>
        </div>

        {/* BOTONES DE CAPAS (COMO EN TU CAD) */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-mono text-slate-500 uppercase mr-1">
            {isEn ? 'Layers:' : 'Capas:'}
          </span>

          <button
            onClick={() => setShowIlum(!showIlum)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 border transition-all ${
              showIlum
                ? 'bg-amber-500/15 text-amber-300 border-amber-500/40'
                : 'bg-slate-950 text-slate-500 border-slate-800'
            }`}
          >
            <Icon icon="mdi:lightbulb-on-outline" className="text-sm" />
            <span>{isEn ? 'Lighting (13)' : 'Iluminación (13)'}</span>
          </button>

          <button
            onClick={() => setShowTomas(!showTomas)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 border transition-all ${
              showTomas
                ? 'bg-sky-500/15 text-sky-300 border-sky-500/40'
                : 'bg-slate-950 text-slate-500 border-slate-800'
            }`}
          >
            <Icon icon="mdi:power-socket-au" className="text-sm" />
            <span>{isEn ? 'Sockets (15)' : 'Tomas (15)'}</span>
          </button>

          <button
            onClick={() => setShowSeguridad(!showSeguridad)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 border transition-all ${
              showSeguridad
                ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40'
                : 'bg-slate-950 text-slate-500 border-slate-800'
            }`}
          >
            <Icon icon="mdi:shield-home-outline" className="text-sm" />
            <span>{isEn ? 'Security & TPG' : 'Seguridad & TPG'}</span>
          </button>

          <button
            onClick={() => {
              setShowIlum(true)
              setShowTomas(true)
              setShowSeguridad(true)
            }}
            className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
          >
            {isEn ? 'All' : 'Todo'}
          </button>
        </div>
      </div>

      {/* CUERPO PRINCIPAL: PLANO SVG A LA IZQUIERDA + MEMORIA TÉCNICA A LA DERECHA */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* PLANO ARQUITECTÓNICO INTERACTIVO */}
        <div className="lg:col-span-7 p-6 bg-[#060b16] border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between">
          <div className="w-full overflow-x-auto">
            <svg
              viewBox="0 0 490 480"
              className="w-full max-w-[540px] mx-auto h-auto select-none font-mono"
              role="img"
              aria-label="Plano de Planta Vivienda 66m2"
            >
              {/* CUADRÍCULA DE FONDO ESTILO CAD */}
              <defs>
                <pattern id="cadGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="#0f293a"
                    strokeWidth="0.6"
                  />
                </pattern>
              </defs>
              <rect x="0" y="0" width="490" height="480" fill="url(#cadGrid)" rx="12" />

              {/* ZONAS CLICABLES DE AMBIENTES */}
              {/* Dormitorio 1 */}
              <rect
                x="65"
                y="45"
                width="155"
                height="110"
                fill={selectedAmb === 'dorm1' ? '#10b981' : '#0f172a'}
                fillOpacity={selectedAmb === 'dorm1' ? 0.16 : 0.65}
                stroke={selectedAmb === 'dorm1' ? '#10b981' : '#475569'}
                strokeWidth={selectedAmb === 'dorm1' ? 2.2 : 1.5}
                className="cursor-pointer transition-all"
                onClick={() => setSelectedAmb('dorm1')}
              />
              <text x="142" y="135" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold">
                DORMITORIO 1
              </text>

              {/* Baño 1 */}
              <rect
                x="65"
                y="155"
                width="125"
                height="78"
                fill={selectedAmb === 'bano1' ? '#10b981' : '#0f172a'}
                fillOpacity={selectedAmb === 'bano1' ? 0.16 : 0.65}
                stroke={selectedAmb === 'bano1' ? '#10b981' : '#475569'}
                strokeWidth={selectedAmb === 'bano1' ? 2.2 : 1.5}
                className="cursor-pointer transition-all"
                onClick={() => setSelectedAmb('bano1')}
              />
              <text x="127" y="224" textAnchor="middle" fill="#94a3b8" fontSize="8.5" fontWeight="bold">
                BAÑO 1
              </text>

              {/* Baño 2 */}
              <rect
                x="65"
                y="233"
                width="125"
                height="78"
                fill={selectedAmb === 'bano2' ? '#10b981' : '#0f172a'}
                fillOpacity={selectedAmb === 'bano2' ? 0.16 : 0.65}
                stroke={selectedAmb === 'bano2' ? '#10b981' : '#475569'}
                strokeWidth={selectedAmb === 'bano2' ? 2.2 : 1.5}
                className="cursor-pointer transition-all"
                onClick={() => setSelectedAmb('bano2')}
              />
              <text x="127" y="302" textAnchor="middle" fill="#94a3b8" fontSize="8.5" fontWeight="bold">
                BAÑO 2
              </text>

              {/* Pasillo distribuidor */}
              <rect
                x="190"
                y="155"
                width="30"
                height="156"
                fill="#0f172a"
                fillOpacity="0.45"
                stroke="#334155"
                strokeWidth="1"
              />

              {/* Dormitorio 2 */}
              <rect
                x="65"
                y="311"
                width="155"
                height="135"
                fill={selectedAmb === 'dorm2' ? '#10b981' : '#0f172a'}
                fillOpacity={selectedAmb === 'dorm2' ? 0.16 : 0.65}
                stroke={selectedAmb === 'dorm2' ? '#10b981' : '#475569'}
                strokeWidth={selectedAmb === 'dorm2' ? 2.2 : 1.5}
                className="cursor-pointer transition-all"
                onClick={() => setSelectedAmb('dorm2')}
              />
              <text x="142" y="340" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold">
                DORMITORIO 2
              </text>

              {/* Galería Semicubierta (arriba derecha) */}
              <rect
                x="220"
                y="45"
                width="180"
                height="93"
                fill={selectedAmb === 'galeria' ? '#10b981' : '#0f172a'}
                fillOpacity={selectedAmb === 'galeria' ? 0.16 : 0.35}
                stroke={selectedAmb === 'galeria' ? '#10b981' : '#475569'}
                strokeWidth={selectedAmb === 'galeria' ? 2.2 : 1.4}
                strokeDasharray="5 3"
                className="cursor-pointer transition-all"
                onClick={() => setSelectedAmb('galeria')}
              />
              <text x="310" y="65" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontWeight="bold">
                GALERÍA (26 m²)
              </text>

              {/* Estar - Comedor - Cocina (abajo derecha) */}
              <rect
                x="220"
                y="138"
                width="180"
                height="308"
                fill={selectedAmb === 'social' ? '#10b981' : '#0f172a'}
                fillOpacity={selectedAmb === 'social' ? 0.16 : 0.65}
                stroke={selectedAmb === 'social' ? '#10b981' : '#475569'}
                strokeWidth={selectedAmb === 'social' ? 2.2 : 1.8}
                className="cursor-pointer transition-all"
                onClick={() => setSelectedAmb('social')}
              />
              <text x="305" y="222" textAnchor="middle" fill="#94a3b8" fontSize="9.5" fontWeight="bold">
                ESTAR - COMEDOR
              </text>
              <text x="305" y="312" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold">
                COCINA
              </text>

              {/* Muro / Línea límite exterior derecha + Portón */}
              <line x1="415" y1="35" x2="415" y2="455" stroke="#475569" strokeWidth="1.5" />
              <g
                onClick={() => setSelectedAmb('exterior')}
                className="cursor-pointer"
              >
                <rect
                  x="418"
                  y="130"
                  width="54"
                  height="80"
                  rx="8"
                  fill={selectedAmb === 'exterior' ? '#10b981' : '#0f172a'}
                  fillOpacity={selectedAmb === 'exterior' ? 0.2 : 0.5}
                  stroke={selectedAmb === 'exterior' ? '#10b981' : '#334155'}
                  strokeWidth="1.2"
                />
                <text x="445" y="195" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">
                  EXTERIOR
                </text>
              </g>

              {/* CAPA 1: BOCAS DE ILUMINACIÓN (⊗) Y LLAVES */}
              {showIlum && (
                <g>
                  {puntosLuz.map((p, i) => (
                    <g
                      key={`luz-${i}`}
                      onClick={() => setSelectedAmb(p.amb)}
                      className="cursor-pointer"
                    >
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r="8"
                        fill="#f59e0b"
                        fillOpacity="0.22"
                        stroke="#fbbf24"
                        strokeWidth="1.6"
                      />
                      <line
                        x1={p.x - 5.5}
                        y1={p.y - 5.5}
                        x2={p.x + 5.5}
                        y2={p.y + 5.5}
                        stroke="#fbbf24"
                        strokeWidth="1.4"
                      />
                      <line
                        x1={p.x + 5.5}
                        y1={p.y - 5.5}
                        x2={p.x - 5.5}
                        y2={p.y + 5.5}
                        stroke="#fbbf24"
                        strokeWidth="1.4"
                      />
                    </g>
                  ))}

                  {llavesLuz.map((ll, i) => (
                    <g key={`llave-${i}`}>
                      <circle
                        cx={ll.x}
                        cy={ll.y}
                        r="3.2"
                        fill="#020617"
                        stroke="#fde047"
                        strokeWidth="1.3"
                      />
                      <line
                        x1={ll.x + 2.5}
                        y1={ll.y + 2}
                        x2={ll.x + 8}
                        y2={ll.y + 6}
                        stroke="#fde047"
                        strokeWidth="1.2"
                      />
                    </g>
                  ))}
                </g>
              )}

              {/* CAPA 2: TOMACORRIENTES (⊐) */}
              {showTomas && (
                <g>
                  {puntosTomas.map((t, i) => (
                    <g
                      key={`toma-${i}`}
                      onClick={() => setSelectedAmb(t.amb)}
                      className="cursor-pointer"
                    >
                      <rect
                        x={t.x - 4.5}
                        y={t.y - 4.5}
                        width="9"
                        height="9"
                        rx="2"
                        fill="#0284c7"
                        stroke="#38bdf8"
                        strokeWidth="1.4"
                      />
                    </g>
                  ))}
                </g>
              )}

              {/* CAPA 3: TABLERO TPG, CARGAS ESPECIALES Y SEGURIDAD */}
              {showSeguridad && (
                <g>
                  {/* Tablero Principal TPG (en centro muro divisor tal como en plano) */}
                  <g onClick={() => setSelectedAmb('social')} className="cursor-pointer">
                    <rect
                      x="220"
                      y="206"
                      width="34"
                      height="16"
                      rx="3"
                      fill="#10b981"
                      stroke="#ecfdf5"
                      strokeWidth="1.2"
                    />
                    <text
                      x="237"
                      y="217"
                      textAnchor="middle"
                      fill="#020617"
                      fontSize="7.5"
                      fontWeight="bold"
                    >
                      TPG
                    </text>
                  </g>

                  {/* Horno Eléctrico & Aire Acondicionado (C5 TUE) */}
                  <g onClick={() => setSelectedAmb('social')} className="cursor-pointer">
                    <polygon
                      points="378,215 385,227 371,227"
                      fill="#f59e0b"
                      stroke="#fef3c7"
                      strokeWidth="1"
                    />
                    <text x="352" y="224" fill="#fbbf24" fontSize="7" fontWeight="bold">
                      TUE
                    </text>
                  </g>

                  {/* Cámaras Dahua + Central Suri */}
                  <circle cx="228" cy="128" r="4.5" fill="#a855f7" stroke="#f3e8ff" strokeWidth="1" />
                  <circle cx="406" cy="438" r="4.5" fill="#a855f7" stroke="#f3e8ff" strokeWidth="1" />
                  <circle cx="406" cy="145" r="4.5" fill="#a855f7" stroke="#f3e8ff" strokeWidth="1" />

                  {/* Portón Automático */}
                  <g onClick={() => setSelectedAmb('exterior')} className="cursor-pointer">
                    <rect
                      x="411"
                      y="330"
                      width="8"
                      height="55"
                      rx="2"
                      fill="#10b981"
                      stroke="#a7f3d0"
                      strokeWidth="1"
                    />
                    <text
                      x="445"
                      y="360"
                      textAnchor="middle"
                      fill="#34d399"
                      fontSize="7.5"
                      fontWeight="bold"
                    >
                      PORTÓN AUT.
                    </text>
                  </g>
                </g>
              )}
            </svg>
          </div>

          {/* LEYENDA DE SIMBOLOGÍA */}
          <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-amber-400/30 border border-amber-400 inline-block" />
                Boca Luz (13)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-sky-600 border border-sky-300 inline-block" />
                Toma TUG (15)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-emerald-500 inline-block" />
                TPG / Portón
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-purple-500 inline-block" />
                Cámara / Alarma
              </span>
            </div>
            <span className="text-slate-500">
              {isEn ? 'Click any room to inspect' : 'Tocá cualquier ambiente'}
            </span>
          </div>
        </div>

        {/* PANEL DERECHO: MEMORIA DESCRIPTIVA DEL AMBIENTE SELECCIONADO */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#0b1120]">
          <div className="space-y-5">
            <div className="flex items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                {activo.circuito}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {isEn ? 'Area:' : 'Superficie:'} <strong className="text-white">{activo.area}</strong>
              </span>
            </div>

            <div>
              <h4 className="text-2xl font-black text-white tracking-tight">{activo.nombre}</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                {activo.descripcion}
              </p>
            </div>

            {/* BLOQUE ILUMINACIÓN */}
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase">
                <Icon icon="mdi:lightbulb-on-outline" className="text-base" />
                <span>{isEn ? 'Lighting Outlets (IUG)' : 'Bocas de Iluminación (IUG)'}</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {activo.iluminacion.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* BLOQUE TOMACORRIENTES */}
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-mono font-bold uppercase">
                <Icon icon="mdi:power-socket-au" className="text-base" />
                <span>{isEn ? 'Sockets & Power Lines' : 'Tomacorrientes & Cargas'}</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {activo.tomas.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-sky-400 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* BLOQUE SEGURIDAD Y CONTROL */}
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase">
                <Icon icon="mdi:shield-check-outline" className="text-base" />
                <span>{isEn ? 'Security & Automation' : 'Seguridad & Automatización'}</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {activo.seguridad.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RESUMEN TOTAL DE BOCAS DE LA OBRA */}
          <div className="pt-4 border-t border-slate-800 grid grid-cols-3 gap-2 text-center font-mono">
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-base font-black text-amber-400">13</div>
              <div className="text-[10px] text-slate-400 uppercase">Bocas Luz</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-base font-black text-sky-400">15</div>
              <div className="text-[10px] text-slate-400 uppercase">Tomas TUG</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-base font-black text-emerald-400">28+3</div>
              <div className="text-[10px] text-slate-400 uppercase">Total + Dedic.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}