'use client'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/TranslateButton'

export default function Services() {
  const { t, idioma } = useLanguage()
  const isEn = idioma === 'en'

  const services = [
    {
      title: t.servicios.s1Titulo, // "Seguridad Inteligente"
      icon: 'mdi:cctv',
      parr: isEn
        ? 'Installation of IP cameras, smart alarm panels, infrared motion detectors, and remote monitoring with instant mobile alerts.'
        : 'Instalación de cámaras IP, centrales de alarma, detectores infrarrojos de movimiento y monitoreo remoto con alertas instantáneas al celular.',
    },
    {
      title: t.servicios.s2Titulo, // "Domótica Residencial"
      icon: 'mdi:home-automation',
      parr: isEn
        ? 'Comprehensive home automation: motorized curtains, climate control, and custom everyday scenes managed locally or from your phone.'
        : 'Automatización integral del hogar: control de cortinas, climatización y escenas cotidianas personalizadas con mando local o desde el celular.',
    },
    {
      title: t.servicios.s3Titulo, // "Iluminación Automatizada"
      icon: 'mdi:lightbulb-auto-outline',
      parr: isEn
        ? 'Efficient management of indoor and outdoor lighting with scheduled routines, dimmers, and energy-saving automation.'
        : 'Gestión eficiente de luces interiores y exteriores mediante horarios programados, dimerización y encendido automático para ahorro energético.',
    },
    {
      title: t.servicios.s4Titulo, // "Accesos Automatizados"
      icon: 'mdi:gate',
      parr: isEn
        ? 'Automation of sliding/swing gates and electronic locks operated via mobile app, RFID tag, remote control, or numeric keypad.'
        : 'Automatización de portones y cerraduras electrónicas con apertura mediante celular, tag, control remoto o teclado numérico.',
    },
    {
      title: t.servicios.s5Titulo, // "Control Industrial & Eléctrico"
      icon: 'mdi:factory',
      parr: isEn
        ? 'Smart electrical panels, PLC logic, level sensors, and process automation for workshops and businesses seeking operational reliability.'
        : 'Tableros eléctricos inteligentes, lógica con PLC, sensores de nivel y automatización de procesos para talleres y empresas.',
    },
    {
      title: isEn ? 'Electrical Installations' : 'Instalaciones Eléctricas',
      icon: 'mdi:flash-outline',
      parr: isEn
        ? 'Design, execution, and certification of residential and commercial electrical systems, DIN panels, and grounding under AEA 90364.'
        : 'Diseño, montaje y certificación de instalaciones eléctricas domiciliarias y comerciales, tableros DIN y puesta a tierra bajo normativa AEA 90364.',
    },
  ]

  return (
    <section id="servicios" className="w-full py-24 bg-[#020617] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#10b981] text-xs font-bold tracking-[0.3em] uppercase mb-2"
          >
            {t.servicios.subtitulo}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white tracking-tighter">
            {t.servicios.titulo.includes('Nuestras') ? 'Nuestras ' : 'Our '}
            <span className="text-[#10b981]">
              {t.servicios.titulo.replace('Nuestras ', '').replace('Our ', '')}
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
        </div>
      </div>
    </section>
  )
}