'use client'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function About() {
  const objetivos = [
    { desc: "Instalar en 3 colegios en 6 meses", label: "Alcance", icon: "mdi:school-outline" },
    { desc: "100% efectividad en alertas", label: "Precisión", icon: "mdi:target" },
    { desc: "98% disponibilidad offline", label: "Conectividad", icon: "mdi:wifi-off" },
    { desc: "0 tareas manuales", label: "Productividad", icon: "mdi:clock-fast" },
  ]

  return (
    <section id="nosotros" className="w-full bg-[#020617] py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* PARTE 1: INTRODUCCIÓN Y CÓDIGO */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm uppercase tracking-widest text-[#10b981] font-bold">
              Nuestra Ingeniería
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-white leading-tight uppercase tracking-tighter">
              Soluciones inteligentes para desafíos reales
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed text-lg">
              En <span className="text-[#34d399] font-bold">Xidmet Company</span> transformamos espacios convencionales en infraestructuras autónomas. Fusionamos electrónica avanzada, seguridad de vanguardia y sistemas eléctricos robustos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-[#10b981]/10 rounded-3xl blur-3xl" />
            <div className="relative bg-[#0f172a]/80 border border-[#1e293b] rounded-2xl p-8 font-mono text-sm shadow-2xl">
              <pre className="text-[#34d399] leading-relaxed whitespace-pre-wrap">
{`// Lógica de Control Xidmet
const SITAE = {
  status: "OPTIMIZED",
  location: "Córdoba, Argentina",
  safeMode: true,
  energySaving: "MAX",
  mission: "AUTOMATION_TOTAL"
};`}
              </pre>
            </div>
          </motion.div>
        </div>

        {/* PARTE 2: MISIÓN Y VISIÓN (Layout Industrial) */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
            className="p-10 bg-[#0f172a]/30 border-l-4 border-[#10b981] rounded-r-2xl"
          >
            <h3 className="text-[#10b981] font-black uppercase tracking-widest text-sm mb-4">Misión</h3>
            <p className="text-white text-xl font-medium leading-relaxed italic">
              "Facilitar la gestión del tiempo mediante tecnología confiable, eliminando procesos manuales para potenciar la labor pedagógica."
            </p>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}
            className="p-10 bg-[#0f172a]/30 border-l-4 border-[#0ea5e9] rounded-r-2xl"
          >
            <h3 className="text-[#0ea5e9] font-black uppercase tracking-widest text-sm mb-4">Visión</h3>
            <p className="text-white text-xl font-medium leading-relaxed italic">
              "Convertir nuestros sistemas en el estándar de conectividad y automatización escolar a nivel regional y provincial."
            </p>
          </motion.div>
        </div>

        {/* PARTE 3: OBJETIVOS (Grid de Indicadores) */}
        <div className="text-center mb-12">
            <h3 className="text-white font-bold uppercase tracking-[0.3em] text-xs">Metas Estratégicas</h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {objetivos.map((obj, i) => (
            <motion.div 
              key={i}
              whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.9 }}
              className="bg-[#0f172a] border border-[#1e293b] p-6 rounded-2xl text-center hover:border-[#10b981]/50 transition-all"
            >
              <Icon icon={obj.icon} className="text-[#10b981] text-3xl mx-auto mb-4" />
              <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">{obj.label}</div>
              <div className="text-white font-bold text-sm leading-tight">{obj.desc}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}