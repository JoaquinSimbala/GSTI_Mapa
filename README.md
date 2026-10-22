# Sistema de Valor del Servicio (SVS) - ITIL 4 · Mapa Conceptual Interactivo

Aplicación web interactiva basada en **React Flow** (@xyflow/react) y **Vite** para el aprendizaje, análisis y visualización del **Sistema de Valor del Servicio (SVS) de ITIL 4**, sus componentes, los **7 Principios Rectores** y su aplicación en arquitecturas web y bases de datos (**UTP - Gestión del Servicio de TI · Semana 11, Sesión 1**).

## 🚀 Características Principales

- **Grafo Conceptual Interactivo (React Flow)**: Visualización estructurada con conectores animados, jerarquía visual y nodos personalizados de alta legibilidad.
- **Panel Desplegable Lateral**: Al hacer clic en cualquier concepto, se abre un cajón lateral con fundamentos teóricos detallados, fórmulas, casos prácticos y simuladores interactivos:
  - **Calculadora de Valor ITIL 4**: Simula la ecuación de Axelos (Utilidad: *Fit for Purpose* + Garantía: *Fit for Use* = Valor Co-Creado).
  - **Matriz Comparativa de los 7 Principios (Caso 02)**: Propósito, aplicación en desarrollo web/BD, errores comunes a evitar y marcos afines.
  - **Explorador de Arquitectura de Bases de Datos (Caso 01 & Slide 6)**: Análisis de los tipos de DBMS (SQL, In-Memory, Vector DB, Documental, Columnar, Grafos, NewSQL, etc.) y su valor de servicio.
  - **6 Actividades de la Cadena de Valor (SVC)**: Planear, Mejorar, Comprometer, Diseñar/Transición, Obtener/Construir, Entregar/Soporte.
- **Filtros por Eje Temático**: Aislamiento visual e iluminación instantánea para:
  1. **Arquetipos de Valor**: Ecuación de Axelos (Utilidad + Garantía), Rappaport (1986), Cadena de Porter y arquitectura técnica.
  2. **Componentes SVS**: Oportunidad/Demanda a Valor, Gobernanza (ISO 38500), Cadena de Valor (SVC) y 34 Prácticas ITIL.
  3. **7 Principios Rectores de ITIL 4**: Centrarse en el valor, Empezar donde se está, Iterar con feedback, Colaborar y visibilidad, Pensar holísticamente, Mantenerlo simple, y Optimizar y automatizar.
  4. **Casos Prácticos UTP**: Pregunta retadora, Caso 01 (Sistema Web con BD), Caso 02 (Cuadro comparativo) y Caso 03 (Mapa conceptual).
- **Búsqueda en Tiempo Real**: Auto-completado con salto y enfoque automático en el mapa.
- **Tour Guiado**: Modo presentación secuencial que recorre las 5 estaciones maestras del SVS con zoom fluido.
- **Diseño 100% Responsivo**: Adaptado para dispositivos móviles, tablets y escritorios con estética moderna.

## 🛠️ Tecnologías Utilizadas

- **React 18**
- **TypeScript**
- **Vite**
- **@xyflow/react** (React Flow v12)
- **Lucide Icons**
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

## ☁️ Despliegue en Vercel

El proyecto incluye la configuración lista en [vercel.json](file:///c:/Users/joaqu/OneDrive/Desktop/MapaS9GTI/vercel.json):
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
