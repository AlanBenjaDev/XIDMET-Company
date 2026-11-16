'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/TranslateButton'
import Typewriter from 'typewriter-effect'
import Hero3D from '@/components/Hero3D'

export default function Hero() {
  const { t } = useLanguage()

  const stringsEfecto = Array.isArray(t.hero.tagline) ? t.hero.tagline : [t.hero.tagline]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center px-6 pt-24 pb-16 bg-[#020617] relative overflow-hidden">
      {/* ANIMACIÓN 3D INTERACTIVA WEBGL (Monograma XT a la derecha en desktop) */}
      <Hero3D />

      {/* Glow ambiental detrás del 3D (lado derecho) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 right-[8%] -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-tr from-[#10b981] to-[#0ea5e9] blur-[140px] rounded-full pointer-events-none z-0"
      />

      {/* CONTENEDOR GRID DIVIDIDO */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
        {/* COLUMNA IZQUIERDA: TEXTO Y ACCIONES */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 text-center lg:text-left"
        >
          {/* Badge técnico superior */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] text-xs font-mono font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span>Ingeniería Eléctrica &amp; Automatización</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl xl:text-7xl font-extrabold mb-6 leading-[1.08] tracking-tight"
          >
            <span className="block text-white">Xidmet Company</span>
            <span className="inline-block bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#0ea5e9] bg-clip-text text-transparent py-1 min-h-[1.25em]">
              <Typewriter
                options={{
                  strings: stringsEfecto,
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 font-medium leading-relaxed"
          >
            {t.hero.descripcion}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          >
            <motion.a
              href="#servicios"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="bg-[#10b981] text-[#020617] px-8 py-4 rounded-full font-bold text-center
                         hover:bg-[#34d399] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-shadow"
            >
              {t.hero.btnSoluciones}
            </motion.a>

            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="border-2 border-slate-700 text-white px-8 py-4 rounded-full font-bold text-center
                         hover:bg-slate-800/80 hover:border-slate-500 transition-colors backdrop-blur-sm"
            >
              {t.hero.btnContacto}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* COLUMNA DERECHA: RESERVA DE ESPACIO PARA EL MONOGRAMA 3D */}
        <div className="lg:col-span-5 h-[280px] sm:h-[340px] lg:h-[480px] pointer-events-none" />
      </div>

      {/* INDICADOR DE SCROLL ANIMADO */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce hidden md:block z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}