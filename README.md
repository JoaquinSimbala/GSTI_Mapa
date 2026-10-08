# Mejora Continua del Servicio de TI · Mapa Conceptual Interactivo

Aplicación web interactiva basada en **React Flow** (@xyflow/react) y **Vite** para el aprendizaje y visualización de marcos normativos, ciclo PDCA, gestión de cambios y ciberseguridad aplicada al Service Desk.

## 🚀 Características Principales

- **Grafo Conceptual Interactivo (React Flow)**: Visualización estructurada con conectores animados y nodos personalizados de alta legibilidad.
- **Panel Desplegable Lateral**: Al hacer clic en cualquier concepto, se abre un cajón lateral con fundamentos teóricos y guías operativas/dinámicas (protocolo de ciberincidentes, comparativas, matrices ISO).
- **Filtros por Eje Temático**: Aislamiento visual e iluminación instantánea para:
  - Fundamentos y Rendimiento (Eficacia, Eficiencia y Efectividad).
  - Metodología Cíclica (Ciclo PDCA / Deming).
  - Service Desk y Gestión de Cambios (Modelos, ITSM ServiceNow/Zendesk, 4 Controles de Cambio).
  - Marcos Normativos y Seguridad (Ecosistema ISO, 6 Pasos ante Incidentes, 7 Capas de Defensa).
- **Búsqueda en Tiempo Real**: Auto-completado con salto y enfoque automático en el mapa.
- **Tour Guiado**: Modo presentación secuencial que recorre el mapa con zoom fluido.
- **Diseño 100% Responsivo**: Adaptado para dispositivos móviles, tablets y escritorios.

## 🛠️ Tecnologías Utilizadas

- **React 18**
- **TypeScript**
- **Vite**
- **@xyflow/react** (React Flow v12)
- **Lucide Icons**
- **Vanilla CSS (Glassmorphism & Diseño Moderno)**

## 💻 Ejecución Local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/JoaquinSimbala/S09_GSTI_Mapa.git
   cd S09_GSTI_Mapa
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Compilar para producción:
   ```bash
   npm run build
   ```

## ☁️ Despliegue en Vercel

El proyecto incluye la configuración lista en `vercel.json`:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
