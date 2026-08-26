'use client'

import { useState } from "react" // 1. Importamos el estado para controlar el chat
import { Icon } from "@iconify/react" // 2. Importamos los iconos para el botón

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/Info"
import Services from "@/components/Services"
import CTA from "@/components/CTA"
import Contact from "@/components/Contacto"
import Footer from "@/components/Footer"
import Performance from "@/components/Performance"
import Projects from "@/components/Proyects"
import Member from "@/components/Member"
import XidBot from "@/components/XidBot"

import { LanguageProvider } from "@/components/TranslateButton"

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Member />
        <Services />
        <Projects />
        <Performance /> 
        <CTA />
        <Contact />
      </main>
      <Footer />
      
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        
        {isChatOpen && (
          <div className="shadow-2xl md:w-[400px] w-[calc(100vw-2rem)] max-w-md transition-all duration-300">
            <XidBot />
          </div>
        )}

        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`flex items-center justify-center w-14 h-14 rounded-full text-white shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${
            isChatOpen 
              ? "bg-slate-800 hover:bg-slate-700 border border-slate-700" 
              : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          }`}
          aria-label="Abrir asistente de soporte"
        >
          {isChatOpen ? (
            <Icon icon="lucide:x" className="w-6 h-6" />
          ) : (
            <Icon icon="lucide:bot" className="w-7 h-7" />
          )}
        </button>

      </div>
    </LanguageProvider>   
  )
}