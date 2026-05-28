'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { useLanguage } from '@/components/TranslateButton'

export default function Contact() {
  const { register, handleSubmit, reset } = useForm()
  const [isSent, setIsSent] = useState(false)
  const { t } = useLanguage()

  const onSubmit = (data: any) => {
    setIsSent(true)
    reset()

    // Usamos una verificación segura o la string por defecto por si TypeScript protesta
    const baseMessage = (t.contacto as any).waMensaje || 
      "Hola Xidmet Company, me interesa una solución técnica. Nombre: {name}, Email: {email}, Consulta: {message}";

    const whatsappMessage = baseMessage
      .replace("{name}", data.name)
      .replace("{email}", data.email)
      .replace("{message}", data.message);

    window.open(
      `https://wa.me/5493541628322?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank'
    )
  }

  return (
    <motion.section
      id="contacto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-24 px-6 bg-[#020617] text-white text-center"
    >
      <span className="text-[#10b981] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
        {t.contacto.subtitulo}
      </span>
      
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
        {t.contacto.titulo.includes("Transformación") ? (
          <>
            Iniciá tu <span className="text-[#10b981]">Transformación Técnica</span>
          </>
        ) : (
          <>
            Begin Your <span className="text-[#10b981]">Technical Transformation</span>
          </>
        )}
      </h2>

      <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">
        {t.contacto.descripcion}
      </p>

      {isSent && (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-8 p-4 bg-[#10b981]/10 border border-[#10b981]/20 rounded-xl text-[#34d399] font-medium"
        >
          {(t.contacto as any).alertaExito || "¡Solicitud recibida! Conectando con nuestro centro técnico..."}
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            {...register('name', { required: true })}
            placeholder={(t.contacto as any).phNombre || "Nombre completo"}
            className="w-full px-5 py-4 rounded-xl bg-[#0f172a] border border-[#1e293b] focus:border-[#10b981] focus:outline-none transition-colors text-white"
          />
          <input
            {...register('email', { required: true })}
            placeholder={(t.contacto as any).phEmail || "Correo electrónico"}
            className="w-full px-5 py-4 rounded-xl bg-[#0f172a] border border-[#1e293b] focus:border-[#10b981] focus:outline-none transition-colors text-white"
          />
        </div>
        
        <textarea
          {...register('message', { required: true })}
          placeholder={(t.contacto as any).phMensaje || "Describí tu necesidad (Cámaras, iluminación, portones, etc.)"}
          rows={4}
          className="w-full px-5 py-4 rounded-xl bg-[#0f172a] border border-[#1e293b] focus:border-[#10b981] focus:outline-none transition-colors text-white resize-none"
        />

        <button
          type="submit"
          className="bg-[#10b981] text-[#020617] px-8 py-5 rounded-full font-black uppercase tracking-widest hover:bg-[#34d399] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-3"
        >
          <Icon icon="mdi:whatsapp" width={24} height={24} />
          {t.contacto.btnEnviar}
        </button>
      </form>
    </motion.section>
  )
}