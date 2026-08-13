export interface NavItem {
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  { href: "/", label: "Espacio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/profesionales", label: "Equipo" },
  { href: "/faq", label: "Preguntas Frecuentes" },
  { href: "/contacto", label: "Contacto" },
];