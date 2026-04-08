'use client'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Seguridad Inteligente',
    icon: 'mdi:cctv', 
    parr: 'Instalación de cámaras IP y sistemas de monitoreo avanzado con acceso remoto desde cualquier dispositivo.'
  },
  {
    title: 'Domótica Residencial',
    icon: 'mdi:home-automation',
    parr: 'Automatización completa de tu hogar: control de cortinas, sensores de movimiento y climatización inteligente.'
  },
  {
    title: 'Iluminación Automatizada',
    icon: 'mdi:lightbulb-auto-outline',
    parr: 'Gestión eficiente de luces interiores y exteriores. Escenas personalizadas y ahorro energético programado.'
  },
  {
    title: 'Accesos Automatizados',
    icon: 'mdi:gate',
    parr: 'Automatización de portones y cerraduras electrónicas con apertura mediante móvil, tag o reconocimiento.'
  },
  {
    title: 'Control Industrial & Eléctrico',
    icon: 'mdi:factory',
    parr: 'Tableros eléctricos inteligentes y automatización de procesos para empresas que buscan eficiencia y seguridad.'
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6 max-w-7xl mx-auto bg-[#020617]">
      <div className="flex flex-col items-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[#10b981] text-xs font-bold tracking-[0.3em] uppercase mb-2"
        >
          Especialidades
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white tracking-tighter">
          Nuestras <span className="text-[#10b981]">Soluciones Técnicas.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative bg-gradient-to-b from-[#0f172a] to-transparent border border-white/5 rounded-2xl p-8 overflow-hidden"
          >
            {/* Glow de fondo temático */}
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-[#10b981]/10 rounded-full blur-2xl group-hover:bg-[#0ea5e9]/20 transition-all duration-500" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-lg bg-[#020617] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#10b981]/50 transition-colors">
                <Icon icon={s.icon} className="text-3xl text-[#10b981]" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#34d399] transition-colors">
                {s.title}
              </h3>
              
              <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-200 transition-colors">
                {s.parr}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Tarjeta de "Tu Proyecto" personalizada */}
        <motion.div
          className="group border-2 border-dashed border-[#1e293b] rounded-2xl p-8 flex flex-col items-center justify-center text-center opacity-60 hover:opacity-100 transition-all hover:border-[#10b981]/50"
        >
          <Icon icon="mdi:tools" className="text-3xl text-[#10b981] mb-4" />
          <p className="text-[#10b981] font-bold uppercase tracking-widest text-xs">Desafío a medida</p>
          <h3 className="text-white font-semibold mt-2">¿Necesitás una solución específica?</h3>
          <p className="text-xs text-slate-500 mt-2">Personalizamos cada componente de tu sistema.</p>
        </motion.div>
      </div>
    </section>
  )
}
