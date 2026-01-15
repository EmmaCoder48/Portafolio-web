import Link from "next/link";

export default function Navbar() {
  return (
    /* Configuro la navegación como un elemento de posición fija ('fixed') 
       para asegurar el acceso global a los enlaces sin importar el scroll. 
       Utilizo un 'z-50' para garantizar que se mantenga en el plano superior. */
    <nav className="fixed top-0 left-0 w-full z-50 p-6">
      {/* Contenedor principal: Limito el ancho máximo a '7xl' para alinear 
          la navegación con el grid de proyectos y centralizo el contenido. */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* IDENTIDAD: Utilizo un tracking-widest y tipografía en mayúsculas 
            para reforzar la estética minimalista y técnica del portafolio. */}
        <div className="flex gap-8 text-sm font-medium text-slate-300 uppercase tracking-widest">
          Emmanuel Goméz
        </div>

        {/* ACCIONES DE NAVEGACIÓN: Implemento un flexbox para agrupar los 
            enlaces externos, manteniendo la consistencia visual. */}
        <div className="flex gap-8 text-sm font-medium text-slate-300 uppercase tracking-widest">
          {/* ENLACE CV: Utilizo 'target="_blank"' para abrir el documento en 
              una nueva pestaña, evitando que el usuario abandone el sitio principal. */}
          <a
            href="/CV_Emmanuel_Gomez.pdf"
            download="CV_Emmanuel_Gomez.pdf"
            className="hover:text-orange-400 transition-colors cursor-pointer">
            Descargar CV
          </a>
          {/* ENLACE GITHUB: Integro la transición de color ('transition-colors') 
              para proporcionar un feedback visual suave al interactuar con el enlace. */}
          <Link
            href="https://github.com/EmmaCoder48"
            target="_blank"
            className="hover:text-orange-400 transition-colors">
            GitHub
          </Link>
        </div>
      </div>
    </nav>
  );
}
