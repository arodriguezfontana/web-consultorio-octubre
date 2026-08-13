export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/assets/consultorio-1.png",
    alt: "Consultorio de Adolescentes y Adultos",
    title: "Consultorio Adolescentes y Adultos",
  },
  {
    src: "/assets/consultorio-2.png",
    alt: "Consultorio Niños",
    title: "Consultorio Niños",
  },
  {
    src: "/assets/consultorio-3.png",
    alt: "Sala de Espera del Consultorio",
    title: "Sala de Espera",
  },
  {
    src: "/assets/consultorio-4.png",
    alt: "Acceso a Planta Alta",
    title: "Acceso Planta Alta",
  }
];