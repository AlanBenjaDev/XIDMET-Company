export interface BotStep {
  id: string;
  question: string;
  options: {
    text: string;
    nextStep: string;
    result?: string;
    icon?: string;       // Identificador para Iconify
  }[];
}

export const XIDBOT_FLOWS: Record<"es" | "en", Record<string, BotStep>> = {
  es: {
    inicio: {
      id: "inicio",
      question: "¡Hola! Soy Xidbot, tu asistente de Xidmet Company. ¿Qué tipo de solución estás buscando para tu espacio hoy?",
      options: [
        { text: "Cámaras de Seguridad", nextStep: "camaras_tecnologia", icon: "carbon:security-camera" },
        { text: "Automatización de Luces, Portones o Accesos", nextStep: "domotica", icon: "carbon:home" },
        { text: "Sistemas de Timbres y Alertas Automáticas", nextStep: "timbres", icon: "carbon:alarm" },
      ],
    },
    // === FLUJO 1: CÁMARAS ===
    camaras_tecnologia: {
      id: "camaras_tecnologia",
      question: "¿Qué tipo de instalación preferís para tus cámaras de seguridad?",
      options: [
        { text: "Instalación clásica (cámaras conectadas con cables tradicionales)", nextStep: "camaras_entorno_dvr" },
        { text: "Instalación digital (cámaras modernas de alta definición por Wi-Fi o cable de red)", nextStep: "camaras_entorno_nvr" },
      ],
    },
    camaras_entorno_dvr: {
      id: "camaras_entorno_dvr",
      question: "¿Dónde vas a colocar este sistema de cámaras tradicional?",
      options: [
        { text: "En mi casa o vivienda", nextStep: "almacenamiento_dvr_comercio" },
        { text: "En mi negocio, comercio o local", nextStep: "almacenamiento_dvr_comercio" },
      ],
    },
    almacenamiento_dvr_comercio: {
      id: "almacenamiento_dvr_comercio",
      question: "¿De qué manera te gustaría guardar los videos que graben las cámaras?",
      options: [
        { 
          text: "Guardar en un disco físico (se graba de forma segura dentro de tu propiedad sin usar internet)", 
          nextStep: "fin", 
          result: "Te sugerimos un kit de cámaras cableadas con un disco de almacenamiento interno para tu propiedad. Este sistema guarda todo de forma continua las 24 horas con total privacidad y funciona de manera automática, sin importar si tu conexión a internet tiene problemas o se corta." 
        },
        { 
          text: "Guardar con respaldo en internet (copia de seguridad en la nube para mayor tranquilidad)", 
          nextStep: "fin", 
          result: "Te recomendamos un sistema de cámaras con almacenamiento local y respaldo automático en internet. De esta forma, los momentos más importantes se guardan fuera de tu propiedad para que no pierdas ninguna grabación si llega a ocurrir un imprevisto técnico." 
        },
      ],
    },
    camaras_entorno_nvr: {
      id: "camaras_entorno_nvr",
      question: "¿Qué sectores te interesa vigilar con estas cámaras de alta definición?",
      options: [
        { text: "Solo las habitaciones y ambientes interiores", nextStep: "almacenamiento_nvr" },
        { text: "Los patios, entradas y todo el exterior del lugar", nextStep: "almacenamiento_nvr" },
      ],
    },
    almacenamiento_nvr: {
      id: "almacenamiento_nvr",
      question: "¿Cómo preferís ver y asegurar tus grabaciones en alta definición?",
      options: [
        { 
          text: "Guardado local de alta velocidad (máxima calidad de imagen en tu monitor o tele sin gastar datos de internet)", 
          nextStep: "fin", 
          result: "Tu mejor opción es un kit digital premium con almacenamiento físico centralizado. Te permite ver imágenes con el mayor nivel de detalle y guardar un historial largo de días de grabación sin poner lenta la red de internet de tu hogar o comercio." 
        },
        { 
          text: "Guardado directo en internet (para ver todo desde el celular y evitar que un intruso rompa el grabador)", 
          nextStep: "fin", 
          result: "Te recomendamos cámaras digitales con almacenamiento directo en internet. Es la solución ideal para evitar que un intruso intente dañar los equipos físicos para borrar evidencia, asegurándote acceso inmediato a los videos desde tu celular en cualquier lugar del mundo." 
        },
      ],
    },
    // === FLUJO 2: DOMÓTICA ===
    domotica: {
      id: "domotica",
      question: "¿En qué tipo de propiedad te gustaría sumar automatizaciones controladas desde el celular?",
      options: [
        { text: "En mi casa o departamento", nextStep: "domotica_entorno_hogar" },
        { text: "En mi lugar de trabajo, oficina o empresa", nextStep: "domotica_entorno_profesional" },
      ],
    },
    domotica_entorno_hogar: {
      id: "domotica_entorno_hogar",
      question: "Armaremos una aplicación exclusiva para tu teléfono. ¿Qué es lo más importante que querés controlar?",
      options: [
        { 
          text: "Accesos seguros (abrir el portón, trabar cerraduras y ver alarmas desde la aplicación)", 
          nextStep: "fin", 
          result: "Diseñaremos una aplicación a medida para vos y tu familia enfocada en los accesos. Vas a poder abrir o cerrar cerraduras electrónicas, activar el portón automático de la cochera y revisar sensores de movimiento desde una sola pantalla fácil de usar." 
        },
        { 
          text: "Simular que hay gente (prender y apagar luces automáticamente para alejar intrusos)", 
          nextStep: "fin", 
          result: "Instalaremos un sistema de iluminación inteligente conectado a una aplicación personalizada para tu casa. Vas a poder programar horarios fijos o rutinas automáticas para que las luces se manejen solas cuando salís de viaje, haciendo creer que hay gente en el lugar." 
        },
      ],
    },
    domotica_entorno_profesional: {
      id: "domotica_entorno_profesional",
      question: "¿Qué problema principal necesitás resolver con una aplicación personalizada en tu trabajo?",
      options: [
        { 
          text: "Control de ingresos del personal y horarios de entrada/salida", 
          nextStep: "fin", 
          result: "Te proponemos un sistema de control de accesos con software a medida para tu empresa. Podrás automatizar molinetes, portones de estacionamiento o puertas de oficinas mediante tarjetas, el celular o sensores, registrando de forma automática quién entra y sale en tiempo real." 
        },
        { 
          text: "Ahorrar energía y apagar luces o tableros eléctricos automáticamente", 
          nextStep: "fin", 
          result: "Diseñamos una aplicación centralizada conectada directamente a los tableros eléctricos de tu empresa. Vas a poder programar el encendido y apagado automático de luces de la fábrica, extractores o aires acondicionados para evitar gastos innecesarios, controlando todo desde tu celular." 
        },
      ],
    },
    // === FLUJO 3: TIMBRES ===
    timbres: {
      id: "timbres",
      question: "¿Para qué tipo de lugar estás necesitando un sistema automático de timbres o sirenas?",
      options: [
        { text: "Para una escuela, colegio o institución educativa (Modelo SITAE)", nextStep: "institucion" },
        { text: "Para una fábrica, taller o planta industrial", nextStep: "industrial" },
      ],
    },
    institucion: {
      id: "institucion",
      question: "¿De qué manera preferís configurar y cambiar los horarios de los timbres y recreos?",
      options: [
        { 
          text: "Sistema Autónomo (guarda los horarios internamente en el aparato y cambia los timbres sin usar internet)", 
          nextStep: "fin", 
          result: "Te recomendamos nuestro sistema SITAE configurado de forma autónoma. El equipo guarda todo el calendario escolar en su memoria interna; vas a poder cambiar los horarios del colegio desde cualquier celular o computadora interna conectándote directo al aparato, sin preocuparte si se corta el internet." 
        },
        { 
          text: "Sistema Conectado (para cambiar los horarios desde cualquier lugar del mundo a través de una página web)", 
          nextStep: "fin", 
          result: "Te recomendamos nuestro sistema SITAE en su versión conectada a la red. Vas a poder modificar las horas de los recreos, timbres de entrada o salidas de forma remota a través de una página web exclusiva, ideal para directivos que necesitan gestionar los turnos a distancia." 
        },
      ],
    },
    industrial: {
      id: "industrial",
      question: "¿Cómo preferís que trabaje el sistema de sirenas de tu fábrica?",
      options: [
        { 
          text: "Por horarios fijos automáticos (para marcar los cambios de turno, entradas y descansos)", 
          nextStep: "fin", 
          result: "Te recomendamos nuestro sistema de automatización horaria industrial para fábricas. Permite programar de manera exacta las sirenas para avisar el inicio de la jornada, los descansos del personal y los cambios de turno sin ningún tipo de fallas o retrasos en el reloj." 
        },
        { 
          text: "Conectado a botones de emergencia y sensores de peligro de las máquinas", 
          nextStep: "fin", 
          result: "Diseñamos una solución de seguridad industrial a medida. El sistema activa sirenas de gran potencia conectadas de forma directa a botones de pánico estratégicos o sensores de falla de las máquinas, enviando además una notificación de alerta inmediata a tu celular ante cualquier inconveniente." 
        },
      ],
    },
  },
  en: {
    inicio: {
      id: "inicio",
      question: "Hello! I am Xidbot, your helper from Xidmet Company. What kind of solution are you looking for today?",
      options: [
        { text: "Security Cameras", nextStep: "camaras_tecnologia", icon: "carbon:security-camera" },
        { text: "Smart Lights, Gates or Access Automation", nextStep: "domotica", icon: "carbon:home" },
        { text: "Automated Bells & Industrial Sirens", nextStep: "timbres", icon: "carbon:alarm" },
      ],
    },
    camaras_tecnologia: {
      id: "camaras_tecnologia",
      question: "What installation setup do you prefer for your security cameras?",
      options: [
        { text: "Classic Setup (cameras connected with traditional secure wires)", nextStep: "camaras_entorno_dvr" },
        { text: "Digital Setup (modern high-definition cameras via Wi-Fi or network cables)", nextStep: "camaras_entorno_nvr" },
      ],
    },
    camaras_entorno_dvr: {
      id: "camaras_entorno_dvr",
      question: "Where will you install this traditional camera system?",
      options: [
        { text: "At my house or home property", nextStep: "almacenamiento_dvr_comercio" },
        { text: "At my store, office or business shop", nextStep: "almacenamiento_dvr_comercio" },
      ],
    },
    almacenamiento_dvr_comercio: {
      id: "almacenamiento_dvr_comercio",
      question: "How would you like to save your security recordings?",
      options: [
        { 
          text: "Save on a physical drive (records safely inside your property without using the internet)", 
          nextStep: "fin", 
          result: "We recommend a wired camera setup with a local internal storage drive for your property. This system records 24/7 with complete privacy inside your building and works automatically, even if your internet connection goes down." 
        },
        { 
          text: "Save with internet backup (cloud backup for extra peace of mind)", 
          nextStep: "fin", 
          result: "We suggest a camera system with local storage and automated cloud backup. This way, your most important video moments are saved outside your property so you don't lose any recordings if an unexpected technical problem occurs." 
        },
      ],
    },
    camaras_entorno_nvr: {
      id: "camaras_entorno_nvr",
      question: "Which areas do you want to watch with these high-definition cameras?",
      options: [
        { text: "Indoor rooms and inside spaces only", nextStep: "almacenamiento_nvr" },
        { text: "Yards, entrance gates and the entire outside perimeter", nextStep: "almacenamiento_nvr" },
      ],
    },
    almacenamiento_nvr: {
      id: "almacenamiento_nvr",
      question: "How would you prefer to view and secure your high-definition video files?",
      options: [
        { 
          text: "High-speed local vault (maximum picture quality on your monitor or TV without slowing down your internet)", 
          nextStep: "fin", 
          result: "Your ideal option is a premium digital kit with centralized physical local storage. It processes video feeds in maximum detail and keeps a long history of recording days without slowing down your home or office internet network." 
        },
        { 
          text: "Direct internet saving (to view everything on your phone and prevent intruders from breaking the recorder)", 
          nextStep: "fin", 
          result: "We recommend digital cameras configured with direct cloud video storage. This is the ideal solution to prevent an intruder from damaging the physical equipment to delete evidence, guaranteeing immediate video access from your mobile phone anywhere in the world." 
        },
      ],
    },
    domotica: {
      id: "domotica",
      question: "What type of property would you like to upgrade with automated mobile phone controls?",
      options: [
        { text: "My house or home apartment", nextStep: "domotica_entorno_hogar" },
        { text: "My workplace, office room or company facility", nextStep: "domotica_entorno_profesional" },
      ],
    },
    domotica_entorno_hogar: {
      id: "domotica_entorno_hogar",
      question: "We will build an exclusive app for your mobile phone. What is the most important item to control?",
      options: [
        { 
          text: "Secure Access (open main gates, snap smart locks and view alarms from the app)", 
          nextStep: "fin", 
          result: "We will engineer a custom mobile app for you and your family centered around access control. You will be able to lock or unlock electronic doors, trigger the automated garage gate, and monitor security sensors from a single, easy-to-use digital screen." 
        },
        { 
          text: "Simulate presence (turn lights on and off automatically to keep intruders away)", 
          nextStep: "fin", 
          result: "We will implement an intelligent lighting setup connected to a tailored app for your house. You can schedule fixed times or automatic routines so your lights manage themselves when you travel, making it look like people are inside." 
        },
      ],
    },
    domotica_entorno_profesional: {
      id: "domotica_entorno_profesional",
      question: "What primary operational problem do you need to solve with a custom app at work?",
      options: [
        { 
          text: "Employee time-tracking logs and smart access to secure areas", 
          nextStep: "fin", 
          result: "We propose an access control package with custom software designed for your company. You can automate turnstiles, parking gates, or office doors via cards, mobile authorization, or sensors, generating automatic logs of personnel activity in real time." 
        },
        { 
          text: "Save energy and turn off industrial lights or electric panels automatically", 
          nextStep: "fin", 
          result: "We engineer a centralized application connected directly to your facility's electrical distribution panels. You can schedule industrial lights, fans, or air conditioners to turn off automatically to remove utility waste, controlling everything from your mobile app." 
        },
      ],
    },
    timbres: {
      id: "timbres",
      question: "What type of facility needs an automated bell or siren scheduling system?",
      options: [
        { text: "A school, college or educational center (SITAE Model)", nextStep: "institucion" },
        { text: "A factory, production site or industrial plant", nextStep: "industrial" },
      ],
    },
    institucion: {
      id: "institucion",
      question: "How would you prefer to set up and adjust your daily bell schedules and recess routines?",
      options: [
        { 
          text: "Standalone Mode (saves schedules inside the device memory and rings bells without using the internet)", 
          nextStep: "fin", 
          result: "We recommend our exclusive SITAE school bell system configured for offline standalone operation. The device logs the entire school calendar directly onto its local internal memory; you can modify schedules using any local phone or computer with zero downtime risks from internet drops." 
        },
        { 
          text: "Connected Web Mode (to change schedules from any location using a secure webpage)", 
          nextStep: "fin", 
          result: "We recommend our network-connected version of the SITAE system. Administrators can adjust shift changes, exam alerts, or recess intervals remotely through an exclusive secure web portal, perfect for school managers handling facilities from a distance." 
        },
      ],
    },
    industrial: {
      id: "industrial",
      question: "How should your industrial plant alert siren system operate?",
      options: [
        { 
          text: "By fixed automatic schedules (to indicate shift rotations, start times and lunch breaks)", 
          nextStep: "fin", 
          result: "We recommend our industrial timing automation system built for plants and factories. It allows exact scheduling of factory sirens to indicate shift handovers, worker break intervals, and end-of-day timelines with absolute precision and no internal clock delays." 
        },
        { 
          text: "Connected to emergency panic buttons and machinery hazard sensors", 
          nextStep: "fin", 
          result: "We design an advanced, custom industrial safety siren layout. The system activates heavy-duty audio alarms tied directly to strategically placed panic triggers or machine failure sensors, instantly broadcasting alert warnings through your mobile management app." 
        },
      ],
    },
  },
};

export const XIDBOT_DISCLAIMER = {
  es: "⚠️ Este resumen es una guía automática provista por Xidbot. Un técnico de Xidmet Company se contactará con vos para relevar tu espacio de forma presencial y entregarte una propuesta final.",
  en: "⚠️ This summary is an automatic guide provided by Xidbot. A Xidmet Company technician will contact you to evaluate your space on-site and deliver a final proposal."
};