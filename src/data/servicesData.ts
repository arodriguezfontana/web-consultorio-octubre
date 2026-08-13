export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  items: string[];
  badge?: string;
  borderColorClass: string; 
}

export const servicesData: ServiceItem[] = [
  {
    id: "psicologia",
    title: "Psicología",
    description: "Espacio de escucha y acompañamiento terapéutico.",
    items: [
      "Psicoterapia orientada a niños, adolescentes y adultos",
      "Orientación a familias",
      "Evaluación y diagnóstico clínico"
    ],
    borderColorClass: "border-t-primary"
  },
];