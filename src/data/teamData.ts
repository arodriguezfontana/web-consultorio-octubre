export interface TeamMember {
  id: string;
  name: string;
  role: string;
  schedule: string;
  image: string;
  badge?: string;
  license?: string;
  topics?: string[];
}

export const teamData: TeamMember[] = [
  {
    id: "pro-1",
    name: "Marina Cruz",
    role: "Lic. en Psicología",
    schedule: "Lunes y Miércoles: 14:00 a 19:00 hs",
    image: "/assets/marina-cruz.jpeg",
    badge: "Presencial & Virtual",
    topics: [
      "Especialista en consumos problemáticos",
      "Evaluación y atención individual",
      "Terapia de pareja"
    ]
  },
  {
    id: "pro-3",
    name: "Natalia Machetti",
    role: "Lic. en Psicología",
    schedule: "Viernes: 08:00 a 16:00 hs",
    image: "/assets/natalia-machetti.jpeg",
    badge: "Presencial & Virtual",
    topics: [
      "TCC",
      "Especialista en infanto juvenil y adultos",
      "Estimuladora temprana",
      "Psicotecnicos y aptos",
      "Orientacion vocacional",
      "Orientacion a familias",
    ]
  },
];