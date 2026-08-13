export const siteData = {
  name: "Espacio Octubre",
  legalName: "Espacio Octubre",
  subtitle: "Salud Mental Integral",
  description: "Un espacio de escucha, acompañamiento y transformación. Atención especializada para niños, adolescentes y adultos.",
  
  seo: {
    siteUrl: "https://consultoriooctubre.com",
    ogImage: "/og-image.jpg",
    twitterHandle: "@espaciooctubre",
    keywords: ["consultorio integral", "psicologia bernal", "psicologia virtual", "terapia adultos", "salud mental", "terapia infantil"]
  },

  location: {
    address: "Constitución 25",
    city: "Bernal",
    state: "Provincia de Buenos Aires",
    zipCode: "B1876",
    country: "AR",
    geo: {
      latitude: "-34.7067388",
      longitude: "-58.2850108"
    },
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.361491768403!2d-58.2875857!3d-34.7067388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33200debf62fb%3A0xce566cc36da33be3!2sConstituci%C3%B3n%2025%2C%20B1876AKF%20Bernal%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
  },

  contact: {
    phone: "+5491131982012",
    phoneDisplay: "+54 9 11 3198-2012",
    whatsappUrl: "https://wa.me/5491131982012?text=Hola!%20Quisiera%20consultar%20por%20un%20turno%20de%20psicología%20en%20Espacio%20Octubre.",
    email: "contacto@consultoriooctubre.com",
    hours: "Lun a Vie: 08:00 - 20:00 hs / Sab: 9:00 - 18:00 hs",
    modality: "Atención presencial y virtual"
  },

  social: {
    instagram: "https://www.instagram.com/espacio.octubre/",
    facebook: "",
    linkedin: "",
    twitter: "", 
    tiktok: "",
    youtube: ""
  }
} as const;

export type SiteData = typeof siteData;