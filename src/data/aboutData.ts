export interface AboutHighlight {
  number: string;
  title: string;
  description: string;
}

export interface AboutData {
  title: string;
  foundingDate: string;
  paragraphs: string[];
  highlightsTitle: string;
  highlights: AboutHighlight[];
}

export const aboutData: AboutData = {
  title: "Nuestra Historia",
  foundingDate: "julio de 2026",
  paragraphs: [
    "En <date>, un equipo de profesionales que trabajan desde la escucha, el cuidado y el acompañamiento, decidió unirse para crear un espacio propio.",
    "Cada proceso es unico y tambien lo es la manera de acompañarlo."
  ],
  highlightsTitle: " ",
  highlights: [
    {
      number: "+250",
      title: "Pacientes acompañados",
      description: "Experiencia previa acumulada en la atención de niños, adolescentes y adultos."
    },
    {
      number: "100%",
      title: "Compromiso profesional",
      description: "Formación continua, supervisión de casos y actualización constante."
    }
  ]
};