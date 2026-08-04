export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  badge?: string;
  borderColorClass: string; 
}

export const servicesData: ServiceItem[] = [
  {
    id: "psicologia",
    title: "Psicología",
    subtitle: "Niños, Adolescentes y Adultos",
    description: "Espacio de escucha y acompañamiento terapéutico orientado a alojar las distintas problemáticas emocionales, vinculares y del desarrollo en cada etapa de la vida.",
    items: [
      "Psicoterapia individual para niños y adolescentes",
      "Orientación a padres y familias",
      "Atención psicológica para adultos",
      "Evaluación y diagnóstico clínico"
    ],
    badge: "Presencial & Virtual",
    borderColorClass: "border-t-primary"
  },
  {
    id: "psicopedagogia",
    title: "Psicopedagogía",
    subtitle: "Procesos de Aprendizaje & Orientación",
    description: "Abordaje enfocado en potenciar y acompañar los procesos de aprendizaje, detectando fortalezas y dificultades en el ámbito escolar y cotidiano.",
    items: [
      "Evaluación psicopedagógica integral",
      "Tratamiento y estimulación del aprendizaje",
      "Orientación a instituciones educativas (PPI)",
      "Técnicas de estudio y hábitos de aprendizaje"
    ],
    borderColorClass: "border-t-primary" 
  },
  {
    id: "fonoaudiologia",
    title: "Fonoaudiología",
    subtitle: "Comunicación, Lenguaje y Habla",
    description: "Evaluación y tratamiento de las alteraciones del lenguaje, el habla, la voz y las funciones estomatognáticas en niños y jóvenes.",
    items: [
      "Trastornos del desarrollo del lenguaje (TDL)",
      "Tratamiento de dislalias y deglución atípica",
      "Estimulación temprana de la comunicación",
      "Evaluación audiológica y del habla"
    ],
    borderColorClass: "border-t-primary"
  },
  {
    id: "terapia-ocupacional",
    title: "Terapia Ocupacional",
    subtitle: "Integración Sensorial y Autonomía",
    description: "Acompañamiento en el desarrollo de la autonomía en las actividades de la vida diaria mediante el juego y la integración sensorial.",
    items: [
      "Evaluación e intervención en integración sensorial",
      "Desarrollo de habilidades motoras finas y gruesas",
      "Autonomía en actividades cotidianas",
      "Adaptaciones para el entorno escolar y hogar"
    ],
    borderColorClass: "border-t-primary"
  },
  {
    id: "interdisciplina",
    title: "Evaluación Interdisciplinaria",
    subtitle: "Abordaje Integral y Coordinado",
    description: "Instancia de evaluación conjunta entre nuestras distintas áreas para casos que requieren un diagnóstico amplio y articulado.",
    items: [
      "Informes integrados para colegios y médicos tratantes",
      "Reuniones de equipo para diseño de planes de tratamiento",
      "Seguimiento y reevaluación periódica",
      "Articulación con profesionales externos"
    ],
    badge: "Abordaje Integral",
    borderColorClass: "border-t-primary" 
  }
];