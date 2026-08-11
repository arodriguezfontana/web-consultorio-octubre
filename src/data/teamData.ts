export interface TeamMember {
  id: string;
  name: string;
  role: string;
  schedule: string;
  bio: string;
  image: string;
  badge?: string;
}

export const teamData: TeamMember[] = [
  {
    id: "pro-1",
    name: "Marina Cruz",
    role: "Lic. en Psicología",
    schedule: "Lunes y Miércoles: 14:00 a 19:00 hs",
    bio: "Especialista en consumos problematicos. Evaluación y atención individual y a parejas.",
    image: "./assets/marina-cruz.jpeg",
    badge: "Presencial & Virtual"
  },
  {
    id: "pro-2",
    name: "Alejandra Granito",
    role: "Lic. en Psicología",
    schedule: "Martes y Jueves: 09:00 a 15:00 hs",
    bio: "Dedicada a la evaluación y estimulación del aprendizaje. Articulación constante con escuelas e instituciones educativas.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    badge: "Presencial"
  },
  {
    id: "pro-3",
    name: "Natalia Machetti",
    role: "Lic. en Psicología",
    schedule: "Viernes: 08:00 a 16:00 hs",
    bio: "Especializada en trastornos del desarrollo del lenguaje y estimulación temprana de la comunicación en la infancia.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    badge: "Presencial"
  }
];