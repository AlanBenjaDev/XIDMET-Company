'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import LanguageSelector, { LanguageProvider, useLanguage } from '@/components/TranslateButton'
import BlueprintViewer from '@/components/proyectos/BlueprintViewer'
import UnifilarDiagram from '@/components/proyectos/UnifilarDiagram'
import WorkPlanSection from '@/components/proyectos/WorkPlanSection'
import BudgetSection from '@/components/proyectos/BudgetSection'
import Footer from '@/components/Footer'

function ProjectDetailContent() {
  const { idioma } = useLanguage()
  const isEn = idioma === 'en'

  const technicalBadges = [
    {
      icon: 'mdi:home-analytics',
      label: isEn ? 'Surface Area' : 'Superficie',
      value: isEn ? '66 m² Covered + 26 m² Gallery' : '66 m² Cubiertos + 26 m² Galería',
    },
    {
      icon: 'mdi:flash',
      label: isEn ? 'Electrical Supply' : 'Suministro',
      value: isEn ? 'Single-Phase 220V (6 Circuits)' : 'Monofásico 220V (Grado Medio - 6 Ctos)',
    },
    {
      icon: 'mdi:shield-check',
      label: isEn ? 'Regulations' : 'Normativa',
      value: 'AEA 90364 / Ley 10.281 (ERSeP)',
    },
    {
      icon: 'mdi:cctv',
      label: isEn ? 'Security & Automation' : 'Seguridad & Control',
      value: 'CEM Suri 500 + XVR Dahua 4CH',
    },
    {
      icon: 'mdi:calendar-clock',
      label: isEn ? 'Execution Schedule' : 'Cronograma',
      value: isEn ? '7 Sequential Stages' : '7 Etapas Secuenciales',
    },
    {
      icon: 'mdi:certificate',
      label: isEn ? 'Certification' : 'Certificación',
      value: isEn ? 'ERSeP Cat. III + 12m Warranty' : 'Certificado Apto + Garantía 12 Meses',
    },
  ]

  const projectObjectives = [
    {
      icon: 'mdi:sofa-outline',
      title: isEn ? 'Daily Comfort & Automation' : 'Lograr tener comodidad',
      desc: isEn
        ? 'Automated gate access control, centralized alerts, and continuous monitoring of water tank levels and smoke detectors without manual effort.'
        : 'Confort diario mediante apertura automatizada de portón, gestión centralizada de iluminación y monitoreo continuo de nivel de tanque de agua y detección de humo.',
    },
    {
      icon: 'mdi:hubspot',
      title: isEn ? 'All-in-One Centralized Integration' : 'Todo instalado y en un mismo lugar',
      desc: isEn
        ? 'Unified distribution board and control hub integrating power circuits, lighting, CCTV recorder, alarm panel, and structured wiring with zero exposed cables.'
        : 'Infraestructura eléctrica, tablero general de 12 módulos, XVR Dahua, central CEM Suri y cableado estructurado concentrados en un punto único y prolijo.',
    },
    {
      icon: 'mdi:shield-home-outline',
      title: isEn ? 'Electrical & Patrimonial Safety' : 'Seguridad técnica y patrimonial',
      desc: isEn
        ? 'Standardized electrical protection (grounding rod, 30mA RCD differential, dedicated breakers per circuit) paired with 24/7 video surveillance and perimeter sensors.'
        : 'Protecciones normalizadas (puesta a tierra con jabalina, diferencial 30 mA y termomagnéticas por circuito) combinadas con videovigilancia exterior y alarma.',
    },
    {
      icon: 'mdi:lan-connect',
      title: isEn ? 'Zero Electromagnetic Interference' : 'Prevención de interferencias y fallas',
      desc: isEn
        ? 'Dedicated conduits and separated raceways isolating UTP/coaxial low-voltage data signals from 220V AC power lines.'
        : 'Canalizaciones y rieles independientes que separan las corrientes débiles (UTP y coaxial RG59) de las líneas de tensión de 220V para evitar ruidos y fallas.',
    },
  ]

  const faqs = [
    {
      q: isEn
        ? 'Does the security and gate system operate on an independent electrical circuit?'
        : '¿El sistema de seguridad, cámaras y portón tiene protección eléctrica independiente?',
      a: isEn
        ? 'Yes. Circuit C6 (2x10A thermal-magnetic breaker) is exclusively dedicated to the CEM Suri 500 alarm, Dahua XVR, and automatic gate motor so general household appliances never affect security.'
        : 'Sí. El Circuito C6 (termomagnética exclusiva de 2x10 A) alimenta de forma independiente la alarma CEM Suri 500, el grabador XVR Dahua y el motor del portón, evitando que cualquier falla en electrodomésticos afecte la seguridad.',
    },
    {
      q: isEn
        ? 'How are people and appliances protected against electrical faults?'
        : '¿Qué protecciones eléctricas incluye el tablero principal de la vivienda?',
      a: isEn
        ? 'The 12-module board includes a 2x40A main breaker, a 2x40A / 30mA Schneider differential switch for life protection, circuit-specific breakers (10A, 16A, 20A), and a dedicated 1.5m grounding rod system.'
        : 'El tablero de embutir de 12 módulos cuenta con corte general 2x40 A, interruptor diferencial Schneider 2x40 A / 30 mA contra contactos indirectos, térmicas seccionales (10 A, 16 A y 20 A) y puesta a tierra reglamentaria con jabalina de 1,5 m.',
    },
    {
      q: isEn
        ? 'How do you prevent signal noise between 220V power cables and cameras/network?'
        : '¿Cómo se evitan interferencias entre los cables de corriente y las cámaras o red?',
      a: isEn
        ? 'During Stage 7, dedicated conduits and separated raceways are installed exclusively for UTP and RG59 coaxial cables, keeping low-voltage data lines physically isolated from 220V conductors.'
        : 'En la Etapa 7 instalamos rieles y canalizaciones exclusivas para cables UTP y coaxial RG59, manteniéndolos completamente separados de los conductores de 220V para eliminar interferencias electromagnéticas y pérdida de señal.',
    },
    {
      q: isEn
        ? 'What official documentation and certification are delivered at the end of the project?'
        : '¿Qué certificación y documentación se entrega al finalizar la instalación?',
      a: isEn
        ? 'We deliver the official "Certificado de Instalación Eléctrica Apta" (Law 10.281) signed by a licensed Category III Electrician for EPEC/distributor connection, grounding & insulation test results, and as-built schematics.'
        : 'Entregamos el Certificado de Instalación Eléctrica Apta exigido por la Ley 10.281 (firmado por Instalador Electricista Habilitado Categoría III), protocolos de medición de puesta a tierra y aislación, diagrama unifilar y planos conforme a obra.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-[#10b981] selection:text-[#020617]">
      {/* BARRA DE NAVEGACIÓN SUPERIOR FIJA */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#020617]/85 border-b border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center">
          {/* Botón Volver + Logo */}
          <div className="flex items-center gap-4">
            <Link
              href="/#resultados"
              className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-[#10b981] transition-colors py-1.5 px-3 rounded-full bg-slate-900 border border-slate-800"
            >
              <Icon icon="mdi:arrow-left" className="text-base" />
              <span>{isEn ? 'Back to Home' : 'Volver al Inicio'}</span>
            </Link>

            <span className="text-lg font-black tracking-tighter bg-gradient-to-r from-[#10b981] to-[#0ea5e9] bg-clip-text text-transparent uppercase hidden sm:inline">
              XIDMET
            </span>
          </div>

          {/* Menú de Anclas Rápido */}
          <nav className="hidden md:flex items-center gap-6 text-[11px] font-bold tracking-widest uppercase text-slate-400 font-mono">
            <a href="#objetivos" className="hover:text-[#34d399] transition-colors">
              {isEn ? 'Objectives' : 'Objetivos'}
            </a>
            <a href="#plano" className="hover:text-[#34d399] transition-colors">
              {isEn ? 'Floor Plan' : 'Plano de Planta'}
            </a>
            <a href="#unifilar" className="hover:text-[#34d399] transition-colors">
              {isEn ? 'Single-Line' : 'Diagrama Unifilar'}
            </a>
            <a href="#cronograma" className="hover:text-[#34d399] transition-colors">
              {isEn ? 'Work Plan' : 'Plan de Trabajo'}
            </a>
            <a href="#presupuesto" className="hover:text-[#34d399] transition-colors">
              {isEn ? 'Budget' : 'Presupuesto'}
            </a>
          </nav>

          {/* Selector de idioma y botón CTA */}
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <a
              href={`https://wa.me/5493518051946?text=${encodeURIComponent(
                'Hola XIDMET Company S.A., quiero asesoramiento sobre el proyecto de Instalación Eléctrica, Seguridad y Domótica para vivienda unifamiliar.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#10b981] text-[#020617] px-4 py-2 rounded-full text-xs font-black tracking-wider uppercase hover:bg-[#34d399] transition-all flex items-center gap-1.5"
            >
              <Icon icon="mdi:whatsapp" className="text-base" />
              <span className="hidden sm:inline">{isEn ? 'Consult' : 'Consultar'}</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO DEL PROYECTO */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#10b981]/15 to-[#0ea5e9]/15 blur-[140px] rounded-full pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-start max-w-4xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] text-[11px] font-mono font-bold uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              {isEn
                ? 'Technical Project & Budget Report • Tanti, Córdoba'
                : 'Informe Técnico de Proyecto & Presupuesto • Tanti, Córdoba'}
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              {isEn ? 'Residential Electrical Installation,' : 'Instalación Eléctrica,'}{' '}
              <span className="bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#0ea5e9] bg-clip-text text-transparent">
                {isEn ? 'Security & Domotics' : 'Seguridad y Domótica'}
              </span>
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
              {isEn
                ? 'Comprehensive turnkey project for a 66 m² single-family home (+26 m² gallery): Medium Electrification Grade (6 circuits) under AEA 90364 & Law 10.281, CEM Suri 500 alarm, Dahua 4-channel CCTV, smoke & water-level sensors, automatic gate, and itemized budget.'
                : 'Proyecto integral llave en mano para vivienda unifamiliar de 66 m² cubiertos (+26 m² galería): Grado de Electrificación Medio en 6 circuitos bajo norma AEA 90364 y Ley 10.281, alarma CEM Suri 500, videovigilancia Dahua 4CH, sensores de humo y nivel de agua, portón automático y presupuesto desglosado.'}
            </p>
          </div>

          {/* MATRIZ DE PARÁMETROS TÉCNICOS */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {technicalBadges.map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="p-4 rounded-2xl bg-[#0f172a]/70 border border-slate-800 backdrop-blur-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-[#10b981]/10 text-[#10b981] flex items-center justify-center mb-3">
                  <Icon icon={badge.icon} className="text-xl" />
                </div>
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                  {badge.label}
                </div>
                <div className="text-xs font-bold text-white leading-snug">{badge.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 0: OBJETIVOS DEL PROYECTO */}
      <section id="objetivos" className="py-20 px-6 border-b border-white/5 bg-[#030712]/40">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl">
            <span className="text-[#10b981] text-xs font-bold font-mono tracking-[0.3em] uppercase block mb-2">
              {isEn ? 'PROJECT SCOPE & GOALS' : 'ALCANCE Y PROPÓSITO'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {isEn ? 'Strategic Objectives of the Installation' : 'Objetivos Principales del Proyecto'}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              {isEn
                ? 'Designed to deliver everyday comfort, centralized hardware integration, regulatory electrical safety, and interference-free data lines.'
                : 'Diseñado para dotar a la vivienda de una infraestructura eléctrica y automatizada moderna, segura y prolija sobre cuatro ejes fundamentales.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {projectObjectives.map((obj, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0f172a]/70 border border-slate-800 hover:border-[#10b981]/40 transition-colors flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] flex items-center justify-center">
                      <Icon icon={obj.icon} className="text-2xl" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">0{idx + 1}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{obj.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{obj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 1: PLANO ELÉCTRICO DE LA CASA (INTERACTIVO) */}
      <section id="plano" className="py-24 px-6 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-3xl">
            <span className="text-[#10b981] text-xs font-bold font-mono tracking-[0.3em] uppercase block mb-2">
              {isEn ? 'ARCHITECTURAL BLUEPRINT (PLAN 2.1)' : 'INGENIERÍA DE DISTRIBUCIÓN (PLANO 2.1)'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {isEn ? 'Interactive House Electrical & Security Blueprint' : 'Plano Eléctrico y de Seguridad Interactivo'}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              {isEn
                ? 'Inspect the 30 electrical outlets (11 IUG lighting, 17 TUG sockets, 2 TUE special use) across 2 bedrooms, 2 bathrooms, living-kitchen-dining area, gallery, and exterior perimeter.'
                : 'Explorá las 30 bocas proyectadas (11 IUG iluminación, 17 TUG tomacorrientes y 2 TUE uso especial) distribuidas en 2 dormitorios, 2 baños, estar-comedor-cocina, galería semicubierta y frente exterior.'}
            </p>
          </div>

          <BlueprintViewer />
        </div>
      </section>

      {/* SECCIÓN 2: DIAGRAMA UNIFILAR Y TABLEROS */}
      <section id="unifilar" className="py-24 px-6 border-b border-white/5 bg-[#030712]/50">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-3xl">
            <span className="text-amber-400 text-xs font-bold font-mono tracking-[0.3em] uppercase block mb-2">
              {isEn ? 'ELECTRICAL PROTECTION & 6-CIRCUIT BOARD' : 'PROTECCIONES & TABLERO DE 6 CIRCUITOS'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {isEn ? 'Single-Line Diagram & Circuit Allocation' : 'Diagrama Unifilar & Cuadro de Circuitos AEA'}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              {isEn
                ? '12-module main distribution panel with 2x40A main breaker, 30mA Schneider RCD, and 6 dedicated circuits (C1–C2 Lighting, C3–C4 Sockets, C5 Special Use, C6 Security & Gate).'
                : 'Tablero principal de embutir (12 módulos) con corte general 2x40 A, diferencial Schneider 2x40 A / 30 mA y 6 circuitos independientes (C1-C2 Iluminación, C3-C4 Tomas, C5 Uso Especial y C6 Seguridad/Portón).'}
            </p>
          </div>

          <UnifilarDiagram />
        </div>
      </section>

      {/* SECCIÓN 3: PLAN DE TRABAJO DETALLADO */}
      <section id="cronograma" className="py-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-3xl">
            <span className="text-sky-400 text-xs font-bold font-mono tracking-[0.3em] uppercase block mb-2">
              {isEn ? 'EXECUTION METHODOLOGY' : 'CRONOGRAMA DE EJECUCIÓN (PLAN DE TRABAJO)'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {isEn ? 'Work Plan: 7-Stage Execution Schedule' : 'Plan de Trabajo: Ejecución Secuencial en 7 Etapas'}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              {isEn
                ? 'Structured workflow: 1. Initial Site Survey, 2. General Electrical Installation (conditional), 3. Wi-Fi Coverage Verification, 4. Automatic Gate Infrastructure, 5. Gate Motor Assembly, 6. CEM Suri Alarm & Dahua CCTV Placement, and 7. Separated UTP/Coaxial Raceways.'
                : 'Secuencia operativa en 7 etapas: 1. Relevamiento inicial, 2. Instalación eléctrica general (condicional), 3. Verificación de cobertura Wi-Fi, 4. Infraestructura y vigas para portón, 5. Montaje de portón automático, 6. Instalación de alarma CEM Suri, cámaras y sensores, y 7. Rieles separados para cables UTP/coaxial.'}
            </p>
          </div>

          <WorkPlanSection />
        </div>
      </section>

      {/* SECCIÓN 4: PRESUPUESTO DESGLOSADO */}
      <section id="presupuesto" className="py-24 px-6 border-b border-white/5 bg-[#030712]/50">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-3xl">
            <span className="text-[#10b981] text-xs font-bold font-mono tracking-[0.3em] uppercase block mb-2">
              {isEn ? 'TRANSPARENT BILL OF MATERIALS & LABOR' : 'CÓMPUTO MÉTRICO & PRESUPUESTO OFICIAL'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {isEn ? 'Itemized Budget, Discounts & Payment Terms' : 'Presupuesto Detallado de Materiales, Equipos y Mano de Obra'}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              {isEn
                ? 'Complete breakdown across Electrical Materials (Rubro A), Security & Automation Equipment (Rubro B), and Specialized Labor (Rubro C), including cash/transfer discounts and financing options.'
                : 'Desglose transparente por rubros: Materiales Eléctricos (Rubro A), Equipos de Seguridad y Automatización (Rubro B) y Mano de Obra Especializada (Rubro C), con opciones de bonificación en efectivo/transferencia (15%) y financiación.'}
            </p>
          </div>

          <BudgetSection />
        </div>
      </section>

      {/* SECCIÓN 5: PREGUNTAS FRECUENTES Y GARANTÍA */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#10b981] text-xs font-bold font-mono tracking-[0.3em] uppercase block mb-2">
              {isEn ? 'TECHNICAL ASSURANCE & STANDARDS' : 'SEGURIDAD & RESPALDO TÉCNICO'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {isEn ? 'Quality Guarantee & Frequently Asked Questions' : 'Certificación ERSeP & Preguntas Frecuentes'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#0f172a]/60 border border-slate-800 space-y-3"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#10b981]/10 text-[#10b981] shrink-0 mt-0.5">
                    <Icon icon="mdi:help-circle-outline" className="text-lg" />
                  </div>
                  <h4 className="text-base font-bold text-white leading-snug">{faq.q}</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-10">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Tarjeta de Garantía y Certificación por Escrito */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-emerald-950/30 via-slate-900 to-sky-950/30 border border-[#10b981]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#10b981]/20 border border-[#10b981]/40 flex items-center justify-center text-[#10b981] shrink-0">
                <Icon icon="mdi:certificate-outline" className="text-3xl" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">
                  {isEn
                    ? 'Certified Installation (Law 10.281) & 12-Month Warranty'
                    : 'Certificado de Instalación Apta (Ley 10.281) & Garantía 12 Meses'}
                </h4>
                <p className="text-xs text-slate-400 mt-1 max-w-xl">
                  {isEn
                    ? 'Executed by XIDMET Company S.A. (San Martín 123, Tanti, Córdoba) under AEA 90364 regulations and ERSeP Category III standards, including grounding/insulation testing and full technical support.'
                    : 'Ejecutado por XIDMET Company S.A. (San Martín 123, Tanti, Córdoba) bajo reglamentación AEA 90364 y estándares ERSeP Categoría III, con pruebas de telurímetro/megóhmetro y garantía escrita.'}
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/5493518051946?text=${encodeURIComponent(
                'Hola XIDMET Company S.A., quiero solicitar una visita técnica en obra para presupuestar mi instalación eléctrica y domótica.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#10b981] text-[#020617] px-6 py-3.5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#34d399] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all shrink-0 flex items-center gap-2"
            >
              <Icon icon="mdi:whatsapp" className="text-lg" />
              {isEn ? 'Request Site Visit' : 'Solicitar Visita Técnica'}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default function ProjectDomoticaPage() {
  return (
    <LanguageProvider>
      <ProjectDetailContent />
    </LanguageProvider>
  )
}