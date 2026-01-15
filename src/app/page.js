import Background from "@/components/layout/Background";
import Navbar from "@/components/layout/Navbar";
import ProjectCard from "@/components/layout/ProjectCards";
import { PROJECTS } from "../data/projects"; // Importamos el array de objetos con la info

export default function Home() {
  return (
    /* CONTENEDOR PRINCIPAL: 
       'relative' permite que el fondo se posicione bien.
       'overflow-x-hidden' evita que la página "baile" hacia los lados.
    */
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Componentes fijos de la interfaz */}
      <Navbar />
      <Background />

      {/* CUERPO DE LA PÁGINA:
          'z-10' asegura que el contenido esté POR ENCIMA del fondo.
          'pt-32' da espacio para que el Navbar no tape los proyectos.
      */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* GRID DE PROYECTOS:
            - grid-cols-1: 1 columna en móvil.
            - md:grid-cols-2: 2 columnas en tablets.
            - lg:grid-cols-3: 3 columnas en pantallas grandes.
            - gap-8: Espaciado uniforme entre las tarjetas.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* RENDERIZADO DINÁMICO:
              Recorremos el array PROJECTS. Por cada proyecto en el archivo data,
              React crea una <ProjectCard /> automáticamente.
          */}
          {PROJECTS.map((proyecto) => (
            <ProjectCard
              key={proyecto.id} // Identificador único para que React sea eficiente
              title={proyecto.title}
              description={proyecto.description}
              tags={proyecto.tags}
              link={proyecto.github}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
