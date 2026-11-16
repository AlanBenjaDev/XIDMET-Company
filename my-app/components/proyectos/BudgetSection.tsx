'use client'

import React, { useState } from 'react'
import { Icon } from '@iconify/react'

interface BudgetItem {
  description: string
  unit: string
  quantity: number
  unitPriceARS: number
  subtotalARS: number
}

interface BudgetCategory {
  id: string
  name: string
  icon: string
  items: BudgetItem[]
}

const BUDGET_DATA: BudgetCategory[] = [
  {
    id: 'materiales-base',
    name: '1. Materiales de Canalización, Cajas y Conducción Eléctrica',
    icon: 'mdi:pipe',
    items: [
      { description: 'Caño corrugado blanco ignífugo semipesado normalizado IRAM 3/4" (Rollos 25m)', unit: 'rollo', quantity: 8, unitPriceARS: 38500, subtotalARS: 308000 },
      { description: 'Caño corrugado blanco ignífugo semipesado normalizado IRAM 7/8" y 1" (Rollos 25m)', unit: 'rollo', quantity: 5, unitPriceARS: 46000, subtotalARS: 230000 },
      { description: 'Cajas rectangulares 10x5 de chapa pesada con tuerca a tierra soldada', unit: 'unidad', quantity: 48, unitPriceARS: 3200, subtotalARS: 153600 },
      { description: 'Cajas octogonales grandes de chapa pesada para bocas de techo', unit: 'unidad', quantity: 26, unitPriceARS: 3800, subtotalARS: 98800 },
      { description: 'Cajas de paso y derivación 15x15 y 20x20 con tapa atornillada', unit: 'unidad', quantity: 8, unitPriceARS: 7500, subtotalARS: 60000 },
      { description: 'Conectores metálicos, curvas a 90° y grampas omega de fijación', unit: 'global', quantity: 1, unitPriceARS: 85000, subtotalARS: 85000 }
    ]
  },
  {
    id: 'conductores',
    name: '2. Conductores de Cobre Normalizados IRAM NM 247-3',
    icon: 'mdi:cable-data',
    items: [
      { description: 'Cable unipolar cobre 1.5 mm² IRAM (Retornos iluminación: Blanco/Marrón) - 100m', unit: 'rollo', quantity: 4, unitPriceARS: 48000, subtotalARS: 192000 },
      { description: 'Cable unipolar cobre 2.5 mm² IRAM (Tomas TUG: Celeste, Marrón, Negro) - 100m', unit: 'rollo', quantity: 7, unitPriceARS: 74000, subtotalARS: 518000 },
      { description: 'Cable unipolar cobre 4.0 mm² IRAM (Líneas TUE Clima y Horno) - 100m', unit: 'rollo', quantity: 4, unitPriceARS: 115000, subtotalARS: 460000 },
      { description: 'Cable unipolar cobre 6.0 mm² IRAM (Alimentación tableros y líneas troncales) - 100m', unit: 'rollo', quantity: 2, unitPriceARS: 168000, subtotalARS: 336000 },
      { description: 'Cable unipolar de protección PE Verde-Amarillo 2.5 y 4.0 mm² - 100m', unit: 'rollo', quantity: 5, unitPriceARS: 82000, subtotalARS: 410000 },
      { description: 'Borneras de conexión rápida resorte WAGO y cintas autosoldables 3M', unit: 'pack', quantity: 6, unitPriceARS: 19500, subtotalARS: 117000 }
    ]
  },
  {
    id: 'tableros',
    name: '3. Tableros, Protecciones Eléctricas y Puesta a Tierra',
    icon: 'mdi:shield-flash',
    items: [
      { description: 'Gabinete DIN IP65 estanco para 36 módulos con puerta transparente', unit: 'unidad', quantity: 1, unitPriceARS: 135000, subtotalARS: 135000 },
      { description: 'Interruptor Termomagnético Tetrapolar 4x32A Curva C (6kA Schneider / Siemens)', unit: 'unidad', quantity: 1, unitPriceARS: 89000, subtotalARS: 89000 },
      { description: 'Disyuntor Diferencial Tetrapolar 4x40A 30mA Clase AC (Schneider / Sica)', unit: 'unidad', quantity: 1, unitPriceARS: 96000, subtotalARS: 96000 },
      { description: 'Disyuntor Diferencial Bipolar 2x25A 30mA para planta alta', unit: 'unidad', quantity: 1, unitPriceARS: 64000, subtotalARS: 64000 },
      { description: 'Protector Integral de Tensión Digital Trifásico regulable (Bajeza / Alza / Rearme)', unit: 'unidad', quantity: 1, unitPriceARS: 125000, subtotalARS: 125000 },
      { description: 'Descargador de Sobretensiones Transitorias DPS Clase II 40kA tetrapolar', unit: 'unidad', quantity: 1, unitPriceARS: 145000, subtotalARS: 145000 },
      { description: 'Interruptores Termomagnéticos Bipolares 10A, 16A y 20A (Circuitos C1 a C8)', unit: 'unidad', quantity: 8, unitPriceARS: 21000, subtotalARS: 168000 },
      { description: 'Jabalina cobreada 5/8" x 1.50m con caja de inspección de PVC y morceto de bronce', unit: 'kit', quantity: 1, unitPriceARS: 58000, subtotalARS: 58000 },
      { description: 'Peines de conexión aislados bipolares y tetrapolares + borneras escalonadas', unit: 'kit', quantity: 1, unitPriceARS: 72000, subtotalARS: 72000 }
    ]
  },
  {
    id: 'modulos',
    name: '4. Llaves de Luz, Tomacorrientes y Puntos Terminales',
    icon: 'mdi:power-socket-eu',
    items: [
      { description: 'Bastidores y placas de terminación de diseño (Línea Jeluz Platinum / Cambio)', unit: 'unidad', quantity: 48, unitPriceARS: 5200, subtotalARS: 249600 },
      { description: 'Módulos tomacorrientes 10A dobles con toma a tierra normalizados', unit: 'unidad', quantity: 38, unitPriceARS: 4400, subtotalARS: 167200 },
      { description: 'Módulos tomacorrientes 20A especiales (patas gruesas para hornos y A/A)', unit: 'unidad', quantity: 8, unitPriceARS: 6800, subtotalARS: 54400 },
      { description: 'Módulos interruptores de un punto, combinación y pulsadores', unit: 'unidad', quantity: 24, unitPriceARS: 3800, subtotalARS: 91200 },
      { description: 'Cajas estancas IP55 con tapa rebatible hermética para galería y exteriores', unit: 'unidad', quantity: 6, unitPriceARS: 14500, subtotalARS: 87000 }
    ]
  },
  {
    id: 'domotica',
    name: '5. Hardware Domótico, Redes, Portón Automático y Seguridad Sem Suri',
    icon: 'mdi:router-wireless',
    items: [
      { description: 'Hub Gateway Zigbee 3.0 con conexión Ethernet cableada Gigabit y Wi-Fi', unit: 'unidad', quantity: 1, unitPriceARS: 120000, subtotalARS: 120000 },
      { description: 'Kit de Motorreductor para Portón Automático (Cremallera de acero, módulo RF y fotocélulas)', unit: 'kit', quantity: 1, unitPriceARS: 380000, subtotalARS: 380000 },
      { description: 'Central de Alarma Sem Suri con batería de respaldo, comunicador IP y sirena exterior', unit: 'kit', quantity: 1, unitPriceARS: 290000, subtotalARS: 290000 },
      { description: 'Bobina de Cable UTP Cat6 100% cobre para cámaras y Wi-Fi (305m) sin pérdidas', unit: 'bobina', quantity: 1, unitPriceARS: 175000, subtotalARS: 175000 },
      { description: 'Micromódulos inteligentes Zigbee 3.0 tras tecla (doble canal con neutro)', unit: 'unidad', quantity: 10, unitPriceARS: 24500, subtotalARS: 245000 },
      { description: 'Sensores de movimiento inalámbricos PIR Zigbee (antimascota y sin falsos disparos)', unit: 'unidad', quantity: 4, unitPriceARS: 22000, subtotalARS: 88000 },
      { description: 'Relés de potencia en riel DIN para automatización de climatización y bombas', unit: 'unidad', quantity: 2, unitPriceARS: 38000, subtotalARS: 76000 },
      { description: 'Medidor de consumo energético trifásico en riel DIN con telemetría en tiempo real', unit: 'unidad', quantity: 1, unitPriceARS: 145000, subtotalARS: 145000 }
    ]
  },
  {
    id: 'mano-de-obra',
    name: '6. Mano de Obra Especializada, Redes y Montaje de Seguridad',
    icon: 'mdi:tools',
    items: [
      { description: 'Replanteo, relevamiento de áreas y canalizaciones embutidas', unit: 'global', quantity: 1, unitPriceARS: 580000, subtotalARS: 580000 },
      { description: 'Trazado y tendido de tuberías independientes hacia zona de portón y datos UTP', unit: 'global', quantity: 1, unitPriceARS: 340000, subtotalARS: 340000 },
      { description: 'Montaje electromecánico, fijación de motor y calibración de portón automático', unit: 'global', quantity: 1, unitPriceARS: 260000, subtotalARS: 260000 },
      { description: 'Enhebrado de cables, separación física de 220V para evitar interferencias y peinado UTP', unit: 'global', quantity: 1, unitPriceARS: 490000, subtotalARS: 490000 },
      { description: 'Armado, conexión y rotulado de tableros eléctricos, puesta a tierra y térmicas', unit: 'global', quantity: 1, unitPriceARS: 420000, subtotalARS: 420000 },
      { description: 'Instalación y configuración de alarma Sem Suri, sensores PIR, Wi-Fi y app móvil', unit: 'global', quantity: 1, unitPriceARS: 380000, subtotalARS: 380000 }
    ]
  }
]

interface AddonOption {
  id: string
  name: string
  desc: string
  priceARS: number
  selected: boolean
}

const INITIAL_ADDONS: AddonOption[] = [
  {
    id: 'solar-backup',
    name: 'Sistema Inversor Híbrido 5kW + Batería Litio 48V (Respaldo en Cortes)',
    desc: 'Mantiene operativos circuitos críticos (heladera, luces, wifi, cámaras y bombas) ante apagones de la red.',
    priceARS: 3850000,
    selected: false
  },
  {
    id: 'cerradura-smart',
    name: 'Cerradura Biométrica Inteligente Wi-Fi / Zigbee con Huella y Clave',
    desc: 'Apertura remota para visitas desde el celular, historial de entradas y cierre automático de pestillos.',
    priceARS: 380000,
    selected: false
  },
  {
    id: 'camaras-nvr',
    name: 'Kit de 4 Cámaras IP Hikvision / Dahua Full HD con NVR y disco de 2TB',
    desc: 'Grabación 24/7 sin internet, visión nocturna infrarroja y visualización sincronizada en la misma app.',
    priceARS: 720000,
    selected: false
  }
]

export default function BudgetSection() {
  const [currency, setCurrency] = useState<'ARS' | 'USD'>('ARS')
  const [addons, setAddons] = useState<AddonOption[]>(INITIAL_ADDONS)
  const [expandedCategory, setExpandedCategory] = useState<string>('materiales-base')

  // Tipo de cambio referencial para USD
  const TASA_USD = 1250

  const toggleAddon = (id: string) => {
    setAddons(prev => prev.map(a => a.id === id ? { ...a, selected: !a.selected } : a))
  }

  // Cálculos totales
  const baseTotalARS = BUDGET_DATA.reduce((acc, cat) => {
    const catTotal = cat.items.reduce((cAcc, item) => cAcc + item.subtotalARS, 0)
    return acc + catTotal
  }, 0)

  const addonsTotalARS = addons.filter(a => a.selected).reduce((acc, a) => acc + a.priceARS, 0)
  const finalTotalARS = baseTotalARS + addonsTotalARS

  const formatPrice = (valARS: number) => {
    if (currency === 'USD') {
      const valUSD = Math.round(valARS / TASA_USD)
      return `US$ ${valUSD.toLocaleString('en-US')}`
    }
    return `$ ${valARS.toLocaleString('es-AR')}`
  }

  return (
    <div className="w-full bg-[#0a0f1d] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
      
      {/* HEADER DEL PRESUPUESTO */}
      <div className="bg-[#0f172a] border-b border-slate-800 p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#10b981]">
            <Icon icon="mdi:calculator-variant" className="text-2xl" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg leading-tight flex items-center gap-2">
              Presupuesto Detallado & Cómputo de Materiales
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#10b981]/20 text-[#34d399] font-mono font-bold uppercase tracking-wider">
                Llave en Mano
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Desglose transparente por rubros: materiales normalizados, tableros, domótica y mano de obra certificada.
            </p>
          </div>
        </div>

        {/* SELECTOR DE MONEDA */}
        <div className="flex items-center bg-slate-900 border border-slate-700/80 rounded-xl p-1">
          <button
            onClick={() => setCurrency('ARS')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              currency === 'ARS'
                ? 'bg-[#10b981] text-[#020617] shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ARS ($)
          </button>
          <button
            onClick={() => setCurrency('USD')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              currency === 'USD'
                ? 'bg-[#10b981] text-[#020617] shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            USD (US$)
          </button>
        </div>
      </div>

      {/* TARJETA DESTACADA DEL MONTO TOTAL */}
      <div className="p-6 bg-gradient-to-r from-slate-950 via-[#06182c] to-slate-950 border-b border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono font-bold text-[#34d399] uppercase tracking-widest block mb-1">
            Presupuesto Total Estimado (Proyecto Completo)
          </span>
          <div className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight">
            {formatPrice(finalTotalARS)}
          </div>
          <p className="text-xs text-slate-400 mt-2">
            * Incluye cómputo completo de cañerías, cableado, armado de tableros, domótica, ensayos y garantía escrita por 12 meses.
          </p>
        </div>

        {/* Cronograma de Pago en 3 Hitos */}
        <div className="grid grid-cols-3 gap-2 text-center shrink-0 w-full md:w-auto">
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">1. Anticipo</span>
            <span className="text-sm font-black text-[#10b981] font-mono block">30%</span>
            <span className="text-[10px] text-slate-400">Acopio mat.</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">2. Avance</span>
            <span className="text-sm font-black text-sky-400 font-mono block">40%</span>
            <span className="text-[10px] text-slate-400">Caños y cables</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">3. Entrega</span>
            <span className="text-sm font-black text-amber-400 font-mono block">30%</span>
            <span className="text-[10px] text-slate-400">Conforme obra</span>
          </div>
        </div>
      </div>

      {/* DESGLOSE POR CATEGORÍAS ACORDEÓN */}
      <div className="p-6 bg-[#030712] space-y-4">
        <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2">
          Desglose Técnico de Materiales y Rubros (Hacé clic para ver el detalle)
        </h4>

        {BUDGET_DATA.map((cat) => {
          const catTotal = cat.items.reduce((acc, curr) => acc + curr.subtotalARS, 0)
          const isExpanded = expandedCategory === cat.id

          return (
            <div 
              key={cat.id} 
              className="border border-slate-800 rounded-2xl bg-slate-900/50 overflow-hidden transition-all"
            >
              <button
                onClick={() => setExpandedCategory(isExpanded ? '' : cat.id)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-800 text-[#10b981] border border-slate-700/60">
                    <Icon icon={cat.icon} className="text-xl" />
                  </div>
                  <span className="text-sm font-bold text-white">{cat.name}</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono font-bold text-[#34d399]">
                    {formatPrice(catTotal)}
                  </span>
                  <Icon 
                    icon="mdi:chevron-down" 
                    className={`text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                  />
                </div>
              </button>

              {isExpanded && (
                <div className="p-4 border-t border-slate-800/80 bg-slate-950/60 overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse font-sans">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 font-mono text-[10px] uppercase">
                        <th className="py-2 px-3">Descripción Técnica</th>
                        <th className="py-2 px-3 text-center">Unidad</th>
                        <th className="py-2 px-3 text-center">Cant.</th>
                        <th className="py-2 px-3 text-right">Precio Unitario</th>
                        <th className="py-2 px-3 text-right">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/40">
                      {cat.items.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                          <td className="py-2.5 px-3 text-slate-200">{item.description}</td>
                          <td className="py-2.5 px-3 text-center text-slate-400 font-mono text-[11px]">{item.unit}</td>
                          <td className="py-2.5 px-3 text-center text-white font-mono font-bold">{item.quantity}</td>
                          <td className="py-2.5 px-3 text-right text-slate-400 font-mono">{formatPrice(item.unitPriceARS)}</td>
                          <td className="py-2.5 px-3 text-right font-mono font-bold text-[#10b981]">{formatPrice(item.subtotalARS)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* MÓDULOS OPCIONALES / ADICIONALES RECOMENDADOS */}
      <div className="p-6 bg-[#091124] border-t border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <Icon icon="mdi:plus-circle-multiple-outline" className="text-xl text-sky-400" />
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">
            Mejoras & Módulos Adicionales Opcionales (Personalizá tu cotización)
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {addons.map((addon) => (
            <div
              key={addon.id}
              onClick={() => toggleAddon(addon.id)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                addon.selected
                  ? 'bg-[#10b981]/10 border-[#10b981] shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                    addon.selected ? 'bg-[#10b981] border-[#10b981] text-[#020617]' : 'border-slate-600'
                  }`}>
                    {addon.selected && <Icon icon="mdi:check" className="text-sm font-bold" />}
                  </div>
                  <span className="text-xs font-mono font-bold text-white">
                    +{formatPrice(addon.priceARS)}
                  </span>
                </div>
                <h5 className="text-xs font-bold text-white leading-tight mb-1">
                  {addon.name}
                </h5>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {addon.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PIE CON BOTÓN DE CONTACTO WHATSAPP PARA ESTE PROYECTO */}
      <div className="p-6 bg-[#030712] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-white block">
            ¿Querés una cotización personalizada para tu casa o terreno?
          </span>
          <span className="text-xs text-slate-400">
            Realizamos visitas técnicas sin cargo en Tanti, Villa Carlos Paz y alrededores.
          </span>
        </div>

        <a
          href={`https://wa.me/5493541628322?text=${encodeURIComponent(
            `Hola Xidmet Company, estuve viendo el proyecto "Instalación Electrica y Domotica domiciliaria" en la web y me interesa cotizar una instalación similar para mi propiedad.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#10b981] text-[#020617] px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#34d399] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all flex items-center gap-2 shrink-0"
        >
          <Icon icon="mdi:whatsapp" className="text-lg" />
          Solicitar Cotización por WhatsApp
        </a>
      </div>

    </div>
  )
}
