'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/TranslateButton'

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#020617] relative"> 
      
      {/* Cambiado a animate e initial directo para que cargue fluido de entrada */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl my-auto" // Usa my-auto para empujar el contenido al centro de forma limpia
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
          <span className="block text-white">
            Xidmet Company
          </span>
          <span className="block bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#0ea5e9] bg-clip-text text-transparent py-1">
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

      {/* INDICADOR DE SCROLL: Rompe el espacio vacío negro del fondo y avisa que hay más abajo */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}