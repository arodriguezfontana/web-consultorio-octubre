export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  schedule: string;
  bio: string;
  image: string;
  badge?: string;
}

export const teamData: TeamMember[] = [
  {
    id: "pro-1",
    name: "Lic. María Elena Gómez",
    role: "Psicóloga",
    specialty: "Atención de Niños y Adolescentes",
    schedule: "Lunes y Miércoles: 14:00 a 19:00 hs",
    bio: "Especialista en desarrollo infantil y orientación a padres. Amplia trayectoria en abordajes emocionales y vínculos familiares.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    badge: "Presencial & Virtual"
  },
  {
    id: "pro-2",
    name: "Lic. Sofía Martínez",
    role: "Psicopedagoga",
    specialty: "Procesos de Aprendizaje y PPI",
    schedule: "Martes y Jueves: 09:00 a 15:00 hs",
    bio: "Dedicada a la evaluación y estimulación del aprendizaje. Articulación constante con escuelas e instituciones educativas.",
    image: "https://images.unsplash.com/photo-1580894732413-801a6134a66a?auto=format&fit=crop&w=800&q=80",
    badge: "Presencial"
  },
  {
    id: "pro-3",
    name: "Lic. Clara Rossi",
    role: "Fonoaudióloga",
    specialty: "Lenguaje, Habla y Deglución",
    schedule: "Viernes: 08:00 a 16:00 hs",
    bio: "Especializada en trastornos del desarrollo del lenguaje y estimulación temprana de la comunicación en la infancia.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    badge: "Presencial"
  },
  {
    id: "pro-4",
    name: "Lic. Ana Lucía Fernández",
    role: "Terapista Ocupacional",
    specialty: "Integración Sensorial y Autonomía",
    schedule: "Lunes y Jueves: 13:00 a 18:00 hs",
    bio: "Acompaña a niños y jóvenes en la adquisición de pautas de autonomía diaria y regulación sensorial a través del juego.",
    image: "https://images.unsplash.com/photo-1594824813566-88855ce783d1?auto=format&fit=crop&w=800&q=80",
    badge: "Presencial"
  },
  {
    id: "pro-5",
    name: "Lic. Gonzalo Benítez",
    role: "Psicólogo",
    specialty: "Atención de Adultos y Parejas",
    schedule: "Martes y Viernes: 15:00 a 20:00 hs",
    bio: "Enfoque clínico enfocado en ansiedad, duelos, crisis vitales y acompañamiento en momentos de transición.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    badge: "Presencial & Virtual"
  }
];