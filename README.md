# Prácticas de Gestión ITIL & Esquema de Certificación · Mapa Conceptual Interactivo

Aplicación web interactiva basada en **React Flow** (@xyflow/react) y **Vite** para el aprendizaje, análisis y visualización de las **Prácticas de Gestión de ITIL 4**, el **Esquema de Certificación Oficial**, estándares de gobernanza y calidad (**COBIT 2019, ISO/IEC 20000, ISO/IEC 22237, ISO 31000**) y los casos prácticos de la sesión (**UTP - Gestión de Servicios de TI · Semana 13, Sesión 2**).

## 🚀 Características Principales

- **Grafo Conceptual Interactivo (React Flow v12)**: Visualización estructurada de 33 nodos con balance espacial, libre de solapamientos, jerarquías visuales y aristas animadas diferenciadas por rama.
- **Panel Desplegable Lateral**: Al hacer clic en cualquier concepto, se abre un cajón lateral con fundamentos teóricos detallados, fórmulas/métricas, casos prácticos organizacionales y simuladores interactivos:
  - **Calculadora de Inversión en Certificación ITIL**: Simula costos según datos de la diapositiva 9: modalidad Autodidacta PeopleCert ($680 - $865 por examen) vs. Curso Acreditado ATO ($500 - $2,500 por módulo) con proyección para múltiples participantes y retoma de examen.
  - **Matriz Interactiva de Riesgos 5x5 (ISO 31000)**: Evaluación dinámica de severidad (1 a 25) según Probabilidad e Impacto, cuadrícula de calor (Low, Moderate, High, Extreme) y distinción de Gross Risk, Net Risk y Target Risk (diapositiva 12).
  - **Simulador del Ciclo Deming (PDCA)**: Fases operativas Plan, Do, Check y Act con las preguntas guía de la sesión, actividades clave de TI y entregables estandarizados.
  - **Anatomía Web & Metáfora Culinaria (Diapositivas 11 y 13)**: Backend (Cocina), Frontend (Salón), API (Mozo camarero), Base de Datos (Despensa), Fullstack (Food Truck) y Pipeline CI/CD (Automatización).
- **Filtros por Eje Temático**: Aislamiento visual e iluminación instantánea para:
  1. **Prácticas Generales ITIL (12)**: Gestión de Arquitectura, Mejora Continua (PDCA), Seguridad CIA, Conocimiento, Medición/KPIs, Cambio Organizacional (OCM), Cartera, Proyectos, Finanzas (CapEx/OpEx), Relaciones (BRM), Riesgos (ISO 31000) y Proveedores.
  2. **Prácticas Técnicas & Despliegue**: Gestión de Despliegues (Blue-Green/Canary/Rollback), Pipeline CI/CD automatizado, Gestión de Infraestructura (ISO/IEC 22237), Arreglos RAID (0, 1, 0+1), Redes OSPF/EIGRP/SD-WAN, Cloud Peering (AWS/Oracle) y Desarrollo de Software.
  3. **Certificación ITIL & Estándares**: Importancia estratégica en ITSM, datos estadísticos de costos PeopleCert, 4 Dimensiones de ITIL 4, COBIT 2019 (EDM), ISO/IEC 20000 e ISO 22237 / ISO 31000.
  4. **Casos Prácticos UTP**: Caso 01 (práctica aplicada de servicios), Caso 02 (mapa conceptual interactivo), Caso 03 (Capítulo III del proyecto) y enfoque Problem-Solution-Quality.
- **Búsqueda en Tiempo Real**: Auto-completado con salto y enfoque automático en el mapa conceptual.
- **Tour Guiado**: Modo presentación secuencial que recorre las 5 estaciones maestras con zoom y centrado fluido.
- **Diseño 100% Responsivo**: Adaptado para dispositivos móviles, tablets y monitores de alta resolución con paleta moderna.

## 🛠️ Tecnologías Utilizadas

- **React 19**
- **TypeScript**
- **Vite**
- **@xyflow/react** (React Flow v12)
- **Lucide React**
- **Canvas Confetti**
- **Vanilla CSS (Glassmorphism & Diseño Moderno)**

## 💻 Ejecución Local

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Compilar para producción:
   ```bash
   npm run build
   ```

## ☁️ Despliegue

El proyecto incluye la configuración para plataformas de alojamiento web estático como **Vercel**:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
