'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/TranslateButton'
import Typewriter from 'typewriter-effect'

// COMPONENTE DE FONDO ANIMADO EN CANVAS PURO (Sin librerías externas)
function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const mouse = { x: width / 2, y: height / 2, radius: 180 }

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    // Crear partículas para la red
    const particles: Array<{ x: number; y: number; vx: number; vy: number; radius: number }> = []
    const particleCount = Math.floor((width * height) / 18000)

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 1.5 + 1,
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Dibujar partículas y líneas de conexión
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]
        p1.x += p1.vx
        p1.y += p1.vy

        // Rebote en bordes
        if (p1.x < 0 || p1.x > width) p1.vx *= -1
        if (p1.y < 0 || p1.y > height) p1.vy *= -1

        // Renderizado del punto
        ctx.beginPath()
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(16, 185, 129, 0.4)'
        ctx.fill()

        // Conexiones entre partículas cercanas
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(14, 165, 233, ${0.15 * (1 - dist / 120)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }

        // Reacción interactiva con el cursor
        const dxMouse = p1.x - mouse.x
        const dyMouse = p1.y - mouse.y
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)

        if (distMouse < mouse.radius) {
          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(16, 185, 129, ${0.35 * (1 - distMouse / mouse.radius)})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />
}

export default function Hero() {
  const { t } = useLanguage()

  const stringsEfecto = Array.isArray(t.hero.tagline) ? t.hero.tagline : [t.hero.tagline]

  // Variantes de animación en cascada (stagger) para el contenido
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  }

 const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.215, 0.61, 0.355, 1] as const // <--- Agrega `as const` aquí
      },
    },
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#020617] relative overflow-hidden">
      
      {/* CANVA ANIMADO Y CAPA DE GLOW LATERAL */}
      <AnimatedBackground />

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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#10b981] to-[#0ea5e9] blur-[140px] rounded-full pointer-events-none z-0"
      />

      {/* CONTENIDO PRINCIPAL CON ANIMACIÓN EN CASCADA */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl my-auto z-10 relative"
      >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
          <span className="block text-white">Xidmet Company</span>
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
        </motion.h1>

        <motion.p variants={itemVariants} className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          {t.hero.descripcion}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="#servicios"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="bg-[#10b981] text-[#020617] px-8 py-4 rounded-full font-bold
                       hover:bg-[#34d399] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-shadow"
          >
            {t.hero.btnSoluciones}
          </motion.a>

          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="border-2 border-slate-700 text-white px-8 py-4 rounded-full font-bold
                       hover:bg-slate-800/80 hover:border-slate-500 transition-colors backdrop-blur-sm"
          >
            {t.hero.btnContacto}
          </motion.a>
        </motion.div>
      </motion.div>

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