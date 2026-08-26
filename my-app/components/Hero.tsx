'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/TranslateButton'
import Typewriter from 'typewriter-effect'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function Hero() {
  const { t } = useLanguage();
  const [init, setInit] = useState(false);

  const stringsEfecto = Array.isArray(t.hero.tagline) ? t.hero.tagline : [t.hero.tagline];

  // Inicializamos el motor de partículas una sola vez al montar el componente
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#020617] relative overflow-hidden"> 
      
      {/* FONDO ANIMADO CON PARTICULAS (Solo se renderiza al cargar el motor) */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          options={{
            fullScreen: { enable: false },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: 'grab',
                },
              },
              modes: {
                grab: {
                  distance: 140,
                  links: { opacity: 0.5 },
                },
              },
            },
            particles: {
              color: { value: '#10b981' },
              links: {
                color: '#0ea5e9',
                distance: 150,
                enable: true,
                opacity: 0.15,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1.2,
                direction: 'none',
                outModes: { default: 'bounce' },
              },
              number: {
                density: { enable: true, width: 800, height: 800 },
                value: 65,
              },
              opacity: { value: 0.3 },
              shape: { type: 'circle' },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* GLOW / RESPLANDOR GRADIENTE DE FONDO */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#10b981]/15 to-[#0ea5e9]/15 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* CONTENIDO PRINCIPAL */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl my-auto z-10 relative"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
          <span className="block text-white">
            Xidmet Company
          </span>
          <span className="inline-block bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#0ea5e9] bg-clip-text text-transparent py-1">
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
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
          {t.hero.descripcion}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#servicios"
            className="bg-[#10b981] text-[#020617] px-8 py-4 rounded-full font-bold
                       hover:bg-[#34d399] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all"
          >
            {t.hero.btnSoluciones}
          </a>
          
          <a
            href="#contacto"
            className="border-2 border-slate-700 text-white px-8 py-4 rounded-full font-bold
                       hover:bg-slate-800/80 hover:border-slate-500 transition-all backdrop-blur-sm"
          >
            {t.hero.btnContacto}
          </a>
        </div>
      </motion.div>

      {/* INDICADOR DE SCROLL */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce hidden md:block z-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}