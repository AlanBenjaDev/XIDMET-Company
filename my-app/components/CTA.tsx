'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/TranslateButton'

export default function CTA() {
  const { t, idioma } = useLanguage()
  const isEn = idioma === 'en'

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
          {!isEn ? (
            <>
              Llevá tu espacio al <span className="text-[#34d399]">próximo nivel</span> técnico
            </>
          ) : (
            <>
              Take your space to the <span className="text-[#34d399]">next technical level</span>
            </>
          )}
        </h2>

        <p className="text-slate-400 mb-10 text-lg md:text-xl font-medium leading-relaxed">
          {isEn
            ? 'We design and execute smart electrical and automation infrastructures that deliver centralized control, energy efficiency, and regulatory safety in every installation.'
            : 'Diseñamos y ejecutamos infraestructuras eléctricas y de automatización que brindan control centralizado, eficiencia energética y seguridad normativa en cada instalación.'}
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
          {t.cta.btnCta}
        </a>
      </div>
    </motion.section>
  )
}