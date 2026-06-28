"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// =========================================================================
// 1. DICCIONARIO GLOBAL CON TODO EL COPY DE XIDMET COMPANY
// =========================================================================
export const diccionario = {
  es: {
    nav: { 
      soluciones: "Soluciones", 
      nosotros: "Sobre Nosotros", 
      proyectos: "Proyectos", 
      equipo: "Integrantes", 
      contacto: "Contacto" 
    },
    hero: {
      tagline: "Tu entorno, inteligente y seguro.",
      descripcion: "Expertos en automatización electrónica, eléctrica y seguridad integral. Sistemas de alta calidad, simples de usar y diseñados para crecer con vos.",
      btnSoluciones: "Nuestras Soluciones",
      btnContacto: "Contactar a un técnico",
      boton: "Soporte Técnico"
    },
    about: {
      subtitulo: "Nuestra Ingeniería",
      titulo: "Soluciones inteligentes para desafíos reales",
      descripcion: "En Xidmet Company transformamos espacios comunes en lugares inteligentes. Conectamos tecnología avanzada, cámaras de seguridad y sistemas eléctricos de forma simple y eficiente.",
      misionTitulo: "Misión",
      misionTexto: '"Otorgar la mejor calidad en sistemas altamente robustos de instalación de cámaras y sistemas automatizados."',
      visionTitulo: "Visión",
      visionTexto: '"Ser los líderes en crear espacios que se manejen solos, uniendo sistemas de control modernos con tecnología de alta calidad para facilitar la vida de las personas y empresas."',
      metasTitulo: "Metas Estratégicas",
      meta1Titulo: "Alcance",
      meta1Texto: "Instalar nuestros sistemas en gran parte de la provincia.",
      meta2Titulo: "Precisión",
      meta2Texto: "Disminuir el margen de error.",
      meta3Titulo: "Conectividad",
      meta3Texto: "Diseñar sistemas altamente enfocados en la experiencia de usuario."
    },
    equipo: {
      subtitulo: "Capital Humano",
      titulo: "NUESTRO EQUIPO",
      rolAlan: "Director IT & CEO",
      rolMia: "Líder de Diseño Visual",
      rolFederico: "Gestión de Costos",
      rolJoaquin: "Pruebas de Calidad (QA)",
      rolIgnacio: "Técnico Especialista",
      rolMaximo: "Técnico Especialista"
    },
    servicios: {
      subtitulo: "Especialidades",
      titulo: "Nuestras Soluciones Técnicas.",
      s1Titulo: "Seguridad Inteligente",
      s1Texto: "Instalación de cámaras IP y sistemas de monitoreo avanzado con acceso remoto desde cualquier dispositivo.",
      s2Titulo: "Domótica Residencial",
      s2Texto: "Automatización completa de tu hogar: control de cortinas, sensores de movimiento y climatización inteligente.",
      s3Titulo: "Iluminación Automatizada",
      s3Texto: "Gestión eficiente de luces interiores y exteriores. Escenas personalizadas y ahorro energético programado.",
      s4Titulo: "Accesos Automatizados",
      s4Texto: "Automatización de portones y cerraduras electrónicas con apertura mediante móvil, tag o reconocimiento.",
      s5Titulo: "Control Industrial & Eléctrico",
      s5Texto: "Tableros eléctricos inteligentes y automatización de procesos para empresas que buscan eficiencia y seguridad.",
      s6Titulo: "Desafío a medida",
      s6Texto: "¿Necesitás una solución específica? Personalizamos cada componente de tu sistema."
    },
    proyectos: {
      subtitulo: "Productos listos para la venta",
      titulo: "Casos de Éxito.",
      p1Nombre: "Proyecto 1",
      p1Subtitulo: "SITAE",
      p1Descripcion: "Sistema Inteligente de Timbres Autónomos Escolares",
      p1Texto: "Automatización de cronogramas escolares mediante hardware IoT con control web multiplataforma.",
      btnExplorar: "Explorar Proyecto"
    },
    performance: {
      titulo: "Ingeniería de precisión para un control total sin fallas.",
      kpi1Titulo: "Disponibilidad del Sistema",
      kpi1Texto: "Garantizamos que tus automatizaciones y seguridad estén operativas las 24 horas.",
      kpi2Titulo: "Tiempo de Respuesta",
      kpi2Texto: "Latencia mínima en el control de dispositivos desde tu smartphone o panel local.",
      kpi3Titulo: "Eficiencia Energética",
      kpi3Texto: "Reducción promedio en el consumo eléctrico mediante gestión inteligente de iluminación.",
      notaFooter: "* Valores técnicos basados en protocolos de seguridad y hardware de grado industrial."
    },
    cta: {
      subtitulo: "Monitoreo Activo",
      titulo: "Llevá tu espacio al próximo nivel técnico",
      descripcion: "Diseñamos infraestructuras inteligentes que garantizan control total, efficiency energética y seguridad máxima en cada conexión.",
      btnCta: "Solicitar Consultoría Técnica"
    },
    contacto: {
      subtitulo: "Central de Consultas",
      titulo: "Iniciá tu Transformación Técnica",
      descripcion: "¿Listo para automatizar tu espacio en Tanti? Completá el formulario y un técnico de nuestro equipo se pondrá en contacto por WhatsApp para asesorarte.",
      btnEnviar: "Enviar Consulta Técnica",
      waMensaje: "Hola Xidmet Company, me interesa una solución técnica. Nombre: {name}, Email: {email}, Consulta: {message}",
      alertaExito: "¡Solicitud recibida! Conectando con nuestro centro técnico...",
      phNombre: "Nombre completo",
      phEmail: "Correo electrónico",
      phMensaje: "Describí tu necesidad (cámaras, iluminación, portones, etc.)"
    },
    footer: {
      tagline: "Sistemas automatizados, seguros y simples."
    }
  },
  en: {
    nav: { 
      soluciones: "Solutions", 
      nosotros: "About Us", 
      proyectos: "Projects", 
      equipo: "Team", 
      contacto: "Contact" 
    },
    hero: {
      tagline: "Your environment, smart and secure.",
      descripcion: "Experts in electronic, electrical automation, and comprehensive security. High-quality systems, simple to use, and designed to grow with you.",
      btnSoluciones: "Our Solutions",
      btnContacto: "Contact a technician",
      boton: "Technical Support"
    },
    about: {
      subtitulo: "Our Engineering",
      titulo: "Smart solutions for real challenges",
      descripcion: "At Xidmet Company, we turn common spaces into smart environments. We connect advanced technology, security cameras, and electrical systems in a simple and efficient way.",
      misionTitulo: "Mission",
      misionTexto: '"To provide the highest quality in highly robust camera installation and automated systems."',
      visionTitulo: "Vision",
      visionTexto: '"To be leaders in creating spaces that run themselves, uniting modern control systems with high-quality technology to make life easier for people and businesses."',
      metasTitulo: "Strategic Goals",
      meta1Titulo: "Reach",
      meta1Texto: "Install our systems across a large part of the province.",
      meta2Titulo: "Precision",
      meta2Texto: "Minimize the margin of error.",
      meta3Titulo: "Connectivity",
      meta3Texto: "Design systems deeply focused on user experience."
    },
    equipo: {
      subtitulo: "Human Capital",
      titulo: "OUR TEAM",
      rolAlan: "IT Director & CEO",
      rolMia: "Visual Design Lead",
      rolFederico: "Cost Management",
      rolJoaquin: "Quality Assurance (QA)",
      rolIgnacio: "Specialist Technician",
      rolMaximo: "Specialist Technician"
    },
    servicios: {
      subtitulo: "Specialties",
      titulo: "Our Technical Solutions.",
      s1Titulo: "Smart Security",
      s1Texto: "Installation of IP cameras and advanced monitoring systems with remote access from any device.",
      s2Titulo: "Residential Automation",
      s2Texto: "Complete home automation: blinds control, motion sensors, and smart climate control.",
      s3Titulo: "Automated Lighting",
      s3Texto: "Efficient management of indoor and outdoor lights. Custom scenes and programmed energy savings.",
      s4Titulo: "Automated Access",
      s4Texto: "Gate and electronic lock automation with opening via mobile, tag, or recognition systems.",
      s5Titulo: "Industrial & Electrical Control",
      s5Texto: "Smart electrical panels and process automation for businesses seeking efficiency and safety.",
      s6Titulo: "Custom Challenge",
      s6Texto: "Need a specific solution? We customize every component of your system."
    },
    proyectos: {
      subtitulo: "Products ready for sale",
      titulo: "Success Stories.",
      p1Nombre: "Project 1",
      p1Subtitulo: "SITAE",
      p1Descripcion: "Smart Autonomous School Bell System",
      p1Texto: "Automation of school schedules using IoT hardware with cross-platform web control.",
      btnExplorar: "Explore Project"
    },
    performance: {
      titulo: "Precision engineering for total control without failures.",
      kpi1Titulo: "System Availability",
      kpi1Texto: "We guarantee that your automation and security are operational 24 hours a day.",
      kpi2Titulo: "Response Time",
      kpi2Texto: "There is minimal latency in device control from your smartphone or local panel.",
      kpi3Titulo: "Energy Efficiency",
      kpi3Texto: "Average reduction in power consumption through intelligent lighting management.",
      notaFooter: "* Technical values based on security protocols and industrial-grade hardware."
    },
    cta: {
      subtitulo: "Active Monitoring",
      titulo: "Take your space to the next technical level",
      descripcion: "We design intelligent infrastructures that guarantee total control, energy efficiency, and maximum security in every connection.",
      btnCta: "Request Technical Consultancy"
    },
    contacto: {
      subtitulo: "Inquiry Center",
      titulo: "Start Your Technical Transformation",
      descripcion: "Ready to automate your space in Tanti? Complete the form and a technician from our team will contact you via WhatsApp to assist you.",
      btnEnviar: "Send Technical Inquiry",
      waMensaje: "Hello Xidmet Company, I am interested in a technical solution. Name: {name}, Email: {email}, Inquiry: {message}",
      alertaExito: "Inquiry received! Connecting with our technical center...",
      phNombre: "Full name",
      phEmail: "Email address",
      phMensaje: "Describe your needs (cams, lighting, gates, etc.)"
    },
    footer: {
      tagline: "Automated, secure, and simple systems."
    }
  }
};

type Idioma = "es" | "en";

interface LanguageContextType {
  idioma: Idioma;
  t: typeof diccionario.es;
  setIdioma: (lang: Idioma) => void;
}

// =========================================================================
// 2. CONTEXTO Y PROVEEDOR GLOBAL
// =========================================================================
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [idioma, setIdiomaLocal] = useState<Idioma>("es");

  useEffect(() => {
    const savedLang = localStorage.getItem("xidmet_lang") as Idioma;
    if (savedLang) setIdiomaLocal(savedLang);
  }, []);

  const setIdioma = (lang: Idioma) => {
    setIdiomaLocal(lang);
    localStorage.setItem("xidmet_lang", lang);
  };

  const t = diccionario[idioma];

  return (
    <LanguageContext.Provider value={{ idioma, t, setIdioma }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  return context;
}

// =========================================================================
// 3. COMPONENTE VISUAL DEL BOTÓN
// =========================================================================
export default function LanguageSelector() {
  const { idioma, setIdioma } = useLanguage();

  return (
    <div className="flex items-center bg-slate-950/80 border border-slate-800 rounded-full p-1 shadow-inner relative z-50">
      <button
        onClick={() => setIdioma("es")}
        className={`px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase transition-all duration-300 ${
          idioma === "es"
            ? "bg-gradient-to-r from-[#10b981] to-[#0ea5e9] text-[#020617] shadow-md"
            : "text-slate-400 hover:text-white"
        }`}
      >
        ES
      </button>

      <button
        onClick={() => setIdioma("en")}
        className={`px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase transition-all duration-300 ${
          idioma === "en"
            ? "bg-gradient-to-r from-[#10b981] to-[#0ea5e9] text-[#020617] shadow-md"
            : "text-slate-400 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}