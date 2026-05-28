'use client'
import { motion } from 'framer-motion'

import { useLanguage } from '@/components/TranslateButton'

export default function Performance() {
  const { t } = useLanguage();

  const standards = [
    { 
      label: t.performance.kpi1Titulo, // "Disponibilidad del Sistema"
      value: '99.9%', 
      desc: t.performance.kpi1Texto // "Garantizamos que tus automatizaciones..." 
    },
    { 
      label: t.performance.kpi2Titulo, // "Tiempo de Respuesta"
      value: '< 1s', 
      desc: t.performance.kpi2Texto // "Latencia mínima en el control..." 
    },
    { 
      label: t.performance.kpi3Titulo, // "Eficiencia Energética"
      value: '-35%', 
      desc: t.performance.kpi3Texto // "Reducción promedio en el consumo..." 
    },
  ]

  return (
    <section id="resultados" className="py-24 bg-[#020617] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="text-[#10b981] text-xs font-bold tracking-[0.3em] uppercase">
              Xidmet Standards
            </span>
            <div className="h-[1px] w-12 bg-[#10b981]/50" />
          </motion.div>

          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-5xl font-light mt-4 tracking-tight leading-tight"
          >
            {t.performance.titulo.split(" para ")[0]} para <br /> 
            <span className="font-bold text-[#34d399]">
              para {t.performance.titulo.split(" para ")[1] || t.performance.titulo}
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {standards.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-[#0f172a] to-transparent border border-[#1e293b] hover:border-[#10b981]/50 transition-all relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#10b981]/5 blur-3xl group-hover:bg-[#10b981]/15 transition-all" />
              
              <h3 className="text-4xl md:text-5xl font-black text-[#10b981] mb-2 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-sm font-bold tracking-widest uppercase mb-4 text-slate-200">
                {stat.label}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed tracking-wide">
                {stat.desc}
              </p>

              <div className="mt-6 h-[2px] w-full bg-white/5 overflow-hidden">
                <motion.div 
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '0%' }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-[#10b981] to-[#0ea5e9]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-[#1e293b] pt-8 gap-4"
        >
          <p className="text-slate-500 text-[10px] tracking-[0.2em] uppercase text-center md:text-left">
            {t.performance.notaFooter}
          </p>
          
          <div className="px-4 py-2 bg-[#10b981]/10 rounded-full border border-[#10b981]/20 flex items-center gap-2">
            <div className="w-2 h-2 bg-[#10b981] animate-pulse rounded-full" />
            <span className="text-[10px] text-[#10b981] uppercase tracking-widest font-bold">
              {t.cta.subtitulo} {/* "Monitoreo Activo" / "Active Monitoring" */}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}