export default function Background() {
  return (
    /* Establezco el contenedor principal como 'fixed' para que actúe como una 
       capa base inamovible durante el scroll, bloqueando el fondo en el viewport. */
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#050505]">
      {/* CAPA DE IMAGEN: Implemento la fotografía base con un ajuste de 
          opacidad al 50%. Aplico filtros de brillo y contraste directamente 
          en el estilo para no depender de edición externa y mantener la 
ografía dinámica. */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: "url('/images/618.jpg')",
          filter: "brightness(0.8) contrast(1.1)",
        }}
      />

      {/* CAPA DE DIFUMINADO: Aplico un backdrop-blur de 12px para generar 
          profundidad visual. Esto suaviza la imagen de fondo y permite que 
          los elementos de la interfaz resalten por encima sin ruido visual. */}
      <div className="absolute inset-0 backdrop-blur-[12px] bg-black/30" />

      {/* ILUMINACIÓN DIRECCIONAL: Utilizo un gradiente lineal de blanco a transparente 
          para simular una fuente de luz cenital, rompiendo la monotonía del negro puro. */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30" />

      {/* TEXTURIZADO POR SVG: Inserto un filtro de ruido fractal mediante un SVG 
          en línea. Esto añade una textura granulada casi imperceptible (3% opacidad) 
          que elimina el banding de los gradientes y da un acabado cinematográfico. */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/center'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* VIÑETEADO: Finalizo con un gradiente radial que oscurece los extremos 
          del viewport. Esta técnica dirige el foco atencional hacia el centro 
          donde se renderiza el contenido principal. */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80" />
    </div>
  );
}
