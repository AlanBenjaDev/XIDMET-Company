'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    /* SECCIÓN PRINCIPAL: Fondo total de borde a borde */
    <section id="nosotros" className="w-full bg-[#020617] py-28 px-6">
      
      {/* CONTENEDOR INTERNO: Centrado y con límite de ancho */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Columna texto: El enfoque técnico */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm uppercase tracking-widest text-[#10b981] font-bold">
            Nuestra Ingeniería
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-white leading-tight">
            Soluciones inteligentes para desafíos reales
          </h2>

          <p className="text-slate-400 mb-4 leading-relaxed text-lg">
            En <span className="text-[#34d399] font-bold">Xidmet Company</span> transformamos espacios convencionales en infraestructuras autónomas. Fusionamos electrónica avanzada, seguridad de vanguardia y sistemas eléctricos robustos.
          </p>

          <p className="text-slate-400 leading-relaxed text-lg">
            Con base en <span className="text-white">Tanti</span>, nuestro equipo técnico diseña cada proyecto a medida, priorizando la eficiencia energética y la simplicidad de uso para que tengas el control total en la palma de tu mano.
          </p>
        </motion.div>

        {/* Columna visual: El bloque de lógica de automatización */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glow de crecimiento verde */}
          <div className="absolute -inset-4 bg-[#10b981]/10 rounded-3xl blur-3xl" />

          <div className="relative bg-[#0f172a]/80 border border-[#1e293b] rounded-2xl p-8 font-mono text-sm shadow-2xl">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <pre className="text-[#34d399] leading-relaxed whitespace-pre-wrap">
{`// Lógica de Control Xidmet
function initializeSmartSystem() {
  const security = checkSurveillance();
  const automation = syncElectronics();
  
  return {
    status: "OPTIMIZED",
    location: "Tanti, Córdoba",
    safeMode: true,
    energySaving: "MAX"
  }
}

// Ejecutando automatización...
initializeSmartSystem();`}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}