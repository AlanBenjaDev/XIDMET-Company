'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function Equipo() {
  const integrantes = [
    {
      nombre: 'Alan Andrada',
      rol: 'Director IT & CEO',
      icon: 'mdi:shield-crown-outline',
      highlight: true
    },
    {
      nombre: 'Mia Rodriguez',
      rol: 'Líder de Diseño Visual',
      icon: 'mdi:palette-outline',
      highlight: false
    },
    {
      nombre: 'Federico Sanchez',
      rol: 'Gestión de Costos',
      icon: 'mdi:finance',
      highlight: false
    },
    {
      nombre: 'Joaquin Ferreyra',
      rol: 'Pruebas de Calidad (QA)',
      icon: 'mdi:check-decagram-outline',
      highlight: false
    },
    {
      nombre: 'Ignacio Gonzales',
      rol: 'Técnico Especialista',
      icon: 'mdi:tools',
      highlight: false
    },
    {
      nombre: 'Maximo Ceballos',
      rol: 'Técnico Especialista',
      icon: 'mdi:cogs',
      highlight: false
    }
  ]

  return (
    <section id="equipo" className="py-24 bg-[#020617] relative overflow-hidden">
  
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#10b981]/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#10b981] text-[10px] font-black tracking-[0.5em] uppercase"
          >
            Capital Humano
          </motion.span>
          <h2 className="text-3xl md:text-5xl text-white font-black tracking-tighter mt-4 uppercase">
            NUESTRO <span className="text-[#10b981]">EQUIPO</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#10b981] to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrantes.map((persona, index) => (
            <motion.div
              key={persona.nombre}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group p-8 rounded-[2rem] border transition-all duration-500 ${
                persona.highlight 
                ? 'bg-[#10b981]/5 border-[#10b981]/30 shadow-[0_0_30px_rgba(16,185,129,0.05)]' 
                : 'bg-[#0f172a]/40 border-white/5 hover:border-[#10b981]/20'
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-3 rounded-2xl ${persona.highlight ? 'bg-[#10b981] text-[#020617]' : 'bg-slate-800 text-[#10b981]'}`}>
                  <Icon icon={persona.icon} className="text-2xl" />
                </div>
                <div className="text-[9px] font-bold text-slate-500 tracking-widest uppercase">
                  ID: 00{index + 1}
                </div>
              </div>

              <h3 className="text-xl font-black text-white tracking-tight mb-1 group-hover:text-[#10b981] transition-colors">
                {persona.nombre}
              </h3>
              <p className="text-[#10b981] text-[10px] font-bold tracking-[0.2em] uppercase mb-6 opacity-80">
                {persona.rol}
              </p>

              <div className="flex gap-2">
                <div className="w-full h-[1px] bg-white/5 group-hover:bg-[#10b981]/20 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}