'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

import { useLanguage } from '@/components/TranslateButton'

export default function Projects() {
  const { t } = useLanguage();

  const listaProyectos = [
    {
      id: 'sitae',
      title: t.proyectos.p1Subtitulo, // "SITAE"
      subtitle: t.proyectos.p1Descripcion, // "Sistema Inteligente de Timbres Autónomos Escolares"
      description: t.proyectos.p1Texto, // "Automatización de cronogramas escolares mediante hardware IoT con control web multiplataforma."
      tags: ['Next.js', 'ESP32', 'IoT', 'Tailwind'],
      link: 'https://sitae-page.vercel.app/', 
      icon: 'mdi:bell-ring-outline'
    },
  ]

  return (
    <section id="resultados" className="w-full py-24 bg-[#020617] border-t border-white/5">
      
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
            {t.proyectos.titulo.replace("Éxito.", "")}
            <span className="text-[#0ea5e9]">
              {t.proyectos.titulo.includes("Éxito.") ? "Éxito." : "Success Stories."}
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
              className="group relative bg-[#0f172a]/50 border border-[#1e293b] rounded-3xl p-8 hover:border-[#10b981]/40 transition-all duration-500 overflow-hidden"
            >
              
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Icon icon={p.icon} className="text-9xl text-white" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#10b981]/10 text-[#10b981]">
                    <Icon icon={p.icon} className="text-2xl" />
                  </div>
                  <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase">
                    {t.proyectos.p1Nombre} 
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#10b981] transition-colors">
                  {p.title}
                </h3>
                <p className="text-[#0ea5e9] text-sm font-semibold mb-4 uppercase tracking-wide">
                  {p.subtitle}
                </p>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold px-2 py-1 rounded bg-[#1e293b] text-slate-300 uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#10b981] font-bold text-xs uppercase tracking-widest group/btn w-fit"
                >
                  {t.proyectos.btnExplorar} {/* "Explorar Proyecto" / "Explore Project" */}
                  <Icon icon="mdi:arrow-right" className="group-hover/btn:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}