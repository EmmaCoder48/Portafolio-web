/* DATA ESTRUCTURADA: 
   Defino un array de objetos para gestionar el contenido de los proyectos.
   Esta estructura facilita el mantenimiento y permite escalar el portafolio 
   simplemente agregando nuevos objetos al array sin tocar el código del frontend. */

export const PROJECTS = [
  {
    id: 1,
    title: "ISS ORBITAL TRACKER",
    description:
      "Rastreador orbital que integra la API de la NASA para mapear la trayectoria de la Estación Espacial Internacional en conjunto con su tripulación abordo.",

    /* STACK TECNOLÓGICO: 
       Utilizo tags específicos para informar las herramientas clave 
       utilizadas en la lógica de cada desarrollo. */
    tags: ["React", "Next.js", "NASA API"],

    /* ENDPOINTS:
       Enlaces directos al repositorio para la revisión de código (Code Review)
       y enlace a la demo funcional (enlace de despliegue). */
    github: "https://github.com/EmmaCoder48/Where-is-the-ISS-",
    demo: "https://where-is-the-iss-iota.vercel.app/",
  },
  {
    id: 2,
    title: "NASA APOD EXPLORER",
    description:
      "Explorador de la 'Imagen Astronómica del Día'. Renderizado dinámico de astrofotografía con metadatos técnicos del Jet Propulsion Laboratory.",
    tags: ["React", "Bootstrap", "NASA API"],
    github: "https://github.com/EmmaCoder48/NASA-OF-THE-DAY",
    demo: "https://nasa-of-the-day.vercel.app/",
  },
  {
    id: 3,
    title: "SpaceX Launches",
    description:
      "Dashboard de telemetría en tiempo real para el seguimiento de misiones espaciales.",
    tags: ["React", "Next.js", "SpaceX API"],
    github: "https://github.com/EmmaCoder48/SpaceX-Mission-Control-Dashboard",
    demo: "https://space-x-mission-control-dashboard.vercel.app/",
  },
];
