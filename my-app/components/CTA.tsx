'use client'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative py-24 text-center overflow-hidden bg-[#020617]"
    >
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-[#10b981]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
          Llevá tu espacio al <span className="text-[#34d399]">próximo nivel</span> técnico
        </h2>

        <p className="text-slate-400 mb-10 text-lg md:text-xl font-medium">
          Diseñamos infraestructuras inteligentes que garantizan control total, 
          eficiencia energética y seguridad máxima en cada conexión.
        </p>

        <a
          href="#contacto"
          className="inline-flex items-center justify-center
                     bg-[#10b981] text-[#020617]
                     px-12 py-5 rounded-full
                     font-black text-lg uppercase tracking-wider
                     hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]
                     transition-all duration-300"
        >
          Solicitar Consultoría Técnica
        </a>
      </div>
    </motion.section>
  )
}
