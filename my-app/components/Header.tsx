'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageSelector, { useLanguage } from '@/components/TranslateButton' 

export default function Header() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t.nav.soluciones, href: '#servicios' },
    { name: t.nav.nosotros, href: '#nosotros' },
    { name: t.nav.proyectos, href: '#resultados' },
    { name: t.nav.equipo, href: '#equipo' },
    { name: t.nav.contacto, href: '#contacto' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#020617]/70 border-b border-[#1e293b]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        
          {/* Logo */}
          <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-[#10b981] to-[#0ea5e9] bg-clip-text text-transparent uppercase">
            XIDMET
          </span>

          {/* Desktop Navigation */}
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

          {/* Header Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <LanguageSelector />
        
            {/* CTA Button - Hidden on small mobile to avoid overlap */}
            <a 
              href="#contacto" 
              className="hidden xs:inline-block bg-[#10b981] text-[#020617] px-4 sm:px-6 py-2 rounded-full text-[10px] md:text-xs font-black tracking-widest uppercase hover:bg-[#34d399] hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all"
            >
              {t.hero.boton}
            </a>

            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center items-center md:hidden w-8 h-8 gap-1.5 z-50 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className={`h-0.5 w-6 bg-slate-200 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 w-6 bg-slate-200 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-6 bg-slate-200 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-[#020617]/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col gap-6 text-center text-lg font-bold uppercase tracking-widest text-slate-300">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#10b981] active:text-[#10b981] py-2 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              {/* Extra Mobile CTA inside menu */}
              <a 
                href="#contacto" 
                onClick={() => setIsOpen(false)}
                className="xs:hidden mt-4 bg-[#10b981] text-[#020617] px-8 py-3 rounded-full text-xs font-black tracking-widest uppercase"
              >
                {t.hero.boton}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}