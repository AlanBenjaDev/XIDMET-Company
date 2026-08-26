'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

import { useLanguage } from '@/components/TranslateButton'

export default function Projects() {
  const { t } = useLanguage()
  const [activeImage, setActiveImage] = useState<string | null>(null)

  const listaProyectos = [
    {
      id: 'sitae',
      title: t.proyectos.p1Subtitulo, // "SITAE"
      subtitle: t.proyectos.p1Descripcion, // "Sistema Inteligente de Timbres Autónomos Escolares"
      description: t.proyectos.p1Texto, // "Automatización de cronogramas escolares mediante hardware IoT con control web multiplataforma."
      category: t.proyectos.p1Nombre || 'AUTOMATIZACIÓN IOT',
      tags: ['Next.js', 'ESP32', 'IoT', 'Tailwind'],
      link: 'https://sitae-page.vercel.app/', 
      icon: 'mdi:bell-ring-outline',
      images: [
        
         'https://res.cloudinary.com/dfx3io0iv/image/upload/v1787766663/timbre_atqtmk.jpg',
      ]
    },
    {
      id: 'bomba-taller',
      title: t.proyectos.p2Subtitulo || 'Instalación de Bomba en Taller',
      subtitle: t.proyectos.p2Descripcion || 'Automatización e Instalación Hidroeléctrica',
      description: t.proyectos.p2Texto || 'Montaje e instalación del sistema eléctrico y de bombeo industrial para provisión de agua con protección térmica y maniobra en taller.',
      category: t.proyectos.p2Nombre || 'INSTALACIÓN INDUSTRIAL',
      tags: ['Electricidad', 'Protección Térmica', 'Automatización', 'Bombas'],
      link: '#', 
      icon: 'mdi:pump',
      images: [
        // 'https://res.cloudinary.com/tu_cloud_name/image/upload/v12345/bomba-1.jpg',
      ]
    },
    {
      id: 'guardia-electrica',
      title: t.proyectos.p3Subtitulo || 'Guardia Eléctrica',
      subtitle: t.proyectos.p3Descripcion || 'Mantenimiento Preventivo y Corrección de Emergencias',
      description: t.proyectos.p3Texto || 'Servicio de respuesta rápida ante fallas eléctricas, detección de cortocircuitos, readecuación de tableros y monitoreo continuo de líneas.',
      category: t.proyectos.p3Nombre || 'SERVICIOS TÉCNICOS',
      tags: ['Mantenimiento', 'Tableros', 'Diagnóstico', 'Urgencias 24/7'],
      link: '#', 
      icon: 'mdi:shield-flash-outline',
      images: [
        'https://res.cloudinary.com/dfx3io0iv/image/upload/v1787766617/guardia_electrica_skulst.jpg',
      ]
    },
    {
      id: 'inversor-tension',
      title: t.proyectos.p4Subtitulo || 'Inversor de Tensión',
      subtitle: t.proyectos.p4Descripcion || 'Sistema Backup de Alimentación Continuada',
      description: t.proyectos.p4Texto || 'Implementación e integración de inversores de energía para respaldo en cortes de suministro, garantizando operación crítica sin interrupciones.',
      category: t.proyectos.p4Nombre || 'ENERGÍA Y RESPALDO',
      tags: ['Energía Solar', 'Inversores', 'Baterías', 'Suministro Crítico'],
      link: '#', 
      icon: 'mdi:lightning-bolt-outline',
      images: [
        'https://res.cloudinary.com/dfx3io0iv/image/upload/v1787766634/inversor_tension_ov5s73.jpg',
      ]
    },
    {
      id: 'tanque-plc-boyas',
      title: t.proyectos.p5Subtitulo || 'Sistema de Tanque Automático con PLC y Boyas',
      subtitle: t.proyectos.p5Descripcion || 'Control de Nivel y Automatización de Llenado',
      description: t.proyectos.p5Texto || 'Lógica programada en PLC acoplada a boyas de nivel electromecánicas para la gestión automatizada y segura del llenado de tanques de reserva.',
      category: t.proyectos.p5Nombre || 'AUTOMATIZACIÓN Y PLC',
      tags: ['PLC', 'Lógica de Control', 'Sensores de Nivel', 'Automatización'],
      link: '#', 
      icon: 'mdi:water-boiler',
      images: [
        'https://res.cloudinary.com/dfx3io0iv/image/upload/v1787766646/plc_ibhkhu.jpg',
      ]
    },
  ]

  return (
    <section id="resultados" className="w-full py-24 bg-[#020617] border-t border-white/5 relative">
      
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-start mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[#10b981] text-xs font-bold tracking-[0.3em] uppercase mb-2"
          >
            {t.proyectos.subtitulo} 
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tighter"
          >
            {t.proyectos.titulo?.replace("Éxito.", "")}
            <span className="text-[#0ea5e9]">
              {t.proyectos.titulo?.includes("Éxito.") ? "Éxito." : ""}
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {listaProyectos.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-[#0f172a]/50 border border-[#1e293b] rounded-3xl p-8 hover:border-[#10b981]/40 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                 <Icon icon={p.icon} className="text-9xl text-white" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#10b981]/10 text-[#10b981]">
                    <Icon icon={p.icon} className="text-2xl" />
                  </div>
                  <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase">
                    {p.category} 
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#10b981] transition-colors">
                  {p.title}
                </h3>
                <p className="text-[#0ea5e9] text-sm font-semibold mb-4 uppercase tracking-wide">
                  {p.subtitle}
                </p>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {p.description}
                </p>

                {/* MINI GALERÍA DE IMÁGENES */}
                {p.images && p.images.length > 0 && (
                  <div className="mb-6">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                      Galería de Fotos
                    </span>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                      {p.images.map((imgUrl, imgIdx) => (
                        <button
                          key={imgIdx}
                          onClick={() => setActiveImage(imgUrl)}
                          className="relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border border-slate-700 hover:border-[#10b981] transition-all group/img focus:outline-none"
                        >
                          <img 
                            src={imgUrl} 
                            alt={`${p.title} preview ${imgIdx + 1}`} 
                            className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold px-2 py-1 rounded bg-[#1e293b] text-slate-300 uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BOTÓN SOLO PARA SITAE */}
                {p.id === 'sitae' && p.link !== '#' && (
                  <a 
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#10b981] font-bold text-xs uppercase tracking-widest group/btn w-fit"
                  >
                    {t.proyectos.btnExplorar}
                    <Icon icon="mdi:arrow-right" className="group-hover/btn:translate-x-2 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL DE VISUALIZACIÓN DE IMÁGENES */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl"
            >
              <img 
                src={activeImage} 
                alt="Vista ampliada del proyecto" 
                className="w-full h-full object-contain max-h-[85vh]"
              />
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 bg-slate-950/80 text-white p-2 rounded-full border border-slate-700 hover:bg-slate-800 transition-colors"
              >
                <Icon icon="mdi:close" className="text-xl" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}