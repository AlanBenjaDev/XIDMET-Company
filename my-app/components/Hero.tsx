'use client'
import { motion } from 'framer-motion'

import { useLanguage } from '@/components/TranslateButton'

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 bg-[#020617]"> 
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
          <span className="block text-white">
            Xidmet Company
          </span>
          <span className="block bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#0ea5e9] bg-clip-text text-transparent">
             {t.hero.tagline}
          </span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
          {t.hero.descripcion}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#servicios"
            className="bg-[#10b981] text-[#020617] px-8 py-4 rounded-full font-bold
                       hover:bg-[#34d399] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all"
          >
            {t.hero.btnSoluciones}
          </a>
          
          <a
            href="#contacto"
            className="border-2 border-slate-700 text-white px-8 py-4 rounded-full font-bold
                       hover:bg-slate-800 transition-all"
          >
            {t.hero.btnContacto}
          </a>
        </div>
      </motion.div>
    </section>
  )
}