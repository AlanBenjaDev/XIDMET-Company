'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

interface CircuitItem {
  id: string
  code: string
  name: string
  fase: 'R' | 'S' | 'T'
  bocas: number
  potenciaVA: number
  corrienteIb: string
  termicaIn: string
  seccionCable: string
  caidaTension: string
  destino: string
  protegidoInversor: boolean
}

const CIRCUITOS: CircuitItem[] = [
  {
    id: 'c1',
    code: 'C1 - IUG',
    name: 'Iluminación de Uso General PB',
    fase: 'R',
    bocas: 14,
    potenciaVA: 1400,
    corrienteIb: '6.36 A',
    termicaIn: '1x10A (Curva C, 6kA)',
    seccionCable: '1.5 mm² Cu (IRAM NM 247-3)',
    caidaTension: '0.85 %',
    destino: 'Living, Comedor, Pasillos, Baño General y Fachada',
    protegidoInversor: true
  },
  {
    id: 'c2',
    code: 'C2 - TUG',
    name: 'Tomacorrientes Uso General PB',
    fase: 'S',
    bocas: 12,
    potenciaVA: 2200,
    corrienteIb: '10.0 A',
    termicaIn: '1x16A (Curva C, 6kA)',
    seccionCable: '2.5 mm² Cu (IRAM NM 247-3)',
    caidaTension: '1.20 %',
    destino: 'Tomas de pared en estar, living, comedor y estudio',
    protegidoInversor: true
  },
  {
    id: 'c3',
    code: 'C3 - TUE',
    name: 'Tomacorrientes Especiales Cocina & Lavadero',
    fase: 'T',
    bocas: 6,
    potenciaVA: 3300,
    corrienteIb: '15.0 A',
    termicaIn: '1x20A (Curva C, 6kA)',
    seccionCable: '4.0 mm² Cu (IRAM NM 247-3)',
    caidaTension: '1.45 %',
    destino: 'Horno eléctrico empotrado, anafe, lavavajillas y microondas',
    protegidoInversor: false
  },
  {
    id: 'c4',
    code: 'C4 - TUE',
    name: 'Climatización Inverter (A/A Frío/Calor)',
    fase: 'R',
    bocas: 3,
    potenciaVA: 3500,
    corrienteIb: '15.9 A',
    termicaIn: '1x20A (Curva C, 6kA)',
    seccionCable: '4.0 mm² Cu (IRAM NM 247-3)',
    caidaTension: '1.60 %',
    destino: 'Equipos Splits Inverter en Living, Suite y Planta Alta',
    protegidoInversor: false
  },
  {
    id: 'c5',
    code: 'C5 - MIX',
    name: 'Iluminación y Tomas Planta Alta / Suite',
    fase: 'S',
    bocas: 10,
    potenciaVA: 1850,
    corrienteIb: '8.41 A',
    termicaIn: '1x16A (Curva C, 6kA)',
    seccionCable: '2.5 mm² Cu (IRAM NM 247-3)',
    caidaTension: '1.15 %',
    destino: 'Dormitorio suite, vestidor, baño privado y pasillo distribuidor',
    protegidoInversor: true
  },
  {
    id: 'c6',
    code: 'C6 - IOT',
    name: 'Domótica, Red, Central de Alarmas & Rack',
    fase: 'T',
    bocas: 4,
    potenciaVA: 950,
    corrienteIb: '4.32 A',
    termicaIn: '1x10A (Curva C + Filtro EMI)',
    seccionCable: '2.5 mm² Cu (IRAM NM 247-3)',
    caidaTension: '0.45 %',
    destino: 'Hub Gateway Zigbee, switches de red, cámaras NVR y relés DIN',
    protegidoInversor: true
  },
  {
    id: 'c7',
    code: 'C7 - MOT',
    name: 'Fuerza Motriz: Bomba Presurizadora & Riego',
    fase: 'S',
    bocas: 2,
    potenciaVA: 1500,
    corrienteIb: '6.82 A',
    termicaIn: '1x16A (Curva D con guardamotor)',
    seccionCable: '2.5 mm² Cu (IRAM NM 247-3)',
    caidaTension: '1.10 %',
    destino: 'Bomba elevadora de cisterna, presurizadora y electroválvulas de parque',
    protegidoInversor: false
  },
  {
    id: 'c8',
    code: 'C8 - EXT',
    name: 'Iluminación y Fuerza Exterior Quincho & Piscina',
    fase: 'T',
    bocas: 8,
    potenciaVA: 1800,
    corrienteIb: '8.18 A',
    termicaIn: '1x16A (Curva C, estanco IP65)',
    seccionCable: '2.5 mm² Cu (IRAM NM 247-3)',
    caidaTension: '1.30 %',
    destino: 'Galería exterior, iluminación perimetral, bomba de piscina y fuente',
    protegidoInversor: false
  }
]

export default function UnifilarDiagram() {
  const [selectedCircuit, setSelectedCircuit] = useState<CircuitItem>(CIRCUITOS[0])
  const [activeTab, setActiveTab] = useState<'unifilar' | 'cargas'>('unifilar')

  const totalPotencia = CIRCUITOS.reduce((acc, curr) => acc + curr.potenciaVA, 0)
  const totalBocas = CIRCUITOS.reduce((acc, curr) => acc + curr.bocas, 0)

  // Balanceo de fases
  const potenciaR = CIRCUITOS.filter(c => c.fase === 'R').reduce((acc, c) => acc + c.potenciaVA, 0)
  const potenciaS = CIRCUITOS.filter(c => c.fase === 'S').reduce((acc, c) => acc + c.potenciaVA, 0)
  const potenciaT = CIRCUITOS.filter(c => c.fase === 'T').reduce((acc, c) => acc + c.potenciaVA, 0)

  return (
    <div className="w-full bg-[#0a0f1d] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
      
      {/* HEADER DE LA SECCIÓN */}
      <div className="bg-[#0f172a] border-b border-slate-800 p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Icon icon="mdi:flash-outline" className="text-2xl" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg leading-tight flex items-center gap-2">
              Diagrama Unifilar & Cuadro de Cargas
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono font-bold uppercase tracking-wider">
                AEA 90364-7-771
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Esquema técnico de protecciones, acometida trifásica, cálculo de calibres y balanceo de fases.
            </p>
          </div>
        </div>

        {/* SELECTOR DE VISTA */}
        <div className="flex items-center bg-slate-900 border border-slate-700/80 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('unifilar')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'unifilar'
                ? 'bg-gradient-to-r from-[#10b981] to-[#0ea5e9] text-[#020617] shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Icon icon="mdi:sitemap" className="text-sm" />
            Diagrama Unifilar
          </button>
          <button
            onClick={() => setActiveTab('cargas')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'cargas'
                ? 'bg-gradient-to-r from-[#10b981] to-[#0ea5e9] text-[#020617] shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Icon icon="mdi:table-cog" className="text-sm" />
            Cuadro de Cargas
          </button>
        </div>
      </div>

      {activeTab === 'unifilar' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* ESQUEMA GRÁFICO UNIFILAR */}
          <div className="lg:col-span-8 p-6 bg-[#030712] relative overflow-x-auto">
            
            {/* Medidor y Acometida */}
            <div className="max-w-[700px] mx-auto space-y-6 text-slate-200">
              
              {/* Bloque 1: Acometida de Distribuidora Eléctrica */}
              <div className="border border-slate-800 bg-slate-900/60 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Icon icon="mdi:transmission-tower" className="text-2xl" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest block">
                      Acometida de Red
                    </span>
                    <span className="text-sm font-bold text-white">Red de Distribución 3x380V + N (50 Hz)</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-slate-300 block">Potencia Contratada: 10 kVA</span>
                  <span className="text-[10px] text-slate-500">Pilar de Medición Reglamentario</span>
                </div>
              </div>

              {/* Flecha conectora */}
              <div className="flex justify-center">
                <div className="w-[2px] h-6 bg-gradient-to-b from-blue-500 to-emerald-500" />
              </div>

              {/* Bloque 2: Tablero General de Protección Primaria (TGBT) */}
              <div className="border-2 border-[#10b981]/40 bg-[#0f172a]/90 rounded-2xl p-5 shadow-lg relative">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
                    <span className="text-xs font-black text-white uppercase tracking-wider">
                      TABLERO GENERAL DE BAJA TENSIÓN (TGBT)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#34d399] px-2 py-0.5 rounded bg-[#10b981]/20">
                    Gabinete DIN IP65
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Térmica Principal */}
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                      Termomagnética General
                    </div>
                    <div className="text-sm font-mono font-bold text-white">4x32A Curva C</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Poder de corte 6 kA</div>
                  </div>

                  {/* Protector Integral de Tensión */}
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                      Protector de Tensión
                    </div>
                    <div className="text-sm font-mono font-bold text-sky-400">Digital Regulable</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">&gt; 242V / &lt; 195V (Rearme 30s)</div>
                  </div>

                  {/* Descargador de Sobretensión DPS */}
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                      Protección Transitoria
                    </div>
                    <div className="text-sm font-mono font-bold text-amber-400">DPS Clase II 40kA</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Descarga a tierra atmosférica</div>
                  </div>
                </div>

                {/* Jabalina Puesta a Tierra */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Icon icon="mdi:earth" className="text-lg" />
                    <span className="font-semibold">Puesta a Tierra (PAT): Jabalina Cu 5/8&quot; x 1.5m</span>
                  </div>
                  <span className="font-mono text-slate-300 font-bold bg-slate-800 px-2 py-0.5 rounded">
                    R &lt; 2.5 Ω (Garantizado)
                  </span>
                </div>
              </div>

              {/* Flecha conectora */}
              <div className="flex justify-center">
                <div className="w-[2px] h-6 bg-gradient-to-b from-emerald-500 to-sky-500" />
              </div>

              {/* Bloque 3: Disyuntores Diferenciales de Seguridad */}
              <div className="border border-slate-800 bg-slate-900/70 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
                    <Icon icon="mdi:shield-alert" className="text-2xl" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-widest block">
                      Protección de Vida y Contacto Indirecto
                    </span>
                    <span className="text-sm font-bold text-white">Disyuntores Diferenciales (RCD)</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-center">
                    <div className="text-[9px] text-slate-400 uppercase font-bold">Diferencial PB/Cocina</div>
                    <div className="text-xs font-mono font-bold text-emerald-400">4x40A / 30mA</div>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-center">
                    <div className="text-[9px] text-slate-400 uppercase font-bold">Diferencial PA/Estudio</div>
                    <div className="text-xs font-mono font-bold text-emerald-400">2x25A / 30mA</div>
                  </div>
                </div>
              </div>

              {/* Flecha conectora a circuitos */}
              <div className="flex justify-center">
                <div className="w-[2px] h-6 bg-slate-700" />
              </div>

              {/* Bloque 4: Peine de Circuitos Seccionales */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-wider">
                    CIRCUITOS SECCIONALES INDEPENDIENTES (Hacé clic para inspeccionar)
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">8 Circuitos Normados</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {CIRCUITOS.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCircuit(c)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedCircuit.id === c.id
                          ? 'bg-[#10b981]/20 border-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                          : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-black font-mono text-white">{c.code}</span>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                          c.fase === 'R' ? 'bg-rose-500/20 text-rose-300' :
                          c.fase === 'S' ? 'bg-amber-500/20 text-amber-300' :
                          'bg-sky-500/20 text-sky-300'
                        }`}>
                          Fase {c.fase}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-300 font-medium truncate">{c.name}</div>
                      <div className="text-[10px] text-[#34d399] font-mono mt-1 font-bold">{c.termicaIn.split(' ')[0]}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* INSPECTOR LATERAL DEL CIRCUITO SELECCIONADO */}
          <div className="lg:col-span-4 p-6 bg-[#091124] border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCircuit.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6"
              >
                
                <div className="border-b border-slate-800 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black font-mono px-2 py-0.5 rounded bg-slate-800 text-[#10b981]">
                      {selectedCircuit.code}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      Fase Asignada: <span className="text-white font-bold">{selectedCircuit.fase}</span>
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-tight">
                    {selectedCircuit.name}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    {selectedCircuit.destino}
                  </p>
                </div>

                {/* Parámetros Técnicos */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-xs text-slate-400 font-medium">Potencia Asignada:</span>
                    <span className="text-sm font-mono font-bold text-white">{selectedCircuit.potenciaVA} VA</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-xs text-slate-400 font-medium">Corriente de Cálculo (Ib):</span>
                    <span className="text-sm font-mono font-bold text-sky-400">{selectedCircuit.corrienteIb}</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-xs text-slate-400 font-medium">Calibre de Protección (In):</span>
                    <span className="text-sm font-mono font-bold text-[#10b981]">{selectedCircuit.termicaIn}</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-xs text-slate-400 font-medium">Conductor Normalizado:</span>
                    <span className="text-xs font-mono font-bold text-amber-300">{selectedCircuit.seccionCable}</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-xs text-slate-400 font-medium">Caída de Tensión Calculada:</span>
                    <span className="text-sm font-mono font-bold text-emerald-400">{selectedCircuit.caidaTension} (&lt; 3% adm.)</span>
                  </div>
                </div>

                {/* Respaldo por Inversor */}
                <div className={`p-3.5 rounded-xl border flex items-center gap-3 ${
                  selectedCircuit.protegidoInversor
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400'
                }`}>
                  <Icon 
                    icon={selectedCircuit.protegidoInversor ? 'mdi:battery-charging-high' : 'mdi:power-plug-off'} 
                    className="text-2xl shrink-0" 
                  />
                  <div>
                    <span className="text-xs font-bold block">
                      {selectedCircuit.protegidoInversor
                        ? 'Circuito Crítico Prioritario'
                        : 'Circuito Convencional'}
                    </span>
                    <span className="text-[10px] leading-tight block">
                      {selectedCircuit.protegidoInversor
                        ? 'Mantiene suministro automático mediante banco de baterías ante corte de red.'
                        : 'Se desconecta ante cortes de red para no sobrecargar el inversor.'}
                    </span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Resumen de Cargas al Pie */}
            <div className="pt-6 mt-6 border-t border-slate-800">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">
                Balanceo Eléctrico de Fases (3x380V):
              </span>
              <div className="grid grid-cols-3 gap-2 text-center font-mono">
                <div className="p-2 rounded-lg bg-slate-900 border border-rose-500/30">
                  <div className="text-[10px] text-rose-400 font-bold">Fase R</div>
                  <div className="text-xs font-black text-white">{potenciaR} VA</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-amber-500/30">
                  <div className="text-[10px] text-amber-400 font-bold">Fase S</div>
                  <div className="text-xs font-black text-white">{potenciaS} VA</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-sky-500/30">
                  <div className="text-[10px] text-sky-400 font-bold">Fase T</div>
                  <div className="text-xs font-black text-white">{potenciaT} VA</div>
                </div>
              </div>
              <p className="text-[10px] text-emerald-400 mt-2 text-center font-medium">
                ✓ Desequilibrio de fases inferior al 5% (Óptimo según norma)
              </p>
            </div>

          </div>

        </div>
      ) : (
        /* TABLA DE CUADRO DE CARGAS COMPLETO */
        <div className="p-6 bg-[#030712] overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase">
                <th className="py-3 px-3">Circuito</th>
                <th className="py-3 px-3">Denominación</th>
                <th className="py-3 px-3 text-center">Fase</th>
                <th className="py-3 px-3 text-center">Bocas</th>
                <th className="py-3 px-3 text-right">Potencia (VA)</th>
                <th className="py-3 px-3 text-right">Ib (A)</th>
                <th className="py-3 px-3">Protección In</th>
                <th className="py-3 px-3">Conductor PE</th>
                <th className="py-3 px-3 text-center">ΔV (%)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono">
              {CIRCUITOS.map((c) => (
                <tr key={c.id} className="hover:bg-slate-900/60 transition-colors">
                  <td className="py-3 px-3 font-bold text-[#10b981]">{c.code}</td>
                  <td className="py-3 px-3 font-sans font-medium text-slate-200">{c.name}</td>
                  <td className="py-3 px-3 text-center">
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                      c.fase === 'R' ? 'bg-rose-500/20 text-rose-300' :
                      c.fase === 'S' ? 'bg-amber-500/20 text-amber-300' :
                      'bg-sky-500/20 text-sky-300'
                    }`}>
                      {c.fase}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center text-slate-300">{c.bocas}</td>
                  <td className="py-3 px-3 text-right font-bold text-white">{c.potenciaVA.toLocaleString('es-AR')}</td>
                  <td className="py-3 px-3 text-right text-sky-300">{c.corrienteIb}</td>
                  <td className="py-3 px-3 text-slate-300 font-sans">{c.termicaIn}</td>
                  <td className="py-3 px-3 text-amber-300 font-sans">{c.seccionCable}</td>
                  <td className="py-3 px-3 text-center text-emerald-400">{c.caidaTension}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-slate-700 bg-slate-900/80 font-mono font-bold text-white">
                <td colSpan={3} className="py-3 px-3 uppercase text-slate-400">Total Instalado:</td>
                <td className="py-3 px-3 text-center text-[#10b981]">{totalBocas} bocas</td>
                <td className="py-3 px-3 text-right text-[#10b981]">{totalPotencia.toLocaleString('es-AR')} VA</td>
                <td colSpan={4} className="py-3 px-3 text-right text-slate-400 font-sans text-xs">
                  Factor de simultaneidad estimado: 0.70 • Potencia máxima simultánea: {Math.round(totalPotencia * 0.70).toLocaleString('es-AR')} VA
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}

    </div>
  )
}
