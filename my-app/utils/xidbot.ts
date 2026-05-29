export interface BotStep {
  id: string;
  question: string;
  options: {
    text: string;
    nextStep: string;
    result?: string;
    basePrice?: number; // Precio neto para el contador animado
    icon?: string;       // Identificador para Iconify
  }[];
}

export const XIDBOT_FLOWS: Record<"es" | "en", Record<string, BotStep>> = {
  es: {
    inicio: {
      id: "inicio",
      question: "¡Hola! Soy Xidbot, tu asesor en seguridad y domótica de Xidmet Company. ¿En qué tipo de sistema estás más interesado hoy?",
      options: [
        { text: "Cámaras de Seguridad", nextStep: "camaras_tecnologia", icon: "carbon:security-camera" },
        { text: "Domótica y Automatización", nextStep: "domotica", icon: "carbon:home" },
        { text: "Timbres Inteligentes", nextStep: "timbres", icon: "carbon:alarm" },
      ],
    },
    // === FLUJO 1: CÁMARAS ===
    camaras_tecnologia: {
      id: "camaras_tecnologia",
      question: "¿Qué tipo de arquitectura de video prefieres para procesar tus cámaras?",
      options: [
        { text: "Sistema DVR (Cámaras analógicas HD por cable coaxial)", nextStep: "camaras_entorno_dvr" },
        { text: "Sistema NVR (Cámaras IP de alta resolución por red/Wi-Fi)", nextStep: "camaras_entorno_nvr" },
      ],
    },
    camaras_entorno_dvr: {
      id: "camaras_entorno_dvr",
      question: "¿Para qué tipo de entorno necesitas este sistema analógico (DVR)?",
      options: [
        { text: "Comercio / Negocio", nextStep: "almacenamiento_dvr_comercio" },
        { text: "Solo Interior / Residencial", nextStep: "almacenamiento_dvr_comercio" },
      ],
    },
    almacenamiento_dvr_comercio: {
      id: "almacenamiento_dvr_comercio",
      question: "¿Dónde prefieres resguardar las grabaciones de tu DVR?",
      options: [
        { 
          text: "Almacenamiento Físico (Disco Duro local seguro)", 
          nextStep: "fin", 
          basePrice: 460000, 
          result: "Te recomendamos un sistema DVR robusto con un Disco Duro de grado industrial Western Digital Purple. Tendrás grabación analógica HD continua las 24 horas y máxima privacidad local sin depender de internet." 
        },
        { 
          text: "Almacenamiento en la Nube (Respaldo en servidores externos)", 
          nextStep: "fin", 
          basePrice: 460000,
          result: "Te sugerimos un DVR híbrido conectado a internet para configurar un respaldo secundario en la nube. Aunque las cámaras estén cableadas al equipo local, tus clips críticos quedarán a salvo externamente." 
        },
      ],
    },
    camaras_entorno_nvr: {
      id: "camaras_entorno_nvr",
      question: "¿Para qué tipo de entorno buscas estas cámaras IP de alta resolución (NVR)?",
      options: [
        { text: "Solo Interior", nextStep: "almacenamiento_nvr" },
        { text: "Exterior / Todo el perímetro", nextStep: "almacenamiento_nvr" },
      ],
    },
    almacenamiento_nvr: {
      id: "almacenamiento_nvr",
      question: "¿Qué tipo de almacenamiento se adapta mejor a la seguridad de tu red IP (NVR)?",
      options: [
        { 
          text: "Almacenamiento Físico (NVR con Disco Duro dedicado)", 
          nextStep: "fin", 
          basePrice: 620000, // CORREGIDO: Faltaba el precio base para cámaras IP de red + Disco
          result: "Tu mejor opción es un kit NVR PoE o Wi-Fi con almacenamiento físico local. Permite procesar resoluciones masivas (4K), flujos continuos sin consumir ancho de banda de internet y retención de datos offline de alta fiabilidad." 
        },
        { 
          text: "Almacenamiento en la Nube (Acceso y respaldo digital directo)", 
          nextStep: "fin", 
          basePrice: 620000, // CORREGIDO: Faltaba el precio base
          result: "Te recomendamos cámaras IP enlazadas a un NVR virtual o directo con almacenamiento en la nube. Ideal para evitar que un intruso destruya la evidencia física, garantizando el acceso a las grabaciones desde cualquier parte del mundo." 
        },
      ],
    },
    // === FLUJO 2: DOMÓTICA ===
    domotica: {
      id: "domotica",
      question: "¿En qué entorno te gustaría implementar nuestra automatización y software a medida?",
      options: [
        { text: "Hogar (Domótica Residencial personalizada)", nextStep: "domotica_entorno_hogar" },
        { text: "Trabajo / Empresa / Institución (Control total)", nextStep: "domotica_entorno_profesional" },
      ],
    },
    domotica_entorno_hogar: {
      id: "domotica_entorno_hogar",
      question: "Diseñamos una aplicación a medida para tu hogar. ¿Cuál es el principal objetivo del software?",
      options: [
        { 
          text: "Control de Accesos (Portón + 3 Ambientes + App Xidmet)", 
          nextStep: "fin", 
          basePrice: 570000, 
          result: "Desarrollaremos una aplicación a medida para tu hogar enfocada en accesos. Podrás controlar cerraduras electrónicas, el portón automatizado y sensores perimetrales desde una interfaz única diseñada exclusivamente para tu familia." 
        },
        { 
          text: "Simulación de Presencia (Luces e Iluminación)", 
          nextStep: "fin", 
          basePrice: 570000,
          result: "Instalaremos interruptores o bombillas inteligentes gestionadas por una aplicación a medida para tu casa. Podrás programar automatizaciones complejas y simular presencia de forma inteligente para disuadir intrusos." 
        },
      ],
    },
    domotica_entorno_profesional: {
      id: "domotica_entorno_profesional",
      question: "¿Qué procesos prioritarios busca optimizar el software a medida para tu espacio de trabajo o institución?",
      options: [
        { 
          text: "Control de personal y accesos restringidos", 
          nextStep: "fin", 
          basePrice: 890000, // CORREGIDO: Faltaba el precio base para software/hardware industrial corporativo
          result: "Te proponemos un sistema industrial con una aplicación desarrollada a medida para tu trabajo/institución. Automatiza portones, barreras y cerraduras por Tags RFID, reconocimiento o móviles con auditoría en tiempo real." 
        },
        { 
          text: "Eficiencia energética y tableros automatizados", 
          nextStep: "fin", 
          basePrice: 950000, // CORREGIDO: Faltaba el precio base para control de tableros eléctricos complejos
          result: "Diseñamos una aplicación a medida conectada a tus tableros eléctricos. Podrás automatizar la climatización, extractores e iluminación industrial, visualizando el consumo y controlando todo desde un panel centralizado." 
        },
      ],
    },
    // === FLUJO 3: TIMBRES ===
    timbres: {
      id: "timbres",
      question: "Disponemos de sistemas especializados. ¿Para qué entorno necesitas la automatización?",
      options: [
        { text: "Para una institución educativa (Modelo SITAE)", nextStep: "institucion" },
        { text: "Para una industria o fábrica (Modelo Avanzado)", nextStep: "industrial" },
      ],
    },
    institucion: {
      id: "institucion",
      question: "¿Qué tipo de arquitectura de control prefieres para gestionar los cronogramas horarios de la escuela?",
      options: [
        { 
          text: "Control de timbre offline (Mayor independencia)", 
          nextStep: "fin", 
          basePrice: 470000, 
          result: "Te recomiendo nuestro sistema SITAE configurado para control offline (estilo IPETyM 84). El timbre almacena los cronogramas en hardware local de forma ultra robusta y lo gestionas directo desde cualquier dispositivo sin riesgo por caídas de internet." 
        },
        { 
          text: "Control de timbre online (Acceso remoto global)", 
          nextStep: "fin", 
          basePrice: 470000,
          result: "Te recomiendo nuestro sistema SITAE en su versión online. Podrás modificar horarios escolares o turnos desde cualquier red externa vía web multiplataforma, ideal para administradores remotos." 
        },
      ],
    },
    industrial: {
      id: "industrial",
      question: "¿Cómo debe activarse el sistema de alertas o turnos industriales de la fábrica?",
      options: [
        { 
          text: "Por turnos fijos programados", 
          nextStep: "fin", 
          basePrice: 820000, 
          result: "Te recomendamos un sistema de automatización horaria industrial robusto para fábricas, configurable localmente para sirenas de entrada, salida y descansos sin fallos." 
        },
        { 
          text: "Integrado a sensores de emergencia y pánico", 
          nextStep: "fin", 
          basePrice: 820000,
          result: "Diseñamos una solución de emergencia industrial avanzada a medida que activa alarmas sonoras vinculadas a sensores de seguridad de tus máquinas o pulsadores de pánico de alta potencia con integración de app." 
        },
      ],
    },
  },
  en: {
    inicio: {
      id: "inicio",
      question: "Hello! I am Xidbot, your security and home automation advisor at Xidmet Company. What type of system are you most interested in today?",
      options: [
        { text: "Security Cameras", nextStep: "camaras_tecnologia", icon: "carbon:security-camera" },
        { text: "Home Automation", nextStep: "domotica", icon: "carbon:home" },
        { text: "Smart School Bells / Alarms", nextStep: "timbres", icon: "carbon:alarm" },
      ],
    },
    camaras_tecnologia: {
      id: "camaras_tecnologia",
      question: "What type of video architecture do you prefer to process your cameras?",
      options: [
        { text: "DVR System (HD analog cameras via coaxial cable)", nextStep: "camaras_entorno_dvr" },
        { text: "NVR System (High-resolution IP cameras via network/Wi-Fi)", nextStep: "camaras_entorno_nvr" },
      ],
    },
    camaras_entorno_dvr: {
      id: "camaras_entorno_dvr",
      question: "What kind of environment do you need this analog (DVR) system for?",
      options: [
        { text: "Commercial / Business Use", nextStep: "almacenamiento_dvr_comercio" },
        { text: "Indoor Only / Residential", nextStep: "almacenamiento_dvr_comercio" },
      ],
    },
    almacenamiento_dvr_comercio: {
      id: "almacenamiento_dvr_comercio",
      question: "Where do you prefer to safeguard your DVR recordings?",
      options: [
        { 
          text: "Physical Storage (Secure local Hard Drive)", 
          nextStep: "fin", 
          basePrice: 460000,
          result: "We recommend a robust DVR system with an industrial-grade Western Digital Purple Hard Drive. You will have continuous 24/7 HD analog recording and maximum local privacy without relying on internet connection." 
        },
        { 
          text: "Cloud Storage (Backup on external servers)", 
          nextStep: "fin", 
          basePrice: 460000,
          result: "We suggest a hybrid DVR connected to the internet to configure a secondary cloud backup. Even though the cameras are wired to the local equipment, your critical clips will remain safe externally." 
        },
      ],
    },
    camaras_entorno_nvr: {
      id: "camaras_entorno_nvr",
      question: "What kind of environment are you looking to safeguard with these high-resolution IP cameras (NVR)?",
      options: [
        { text: "Indoor Only", nextStep: "almacenamiento_nvr" },
        { text: "Outdoor / Full Perimeter", nextStep: "almacenamiento_nvr" },
      ],
    },
    almacenamiento_nvr: {
      id: "almacenamiento_nvr",
      question: "What type of storage best fits your IP network security (NVR)?",
      options: [
        { 
          text: "Physical Storage (NVR with dedicated Hard Drive)", 
          nextStep: "fin", 
          basePrice: 620000, // CORREGIDO INGLÉS
          result: "Your best option is a PoE or Wi-Fi NVR kit with local physical storage. It allows processing massive resolutions (4K), continuous streaming without consuming internet bandwidth, and highly reliable offline data retention." 
        },
        { 
          text: "Cloud Storage (Direct digital access and backup)", 
          nextStep: "fin", 
          basePrice: 620000, // CORREGIDO INGLÉS
          result: "We recommend IP cameras linked to a virtual or direct cloud-storage NVR. Perfect for preventing an intruder from destroying physical evidence, guaranteeing access to recordings from anywhere in the world." 
        },
      ],
    },
    domotica: {
      id: "domotica",
      question: "In what environment would you like to deploy our custom automation and custom software?",
      options: [
        { text: "Home (Tailored Residential Smart Home)", nextStep: "domotica_entorno_hogar" },
        { text: "Work / Business / Institution (Full Control)", nextStep: "domotica_entorno_profesional" },
      ],
    },
    domotica_entorno_hogar: {
      id: "domotica_entorno_hogar",
      question: "We build a custom application for your home. What is the primary focus of the software?",
      options: [
        { 
          text: "Access Control (Gate + 3 Smart Rooms + Xidmet App)", 
          nextStep: "fin", 
          basePrice: 570000,
          result: "We will develop a custom application for your home focused on security access. You will be able to manage electronic locks, the automated gate, and perimeter sensors from a unified dashboard designed exclusively for your family." 
        },
        { 
          text: "Presence Simulation (Smart Lighting)", 
          nextStep: "fin", 
          basePrice: 570000,
          result: "We will install smart switches or bulbs managed by a custom app tailored for your house. You can schedule complex automation and smart routines to simulate activity and deter intruders." 
        },
      ],
    },
    domotica_entorno_profesional: {
      id: "domotica_entorno_profesional",
      question: "What priority processes are you looking to optimize with custom software for your workplace or institution?",
      options: [
        { 
          text: "Staff tracking and restricted access control", 
          nextStep: "fin", 
          basePrice: 890000, // CORREGIDO INGLÉS
          result: "We propose an industrial system driven by a custom application developed for your workplace/institution. Automate gates, barriers, and electronic locks using RFID tags, mobile apps, or biometric tracking with real-time logging." 
        },
        { 
          text: "Energy efficiency and automated electric panels", 
          nextStep: "fin", 
          basePrice: 950000, // CORREGIDO INGLÉS
          result: "We design a tailored application connected directly to your electric panels. You can automate climate control, air extractors, and industrial lighting, visualizing live metrics and handling everything from a centralized dashboard." 
        },
      ],
    },
    timbres: {
      id: "timbres",
      question: "We offer specialized hardware. What kind of infrastructure needs the automated system?",
      options: [
        { text: "For an educational institution (SITAE Model)", nextStep: "institucion" },
        { text: "For an industrial facility or factory (Advanced Model)", nextStep: "industrial" },
      ],
    },
    institucion: {
      id: "institucion",
      question: "What type of control architecture do you prefer to manage the school scheduling?",
      options: [
        { 
          text: "Offline bell control (Maximum independence)", 
          nextStep: "fin", 
          basePrice: 470000,
          result: "We recommend our SITAE system configured for offline control (IPETyM 84 style). The bell stores schedules on internal hardware modules in an ultra-robust manner, allowing management straight from any local device without risk from internet drops." 
        },
        { 
          text: "Online bell control (Global remote access)", 
          nextStep: "fin", 
          basePrice: 470000,
          result: "We recommend our SITAE system in its online web-connected version. You will be able to update school schedules or work shifts from any external network via a cross-platform web interface, ideal for remote managers." 
        },
      ],
    },
    industrial: {
      id: "industrial",
      question: "How should the factory alert or shift system be triggered?",
      options: [
        { 
          text: "By fixed pre-programmed shifts", 
          nextStep: "fin", 
          basePrice: 820000,
          result: "We recommend a robust industrial timing system built for factories, customizable locally to fire sirens for entry, exit, and breaks without faults." 
        },
        { 
          text: "Integrated into machinery and emergency panic sensors", 
          nextStep: "fin", 
          basePrice: 820000,
          result: "We design a custom advanced industrial emergency solution that triggers high-output audio alarms linked to safety sensors on your machinery or heavy-duty panic buttons with full application integration." 
        },
      ],
    },
  },
};

export const XIDBOT_DISCLAIMER = {
  es: "⚠️ Este presupuesto es un estimado automático provisto por Xidbot. El valor final puede variar según las condiciones estructurales de la propiedad. Un técnico de Xidmet Company validará el presupuesto mediante un relevamiento final.",
  en: "⚠️ This budget is an automatic estimate provided by Xidbot. The final value may vary based on the structural conditions of the property. A Xidmet Company technician will validate the budget through a final survey."
};