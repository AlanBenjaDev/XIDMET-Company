'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function Contact() {
  const { register, handleSubmit, reset } = useForm()
  const [isSent, setIsSent] = useState(false)

  const onSubmit = (data: any) => {
    setIsSent(true)
    reset()

    const whatsappMessage = `Hola Xidmet Company, me interesa una solución técnica. Nombre: ${data.name}, Email: ${data.email}, Consulta: ${data.message}`
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
      {/* Etiqueta superior técnica */}
      <span className="text-[#10b981] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
        Central de Consultas
      </span>
      
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
        Iniciá tu <span className="text-[#10b981]">Transformación Técnica</span>
      </h2>

      <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">
        ¿Listo para automatizar tu espacio en Tanti? Completa el formulario y un técnico de nuestro equipo se pondrá en contacto por WhatsApp para asesorarte.
      </p>

      {isSent && (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-8 p-4 bg-[#10b981]/10 border border-[#10b981]/20 rounded-xl text-[#34d399] font-medium"
        >
          ¡Solicitud recibida! Conectando con nuestro centro técnico...
        </motion.div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto grid gap-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            {...register('name', { required: true })}
            placeholder="Nombre completo"
            className="w-full px-5 py-4 rounded-xl bg-[#0f172a] border border-[#1e293b] focus:border-[#10b981] focus:outline-none transition-colors text-white"
          />
          <input
            {...register('email', { required: true })}
            placeholder="Correo electrónico"
            className="w-full px-5 py-4 rounded-xl bg-[#0f172a] border border-[#1e293b] focus:border-[#10b981] focus:outline-none transition-colors text-white"
          />
        </div>
        
        <textarea
          {...register('message', { required: true })}
          placeholder="Describí tu necesidad (Cámaras, iluminación, portones, etc.)"
          rows={4}
          className="w-full px-5 py-4 rounded-xl bg-[#0f172a] border border-[#1e293b] focus:border-[#10b981] focus:outline-none transition-colors text-white resize-none"
        />

        <button
          type="submit"
          className="bg-[#10b981] text-[#020617] px-8 py-5 rounded-full font-black uppercase tracking-widest hover:bg-[#34d399] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-3"
        >
          <Icon icon="mdi:whatsapp" width={24} height={24} />
          Enviar Consulta Técnica
        </button>
      </form>
    </motion.section>
  )
}
