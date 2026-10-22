import { Node, Edge, MarkerType } from '@xyflow/react';

export interface CustomNodeData {
  id: string;
  title: string;
  subtitle?: string;
  branch: 'central' | 'valor' | 'svs' | 'principios' | 'practica';
  branchLabel: string;
  iconName: string;
  summary: string;
  bulletCount?: number;
  tags?: string[];
  isExpanded?: boolean;
  canExpand?: boolean;
  accentColor?: string;
  secondaryInfo?: string;
  badge?: string;
  [key: string]: unknown;
}

// Layout ultra espacioso, balanceado y sin solapamiento de cajas para Semana 11 - Sesión 1 UTP
export const INITIAL_NODES: Node<CustomNodeData>[] = [
  // ================= NODO CENTRAL =================
  {
    id: 'central-node',
    type: 'centralNode',
    position: { x: 0, y: 0 },
    data: {
      id: 'central-node',
      title: 'SISTEMA DE VALOR DEL SERVICIO (SVS) - ITIL 4',
      subtitle: 'Transformación de Demanda/Oportunidad en Valor Tangible de Negocio (UTP S11)',
      branch: 'central',
      branchLabel: 'Núcleo Central',
      iconName: 'Sparkles',
      summary: 'Marco integral que garantiza que todas las actividades, componentes y prácticas de TI trabajen juntos de forma ágil y coordinada para co-crear valor mediante productos y servicios alineados al negocio.',
      tags: ['ITIL 4', 'SVS', 'Creación de Valor', 'UTP S11', 'Demanda a Valor'],
      canExpand: true,
      isExpanded: true,
      badge: 'Núcleo Central SVS'
    }
  },

  // ================= RAMA 1: CONCEPCIÓN Y ARQUETIPOS DEL VALOR (Superior Izquierda) =================
  {
    id: 'branch-valor',
    type: 'branchNode',
    position: { x: -920, y: -580 },
    data: {
      id: 'branch-valor',
      title: 'CONCEPCIÓN Y ARQUETIPOS DEL VALOR',
      subtitle: 'Definición ITIL (Utilidad + Garantía), Porter, Accionistas y Arquetipos de TI',
      branch: 'valor',
      branchLabel: '1. Arquetipos de Valor',
      iconName: 'Target',
      summary: 'El valor no es solo monetario: en ITIL se define como la combinación de utilidad y garantía percibida por el cliente, soportada por arquitecturas técnicas y bases de datos.',
      tags: ['Utilidad', 'Garantía', 'Porter', 'Bases de Datos'],
      accentColor: '#059669',
      badge: 'Dimensión de Valor'
    }
  },
  {
    id: 'val-arquetipos-tech',
    type: 'conceptNode',
    position: { x: -1450, y: -600 },
    data: {
      id: 'val-arquetipos-tech',
      title: 'Arquetipos de Software y Bases de Datos',
      subtitle: 'Scrum, Compilación y los 12 Tipos de DBMS',
      branch: 'valor',
      branchLabel: '1. Arquetipos de Valor',
      iconName: 'Database',
      summary: 'El valor se materializa técnicamente: capas Vista ➔ Procesamiento ➔ DBMS (Relacional, Documental, In-Memory, Vectorial para IA, Grafos, etc.).',
      tags: ['Scrum', 'DBMS', 'Vector DB', 'SQL/NoSQL'],
      accentColor: '#059669',
      badge: 'Arquitectura TI'
    }
  },
  {
    id: 'val-financiero-porter',
    type: 'conceptNode',
    position: { x: -500, y: -600 },
    data: {
      id: 'val-financiero-porter',
      title: 'Enfoque Financiero & Cadena de Porter',
      subtitle: 'Rappaport (1986) y Actividades Primarias/Apoyo',
      branch: 'valor',
      branchLabel: '1. Arquetipos de Valor',
      iconName: 'TrendingUp',
      summary: '• Rappaport (1986): Flujos futuros descontados para accionistas.\n• Porter: Margen de valor integrando actividades primarias y de apoyo.',
      tags: ['Rappaport', 'Porter', 'Margen'],
      accentColor: '#059669',
      badge: 'Estrategia'
    }
  },
  {
    id: 'val-definicion-itil',
    type: 'conceptNode',
    position: { x: -1100, y: -290 },
    data: {
      id: 'val-definicion-itil',
      title: 'Ecuación de Valor en ITIL (Axelos)',
      subtitle: 'Beneficios Percibidos = Utilidad + Garantía',
      branch: 'valor',
      branchLabel: '1. Arquetipos de Valor',
      iconName: 'Calculator',
      summary: 'Suma de los beneficios percibidos, utilidad y garantía que un servicio proporciona a los clientes. Ambos elementos son imprescindibles.',
      tags: ['Axelos 2011', 'Utilidad', 'Garantía'],
      accentColor: '#059669',
      badge: 'Fórmula ITIL'
    }
  },
  {
    id: 'val-utilidad',
    type: 'detailNode',
    position: { x: -1360, y: 20 },
    data: {
      id: 'val-utilidad',
      title: 'Utilidad',
      subtitle: 'Fit for Purpose (¿Qué hace?)',
      branch: 'valor',
      branchLabel: '1. Arquetipos de Valor',
      iconName: 'Wrench',
      summary: 'Funcionalidad ofrecida para satisfacer una necesidad real, mejorando rendimiento o eliminando restricciones.',
      tags: ['Fit for Purpose', 'Funcionalidad'],
      accentColor: '#059669'
    }
  },
  {
    id: 'val-garantia',
    type: 'detailNode',
    position: { x: -1120, y: 20 },
    data: {
      id: 'val-garantia',
      title: 'Garantía',
      subtitle: 'Fit for Use (¿Cómo se entrega?)',
      branch: 'valor',
      branchLabel: '1. Arquetipos de Valor',
      iconName: 'Shield',
      summary: 'Certeza de que el servicio cumplirá con disponibilidad, capacidad, continuidad y seguridad de la información.',
      tags: ['Fit for Use', 'SLA', 'Seguridad'],
      accentColor: '#059669'
    }
  },
  {
    id: 'val-cocreacion',
    type: 'detailNode',
    position: { x: -880, y: 20 },
    data: {
      id: 'val-cocreacion',
      title: 'Co-Creación',
      subtitle: 'Relación de Colaboración',
      branch: 'valor',
      branchLabel: '1. Arquetipos de Valor',
      iconName: 'Users',
      summary: 'En ITIL 4 el valor nunca se transfiere unidireccionalmente; se co-crea activamente entre proveedor y consumidor.',
      tags: ['Colaboración', 'Stakeholders'],
      accentColor: '#059669'
    }
  },

  // ================= RAMA 2: ESTRUCTURA DEL SISTEMA DE VALOR DEL SERVICIO (Superior Derecha) =================
  {
    id: 'branch-svs',
    type: 'branchNode',
    position: { x: 920, y: -580 },
    data: {
      id: 'branch-svs',
      title: 'SISTEMA DE VALOR DEL SERVICIO (SVS)',
      subtitle: 'Arquitectura de 5 Componentes: Entrada ➔ SVS ➔ Salida',
      branch: 'svs',
      branchLabel: '2. Componentes SVS',
      iconName: 'Layers',
      summary: 'Ecosistema holístico de ITIL 4 que asegura que la demanda del cliente se canalice a través de gobernanza, cadena de valor y prácticas para entregar valor real.',
      tags: ['SVS', 'SVC', 'Gobernanza', 'Prácticas'],
      accentColor: '#2563eb',
      badge: 'Marco Operativo'
    }
  },
  {
    id: 'svs-demanda-valor',
    type: 'conceptNode',
    position: { x: 500, y: -600 },
    data: {
      id: 'svs-demanda-valor',
      title: 'Entrada: Oportunidad / Demanda ➔ Salida: Valor',
      subtitle: 'Disparador inicial y resultado medible del sistema',
      branch: 'svs',
      branchLabel: '2. Componentes SVS',
      iconName: 'Zap',
      summary: 'La Oportunidad y Demanda representan las necesidades del mercado y clientes; el SVS las transforma en valor tangible y alineado al negocio.',
      tags: ['Demanda', 'Oportunidad', 'Outcome'],
      accentColor: '#2563eb',
      badge: 'Flujo E2E'
    }
  },
  {
    id: 'svs-gobernanza',
    type: 'conceptNode',
    position: { x: 1350, y: -600 },
    data: {
      id: 'svs-gobernanza',
      title: 'Gobernanza (Governance)',
      subtitle: 'Dirección, Evaluación y Monitoreo Estratégico',
      branch: 'svs',
      branchLabel: '2. Componentes SVS',
      iconName: 'Scale',
      summary: 'Mecanismo mediante el cual la organización es dirigida y controlada. Asegura alineación con las políticas y directrices del negocio (ISO 38500).',
      tags: ['Gobernanza', 'ISO 38500', 'Dirección'],
      accentColor: '#2563eb',
      badge: 'Eje Directivo'
    }
  },
  {
    id: 'svs-cadena-valor',
    type: 'stepNode',
    position: { x: 680, y: -290 },
    data: {
      id: 'svs-cadena-valor',
      title: 'Cadena de Valor del Servicio (SVC)',
      subtitle: 'Modelo Operativo de 6 Actividades Clave',
      branch: 'svs',
      branchLabel: '2. Componentes SVS',
      iconName: 'Workflow',
      summary: 'Planear, Mejorar, Comprometer (Engage), Diseñar/Transición, Obtener/Construir, y Entregar/Soporte para crear flujos de valor flexibles.',
      tags: ['SVC', '6 Actividades', 'Flujos de Valor'],
      accentColor: '#2563eb',
      badge: 'Núcleo Operativo'
    }
  },
  {
    id: 'svs-practicas-mejora',
    type: 'stepNode',
    position: { x: 1200, y: -290 },
    data: {
      id: 'svs-practicas-mejora',
      title: 'Prácticas ITIL & Mejora Continua',
      subtitle: '34 Prácticas organizacionales y ciclo continuo',
      branch: 'svs',
      branchLabel: '2. Componentes SVS',
      iconName: 'RotateCw',
      summary: 'Conjunto de capacidades organizacionales (Gestión General, de Servicios y Técnicas) alimentadas permanentemente por la práctica de Mejora Continua.',
      tags: ['34 Prácticas', 'Mejora Continua', 'Resiliencia'],
      accentColor: '#2563eb',
      badge: 'Capacidades TI'
    }
  },

  // ================= RAMA 3: LOS SIETE (7) PRINCIPIOS RECTORES DE ITIL (Inferior Izquierda) =================
  {
    id: 'branch-principios',
    type: 'branchNode',
    position: { x: -950, y: 340 },
    data: {
      id: 'branch-principios',
      title: 'LOS 7 PRINCIPIOS RECTORES DE ITIL 4',
      subtitle: 'Guías Universales para la Toma de Decisiones y Acción en TI',
      branch: 'principios',
      branchLabel: '3. 7 Principios ITIL',
      iconName: 'Compass',
      summary: 'Recomendaciones fundamentales e imperecederas que orientan a una organización en cualquier circunstancia, sin importar sus objetivos ni sus herramientas.',
      tags: ['Principios Rectores', 'Agilidad', 'Scrum', 'Lean'],
      accentColor: '#d97706',
      badge: 'Filosofía ITIL'
    }
  },
  {
    id: 'princ-1-valor',
    type: 'stepNode',
    position: { x: -1600, y: 220 },
    data: {
      id: 'princ-1-valor',
      title: '1. Centrarse en el Valor',
      subtitle: 'Aportar valor al cliente y partes interesadas',
      branch: 'principios',
      branchLabel: '3. 7 Principios ITIL',
      iconName: 'Target',
      summary: 'Todo lo que haga la organización debe aportar valor al cliente y stakeholders. Comprender la experiencia del usuario y priorizar el impacto.',
      tags: ['Customer Value', 'Experiencia', 'Prioridad'],
      accentColor: '#d97706',
      badge: 'Principio 1'
    }
  },
  {
    id: 'princ-2-donde',
    type: 'stepNode',
    position: { x: -1600, y: 470 },
    data: {
      id: 'princ-2-donde',
      title: '2. Comenzar Donde se Está',
      subtitle: 'Aprovechar recursos y conocimientos existentes',
      branch: 'principios',
      branchLabel: '3. 7 Principios ITIL',
      iconName: 'CheckCircle2',
      summary: 'Evaluar la situación actual y aprovechar lo que ya funciona antes de hacer cambios. No empezar de cero; medir objetivamente.',
      tags: ['Diagnóstico', 'Reutilización', 'Estado Actual'],
      accentColor: '#d97706',
      badge: 'Principio 2'
    }
  },
  {
    id: 'princ-3-iterar',
    type: 'stepNode',
    position: { x: -1600, y: 720 },
    data: {
      id: 'princ-3-iterar',
      title: '3. Progresar Iterativamente con Retroalimentación',
      subtitle: 'Avanzar en pequeños pasos y feedback continuo',
      branch: 'principios',
      branchLabel: '3. 7 Principios ITIL',
      iconName: 'RotateCw',
      summary: 'Avanzar por etapas pequeñas, recoger feedback continuo y mejorar (ciclos PDCA y Sprints de Scrum de 1 a 4 semanas).',
      tags: ['Scrum', 'Sprints', 'PDCA', 'Feedback'],
      accentColor: '#d97706',
      badge: 'Principio 3'
    }
  },
  {
    id: 'princ-4-colaborar',
    type: 'stepNode',
    position: { x: -1600, y: 970 },
    data: {
      id: 'princ-4-colaborar',
      title: '4. Colaborar y Promover la Visibilidad',
      subtitle: 'Cooperación transparente eliminando silos',
      branch: 'principios',
      branchLabel: '3. 7 Principios ITIL',
      iconName: 'Users',
      summary: 'Fomentar la cooperación entre equipos y compartir información de forma transparente (Product Owner, Scrum Master, Developers).',
      tags: ['Transparencia', 'Visibilidad', 'Sinergia'],
      accentColor: '#d97706',
      badge: 'Principio 4'
    }
  },
  {
    id: 'princ-5-holistico',
    type: 'stepNode',
    position: { x: -1180, y: 970 },
    data: {
      id: 'princ-5-holistico',
      title: '5. Pensar y Trabajar Holísticamente',
      subtitle: 'Considerar el sistema completo como un todo',
      branch: 'principios',
      branchLabel: '3. 7 Principios ITIL',
      iconName: 'Network',
      summary: 'Ver la organización como un todo integrando personas, procesos, tecnología y socios (las 4 dimensiones de ITIL 4).',
      tags: ['Holístico', '4 Dimensiones', 'Flujos E2E'],
      accentColor: '#d97706',
      badge: 'Principio 5'
    }
  },
  {
    id: 'princ-6-simple',
    type: 'stepNode',
    position: { x: -760, y: 970 },
    data: {
      id: 'princ-6-simple',
      title: '6. Mantenerlo Simple y Práctico',
      subtitle: 'Evitar complejidad y aplicar solo lo útil',
      branch: 'principios',
      branchLabel: '3. 7 Principios ITIL',
      iconName: 'SlidersHorizontal',
      summary: 'Evitar la complejidad innecesaria; aplicar solo lo que aporte valor. Si un proceso o reporte no genera utilidad, eliminarlo (Lean IT).',
      tags: ['Simplicidad', 'Lean IT', 'Mínimo Esfuerzo'],
      accentColor: '#d97706',
      badge: 'Principio 6'
    }
  },
  {
    id: 'princ-7-optimizar',
    type: 'stepNode',
    position: { x: -760, y: 680 },
    data: {
      id: 'princ-7-optimizar',
      title: '7. Optimizar y Automatizar',
      subtitle: 'Mejorar procesos antes de automatizarlos',
      branch: 'principios',
      branchLabel: '3. 7 Principios ITIL',
      iconName: 'Zap',
      summary: 'Optimizar y simplificar los procesos antes de automatizarlos para ganar eficiencia, reducir errores y liberar talento humano.',
      tags: ['Automatización', 'Eficiencia', 'Estandarización'],
      accentColor: '#d97706',
      badge: 'Principio 7'
    }
  },

  // ================= RAMA 4: PRÁCTICA Y CASOS DE APLICACIÓN (Inferior Derecha) =================
  {
    id: 'branch-practica',
    type: 'branchNode',
    position: { x: 950, y: 340 },
    data: {
      id: 'branch-practica',
      title: 'CASOS PRÁCTICOS Y PREGUNTAS RETADORAS',
      subtitle: 'Resolución de Casos de Sesión UTP y Demostración de Logro',
      branch: 'practica',
      branchLabel: '4. Casos Prácticos UTP',
      iconName: 'Award',
      summary: 'Actividades aplicadas para transformar la demanda en valor: arquitectura web con base de datos, cuadro comparativo de principios y mapa mental.',
      tags: ['Casos UTP', 'Web + BD', 'Matriz SVS', 'Logro Sesión'],
      accentColor: '#7c3aed',
      badge: 'Aplicación Práctica'
    }
  },
  {
    id: 'prac-retadora',
    type: 'conceptNode',
    position: { x: 520, y: 330 },
    data: {
      id: 'prac-retadora',
      title: 'Pregunta Retadora de Sesión',
      subtitle: '¿Cómo aplicaría usted la gestión de servicios?',
      branch: 'practica',
      branchLabel: '4. Casos Prácticos UTP',
      iconName: 'HelpCircle',
      summary: 'Reflexión inicial: cómo conectar la tecnología y la infraestructura con la experiencia del cliente y la rentabilidad del negocio.',
      tags: ['Pregunta Retadora', 'Estrategia', 'Alineación'],
      accentColor: '#7c3aed',
      badge: 'Reflexión'
    }
  },
  {
    id: 'prac-caso-1',
    type: 'conceptNode',
    position: { x: 1390, y: 330 },
    data: {
      id: 'prac-caso-1',
      title: 'Caso 01: Sistema Web con BD que Genera Valor',
      subtitle: 'Arquitectura Cloud / On-Premise con Utilidad y Garantía',
      branch: 'practica',
      branchLabel: '4. Casos Prácticos UTP',
      iconName: 'Globe',
      summary: 'Diseño práctico de un sistema web (ej. portal de servicios universitarios o transaccional) con DBMS optimizado que entrega valor directo a usuarios.',
      tags: ['Caso 01', 'Sistema Web', 'Database', 'Utilidad/Garantía'],
      accentColor: '#7c3aed',
      badge: 'Caso Práctico 1'
    }
  },
  {
    id: 'prac-caso-2',
    type: 'conceptNode',
    position: { x: 680, y: 690 },
    data: {
      id: 'prac-caso-2',
      title: 'Caso 02: Cuadro Comparativo de Principios',
      subtitle: 'Matriz analítica de los 7 principios de la guía del SVS',
      branch: 'practica',
      branchLabel: '4. Casos Prácticos UTP',
      iconName: 'FileSpreadsheet',
      summary: 'Elaboración del cuadro comparativo solicitado en clase: objetivo, beneficios concretos, riesgos de omisión y relación con marcos ágiles.',
      tags: ['Caso 02', 'Cuadro Comparativo', 'Matriz SVS'],
      accentColor: '#7c3aed',
      badge: 'Caso Práctico 2'
    }
  },
  {
    id: 'prac-caso-3',
    type: 'conceptNode',
    position: { x: 1220, y: 690 },
    data: {
      id: 'prac-caso-3',
      title: 'Caso 03: Mapa Conceptual de la Sesión',
      subtitle: 'Síntesis sistémica interactiva de la Semana 11 - Sesión 1',
      branch: 'practica',
      branchLabel: '4. Casos Prácticos UTP',
      iconName: 'Boxes',
      summary: 'Construcción del mapa mental y conceptual de la sesión, integrando Valor, Arquetipos, SVS de ITIL 4 y Principios Rectores.',
      tags: ['Caso 03', 'Mapa Mental', 'Síntesis Sesión'],
      accentColor: '#7c3aed',
      badge: 'Caso Práctico 3'
    }
  }
];

// ================= EDGES / CONEXIONES CONCEPTUALES =================
export const INITIAL_EDGES: Edge[] = [
  // ================= CONEXIONES NUCLEARES (CENTRAL A LAS 4 RAMAS) =================
  {
    id: 'edge-central-valor',
    source: 'central-node',
    target: 'branch-valor',
    sourceHandle: 'left',
    targetHandle: 'right',
    label: 'Fundamenta y Define',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#059669', strokeWidth: 2.5 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#059669' }
  },
  {
    id: 'edge-central-svs',
    source: 'central-node',
    target: 'branch-svs',
    sourceHandle: 'right',
    targetHandle: 'left',
    label: 'Arquitectura Operativa',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#2563eb', strokeWidth: 2.5 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' }
  },
  {
    id: 'edge-central-principios',
    source: 'central-node',
    target: 'branch-principios',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    label: 'Guías de Decisión',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#d97706', strokeWidth: 2.5 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#d97706' }
  },
  {
    id: 'edge-central-practica',
    source: 'central-node',
    target: 'branch-practica',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    label: 'Aplicación Práctica UTP',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#7c3aed', strokeWidth: 2.5 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#7c3aed' }
  },

  // ================= RAMA 1: CONEXIONES DE VALOR Y ARQUETIPOS (VERDE) =================
  {
    id: 'edge-valor-tech',
    source: 'branch-valor',
    target: 'val-arquetipos-tech',
    sourceHandle: 'src-left',
    targetHandle: 'right',
    label: 'Soporte Técnico',
    type: 'smoothstep',
    style: { stroke: '#059669', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#059669' }
  },
  {
    id: 'edge-valor-def',
    source: 'branch-valor',
    target: 'val-definicion-itil',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    label: 'Ecuación ITIL',
    type: 'smoothstep',
    style: { stroke: '#059669', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#059669' }
  },
  {
    id: 'edge-valor-porter',
    source: 'branch-valor',
    target: 'val-financiero-porter',
    sourceHandle: 'src-right',
    targetHandle: 'left',
    label: 'Enfoque Negocio',
    type: 'smoothstep',
    style: { stroke: '#059669', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#059669' }
  },
  {
    id: 'edge-eq-utilidad',
    source: 'val-definicion-itil',
    target: 'val-utilidad',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    label: '+ Fit for Purpose',
    type: 'smoothstep',
    style: { stroke: '#10b981', strokeWidth: 2, strokeDasharray: '4 4' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' }
  },
  {
    id: 'edge-eq-garantia',
    source: 'val-definicion-itil',
    target: 'val-garantia',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    label: '+ Fit for Use',
    type: 'smoothstep',
    style: { stroke: '#10b981', strokeWidth: 2, strokeDasharray: '4 4' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' }
  },
  {
    id: 'edge-eq-cocreacion',
    source: 'val-definicion-itil',
    target: 'val-cocreacion',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    label: '= Co-creado',
    type: 'smoothstep',
    style: { stroke: '#059669', strokeWidth: 2.5 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#059669' }
  },
  {
    id: 'edge-tech-def',
    source: 'val-arquetipos-tech',
    target: 'val-definicion-itil',
    sourceHandle: 'src-bottom',
    targetHandle: 'left',
    label: 'arquitectura',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#10b981', strokeWidth: 1.5, strokeDasharray: '4 4' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' }
  },

  // ================= RAMA 2: CONEXIONES DEL SISTEMA SVS (AZUL) =================
  {
    id: 'edge-svs-demanda',
    source: 'branch-svs',
    target: 'svs-demanda-valor',
    sourceHandle: 'src-left',
    targetHandle: 'right',
    label: 'Insumo y Salida',
    type: 'smoothstep',
    style: { stroke: '#2563eb', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' }
  },
  {
    id: 'edge-svs-gobernanza',
    source: 'branch-svs',
    target: 'svs-gobernanza',
    sourceHandle: 'src-right',
    targetHandle: 'left',
    label: 'Control Estratégico',
    type: 'smoothstep',
    style: { stroke: '#2563eb', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' }
  },
  {
    id: 'edge-svs-cadena',
    source: 'branch-svs',
    target: 'svs-cadena-valor',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    label: 'Motor SVC',
    type: 'smoothstep',
    style: { stroke: '#2563eb', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' }
  },
  {
    id: 'edge-svs-practicas',
    source: 'branch-svs',
    target: 'svs-practicas-mejora',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    label: 'Capacidades',
    type: 'smoothstep',
    style: { stroke: '#2563eb', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' }
  },
  {
    id: 'edge-demanda-cadena',
    source: 'svs-demanda-valor',
    target: 'svs-cadena-valor',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    label: 'activa cadena',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '4 4' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' }
  },
  {
    id: 'edge-cadena-practicas',
    source: 'svs-cadena-valor',
    target: 'svs-practicas-mejora',
    sourceHandle: 'src-right',
    targetHandle: 'left',
    label: 'ejecuta prácticas',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#3b82f6', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' }
  },

  // ================= RAMA 3: CONEXIONES DE LOS 7 PRINCIPIOS (ÁMBAR) =================
  {
    id: 'edge-princ-1',
    source: 'branch-principios',
    target: 'princ-1-valor',
    sourceHandle: 'src-left',
    targetHandle: 'right',
    label: 'P1',
    type: 'smoothstep',
    style: { stroke: '#d97706', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#d97706' }
  },
  {
    id: 'edge-princ-2',
    source: 'branch-principios',
    target: 'princ-2-donde',
    sourceHandle: 'src-left',
    targetHandle: 'right',
    label: 'P2',
    type: 'smoothstep',
    style: { stroke: '#d97706', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#d97706' }
  },
  {
    id: 'edge-princ-3',
    source: 'branch-principios',
    target: 'princ-3-iterar',
    sourceHandle: 'src-left',
    targetHandle: 'right',
    label: 'P3',
    type: 'smoothstep',
    style: { stroke: '#d97706', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#d97706' }
  },
  {
    id: 'edge-princ-4',
    source: 'branch-principios',
    target: 'princ-4-colaborar',
    sourceHandle: 'src-left',
    targetHandle: 'right',
    label: 'P4',
    type: 'smoothstep',
    style: { stroke: '#d97706', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#d97706' }
  },
  {
    id: 'edge-princ-5',
    source: 'branch-principios',
    target: 'princ-5-holistico',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    label: 'P5',
    type: 'smoothstep',
    style: { stroke: '#d97706', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#d97706' }
  },
  {
    id: 'edge-princ-6',
    source: 'branch-principios',
    target: 'princ-6-simple',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    label: 'P6',
    type: 'smoothstep',
    style: { stroke: '#d97706', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#d97706' }
  },
  {
    id: 'edge-princ-7',
    source: 'branch-principios',
    target: 'princ-7-optimizar',
    sourceHandle: 'src-right',
    targetHandle: 'left',
    label: 'P7',
    type: 'smoothstep',
    style: { stroke: '#d97706', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#d97706' }
  },
  // Conexiones sinérgicas del ciclo de principios
  {
    id: 'edge-p1-p2',
    source: 'princ-1-valor',
    target: 'princ-2-donde',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    label: 'diagnóstico',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#f59e0b', strokeWidth: 1.5, strokeDasharray: '4 4' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b' }
  },
  {
    id: 'edge-p2-p3',
    source: 'princ-2-donde',
    target: 'princ-3-iterar',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    label: 'iterar',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#f59e0b', strokeWidth: 1.5, strokeDasharray: '4 4' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b' }
  },
  {
    id: 'edge-p3-p4',
    source: 'princ-3-iterar',
    target: 'princ-4-colaborar',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    label: 'feedback',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#f59e0b', strokeWidth: 1.5, strokeDasharray: '4 4' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b' }
  },
  {
    id: 'edge-p4-p5',
    source: 'princ-4-colaborar',
    target: 'princ-5-holistico',
    sourceHandle: 'src-right',
    targetHandle: 'left',
    label: 'visión holística',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#f59e0b', strokeWidth: 1.5, strokeDasharray: '4 4' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b' }
  },
  {
    id: 'edge-p5-p6',
    source: 'princ-5-holistico',
    target: 'princ-6-simple',
    sourceHandle: 'src-right',
    targetHandle: 'left',
    label: 'simplificar',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#f59e0b', strokeWidth: 1.5, strokeDasharray: '4 4' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b' }
  },
  {
    id: 'edge-p6-p7',
    source: 'princ-6-simple',
    target: 'princ-7-optimizar',
    sourceHandle: 'src-top',
    targetHandle: 'bottom',
    label: 'luego automatizar',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#f59e0b', strokeWidth: 1.5, strokeDasharray: '4 4' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b' }
  },

  // ================= RAMA 4: CONEXIONES DE PRÁCTICA Y CASOS (VIOLETA) =================
  {
    id: 'edge-prac-retadora',
    source: 'branch-practica',
    target: 'prac-retadora',
    sourceHandle: 'src-left',
    targetHandle: 'right',
    label: 'Reflexión',
    type: 'smoothstep',
    style: { stroke: '#7c3aed', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#7c3aed' }
  },
  {
    id: 'edge-prac-c1',
    source: 'branch-practica',
    target: 'prac-caso-1',
    sourceHandle: 'src-right',
    targetHandle: 'left',
    label: 'Caso 01: Web + BD',
    type: 'smoothstep',
    style: { stroke: '#7c3aed', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#7c3aed' }
  },
  {
    id: 'edge-prac-c2',
    source: 'branch-practica',
    target: 'prac-caso-2',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    label: 'Caso 02: Matriz SVS',
    type: 'smoothstep',
    style: { stroke: '#7c3aed', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#7c3aed' }
  },
  {
    id: 'edge-prac-c3',
    source: 'branch-practica',
    target: 'prac-caso-3',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    label: 'Caso 03: Mapa',
    type: 'smoothstep',
    style: { stroke: '#7c3aed', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#7c3aed' }
  },
  {
    id: 'edge-retadora-c2',
    source: 'prac-retadora',
    target: 'prac-caso-2',
    sourceHandle: 'src-bottom',
    targetHandle: 'left',
    label: 'fundamentado con',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#a855f7', strokeWidth: 1.5, strokeDasharray: '4 4' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#a855f7' }
  },
  {
    id: 'edge-c1-c3',
    source: 'prac-caso-1',
    target: 'prac-caso-3',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    label: 'materializa valor',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#a855f7', strokeWidth: 1.5, strokeDasharray: '4 4' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#a855f7' }
  },
  {
    id: 'edge-c2-c3',
    source: 'prac-caso-2',
    target: 'prac-caso-3',
    sourceHandle: 'src-right',
    targetHandle: 'left',
    label: 'síntesis total',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#a855f7', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#a855f7' }
  }
];
