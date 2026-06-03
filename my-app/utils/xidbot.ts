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
      question: "¡Hola! Soy Xidbot, tu asesor inteligente de Xidmet Company. ¿Qué solución te gustaría armar hoy para proteger o automatizar tu espacio?",
      options: [
        { text: "Cámaras de Seguridad", nextStep: "camaras_tecnologia", icon: "carbon:security-camera" },
        { text: "Automatización de Luces, Portones y Accesos", nextStep: "domotica", icon: "carbon:home" },
        { text: "Sistemas de Timbres y Alertas Automáticas", nextStep: "timbres", icon: "carbon:alarm" },
      ],
    },
    // === FLUJO 1: CÁMARAS ===
    camaras_tecnologia: {
      id: "camaras_tecnologia",
      question: "¿Qué nivel de definición y tipo de instalación estás buscando para tus cámaras?",
      options: [
        { text: "Sistema Estándar (Cámaras HD conectadas por cableado tradicional)", nextStep: "camaras_entorno_dvr" },
        { text: "Sistema Premium (Cámaras de Alta Resolución conectadas por red digital o Wi-Fi)", nextStep: "camaras_entorno_nvr" },
      ],
    },
    camaras_entorno_dvr: {
      id: "camaras_entorno_dvr",
      question: "¿En qué tipo de propiedad vas a instalar este sistema de cámaras tradicional?",
      options: [
        { text: "Para mi Comercio o Negocio", nextStep: "almacenamiento_dvr_comercio" },
        { text: "Para mi Casa (Uso Residencial)", nextStep: "almacenamiento_dvr_comercio" },
      ],
    },
    almacenamiento_dvr_comercio: {
      id: "almacenamiento_dvr_comercio",
      question: "¿Cómo preferís guardar los videos de seguridad de tus cámaras?",
      options: [
        { 
          text: "En una memoria física local (Grabación continua en mi propiedad, máxima privacidad)", 
          nextStep: "fin", 
          basePrice: 460000, 
          result: "Te recomendamos nuestro sistema de grabación cableado con un disco de almacenamiento interno de alta seguridad. Tus cámaras grabarán de forma continua las 24 horas con total privacidad dentro de tu propiedad, funcionando de forma autónoma sin depender de que tu internet ande bien." 
        },
        { 
          text: "Respaldo en internet (Copia de seguridad en la nube para mayor tranquilidad)", 
          nextStep: "fin", 
          basePrice: 460000,
          result: "Te sugerimos nuestro sistema centralizado con respaldo digital en internet. Aunque tus cámaras estén conectadas por cable en tu propiedad, los fragmentos de video más importantes se guardarán de forma externa para que no pierdas ninguna evidencia si ocurre un imprevisto técnico." 
        },
      ],
    },
    camaras_entorno_nvr: {
      id: "camaras_entorno_nvr",
      question: "¿Qué zonas prioritarias necesitás cubrir con estas cámaras de alta resolución?",
      options: [
        { text: "Solo ambientes interiores", nextStep: "almacenamiento_nvr" },
        { text: "Zonas exteriores y todo el perímetro del lugar", nextStep: "almacenamiento_nvr" },
      ],
    },
    almacenamiento_nvr: {
      id: "almacenamiento_nvr",
      question: "¿De qué manera preferís acceder y resguardar las grabaciones de alta definición?",
      options: [
        { 
          text: "Guardado local de alta velocidad (Máxima calidad de imagen sin consumir tus datos de internet)", 
          nextStep: "fin", 
          basePrice: 620000, 
          result: "Tu mejor opción es nuestro kit digital premium con almacenamiento físico centralizado. Te permite procesar imágenes en altísima calidad (4K) y mantener un historial largo de grabaciones continuas sin ralentizar tu red de internet hogareña o comercial." 
        },
        { 
          text: "Guardado directo en la nube (Acceso total desde tu celular y protección antifraude)", 
          nextStep: "fin", 
          basePrice: 620000, 
          result: "Te recomendamos nuestras cámaras digitales con almacenamiento directo en internet. Es el sistema ideal para evitar que un intruso intente dañar el equipo físico para borrar evidencia, asegurándote el acceso inmediato a todos los videos desde cualquier parte del mundo a través de tu celular." 
        },
      ],
    },
    // === FLUJO 2: DOMÓTICA ===
    domotica: {
      id: "domotica",
      question: "¿En qué tipo de espacio te gustaría implementar nuestra automatización y software a medida?",
      options: [
        { text: "En mi Hogar (Hacer mi casa inteligente y personalizada)", nextStep: "domotica_entorno_hogar" },
        { text: "En mi Empresa, Oficina o Institución (Control de procesos y accesos)", nextStep: "domotica_entorno_profesional" },
      ],
    },
    domotica_entorno_hogar: {
      id: "domotica_entorno_hogar",
      question: "Diseñamos una aplicación exclusiva para tu celular. ¿Cuál es el objetivo principal que buscás?",
      options: [
        { 
          text: "Control Total de Accesos (Manejar el portón, cerraduras y alarmas desde la App)", 
          nextStep: "fin", 
          basePrice: 570000, 
          result: "Desarrollaremos una aplicación a medida para tu familia enfocada en el control de accesos. Podrás abrir o cerrar cerraduras electrónicas, activar el portón automático y revisar sensores de movimiento desde una pantalla única, intuitiva y fácil de usar." 
        },
        { 
          text: "Simulación de Presencia (Control inteligente de luces para disuadir intrusos)", 
          nextStep: "fin", 
          basePrice: 570000,
          result: "Instalaremos un sistema de iluminación inteligente vinculado a una aplicación personalizada para tu casa. Vas a poder programar rutinas para que las luces se enciendan y apaguen solas cuando viajás, simulando que hay gente en la propiedad para mantener alejados a los intrusos." 
        },
      ],
    },
    domotica_entorno_profesional: {
      id: "domotica_entorno_profesional",
      question: "¿Qué control prioritario necesitás resolver con nuestra aplicación a medida para tu espacio de trabajo?",
      options: [
        { 
          text: "Control de horarios del personal y zonas restringidas", 
          nextStep: "fin", 
          basePrice: 890000, 
          result: "Te proponemos un sistema corporativo con software desarrollado a medida para tu empresa. Vas a poder automatizar molinetes, barreras de estacionamiento o puertas de oficinas mediante tarjetas de proximidad, reconocimiento o el celular, registrando de forma automática quién entra y sale en tiempo real." 
        },
        { 
          text: "Ahorro de energía y automatización de tableros eléctricos", 
          nextStep: "fin", 
          basePrice: 950000, 
          result: "Diseñamos una aplicación centralizada conectada directamente a los tableros eléctricos de tu empresa. Podrás programar el encendido automático de luces industriales, extractores o aire acondicionado para evitar gastos innecesarios, controlando todo desde un panel digital muy fácil de entender." 
        },
      ],
    },
    // === FLUJO 3: TIMBRES ===
    timbres: {
      id: "timbres",
      question: "Ofrecemos sistemas automatizados de alta precisión. ¿Para qué tipo de establecimiento lo requerís?",
      options: [
        { text: "Para una Escuela o Institución Educativa (Modelo Escolar SITAE)", nextStep: "institucion" },
        { text: "Para una Fábrica o Planta Industrial (Modelo de Turnos y Alertas)", nextStep: "industrial" },
      ],
    },
    institucion: {
      id: "institucion",
      question: "¿Cómo preferís gestionar los horarios de entrada, salida y recreos del colegio?",
      options: [
        { 
          text: "Sistema Autónomo (Funciona de forma interna en la escuela sin depender de internet)", 
          nextStep: "fin", 
          basePrice: 470000, 
          result: "Te recomendamos nuestro sistema exclusivo SITAE configurado de forma autónoma. El equipo almacena todo el calendario de horarios en su memoria interna de forma ultra segura; vas a poder cambiar los horarios del colegio desde cualquier celular o computadora interna sin preocuparte si se corta el servicio de internet." 
        },
        { 
          text: "Sistema Conectado (Gestión remota de los horarios desde cualquier lugar vía web)", 
          nextStep: "fin", 
          basePrice: 470000,
          result: "Te recomendamos nuestro sistema SITAE en su versión conectada a la red. Vas a poder modificar las horas de los recreos, timbres o cambios de turno de la escuela de forma remota a través de una página web exclusiva, ideal para directivos que necesitan gestionar el establecimiento a distancia." 
        },
      ],
    },
    industrial: {
      id: "industrial",
      question: "¿De qué manera debe activarse el sistema de sirenas o alertas de tu fábrica?",
      options: [
        { 
          text: "Por horarios fijos programados (Cambios de turno y descansos)", 
          nextStep: "fin", 
          basePrice: 820000, 
          result: "Te recomendamos nuestro sistema de automatización horaria industrial para fábricas. Permite configurar de manera exacta las sirenas para marcar el inicio de jornada, los descansos del personal y la salida sin ningún tipo de fallas o retrasos." 
        },
        { 
          text: "Vinculado a botones de emergencia y sensores de peligro", 
          nextStep: "fin", 
          basePrice: 820000,
          result: "Diseñamos una solución de seguridad industrial avanzada a medida. El sistema activa sirenas de alta potencia conectadas directamente a botones de pánico estratégicos o sensores de emergencia de las máquinas, enviando un aviso inmediato a tu aplicación móvil ante cualquier eventualidad." 
        },
      ],
    },
  },
  en: {
    inicio: {
      id: "inicio",
      question: "Hello! I am Xidbot, your smart advisor from Xidmet Company. How can I help you secure or automate your space today?",
      options: [
        { text: "Security Cameras", nextStep: "camaras_tecnologia", icon: "carbon:security-camera" },
        { text: "Smart Lights, Gates & Access Automation", nextStep: "domotica", icon: "carbon:home" },
        { text: "Automated Bells & Industrial Sirens", nextStep: "timbres", icon: "carbon:alarm" },
      ],
    },
    camaras_tecnologia: {
      id: "camaras_tecnologia",
      question: "What image quality and installation setup are you looking for?",
      options: [
        { text: "Standard Setup (HD cameras via traditional secure cabling)", nextStep: "camaras_entorno_dvr" },
        { text: "Premium Setup (Ultra High-Definition digital cameras via network or Wi-Fi)", nextStep: "camaras_entorno_nvr" },
      ],
    },
    camaras_entorno_dvr: {
      id: "camaras_entorno_dvr",
      question: "What kind of property are you planning to secure with this traditional camera setup?",
      options: [
        { text: "For my Business or Commercial Shop", nextStep: "almacenamiento_dvr_comercio" },
        { text: "For my House (Residential Use)", nextStep: "almacenamiento_dvr_comercio" },
      ],
    },
    almacenamiento_dvr_comercio: {
      id: "almacenamiento_dvr_comercio",
      question: "How would you prefer to store your security recordings?",
      options: [
        { 
          text: "On a secure local hard drive (Maximum privacy, records inside your property)", 
          nextStep: "fin", 
          basePrice: 460000,
          result: "We recommend our wired security setup featuring an industrial local storage drive. Your cameras will record 24/7 with total privacy within your property, functioning completely independent of your internet connection status." 
        },
        { 
          text: "Cloud backup connection (Digital copy on external secure servers for safety)", 
          nextStep: "fin", 
          basePrice: 460000,
          result: "We suggest our centralized system with automatic cloud backup features. Even though the cameras are safely hardwired to your local station, critical video snapshots will replicate to external web servers, protecting your data against physical tampering." 
        },
      ],
    },
    camaras_entorno_nvr: {
      id: "camaras_entorno_nvr",
      question: "Which primary areas do you need to safeguard with these ultra-clear cameras?",
      options: [
        { text: "Indoor areas and rooms only", nextStep: "almacenamiento_nvr" },
        { text: "Outdoor spaces and the property's entire perimeter", nextStep: "almacenamiento_nvr" },
      ],
    },
    almacenamiento_nvr: {
      id: "almacenamiento_nvr",
      question: "How would you prefer to handle and secure your ultra-high-definition video footage?",
      options: [
        { 
          text: "Local high-speed hardware vault (Maximum video resolution without slowing down your internet)", 
          nextStep: "fin", 
          basePrice: 620000, 
          result: "Your ideal selection is our digital premium kit with centralized physical local storage. It processes video feeds in maximum details (4K) and retains a long history of continuous footage without consuming your office or household internet bandwidth." 
        },
        { 
          text: "Direct cloud synchronization (Total remote mobile phone access and anti-theft storage)", 
          nextStep: "fin", 
          basePrice: 620000, 
          result: "We recommend our digital cameras configured with direct cloud video storage. This setup guarantees that even if an intruder attempts to damage your local device, all critical evidence is already safely backed up on the internet, accessible from your mobile app anywhere in the world." 
        },
      ],
    },
    domotica: {
      id: "domotica",
      question: "What type of environment would you like to upgrade with our custom software automation?",
      options: [
        { text: "My Home (Building a personalized Smart Home layout)", nextStep: "domotica_entorno_hogar" },
        { text: "My Workplace, Office, or School (Process optimization and staff tracking)", nextStep: "domotica_entorno_profesional" },
      ],
    },
    domotica_entorno_hogar: {
      id: "domotica_entorno_hogar",
      question: "We build an exclusive application for your phone. What is your primary objective?",
      options: [
        { 
          text: "Unified Access Control (Manage main gates, smart locks, and alarms via app)", 
          nextStep: "fin", 
          basePrice: 570000,
          result: "We will engineer a custom mobile app for your home centered around user access control. You will be able to lock or unlock electronic doors, trigger the main garage gate, and monitor security sensors from a single, clean, user-friendly digital screen." 
        },
        { 
          text: "Smart Activity Simulation (Automated lighting to deter home break-ins)", 
          nextStep: "fin", 
          basePrice: 570000,
          result: "We will implement an intelligent lighting matrix connected to a tailored app for your house. You can schedule lights to automatically turn on and off while you travel, simulating normal family activity to effectively keep intruders away." 
        },
      ],
    },
    domotica_entorno_profesional: {
      id: "domotica_entorno_profesional",
      question: "What core operations do you need to manage with our custom enterprise software?",
      options: [
        { 
          text: "Employee time-tracking and restricted security areas", 
          nextStep: "fin", 
          basePrice: 890000, 
          result: "We propose an enterprise security package driven by custom software designed for your company. You can automate turnstiles, parking gates, or office doors via secure proximity badges, mobile authorization, or smart sensors, generating real-time logs of personnel activity automatically." 
        },
        { 
          text: "Energy efficiency maps and automated electric distribution panels", 
          nextStep: "fin", 
          basePrice: 950000, 
          result: "We engineer a centralized application connected directly to your facility's electrical infrastructure. You can automate high-power machinery, industrial cooling, ventilation, or lighting grids to remove energy waste, viewing consumption metrics on an intuitive dashboard." 
        },
      ],
    },
    timbres: {
      id: "timbres",
      question: "We deploy precision hardware schedules. What type of facility is this for?",
      options: [
        { text: "For a School or Educational Center (SITAE Automated Bell System)", nextStep: "institucion" },
        { text: "For a Factory or Industrial Plant (Shift Changes and Safety Sirens)", nextStep: "industrial" },
      ],
    },
    institucion: {
      id: "institucion",
      question: "How would you prefer to manage your school's daily bell schedule and recess routines?",
      options: [
        { 
          text: "Standalone Mode (Operates internally inside the school without relying on internet)", 
          nextStep: "fin", 
          basePrice: 470000,
          result: "We recommend our exclusive SITAE school bell system configured for offline standalone operation. The device securely logs the entire academic calendar directly onto its local internal memory modules; you can modify schedules using any local tablet or computer with zero down-time risks from external internet drops." 
        },
        { 
          text: "Connected Web Mode (Remote calendar management from any location via web app)", 
          nextStep: "fin", 
          basePrice: 470000,
          result: "We recommend our network-connected version of the SITAE system. Administrators can dynamically adjust shift changes, exam alerts, or recess intervals remotely through an exclusive secure web portal, perfect for school managers handling facilities from a distance." 
        },
      ],
    },
    industrial: {
      id: "industrial",
      question: "How should your industrial siren or manufacturing alert system be triggered?",
      options: [
        { 
          text: "By pre-set automated time windows (Shift rotations and lunch breaks)", 
          nextStep: "fin", 
          basePrice: 820000,
          result: "We recommend our industrial timing automation system built for plants and factories. It allows exact scheduling of factory sirens to indicate shift handovers, worker break intervals, and end-of-day timelines with absolute precision and no internal clock delays." 
        },
        { 
          text: "Linked to emergency panic triggers and machine safety sensors", 
          nextStep: "fin", 
          basePrice: 820000,
          result: "We design an advanced, custom industrial hazard defense matrix. The system deploys heavy-duty audio alarms tied directly to strategically placed panic buttons or machinery failure sensors, instantly broadcasting alerts through your mobile management app in case of emergency." 
        },
      ],
    },
  },
};

export const XIDBOT_DISCLAIMER = {
  es: "⚠️ Este presupuesto es un estimado automático provisto por Xidbot. El valor final puede variar según las condiciones estructurales de la propiedad. Un técnico de Xidmet Company validará el presupuesto mediante un relevamiento final presencial.",
  en: "⚠️ This budget is an automatic estimate provided by Xidbot. The final value may vary based on the property's structural conditions. A Xidmet Company technician will validate the final proposal during an on-site evaluation."
};