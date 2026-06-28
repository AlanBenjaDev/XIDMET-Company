'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

import { useLanguage } from '@/components/TranslateButton'

export default function About() {
  const { t } = useLanguage();

  const objetivos = [
    { desc: t.about.meta1Texto, label: t.about.meta1Titulo, icon: "mdi:school-outline" }, 
    { desc: t.about.meta2Texto, label: t.about.meta2Titulo, icon: "mdi:target" },         
    { desc: t.about.meta3Texto, label: t.about.meta3Titulo, icon: "mdi:wifi-off" }        
  ]

  return (
    <section id="nosotros" className="w-full bg-[#020617] py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Sección de Introducción */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 max-w-3xl" // Ahora toma el ancho completo de su contenedor si no agregás una imagen al lado
          >
            <span className="text-sm uppercase tracking-widest text-[#10b981] font-bold">
              {t.about.subtitulo} 
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-white leading-tight uppercase tracking-tighter">
              {t.about.titulo} 
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed text-lg">
              {t.about.descripcion}
            </p>
          </motion.div>
        </div>

        {/* Sección de Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
            className="p-10 bg-[#0f172a]/30 border-l-4 border-[#10b981] rounded-r-2xl"
          >
            <h3 className="text-[#10b981] font-black uppercase tracking-widest text-sm mb-4">
              {t.about.misionTitulo} 
            </h3>
            <p className="text-white text-xl font-medium leading-relaxed italic">
              {t.about.misionTexto}
            </p>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
            className="p-10 bg-[#0f172a]/30 border-l-4 border-[#0ea5e9] rounded-r-2xl"
          >
            <h3 className="text-[#0ea5e9] font-black uppercase tracking-widest text-sm mb-4">
              {t.about.visionTitulo} 
            </h3>
            <p className="text-white text-xl font-medium leading-relaxed italic">
              {t.about.visionTexto}
            </p>
          </motion.div>
        </div>

        {/* Sección de Metas */}
        <div className="text-center mb-12">
            <h3 className="text-white font-bold uppercase tracking-[0.3em] text-xs">
              {t.about.metasTitulo} 
            </h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {objetivos.map((obj, i) => (
            <motion.div 
              key={i}
              whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.9 }}
              className="bg-[#0f172a] border border-[#1e293b] p-6 rounded-2xl text-center hover:border-[#10b981]/50 transition-all"
            >
              <Icon icon={obj.icon} className="text-[#10b981] text-3xl mx-auto mb-4" />
              <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">
                {obj.label}
              </div>
              <div className="text-white font-bold text-sm leading-tight">
                {obj.desc}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}