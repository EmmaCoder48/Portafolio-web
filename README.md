# 🚀 Space-Tech Portfolio | Gargantúa Edition

Este es mi portafolio profesional desarrollado con **Next.js 15**. El diseño está inspirado en interfaces de comando de misiones espaciales y astrofotografía de alta resolución, enfocado en la visualización de datos en tiempo real.

## 🛰️ Proyectos Destacados

### 1. ISS ORBITAL TRACKER

Aplicación de monitoreo orbital que rastrea la ISS en tiempo real. Implementa geolocalización dinámica para visualizar la ubicación exacta y el manifiesto de la tripulación actual mediante la API de la NASA.

### 2. NASA APOD EXPLORER

Interfaz de exploración astronómica impulsada por la API APOD de la NASA. Renderiza diariamente astrofotografía de alta resolución con metadatos técnicos del Jet Propulsion Laboratory (JPL).

### 3. SPACEX MISSION CONTROL

Dashboard de lanzamientos que integra la API de SpaceX. Cuenta con un contador militar para el próximo despegue y un sistema de filtrado dinámico para el historial de misiones de la flota Falcon y Starship.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS (Minimalist Formal Style)
- **Data Sources:** NASA API & SpaceX API
- **Deployment:** Vercel

---

## 🏗️ Lógica y Arquitectura

El proyecto aplica conceptos avanzados de React para una experiencia fluida:

- **Estado (useState):** Gestión de filtros dinámicos (All/Success/Failed) y contadores en tiempo real.
- **Data Fetching:** Consumo asíncrono de APIs externas con validación de datos.
- **Componentes:** Estructura modular para mantener un código limpio y escalable.
