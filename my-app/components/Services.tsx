'use client'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

// 1. Importamos el hook de idioma
import { useLanguage } from '@/components/TranslateButton'

export default function Services() {
  // 2. Extraemos las traducciones dinámicas
  const { t } = useLanguage();

  // Estructura de servicios sincronizada dinámicamente con tu diccionario
  const services = [
    {
      title: t.servicios.s1Titulo, // "Seguridad Inteligente"
      icon: 'mdi:cctv', 
      parr: t.servicios.s1Texto // "Instalación de cámaras IP y sistemas de monitoreo..."
    },
    {
      title: t.servicios.s2Titulo, // "Domótica Residencial"
      icon: 'mdi:home-automation',
      parr: t.servicios.s2Texto // "Automatización completa de tu hogar..."
    },
    {
      title: t.servicios.s3Titulo, // "Iluminación Automatizada"
      icon: 'mdi:lightbulb-auto-outline',
      parr: t.servicios.s3Texto // "Gestión eficiente de luces interiores y exteriores..."
    },
    {
      title: t.servicios.s4Titulo, // "Accesos Automatizados"
      icon: 'mdi:gate',
      parr: t.servicios.s4Texto // "Automatización de portones y cerraduras electrónicas..."
    },
    {
      title: t.servicios.s5Titulo, // "Control Industrial & Eléctrico"
      icon: 'mdi:factory',
      parr: t.servicios.s5Texto // "Tableros eléctricos inteligentes y automatización de procesos..."
    },
  ]

  return (
    /* SECCIÓN DE FONDO: Ocupa todo el ancho sin restricciones */
    <section id="servicios" className="w-full py-24 bg-[#020617] border-t border-white/5">
      
      {/* CONTENEDOR INTERNO: Este es el que centra y limita el contenido */}
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#10b981] text-xs font-bold tracking-[0.3em] uppercase mb-2"
          >
            {t.servicios.subtitulo} {/* "Especialidades" */}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white tracking-tighter">
            {/* Manipulación simple de strings para asegurar que el punto final o color resalte bien en inglés y español */}
            {t.servicios.titulo.includes("Nuestras") ? "Nuestras " : "Our "}
            <span className="text-[#10b981]">
              {t.servicios.titulo.replace("Nuestras ", "").replace("Our ", "")}
            </span>
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

          {/* Tarjeta estática final: Desafío a medida */}
          <motion.div
            className="group border-2 border-dashed border-[#1e293b] rounded-2xl p-8 flex flex-col items-center justify-center text-center opacity-60 hover:opacity-100 transition-all hover:border-[#10b981]/50"
          >
            <Icon icon="mdi:tools" className="text-3xl text-[#10b981] mb-4" />
            <p className="text-[#10b981] font-bold uppercase tracking-widest text-xs">
              {t.servicios.s6Titulo} {/* "Desafío a medida" */}
            </p>
            <h3 className="text-white font-semibold mt-2">
              {t.servicios.s6Texto.split("? ")[0] + "?"} {/* "¿Necesitás una solución específica?" */}
            </h3>
            <p className="text-xs text-slate-500 mt-2">
              {t.servicios.s6Texto.split("? ")[1] || t.servicios.s6Texto} {/* "Personalizamos cada componente de tu sistema." */}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}