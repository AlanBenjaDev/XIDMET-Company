'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

export interface RoomData {
  id: string
  name: string
  area: string
  circuit: string
  lighting: string[]
  sockets: string[]
  domotics: string[]
  powerVA: number
  description: string
}

export const ROOMS: Record<string, RoomData> = {
  living: {
    id: 'living',
    name: 'Living - Comedor Principal',
    area: '42 m²',
    circuit: 'C1 (Ilum) / C2 (Tomas) / C4 (Clima)',
    lighting: [
      '2x Bocas de iluminación central dimerizable cálida (3000K)',
      '1x Garganta perimetral LED RGBW con perfil difusor de aluminio (14m)',
      '4x Dicroicas embutidas anti-deslumbrantes en zona de estar'
    ],
    sockets: [
      '6x Tomacorrientes dobles TUG (10A) distribuidos perimetralmente',
      '1x Tomacorriente TUE (20A) exclusivo para Climatizador Inverter 6000 Fg',
      '1x Punto de red RJ45 Cat6 + canalización HDMI embutida'
    ],
    domotics: [
      '1x Micromódulo inteligente Zigbee 3.0 doble canal tras tecla de luz',
      '1x Sensor de presencia y luminosidad PIR Zigbee (ajuste automático de escenas)',
      '1x Controlador infrarrojo inteligente para climatización y audio'
    ],
    powerVA: 2850,
    description: 'Área social de alto confort con automatización de escenas: "Modo Cine" (atenuación al 15% y encendido de tira LED cálida) y "Modo Noche".'
  },
  cocina: {
    id: 'cocina',
    name: 'Cocina & Desayunador',
    area: '26 m²',
    circuit: 'C1 (Ilum) / C3 (Tomas Uso Especial Cocina)',
    lighting: [
      '4x Paneles LED embutidos de 18W luz neutra (4000K) alta reproducción cromática',
      '1x Tira LED sub-alacena siliconada bajo mueble para iluminación de mesada',
      '2x Lámparas colgantes decorativas sobre desayunador'
    ],
    sockets: [
      '5x Tomacorrientes dobles TUG (10A) sobre mesada con tierra reforzada',
      '2x Tomas TUE (20A) independientes: uno para horno eléctrico y uno para anafe/lavavajillas',
      '1x Toma exclusivo 10A para heladera conectado a línea protegida'
    ],
    domotics: [
      '1x Sensor de fuga de gas y humo con notificación push al smartphone',
      '1x Sensor de inundación bajo bacha con corte automático de electroválvula',
      '1x Micromódulo inteligente para luminarias de mesada e isla'
    ],
    powerVA: 4200,
    description: 'Zona de alta exigencia energética. Se aplicó cableado de 4 mm² para circuitos TUE y protecciones de 20A según norma AEA 90364-7-771.'
  },
  suite: {
    id: 'suite',
    name: 'Dormitorio Principal (Suite)',
    area: '24 m²',
    circuit: 'C5 (Iluminación & Tomas Planta Alta / Suite) / C4 (Clima)',
    lighting: [
      '1x Plafón central LED dimerizable cálido',
      '2x Apliques de cabecera direccionables con encendido dual e interruptor local',
      'Iluminación lineal indirecta en cabecero de cama'
    ],
    sockets: [
      '4x Tomas dobles TUG (10A) junto a mesas de luz con puertos de carga rápida USB-C',
      '1x Toma TUE (20A) para aire acondicionado 3000 Fg',
      '1x Toma para smart TV en pared con paso de cables oculto'
    ],
    domotics: [
      '2x Módulos micro Zigbee para llaves de combinación virtual (sin cables de retorno)',
      '1x Sensor de apertura magnético en ventanas para corte de climatización si se abre',
      '1x Escena "Despertar": encendido gradual de luces simulando amanecer'
    ],
    powerVA: 1850,
    description: 'Máximo confort acústico y térmico. El sistema domótico apaga el aire acondicionado automáticamente si detecta ventanas abiertas más de 3 minutos.'
  },
  vestidor: {
    id: 'vestidor',
    name: 'Vestidor & Baño en Suite',
    area: '16 m²',
    circuit: 'C5 (Tomas e Iluminación)',
    lighting: [
      '3x Embutidos lineales anti-sombras con índice CRI > 90 para vestidor',
      '2x Apliques estancos IP44 sobre espejo de baño',
      '1x Luz tenue de cortesía nocturna en zócalo'
    ],
    sockets: [
      '2x Tomas TUG (10A) con tapa hermética IP44 en baño fuera de zona 0 y 1',
      '2x Tomas TUG (10A) para secador / afeitadora en tocador'
    ],
    domotics: [
      '1x Sensor de movimiento ultra-rápido: enciende la luz de zócalo al 10% entre las 23:00 y las 07:00',
      '1x Extractor de baño automatizado por sensor de humedad relativa'
    ],
    powerVA: 1100,
    description: 'Instalación ejecutada respetando estrictamente las zonas de seguridad eléctrica en cuartos de baño según reglamentación AEA.'
  },
  dormitorio2: {
    id: 'dormitorio2',
    name: 'Dormitorio 2 / Estudio Técnico',
    area: '18 m²',
    circuit: 'C5 (Iluminación & Tomas)',
    lighting: [
      '1x Luminaria de techo LED uniforme 24W',
      '1x Aplique LED orientable en puesto de trabajo'
    ],
    sockets: [
      '6x Tomacorrientes dobles TUG (10A) para computadoras, impresoras y equipamiento',
      '1x Toma estabilizado filtrado para equipamiento electrónico sensible',
      '2x Tomas TUG libres'
    ],
    domotics: [
      '1x Micromódulo inteligente con monitoreo de consumo eléctrico en tiempo real (kWh)',
      '1x Enchufe smart para apagado automático de periféricos en desuso'
    ],
    powerVA: 1400,
    description: 'Espacio multifunción apto para home office. Incluye toma filtrado y monitoreo de consumo energético vía app móvil.'
  },
  banioPrincipal: {
    id: 'banioPrincipal',
    name: 'Baño Principal',
    area: '8 m²',
    circuit: 'C1 (Iluminación) / C2 (Tomas)',
    lighting: [
      '2x Embutidos estancos IP54 de alta seguridad en cielo raso',
      '1x Luz frontal neutra integrada en espejo'
    ],
    sockets: [
      '1x Toma doble TUG con toma a tierra y tapa rebatible estanca a 1.20m'
    ],
    domotics: [
      '1x Extractor de aire con timer inteligente y encendido vinculado a presencia'
    ],
    powerVA: 600,
    description: 'Diseño conforme a las distancias de seguridad AEA respecto a la bañera/ducha (Zona de prohibición Z0, Z1 y Z2).'
  },
  quincho: {
    id: 'quincho',
    name: 'Galería / Quincho con Parrilla',
    area: '38 m²',
    circuit: 'C1 (Iluminación) / C7 (Exterior & Fuerza Motriz)',
    lighting: [
      '3x Apliques bidireccionales IP65 sobre columnas',
      '1x Foco industrial orientable IP65 en sector de parrilla',
      'Guirnalda decorativa perimetral dimerizable cálida'
    ],
    sockets: [
      '4x Tomas TUG (10A) estancos IP55 con tapa de cierre magnético',
      '1x Toma TUE (20A) para freezer / heladera cervecera exterior'
    ],
    domotics: [
      '1x Sensor crepuscular digital: encendido automático al atardecer y apagado a medianoche',
      '1x Relé de riel DIN para control de bomba de piscina y fuente'
    ],
    powerVA: 2400,
    description: 'Instalación exterior resistente a la intemperie con cañería rígida de acero galvanizado y gabinetes IP65 estancos.'
  },
  tableros: {
    id: 'tableros',
    name: 'Sala Técnica & Tableros (TGBT / TS)',
    area: '10 m²',
    circuit: 'Acometida General / TGBT / TS Principal',
    lighting: [
      '1x Tubo LED estanco de 18W + Luz de emergencia autónoma de 60 LEDs'
    ],
    sockets: [
      '2x Tomas para UPS y central de alarma / domótica',
      '1x Barra de puesta a tierra equipotencial principal (BEP)'
    ],
    domotics: [
      '1x Hub Gateway Zigbee 3.0 conectado por cable ethernet Gigabit al router',
      '1x Medidor de energía trifásica DIN con conexión WiFi para telemetría de toda la casa'
    ],
    powerVA: 9500,
    description: 'El corazón de la instalación. Aloja el Tablero General con descargador de sobretensiones (DPS), protector de tensión programable, disyuntores de 30mA y térmicas de cada circuito.'
  }
}

export default function BlueprintViewer() {
  const [selectedRoomId, setSelectedRoomId] = useState<string>('living')
  const [activeLayers, setActiveLayers] = useState({
    iluminacion: true,
    tomas: true,
    domotica: true,
    canerias: true,
  })
  const [zoomLevel, setZoomLevel] = useState<number>(1)

  const toggleLayer = (layerKey: keyof typeof activeLayers) => {
    setActiveLayers(prev => ({ ...prev, [layerKey]: !prev[layerKey] }))
  }

  const selectedRoom = ROOMS[selectedRoomId] || ROOMS.living

  return (
    <div className="w-full bg-[#0a0f1d] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
      
      {/* BARRA SUPERIOR DE HERRAMIENTAS Y CAPAS */}
      <div className="bg-[#0f172a] border-b border-slate-800 p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4">
        
        {/* Título del visor */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center text-[#10b981]">
            <Icon icon="mdi:floor-plan" className="text-2xl" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg leading-tight flex items-center gap-2">
              Plano de Distribución Eléctrica & Domótica
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#10b981]/20 text-[#34d399] font-mono font-bold uppercase tracking-wider">
                Escala 1:50
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Hacé clic en cualquier ambiente para ver su memoria de bocas, cargas y automatización.
            </p>
          </div>
        </div>

        {/* CONTROLES DE CAPAS (LAYERS) */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mr-1 hidden sm:inline">
            Capas:
          </span>

          <button
            onClick={() => toggleLayer('iluminacion')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeLayers.iluminacion
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
                : 'bg-slate-800/80 text-slate-500 border border-slate-700/60'
            }`}
          >
            <Icon icon="mdi:lightbulb-on" className="text-sm" />
            Iluminación
          </button>

          <button
            onClick={() => toggleLayer('tomas')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeLayers.tomas
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-[0_0_10px_rgba(14,165,233,0.2)]'
                : 'bg-slate-800/80 text-slate-500 border border-slate-700/60'
            }`}
          >
            <Icon icon="mdi:power-socket-eu" className="text-sm" />
            Tomacorrientes
          </button>

          <button
            onClick={() => toggleLayer('domotica')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeLayers.domotica
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                : 'bg-slate-800/80 text-slate-500 border border-slate-700/60'
            }`}
          >
            <Icon icon="mdi:router-wireless" className="text-sm" />
            Domótica & IoT
          </button>

          <button
            onClick={() => toggleLayer('canerias')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeLayers.canerias
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.2)]'
                : 'bg-slate-800/80 text-slate-500 border border-slate-700/60'
            }`}
          >
            <Icon icon="mdi:transit-connection-variant" className="text-sm" />
            Cañerías
          </button>

          {/* ZOOM */}
          <div className="flex items-center ml-2 bg-slate-800 border border-slate-700 rounded-lg p-0.5">
            <button
              onClick={() => setZoomLevel(prev => Math.max(0.8, prev - 0.1))}
              className="px-2 py-1 text-slate-300 hover:text-white text-xs font-bold"
              title="Reducir"
            >
              -
            </button>
            <span className="text-[10px] font-mono text-slate-400 px-1">{Math.round(zoomLevel * 100)}%</span>
            <button
              onClick={() => setZoomLevel(prev => Math.min(1.4, prev + 0.1))}
              className="px-2 py-1 text-slate-300 hover:text-white text-xs font-bold"
              title="Aumentar"
            >
              +
            </button>
          </div>
        </div>

      </div>

      {/* CUERPO DEL PLANO: SVG INTERACTIVO Y DETALLE LATERAL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* ÁREA GRÁFICA DEL PLANO ARQUITECTÓNICO (SVG) */}
        <div className="lg:col-span-8 p-4 sm:p-8 bg-[#030712] relative overflow-hidden flex items-center justify-center min-h-[480px]">
          
          {/* Cuadrícula milimetrada de fondo de ingeniería */}
          <div 
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          <motion.div
            animate={{ scale: zoomLevel }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="w-full max-w-[850px] relative transition-transform duration-300"
          >
            <svg
              viewBox="0 0 960 620"
              className="w-full h-auto select-none"
              style={{ filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.6))' }}
            >
              <defs>
                {/* Patrón de líneas de cota */}
                <pattern id="hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="0" y2="8" stroke="#334155" strokeWidth="0.8" opacity="0.3" />
                </pattern>
                
                {/* Filtro de glow para elementos activos */}
                <filter id="glow-emerald" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="glow-sky" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* PERÍMETRO Y MUROS EXTERIORES DE LA CASA */}
              <rect x="30" y="30" width="900" height="560" rx="12" fill="#0b1329" stroke="#1e293b" strokeWidth="4" />
              
              {/* HABITACIÓN 1: LIVING - COMEDOR */}
              <g 
                onClick={() => setSelectedRoomId('living')}
                className="cursor-pointer group"
              >
                <rect 
                  x="220" y="220" width="420" height="260" 
                  fill={selectedRoomId === 'living' ? '#10b98115' : '#0f172a80'} 
                  stroke={selectedRoomId === 'living' ? '#10b981' : '#334155'} 
                  strokeWidth={selectedRoomId === 'living' ? 3 : 1.5}
                  rx="6"
                  className="transition-colors duration-200"
                />
                <text x="430" y="255" fill="#f8fafc" fontSize="15" fontWeight="bold" textAnchor="middle">
                  LIVING - COMEDOR
                </text>
                <text x="430" y="275" fill="#94a3b8" fontSize="11" textAnchor="middle">
                  42.0 m² • C1 / C2 / C4
                </text>

                {/* Mobiliario referencial Living */}
                <rect x="250" y="320" width="160" height="70" rx="4" fill="none" stroke="#475569" strokeDasharray="3 3" opacity="0.4" />
                <rect x="520" y="320" width="90" height="90" rx="4" fill="none" stroke="#475569" strokeDasharray="3 3" opacity="0.4" />
              </g>

              {/* HABITACIÓN 2: COCINA & DESAYUNADOR */}
              <g 
                onClick={() => setSelectedRoomId('cocina')}
                className="cursor-pointer group"
              >
                <rect 
                  x="660" y="220" width="250" height="260" 
                  fill={selectedRoomId === 'cocina' ? '#10b98115' : '#0f172a80'} 
                  stroke={selectedRoomId === 'cocina' ? '#10b981' : '#334155'} 
                  strokeWidth={selectedRoomId === 'cocina' ? 3 : 1.5}
                  rx="6"
                  className="transition-colors duration-200"
                />
                <text x="785" y="255" fill="#f8fafc" fontSize="15" fontWeight="bold" textAnchor="middle">
                  COCINA
                </text>
                <text x="785" y="275" fill="#94a3b8" fontSize="11" textAnchor="middle">
                  26.0 m² • C1 / C3 (TUE)
                </text>

                {/* Mesada e Isla */}
                <path d="M 670 290 L 890 290 L 890 410" fill="none" stroke="#475569" strokeDasharray="3 3" opacity="0.4" strokeWidth="2" />
                <rect x="710" y="340" width="120" height="50" rx="4" fill="none" stroke="#475569" strokeDasharray="3 3" opacity="0.4" />
              </g>

              {/* HABITACIÓN 3: DORMITORIO PRINCIPAL (SUITE) */}
              <g 
                onClick={() => setSelectedRoomId('suite')}
                className="cursor-pointer group"
              >
                <rect 
                  x="220" y="50" width="260" height="150" 
                  fill={selectedRoomId === 'suite' ? '#10b98115' : '#0f172a80'} 
                  stroke={selectedRoomId === 'suite' ? '#10b981' : '#334155'} 
                  strokeWidth={selectedRoomId === 'suite' ? 3 : 1.5}
                  rx="6"
                  className="transition-colors duration-200"
                />
                <text x="350" y="85" fill="#f8fafc" fontSize="14" fontWeight="bold" textAnchor="middle">
                  SUITE PRINCIPAL
                </text>
                <text x="350" y="103" fill="#94a3b8" fontSize="11" textAnchor="middle">
                  24.0 m² • C5
                </text>

                {/* Cama King referencial */}
                <rect x="300" y="120" width="100" height="70" rx="4" fill="none" stroke="#475569" strokeDasharray="3 3" opacity="0.4" />
              </g>

              {/* HABITACIÓN 4: VESTIDOR & BAÑO SUITE */}
              <g 
                onClick={() => setSelectedRoomId('vestidor')}
                className="cursor-pointer group"
              >
                <rect 
                  x="500" y="50" width="140" height="150" 
                  fill={selectedRoomId === 'vestidor' ? '#10b98115' : '#0f172a80'} 
                  stroke={selectedRoomId === 'vestidor' ? '#10b981' : '#334155'} 
                  strokeWidth={selectedRoomId === 'vestidor' ? 3 : 1.5}
                  rx="6"
                  className="transition-colors duration-200"
                />
                <text x="570" y="85" fill="#f8fafc" fontSize="12" fontWeight="bold" textAnchor="middle">
                  VESTIDOR
                </text>
                <text x="570" y="102" fill="#94a3b8" fontSize="10" textAnchor="middle">
                  16.0 m² • C5
                </text>
              </g>

              {/* HABITACIÓN 5: BAÑO PRINCIPAL */}
              <g 
                onClick={() => setSelectedRoomId('banioPrincipal')}
                className="cursor-pointer group"
              >
                <rect 
                  x="50" y="50" width="150" height="110" 
                  fill={selectedRoomId === 'banioPrincipal' ? '#10b98115' : '#0f172a80'} 
                  stroke={selectedRoomId === 'banioPrincipal' ? '#10b981' : '#334155'} 
                  strokeWidth={selectedRoomId === 'banioPrincipal' ? 3 : 1.5}
                  rx="6"
                  className="transition-colors duration-200"
                />
                <text x="125" y="85" fill="#f8fafc" fontSize="12" fontWeight="bold" textAnchor="middle">
                  BAÑO GRAL
                </text>
                <text x="125" y="102" fill="#94a3b8" fontSize="10" textAnchor="middle">
                  8.0 m² • C1/C2
                </text>
              </g>

              {/* HABITACIÓN 6: DORMITORIO 2 / ESTUDIO */}
              <g 
                onClick={() => setSelectedRoomId('dormitorio2')}
                className="cursor-pointer group"
              >
                <rect 
                  x="50" y="180" width="150" height="200" 
                  fill={selectedRoomId === 'dormitorio2' ? '#10b98115' : '#0f172a80'} 
                  stroke={selectedRoomId === 'dormitorio2' ? '#10b981' : '#334155'} 
                  strokeWidth={selectedRoomId === 'dormitorio2' ? 3 : 1.5}
                  rx="6"
                  className="transition-colors duration-200"
                />
                <text x="125" y="220" fill="#f8fafc" fontSize="13" fontWeight="bold" textAnchor="middle">
                  ESTUDIO
                </text>
                <text x="125" y="240" fill="#94a3b8" fontSize="10" textAnchor="middle">
                  18.0 m² • C5
                </text>
              </g>

              {/* SALA TÉCNICA / TABLEROS */}
              <g 
                onClick={() => setSelectedRoomId('tableros')}
                className="cursor-pointer group"
              >
                <rect 
                  x="660" y="50" width="250" height="150" 
                  fill={selectedRoomId === 'tableros' ? '#10b98125' : '#0f172a90'} 
                  stroke={selectedRoomId === 'tableros' ? '#10b981' : '#10b98180'} 
                  strokeWidth={selectedRoomId === 'tableros' ? 3 : 2}
                  strokeDasharray="6 4"
                  rx="6"
                  className="transition-colors duration-200"
                />
                <text x="785" y="85" fill="#34d399" fontSize="13" fontWeight="bold" textAnchor="middle">
                  ⚡ TABLERO TGBT / TS
                </text>
                <text x="785" y="103" fill="#94a3b8" fontSize="10" textAnchor="middle">
                  10.0 m² • Trifásico 3x380V
                </text>
                {/* Ícono de gabinete en tablero */}
                <rect x="740" y="125" width="90" height="40" rx="3" fill="#020617" stroke="#10b981" strokeWidth="1.5" />
                <text x="785" y="150" fill="#34d399" fontSize="11" fontWeight="mono" textAnchor="middle">
                  GABINETE DIN
                </text>
              </g>

              {/* HABITACIÓN 7: GALERÍA / QUINCHO */}
              <g 
                onClick={() => setSelectedRoomId('quincho')}
                className="cursor-pointer group"
              >
                <rect 
                  x="220" y="500" width="690" height="75" 
                  fill={selectedRoomId === 'quincho' ? '#10b98115' : '#0f172a70'} 
                  stroke={selectedRoomId === 'quincho' ? '#10b981' : '#334155'} 
                  strokeWidth={selectedRoomId === 'quincho' ? 3 : 1.5}
                  rx="6"
                  className="transition-colors duration-200"
                />
                <text x="565" y="535" fill="#f8fafc" fontSize="14" fontWeight="bold" textAnchor="middle">
                  GALERÍA QUINCHO & PARRILLA
                </text>
                <text x="565" y="555" fill="#94a3b8" fontSize="11" textAnchor="middle">
                  38.0 m² • Exterior IP65 • C1 / C7
                </text>
              </g>

              {/* ======================================================== */}
              {/* CAPA 1: CAÑERÍAS Y CIRCUITOS ELÉCTRICOS (CONDUITS) */}
              {/* ======================================================== */}
              {activeLayers.canerias && (
                <g opacity="0.85">
                  {/* Línea principal desde el tablero TS a living */}
                  <path d="M 740 145 L 430 145 L 430 350" fill="none" stroke="#a855f7" strokeWidth="2.5" strokeDasharray="6 3" />
                  {/* Línea al Dormitorio Suite */}
                  <path d="M 740 145 L 350 145" fill="none" stroke="#a855f7" strokeWidth="2.5" strokeDasharray="6 3" />
                  {/* Línea a la cocina */}
                  <path d="M 785 165 L 785 350" fill="none" stroke="#ec4899" strokeWidth="2.5" strokeDasharray="6 3" />
                  {/* Línea a quincho */}
                  <path d="M 785 350 L 785 520 L 565 520" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="6 3" />
                  {/* Línea a Estudio */}
                  <path d="M 430 145 L 125 145 L 125 280" fill="none" stroke="#a855f7" strokeWidth="2.5" strokeDasharray="6 3" />
                </g>
              )}

              {/* ======================================================== */}
              {/* CAPA 2: BOCAS DE ILUMINACIÓN (LIGHTING) */}
              {/* ======================================================== */}
              {activeLayers.iluminacion && (
                <g filter="url(#glow-emerald)">
                  {/* Living */}
                  <circle cx="360" cy="330" r="10" fill="#f59e0b" stroke="#fff" strokeWidth="2" />
                  <circle cx="500" cy="330" r="10" fill="#f59e0b" stroke="#fff" strokeWidth="2" />
                  {/* Garganta LED perimetral Living */}
                  <rect x="235" y="235" width="390" height="230" rx="4" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="8 4" opacity="0.8" />
                  
                  {/* Cocina */}
                  <circle cx="730" cy="330" r="9" fill="#f59e0b" stroke="#fff" strokeWidth="2" />
                  <circle cx="830" cy="330" r="9" fill="#f59e0b" stroke="#fff" strokeWidth="2" />
                  {/* Tira LED alacena */}
                  <line x1="680" y1="290" x2="880" y2="290" stroke="#f59e0b" strokeWidth="3" />

                  {/* Suite */}
                  <circle cx="350" cy="120" r="9" fill="#f59e0b" stroke="#fff" strokeWidth="2" />
                  <circle cx="280" cy="155" r="5" fill="#f59e0b" stroke="#fff" strokeWidth="1" />
                  <circle cx="420" cy="155" r="5" fill="#f59e0b" stroke="#fff" strokeWidth="1" />

                  {/* Baño Principal */}
                  <circle cx="125" cy="105" r="8" fill="#f59e0b" stroke="#fff" strokeWidth="2" />

                  {/* Estudio */}
                  <circle cx="125" cy="280" r="9" fill="#f59e0b" stroke="#fff" strokeWidth="2" />

                  {/* Quincho */}
                  <circle cx="360" cy="535" r="9" fill="#f59e0b" stroke="#fff" strokeWidth="2" />
                  <circle cx="560" cy="535" r="9" fill="#f59e0b" stroke="#fff" strokeWidth="2" />
                  <circle cx="760" cy="535" r="9" fill="#f59e0b" stroke="#fff" strokeWidth="2" />
                </g>
              )}

              {/* ======================================================== */}
              {/* CAPA 3: TOMACORRIENTES (TUG & TUE) */}
              {/* ======================================================== */}
              {activeLayers.tomas && (
                <g>
                  {/* Living Tomas TUG */}
                  <rect x="225" y="300" width="12" height="12" rx="2" fill="#0ea5e9" stroke="#fff" strokeWidth="1.5" />
                  <rect x="225" y="400" width="12" height="12" rx="2" fill="#0ea5e9" stroke="#fff" strokeWidth="1.5" />
                  <rect x="620" y="300" width="12" height="12" rx="2" fill="#0ea5e9" stroke="#fff" strokeWidth="1.5" />
                  {/* Living Toma TUE (Clima Inverter) */}
                  <polygon points="626,420 638,432 614,432" fill="#ef4444" stroke="#fff" strokeWidth="1.5" />

                  {/* Cocina Tomas TUE */}
                  <polygon points="885,310 897,322 873,322" fill="#ef4444" stroke="#fff" strokeWidth="1.5" />
                  <polygon points="885,380 897,392 873,392" fill="#ef4444" stroke="#fff" strokeWidth="1.5" />
                  {/* Cocina Tomas TUG */}
                  <rect x="680" y="275" width="12" height="12" rx="2" fill="#0ea5e9" stroke="#fff" strokeWidth="1.5" />
                  <rect x="800" y="275" width="12" height="12" rx="2" fill="#0ea5e9" stroke="#fff" strokeWidth="1.5" />

                  {/* Suite Tomas */}
                  <rect x="235" y="145" width="12" height="12" rx="2" fill="#0ea5e9" stroke="#fff" strokeWidth="1.5" />
                  <rect x="460" y="145" width="12" height="12" rx="2" fill="#0ea5e9" stroke="#fff" strokeWidth="1.5" />
                  <polygon points="466,80 478,92 454,92" fill="#ef4444" stroke="#fff" strokeWidth="1.5" />

                  {/* Estudio Tomas */}
                  <rect x="60" y="320" width="12" height="12" rx="2" fill="#0ea5e9" stroke="#fff" strokeWidth="1.5" />
                  <rect x="180" y="320" width="12" height="12" rx="2" fill="#0ea5e9" stroke="#fff" strokeWidth="1.5" />

                  {/* Quincho Tomas IP55 */}
                  <rect x="240" y="540" width="12" height="12" rx="2" fill="#0ea5e9" stroke="#fff" strokeWidth="1.5" />
                  <rect x="880" y="540" width="12" height="12" rx="2" fill="#0ea5e9" stroke="#fff" strokeWidth="1.5" />
                </g>
              )}

              {/* ======================================================== */}
              {/* CAPA 4: DOMÓTICA E IOT (ZIGBEE, PIR, ACTUADORES) */}
              {/* ======================================================== */}
              {activeLayers.domotica && (
                <g filter="url(#glow-emerald)">
                  {/* Sensores PIR (ojo de movimiento) */}
                  <circle cx="240" cy="240" r="7" fill="#10b981" stroke="#fff" strokeWidth="1.5" />
                  <circle cx="680" cy="240" r="7" fill="#10b981" stroke="#fff" strokeWidth="1.5" />
                  <circle cx="240" cy="70" r="7" fill="#10b981" stroke="#fff" strokeWidth="1.5" />

                  {/* Hub Gateway en Tablero */}
                  <rect x="840" y="130" width="18" height="18" rx="4" fill="#10b981" stroke="#fff" strokeWidth="2" />
                  
                  {/* Módulos Zigbee tras teclas */}
                  <circle cx="430" cy="460" r="6" fill="#34d399" stroke="#064e3b" strokeWidth="1.5" />
                  <circle cx="350" cy="190" r="6" fill="#34d399" stroke="#064e3b" strokeWidth="1.5" />
                </g>
              )}

              {/* REFERENCIAS / LEYENDA DENTRO DEL PLANO */}
              <g transform="translate(45, 410)" opacity="0.9">
                <rect width="160" height="165" rx="8" fill="#020617ee" stroke="#334155" strokeWidth="1" />
                <text x="12" y="22" fill="#94a3b8" fontSize="11" fontWeight="bold">SIMBOLOGÍA IRAM:</text>
                
                <circle cx="22" cy="42" r="5" fill="#f59e0b" stroke="#fff" strokeWidth="1" />
                <text x="36" y="46" fill="#cbd5e1" fontSize="10">Boca de Iluminación</text>

                <rect x="17" y="60" width="10" height="10" rx="2" fill="#0ea5e9" stroke="#fff" strokeWidth="1" />
                <text x="36" y="69" fill="#cbd5e1" fontSize="10">Toma TUG 10A</text>

                <polygon points="22,80 28,90 16,90" fill="#ef4444" stroke="#fff" strokeWidth="1" />
                <text x="36" y="88" fill="#cbd5e1" fontSize="10">Toma TUE 20A (Clima/Horno)</text>

                <circle cx="22" cy="106" r="5" fill="#10b981" stroke="#fff" strokeWidth="1" />
                <text x="36" y="110" fill="#cbd5e1" fontSize="10">Sensor PIR Domótico</text>

                <rect x="17" y="123" width="10" height="10" rx="2" fill="#10b981" stroke="#fff" strokeWidth="1" />
                <text x="36" y="132" fill="#cbd5e1" fontSize="10">Hub / Módulo Zigbee</text>

                <line x1="16" y1="148" x2="30" y2="148" stroke="#a855f7" strokeWidth="2" strokeDasharray="3 2" />
                <text x="36" y="152" fill="#cbd5e1" fontSize="10">Cañería Corrugada</text>
              </g>

            </svg>
          </motion.div>

        </div>

        {/* PANEL LATERAL DE ESPECIFICACIONES TÉCNICAS DEL AMBIENTE SELECCIONADO */}
        <div className="lg:col-span-4 p-6 bg-[#091124] border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col justify-between">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedRoom.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              
              {/* Cabecera del ambiente */}
              <div className="border-b border-slate-800 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#10b981] uppercase px-2.5 py-1 rounded bg-[#10b981]/10 border border-[#10b981]/30">
                    {selectedRoom.circuit}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    Área: <span className="text-white font-mono">{selectedRoom.area}</span>
                  </span>
                </div>
                
                <h4 className="text-2xl font-bold text-white tracking-tight">
                  {selectedRoom.name}
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {selectedRoom.description}
                </p>
              </div>

              {/* Potencia Calculada */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Icon icon="mdi:flash-circle" className="text-2xl text-amber-400" />
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Potencia Instalada Estimada
                    </span>
                    <span className="text-lg font-black text-white font-mono">
                      {selectedRoom.powerVA} VA <span className="text-xs font-normal text-slate-400">({Math.round(selectedRoom.powerVA * 0.9)} W)</span>
                    </span>
                  </div>
                </div>
                <span className="text-[10px] text-[#34d399] font-bold px-2 py-1 rounded bg-[#10b981]/15">
                  FP: 0.90
                </span>
              </div>

              {/* Desglose de Iluminación */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <Icon icon="mdi:lightbulb-on" className="text-base" />
                  Bocas de Iluminación
                </div>
                <ul className="space-y-1.5 pl-2">
                  {selectedRoom.lighting.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desglose de Tomacorrientes */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
                  <Icon icon="mdi:power-socket-eu" className="text-base" />
                  Tomacorrientes & Fuerza Motriz
                </div>
                <ul className="space-y-1.5 pl-2">
                  {selectedRoom.sockets.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Módulos Domóticos */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#10b981] uppercase tracking-wider">
                  <Icon icon="mdi:chip" className="text-base" />
                  Automatización Domótica & IoT
                </div>
                <ul className="space-y-1.5 pl-2">
                  {selectedRoom.domotics.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Selector rápido de ambientes al pie */}
          <div className="pt-6 mt-6 border-t border-slate-800">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2.5">
              Ambientes del Proyecto:
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {Object.values(ROOMS).map(r => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRoomId(r.id)}
                  className={`text-left text-xs px-2.5 py-1.5 rounded-lg truncate transition-colors ${
                    selectedRoomId === r.id
                      ? 'bg-[#10b981] text-[#020617] font-bold shadow-md'
                      : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {r.name.split(' ')[0]} {r.name.split(' ')[1] || ''}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
