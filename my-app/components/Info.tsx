'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useLanguage } from '@/components/TranslateButton'

export default function About() {
  const { t, idioma } = useLanguage()
  const isEn = idioma === 'en'

  const objetivos = [
    {
      label: t.about.meta1Titulo || (isEn ? 'REACH' : 'ALCANCE'),
      desc:
        t.about.meta1Texto ||
        (isEn
          ? 'Deploy our automation and electrical systems across the province.'
          : 'Instalar nuestros sistemas en gran parte de la provincia.'),
      icon: 'mdi:map-marker-radius-outline',
    },
    {
      label: isEn ? 'STANDARDIZATION' : 'ESTANDARIZACIÓN',
      desc: isEn
        ? 'Execute certified installations under AEA safety regulations.'
        : 'Garantizar instalaciones seguras y certificadas bajo normativa AEA.',
      icon: 'mdi:shield-check-outline',
    },
    {
      label: isEn ? 'USABILITY' : 'USABILIDAD',
      desc:
        t.about.meta3Texto ||
        (isEn
          ? 'Design intuitive systems focused on everyday user experience.'
          : 'Diseñar sistemas altamente enfocados en la experiencia de usuario.'),
      icon: 'mdi:gesture-tap-button',
    },
    {
      label: isEn ? 'ACCESSIBILITY' : 'ACCESIBILIDAD',
      desc: isEn
        ? 'Design systems so simple that they feel intuitive for older adults.'
        : 'Diseñar sistemas tan simples que resulten intuitivos para adultos mayores.',
      icon: 'mdi:account-heart-outline',
    },
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
            className="md:col-span-2 max-w-3xl"
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
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
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
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
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

        {/* Sección de Metas Estratégicas (4 columnas equilibradas) */}
        <div className="text-center mb-12">
          <h3 className="text-white font-bold uppercase tracking-[0.3em] text-xs">
            {t.about.metasTitulo}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {objetivos.map((obj, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-[#0f172a] border border-[#1e293b] p-7 rounded-2xl text-center hover:border-[#10b981]/50 transition-all flex flex-col items-center justify-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center mb-4">
                <Icon icon={obj.icon} className="text-[#10b981] text-2xl" />
              </div>
              <div className="text-[11px] text-slate-400 font-black uppercase tracking-widest mb-2">
                {obj.label}
              </div>
              <div className="text-white font-semibold text-sm leading-snug">
                {obj.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}