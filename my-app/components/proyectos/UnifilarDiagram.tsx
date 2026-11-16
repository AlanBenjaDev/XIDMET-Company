'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useLanguage } from '@/components/TranslateButton'

interface Circuito {
  id: string
  codigo: string
  nombre: string
  tipo: string
  pia: string
  curva: string
  cable: string
  bocas: string
  detallePlano: string
  color: string
  badgeBg: string
}

export default function UnifilarDiagram() {
  const { idioma } = useLanguage()
  const isEn = idioma === 'en'
  const [selectedId, setSelectedId] = useState<string>('C1')

  const circuitos: Circuito[] = [
    {
      id: 'C1',
      codigo: 'C1 • IUG',
      nombre: isEn ? 'Private Zone Lighting' : 'Iluminación Zona Privada',
      tipo: 'IUG',
      pia: '2x10 A',
      curva: 'Curva C • 4.5 kA',
      cable: '2 x 1,5 mm² + PE (VN247-3)',
      bocas: isEn ? '4 Outlets' : '4 Bocas',
      detallePlano: isEn
        ? 'Bedroom 1 (2-way switch), Bedroom 2 (2-way switch), Bathroom 1 & Bathroom 2 (single-pole switches).'
        : 'Dormitorio 1 (llave combinación), Dormitorio 2 (llave combinación), Baño 1 y Baño 2 (llaves de 1 efecto).',
      color: '#34d399',
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    },
    {
      id: 'C2',
      codigo: 'C2 • IUG',
      nombre: isEn ? 'Social, Gallery & Exterior Lighting' : 'Iluminación Estar, Galería y Exterior',
      tipo: 'IUG',
      pia: '2x10 A',
      curva: 'Curva C • 4.5 kA',
      cable: '2 x 1,5 mm² + PE (VN247-3)',
      bocas: isEn ? '9 Outlets' : '9 Bocas',
      detallePlano: isEn
        ? '6 indoor luminaires in Living-Dining-Kitchen, 2 luminaires in Gallery, and 1 exterior entrance luminaire (3 double switches).'
        : '6 luminarias interiores en Estar-Comedor-Cocina, 2 luminarias en Galería y 1 luminaria exterior (3 llaves de doble efecto).',
      color: '#10b981',
      badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    },
    {
      id: 'C3',
      codigo: 'C3 • TUG',
      nombre: isEn ? 'Bedrooms & Bathrooms Sockets' : 'Tomas Dormitorios y Baños',
      tipo: 'TUG',
      pia: '2x16 A',
      curva: 'Curva C • 4.5 kA',
      cable: '2 x 2,5 mm² + PE (VN247-3)',
      bocas: isEn ? '6 Outlets' : '6 Bocas',
      detallePlano: isEn
        ? '2 double sockets in Bedroom 1, 2 double sockets in Bedroom 2, and 2 GFCI-protected bathroom outlets.'
        : '2 tomas en Dormitorio 1, 2 tomas en Dormitorio 2 y 2 tomas en Baños (protegidos por diferencial 30 mA).',
      color: '#38bdf8',
      badgeBg: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    },
    {
      id: 'C4',
      codigo: 'C4 • TUG',
      nombre: isEn ? 'Living-Kitchen & Gallery Sockets' : 'Tomas Estar-Cocina y Galería',
      tipo: 'TUG',
      pia: '2x16 A',
      curva: 'Curva C • 4.5 kA',
      cable: '2 x 2,5 mm² + PE (VN247-3)',
      bocas: isEn ? '9 Outlets' : '9 Bocas',
      detallePlano: isEn
        ? '7 indoor outlets across Living, Dining, and Kitchen countertop + 2 weatherproof outlets in Gallery.'
        : '7 tomas interiores distribuidos en Estar, Comedor y mesada de Cocina + 2 tomas intemperie en Galería.',
      color: '#0ea5e9',
      badgeBg: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
    },
    {
      id: 'C5',
      codigo: 'C5 • TUE / ACU',
      nombre: isEn ? 'High-Power Loads (Oven & A/C)' : 'Uso Especial (Horno Eléctrico y A/A)',
      tipo: 'TUE',
      pia: '2x20 A',
      curva: 'Curva C • 4.5 kA',
      cable: '2 x 4 mm² + PE (VN247-3)',
      bocas: isEn ? '2 Dedicated' : '2 Dedicados',
      detallePlano: isEn
        ? 'Dedicated high-section feeder for Kitchen Electric Oven and Split Air Conditioning unit.'
        : 'Alimentación dedicada de sección reforzada para Horno Eléctrico en cocina y equipo de Aire Acondicionado.',
      color: '#f59e0b',
      badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    },
    {
      id: 'C6',
      codigo: 'C6 • ACU',
      nombre: isEn ? 'Security, CCTV & Automatic Gate' : 'Seguridad, CCTV y Portón Automático',
      tipo: 'ACU',
      pia: '2x10 A',
      curva: 'Curva C • 4.5 kA',
      cable: '2 x 2,5 mm² + PE (VN247-3)',
      bocas: isEn ? 'Dedicated Line' : 'Línea Exclusiva',
      detallePlano: isEn
        ? 'Independent protection for CEM Suri 500 alarm panel, Dahua 4CH XVR, smoke/tank sensors, and automatic gate motor.'
        : 'Protección independiente para central CEM Suri 500, XVR Dahua 4CH, sensores de humo/tanque y motor de portón.',
      color: '#a855f7',
      badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    },
  ]

  const circuitoActivo = circuitos.find((c) => c.id === selectedId) || circuitos[0]

  return (
    <div className="space-y-8">
      {/* ESQUEMA GRÁFICO UNIFILAR (SVG INTERACTIVO) */}
      <div className="rounded-3xl bg-[#0b1120] border border-slate-800 p-6 sm:p-8 overflow-x-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
              <Icon icon="mdi:electric-switch" className="text-xl" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                {isEn
                  ? 'Main Distribution Panel (TPG • 12 DIN Modules)'
                  : 'Tablero Principal General (TPG • Gabinete Embutir 12 Módulos)'}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                220V AC • 50Hz • Esquema TT • Norma AEA 90364-7-770
              </p>
            </div>
          </div>

          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            {isEn ? 'Click any circuit to inspect' : 'Hacé clic en un circuito para inspeccionar'}
          </span>
        </div>

        {/* SVG UNIFILAR */}
        <div className="min-w-[820px]">
          <svg
            viewBox="0 0 960 430"
            className="w-full h-auto font-mono select-none"
            role="img"
            aria-label="Diagrama Unifilar Vivienda 66m2"
          >
            {/* ACOMETIDA EPEC / MEDIDOR */}
            <rect
              x="390"
              y="10"
              width="180"
              height="38"
              rx="8"
              fill="#0f172a"
              stroke="#334155"
              strokeWidth="1.5"
            />
            <text x="480" y="27" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">
              ACOMETIDA 220V (EPEC)
            </text>
            <text x="480" y="40" textAnchor="middle" fill="#64748b" fontSize="9">
              Medidor + Caja Toma Primaria
            </text>

            {/* Línea vertical Acometida -> IGA */}
            <line x1="480" y1="48" x2="480" y2="75" stroke="#10b981" strokeWidth="2.5" />

            {/* MARCO TABLERO PRINCIPAL */}
            <rect
              x="25"
              y="68"
              width="910"
              height="350"
              rx="16"
              fill="#020617"
              fillOpacity="0.65"
              stroke="#1e293b"
              strokeWidth="1.5"
              strokeDasharray="6 4"
            />
            <text x="45" y="90" fill="#475569" fontSize="10" fontWeight="bold">
              TABLERO PRINCIPAL (TPG) — 12 MÓDULOS DIN
            </text>

            {/* INTERRUPTOR GENERAL (IGA 2x40A) */}
            <rect
              x="395"
              y="75"
              width="170"
              height="44"
              rx="8"
              fill="#0f172a"
              stroke="#10b981"
              strokeWidth="1.5"
            />
            <text x="480" y="94" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">
              PIA GENERAL 2x40 A
            </text>
            <text x="480" y="109" textAnchor="middle" fill="#34d399" fontSize="9">
              Corte General • Curva C (6 kA)
            </text>

            {/* Línea vertical IGA -> ID */}
            <line x1="480" y1="119" x2="480" y2="145" stroke="#10b981" strokeWidth="2.5" />

            {/* INTERRUPTOR DIFERENCIAL (ID 2x40A 30mA) */}
            <rect
              x="380"
              y="145"
              width="200"
              height="46"
              rx="8"
              fill="#0f172a"
              stroke="#38bdf8"
              strokeWidth="1.8"
            />
            <text x="480" y="165" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">
              DIFERENCIAL 2x40 A / 30 mA
            </text>
            <text x="480" y="180" textAnchor="middle" fill="#38bdf8" fontSize="9">
              Schneider Clase AC • Protección Vida
            </text>

            {/* PUESTA A TIERRA (PAT) A LA DERECHA */}
            <line
              x1="580"
              y1="168"
              x2="760"
              y2="168"
              stroke="#eab308"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <rect
              x="760"
              y="145"
              width="155"
              height="46"
              rx="8"
              fill="#0f172a"
              stroke="#eab308"
              strokeWidth="1.5"
            />
            <text x="837" y="165" textAnchor="middle" fill="#facc15" fontSize="10" fontWeight="bold">
              PUESTA A TIERRA (PAT)
            </text>
            <text x="837" y="180" textAnchor="middle" fill="#94a3b8" fontSize="9">
              Jabalina 1,5m + Cable 4mm²
            </text>

            {/* Línea vertical ID -> Barra Colectora */}
            <line x1="480" y1="191" x2="480" y2="222" stroke="#10b981" strokeWidth="2.5" />

            {/* BARRA DISTRIBUIDORA (PEINE BIPOLAR) */}
            <line x1="100" y1="222" x2="860" y2="222" stroke="#10b981" strokeWidth="3.5" />
            <text x="100" y="214" fill="#64748b" fontSize="9">
              PEINE BIPOLAR 63A (FASE + NEUTRO)
            </text>

            {/* RAMALES DE LOS 6 CIRCUITOS */}
            {circuitos.map((c, idx) => {
              const x = 100 + idx * 152
              const isSelected = c.id === selectedId

              return (
                <g
                  key={c.id}
                  onClick={() => setSelectedId(c.id)}
                  className="cursor-pointer"
                >
                  {/* Bajada desde barra */}
                  <line
                    x1={x}
                    y1="222"
                    x2={x}
                    y2="252"
                    stroke={isSelected ? c.color : '#475569'}
                    strokeWidth={isSelected ? '2.5' : '1.8'}
                  />

                  {/* Símbolo Interruptor Termomagnético (PIA) */}
                  <circle
                    cx={x}
                    cy="256"
                    r="3.5"
                    fill="#020617"
                    stroke={c.color}
                    strokeWidth="1.8"
                  />
                  <line
                    x1={x}
                    y1="259"
                    x2={x - 10}
                    y2="278"
                    stroke={c.color}
                    strokeWidth="2.2"
                  />
                  <circle
                    cx={x}
                    cy="282"
                    r="3.5"
                    fill="#020617"
                    stroke={c.color}
                    strokeWidth="1.8"
                  />

                  {/* Bajada PIA -> Tarjeta de Circuito */}
                  <line
                    x1={x}
                    y1="286"
                    x2={x}
                    y2="305"
                    stroke={isSelected ? c.color : '#475569'}
                    strokeWidth={isSelected ? '2.5' : '1.8'}
                  />

                  {/* Tarjeta del Circuito */}
                  <rect
                    x={x - 66}
                    y="305"
                    width="132"
                    height="98"
                    rx="10"
                    fill={isSelected ? '#1e293b' : '#0f172a'}
                    stroke={isSelected ? c.color : '#334155'}
                    strokeWidth={isSelected ? '2' : '1.2'}
                  />

                  <text
                    x={x}
                    y="325"
                    textAnchor="middle"
                    fill={c.color}
                    fontSize="11"
                    fontWeight="bold"
                  >
                    {c.codigo}
                  </text>
                  <text
                    x={x}
                    y="343"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    PIA {c.pia}
                  </text>
                  <text x={x} y="360" textAnchor="middle" fill="#94a3b8" fontSize="9">
                    {c.cable.split(' (')[0]}
                  </text>
                  <text x={x} y="376" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontWeight="bold">
                    {c.bocas}
                  </text>
                  <text x={x} y="393" textAnchor="middle" fill="#64748b" fontSize="8">
                    {c.id === 'C1'
                      ? 'Dorm. + Baños'
                      : c.id === 'C2'
                        ? 'Estar + Galería'
                        : c.id === 'C3'
                          ? 'Tomas Privados'
                          : c.id === 'C4'
                            ? 'Tomas Social'
                            : c.id === 'C5'
                              ? 'Horno + A/A'
                              : 'Alarma/CCTV/Portón'}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>
      </div>

      {/* PANEL DE DETALLE DEL CIRCUITO SELECCIONADO */}
      <motion.div
        key={circuitoActivo.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-2xl bg-[#0f172a]/80 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${circuitoActivo.badgeBg}`}
            >
              {circuitoActivo.codigo}
            </span>
            <h4 className="text-lg font-bold text-white">{circuitoActivo.nombre}</h4>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">{circuitoActivo.detallePlano}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 shrink-0 w-full md:w-auto">
          <div className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-[10px] font-mono text-slate-500 uppercase">Protección</div>
            <div className="text-xs font-bold text-white">{circuitoActivo.pia} ({circuitoActivo.curva})</div>
          </div>
          <div className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800">
            <div className="text-[10px] font-mono text-slate-500 uppercase">Conductor</div>
            <div className="text-xs font-bold text-white">{circuitoActivo.cable}</div>
          </div>
          <div className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 col-span-2 sm:col-span-1">
            <div className="text-[10px] font-mono text-slate-500 uppercase">Carga / Bocas</div>
            <div className="text-xs font-bold text-emerald-400">{circuitoActivo.bocas}</div>
          </div>
        </div>
      </motion.div>

      {/* TABLA RESUMEN CUADRO DE CARGAS AEA */}
      <div className="rounded-2xl bg-[#0b1120] border border-slate-800 overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/60 text-slate-400 font-mono text-[11px] uppercase">
              <th className="py-3.5 px-4">Circuito</th>
              <th className="py-3.5 px-4">Destino en Plano</th>
              <th className="py-3.5 px-4">Bocas / Carga</th>
              <th className="py-3.5 px-4">PIA</th>
              <th className="py-3.5 px-4">Conductor (IRAM NM 247-3)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {circuitos.map((c) => (
              <tr
                key={c.id}
                onClick={() => setSelectedId(c.id)}
                className={`cursor-pointer transition-colors ${
                  c.id === selectedId ? 'bg-emerald-500/10' : 'hover:bg-slate-900/40'
                }`}
              >
                <td className="py-3 px-4 font-mono font-bold" style={{ color: c.color }}>
                  {c.codigo}
                </td>
                <td className="py-3 px-4 font-semibold text-white">{c.nombre}</td>
                <td className="py-3 px-4 text-slate-300">{c.bocas}</td>
                <td className="py-3 px-4 font-mono text-amber-300 font-bold">{c.pia}</td>
                <td className="py-3 px-4 font-mono text-slate-400">{c.cable}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}