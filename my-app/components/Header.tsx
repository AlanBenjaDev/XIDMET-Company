'use client'
import { motion } from 'framer-motion'

export default function Header() {
  const navLinks = [
    { name: 'Soluciones', href: '#servicios' },
    { name: 'Xidmet Team', href: '#nosotros' },
    { name: 'Proyectos', href: '#resultados' },
    { name: 'Presupuesto', href: '#contacto' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#020617]/70 border-b border-[#1e293b]"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
          <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-[#10b981] to-[#0ea5e9] bg-clip-text text-transparent uppercase">
            XIDMET
          </span>

          <nav className="hidden md:flex gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-[#34d399] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a 
            href="#contacto" 
            className="bg-[#10b981] text-[#020617] px-6 py-2 rounded-full text-[10px] md:text-xs font-black tracking-widest uppercase hover:bg-[#34d399] hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all"
          >
            Soporte Técnico
          </a>
        </div>
      </motion.header>

      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] z-50 bg-[#0f172a]/90 backdrop-blur-xl border border-white/5 rounded-2xl px-8 py-4 flex justify-between items-center shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="text-[10px] font-bold uppercase tracking-tighter text-slate-500 active:text-[#10b981]"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </>
  )
}
