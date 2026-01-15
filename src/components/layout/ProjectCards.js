export default function ProjectCard({ title, description, tags, link }) {
  return (
    /* CONTENEDOR DE LA TARJETA:
       Implemento un diseño basado en Flexbox para asegurar que el botón de 
       documentación siempre se mantenga en la base, sin importar el largo del texto.
       Utilizo 'backdrop-blur-sm' y bordes semitransparentes para integrarla con el fondo.
       Añado 'group' para poder disparar animaciones en los hijos al hacer hover. */
    <div className="group relative flex flex-col justify-between p-8 h-full border border-white/5 bg-black/20 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500 ease-in-out">
      {/* CABECERA TÉCNICA:
          Incluyo un label minimalista y un separador decorativo que reacciona 
          al estado 'hover' del grupo, cambiando a color ámbar. */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-[10px] font-mono text-white/20 tracking-[0.3em]">
          PROJECT
        </span>
        <div className="h-[1px] w-8 bg-white/10 group-hover:bg-amber-500/50 transition-colors"></div>
      </div>

      {/* CUERPO DE INFORMACIÓN:
          Manejo el título con un tracking ligero y la descripción con un 
          interlineado ('leading-relaxed') que mejora significativamente la legibilidad. */}
      <div>
        <h3 className="text-white text-xl font-light tracking-[0.1em] uppercase mb-4 group-hover:text-amber-400 transition-colors">
          {title}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed font-light mb-8 group-hover:text-slate-400 transition-colors">
          {description}
        </p>
      </div>

      {/* FOOTER DE LA TARJETA:
          Sección de metadatos (tags) y call-to-action (CTA). */}
      <div>
        {/* Renderizado de etiquetas: Utilizo prefijos '//' para simular 
            comentarios de código, reforzando el perfil de desarrollador. */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] text-amber-600/50 font-mono uppercase tracking-widest">
              // {tag}
            </span>
          ))}
        </div>

        {/* BOTÓN DE ACCIÓN:
            Configuro un link externo con una transición completa ('transition-all') 
            que afecta fondo, borde y color simultáneamente para un efecto orgánico. */}
        <a
          href={link}
          target="_blank"
          className="block w-full text-center py-3 border border-white/5 text-white/40 text-[10px] uppercase tracking-[0.3em] hover:bg-white/[0.03] hover:text-amber-500 hover:border-amber-500/50 transition-all">
          Documentation →
        </a>
      </div>
    </div>
  );
}
