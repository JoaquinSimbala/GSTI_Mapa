import { Node, Edge, MarkerType } from '@xyflow/react';

export interface CustomNodeData {
  id: string;
  title: string;
  subtitle?: string;
  branch: 'central' | 'fundamentos' | 'pdca' | 'servicedesk' | 'seguridad';
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

// Layout ultra espacioso sin etiquetas de "Rama" ni "Nivel"
export const INITIAL_NODES: Node<CustomNodeData>[] = [
  // ================= NODO CENTRAL =================
  {
    id: 'central-node',
    type: 'centralNode',
    position: { x: 0, y: 0 },
    data: {
      id: 'central-node',
      title: 'MEJORA CONTINUA DEL SERVICIO DE TI',
      subtitle: 'Marcos normativos, ciclo PDCA, gestión de cambios y ciberseguridad aplicada al Service Desk',
      branch: 'central',
      branchLabel: 'Núcleo Central',
      iconName: 'Sparkles',
      summary: 'Mantener competitividad, adaptarse al cambio, satisfacer al cliente, reducir costos, eliminar desperdicios e impulsar la productividad.',
      tags: ['ITSM', 'Estrategia', 'Calidad', 'Deming'],
      canExpand: true,
      isExpanded: true,
      badge: 'Núcleo Central'
    }
  },

  // ================= FUNDAMENTOS Y RENDIMIENTO (Superior Izquierda) =================
  {
    id: 'branch-fundamentos',
    type: 'branchNode',
    position: { x: -850, y: -520 },
    data: {
      id: 'branch-fundamentos',
      title: 'FUNDAMENTOS Y RENDIMIENTO',
      subtitle: 'Métricas cuantitativas y objetivos estratégicos',
      branch: 'fundamentos',
      branchLabel: 'Fundamentos',
      iconName: 'TrendingUp',
      summary: 'La mejora continua se sustenta en el equilibrio de rendimiento y metas organizacionales a largo plazo.',
      tags: ['Eficacia', 'Eficiencia', 'Efectividad'],
      accentColor: '#059669',
      badge: 'Fundamentos'
    }
  },
  {
    id: 'fund-ecuacion',
    type: 'conceptNode',
    position: { x: -1400, y: -280 },
    data: {
      id: 'fund-ecuacion',
      title: 'Ecuación de Rendimiento Global',
      subtitle: 'Eficacia + Eficiencia = Efectividad',
      branch: 'fundamentos',
      branchLabel: 'Fundamentos',
      iconName: 'Calculator',
      summary: 'Modelo integral que evalúa el logro de objetivos frente a la optimización de recursos invertidos.',
      tags: ['Ecuación', 'KPIs Globales'],
      accentColor: '#059669',
      badge: 'Fórmula'
    }
  },
  {
    id: 'fund-eficacia',
    type: 'detailNode',
    position: { x: -1600, y: 40 },
    data: {
      id: 'fund-eficacia',
      title: 'Eficacia',
      subtitle: 'Logro de Metas',
      branch: 'fundamentos',
      branchLabel: 'Fundamentos',
      iconName: 'Target',
      summary: 'Capacidad de alcanzar los resultados y SLAs comprometidos con los usuarios.',
      tags: ['SLAs', 'FCR'],
      accentColor: '#059669'
    }
  },
  {
    id: 'fund-eficiencia',
    type: 'detailNode',
    position: { x: -1360, y: 40 },
    data: {
      id: 'fund-eficiencia',
      title: 'Eficiencia',
      subtitle: 'Optimización de Recursos',
      branch: 'fundamentos',
      branchLabel: 'Fundamentos',
      iconName: 'Cpu',
      summary: 'Uso racional y óptimo de recursos: costos, tiempo y capacidad tecnológica.',
      tags: ['Costos', 'Lean IT'],
      accentColor: '#059669'
    }
  },
  {
    id: 'fund-efectividad',
    type: 'detailNode',
    position: { x: -1120, y: 40 },
    data: {
      id: 'fund-efectividad',
      title: 'Efectividad',
      subtitle: 'Resultado Integral',
      branch: 'fundamentos',
      branchLabel: 'Fundamentos',
      iconName: 'CheckCircle2',
      summary: 'Resultado integral sinérgico: Eficacia + Eficiencia para generar valor real de TI.',
      tags: ['Sinergia', 'Impacto'],
      accentColor: '#059669'
    }
  },
  {
    id: 'fund-objetivos',
    type: 'conceptNode',
    position: { x: -750, y: -240 },
    data: {
      id: 'fund-objetivos',
      title: 'Objetivos Estratégicos',
      subtitle: 'Metas Clave de Negocio',
      branch: 'fundamentos',
      branchLabel: 'Fundamentos',
      iconName: 'Compass',
      summary: '• Adaptación continua frente al mercado.\n• Reducción de costos operativos y desperdicios.\n• Creación de una cultura de calidad sostenible.',
      tags: ['Adaptación', 'Ahorro', 'Cultura'],
      accentColor: '#059669',
      badge: 'Estrategia'
    }
  },

  // ================= METODOLOGÍA CÍCLICA (PDCA) (Superior Derecha) =================
  {
    id: 'branch-pdca',
    type: 'branchNode',
    position: { x: 1000, y: -520 },
    data: {
      id: 'branch-pdca',
      title: 'METODOLOGÍA CÍCLICA (CICLO PDCA)',
      subtitle: 'Ciclo de Deming: Planificar, Hacer, Verificar, Actuar',
      branch: 'pdca',
      branchLabel: 'Ciclo PDCA',
      iconName: 'RotateCw',
      summary: 'Metodología iterativa continua para resolver problemas y optimizar procesos de soporte.',
      tags: ['Deming', 'Shewhart', 'ISO 9001'],
      accentColor: '#d97706',
      badge: 'Ciclo Deming'
    }
  },
  {
    id: 'pdca-plan',
    type: 'stepNode',
    position: { x: 800, y: -260 },
    data: {
      id: 'pdca-plan',
      title: '1. Planificar (Plan)',
      subtitle: 'Identificar y Definir Objetivos',
      branch: 'pdca',
      branchLabel: 'Ciclo PDCA',
      iconName: 'FileSpreadsheet',
      summary: 'Identificar áreas de mejora, definir objetivos y realizar análisis de procesos y encuestas de satisfacción.',
      tags: ['Diagnóstico', 'Encuestas'],
      accentColor: '#d97706',
      badge: 'Fase 1'
    }
  },
  {
    id: 'pdca-do',
    type: 'stepNode',
    position: { x: 1220, y: -260 },
    data: {
      id: 'pdca-do',
      title: '2. Hacer (Do)',
      subtitle: 'Implementar y Capacitar',
      branch: 'pdca',
      branchLabel: 'Ciclo PDCA',
      iconName: 'Wrench',
      summary: 'Implementar cambios y mejoras planificadas. Ejecutar pruebas piloto y capacitación intensiva del personal.',
      tags: ['Piloto', 'Capacitación'],
      accentColor: '#d97706',
      badge: 'Fase 2'
    }
  },
  {
    id: 'pdca-check',
    type: 'stepNode',
    position: { x: 1220, y: 40 },
    data: {
      id: 'pdca-check',
      title: '3. Verificar (Check)',
      subtitle: 'Evaluar KPIs y Auditorías',
      branch: 'pdca',
      branchLabel: 'Ciclo PDCA',
      iconName: 'BarChart3',
      summary: 'Evaluar resultados frente a metas. Medición estricta de KPIs, feedback de usuarios y auditorías internas.',
      tags: ['KPIs', 'Auditoría'],
      accentColor: '#d97706',
      badge: 'Fase 3'
    }
  },
  {
    id: 'pdca-act',
    type: 'stepNode',
    position: { x: 800, y: 40 },
    data: {
      id: 'pdca-act',
      title: '4. Actuar (Act)',
      subtitle: 'Estandarizar y Reiniciar Ciclo',
      branch: 'pdca',
      branchLabel: 'Ciclo PDCA',
      iconName: 'Award',
      summary: 'Estandarizar soluciones exitosas, documentar procesos, actualizar manuales y reiniciar el ciclo con nuevas metas.',
      tags: ['Manuales', 'Reinicio'],
      accentColor: '#d97706',
      badge: 'Fase 4'
    }
  },

  // ================= SERVICE DESK Y GESTIÓN DE CAMBIOS (Inferior Izquierda) =================
  {
    id: 'branch-servicedesk',
    type: 'branchNode',
    position: { x: -850, y: 450 },
    data: {
      id: 'branch-servicedesk',
      title: 'SERVICE DESK Y GESTIÓN DE CAMBIOS',
      subtitle: 'Operación, soporte y control seguro de cambios',
      branch: 'servicedesk',
      branchLabel: 'Service Desk',
      iconName: 'Headset',
      summary: 'Punto único de contacto con usuarios y marco de control riguroso para cambios en infraestructura.',
      tags: ['SPOC', 'ITSM', 'ITIL 4'],
      accentColor: '#2563eb',
      badge: 'Service Desk'
    }
  },
  {
    id: 'sd-modelos',
    type: 'conceptNode',
    position: { x: -1400, y: 720 },
    data: {
      id: 'sd-modelos',
      title: 'Estructura y Ubicación',
      subtitle: 'Modelos Organizacionales',
      branch: 'servicedesk',
      branchLabel: 'Service Desk',
      iconName: 'Network',
      summary: 'Centralizado, Descentralizado, Virtual, Jerárquico/Escalonado, In-situ, Remoto y Follow-the-sun.',
      tags: ['Centralizado', 'Virtual', 'Follow-the-Sun'],
      accentColor: '#2563eb',
      badge: 'Modelos'
    }
  },
  {
    id: 'sd-responsabilidades',
    type: 'conceptNode',
    position: { x: -950, y: 720 },
    data: {
      id: 'sd-responsabilidades',
      title: 'Responsabilidades Operativas',
      subtitle: 'Flujo del Servicio e ITSM',
      branch: 'servicedesk',
      branchLabel: 'Service Desk',
      iconName: 'ListChecks',
      summary: '• Registro y diagnóstico de incidencias.\n• Restauración inicial del servicio.\n• Escalado especializado a N2/N3.\n• Monitoreo de SLAs y comunicación.\n• Herramientas ITSM: ServiceNow, Zendesk.',
      tags: ['ServiceNow', 'Zendesk', 'SLA'],
      accentColor: '#2563eb',
      badge: 'Operativa'
    }
  },
  {
    id: 'sd-cambios',
    type: 'conceptNode',
    position: { x: -500, y: 720 },
    data: {
      id: 'sd-cambios',
      title: 'Controles de Gestión de Cambios',
      subtitle: '4 Fases Mandatorias',
      branch: 'servicedesk',
      branchLabel: 'Service Desk',
      iconName: 'SlidersHorizontal',
      summary: '1. Solicitud de Cambio formal (RFC)\n2. Evaluación de Impacto y Riesgos\n3. Implementación Controlada en entorno seguro\n4. Monitoreo y Evaluación post-implementación',
      tags: ['RFC', 'Rollback', 'Control'],
      accentColor: '#2563eb',
      badge: '4 Fases'
    }
  },

  // ================= MARCOS NORMATIVOS Y GESTIÓN DE SEGURIDAD (Inferior Derecha) =================
  {
    id: 'branch-seguridad',
    type: 'branchNode',
    position: { x: 750, y: 450 },
    data: {
      id: 'branch-seguridad',
      title: 'MARCOS NORMATIVOS Y SEGURIDAD',
      subtitle: 'Estándares ISO, ciberdefensa y respuesta a incidentes',
      branch: 'seguridad',
      branchLabel: 'Seguridad & ISO',
      iconName: 'ShieldAlert',
      summary: 'Alineación a estándares internacionales y protocolos defensivos ante amenazas informáticas.',
      tags: ['Normas ISO', 'Incidentes', '7 Capas'],
      accentColor: '#7c3aed',
      badge: 'Seguridad & ISO'
    }
  },
  {
    id: 'iso-ecosistema',
    type: 'conceptNode',
    position: { x: 450, y: 720 },
    data: {
      id: 'iso-ecosistema',
      title: 'Ecosistema de Normas ISO',
      subtitle: 'Marcos de Calidad y Gobernanza',
      branch: 'seguridad',
      branchLabel: 'Seguridad & ISO',
      iconName: 'FileCheck',
      summary: '• ISO 9001 / ISO 25000: Calidad procesos y software.\n• ISO 38500: Gobernanza de TI.\n• ISO 31000 / ISO 27005: Gestión de riesgos.\n• ISO 27001 / ISO 27032: SGSI y ciberseguridad.\n• ISO 27031: Continuidad y respuesta.',
      tags: ['ISO 9001', 'ISO 27001', 'ISO 38500'],
      accentColor: '#7c3aed',
      badge: 'Normas ISO'
    }
  },
  {
    id: 'seg-protocolo',
    type: 'conceptNode',
    position: { x: 900, y: 720 },
    data: {
      id: 'seg-protocolo',
      title: 'Protocolo ante Ciberincidentes',
      subtitle: '6 Pasos de Respuesta y Mitigación',
      branch: 'seguridad',
      branchLabel: 'Seguridad & ISO',
      iconName: 'AlertTriangle',
      summary: 'Paso 1: Identificación y Primeras Acciones (aislar)\nPaso 2: Contención (reforzar credenciales)\nPaso 3: Investigación Forense (vector y amenaza)\nPaso 4: Informar a la Dirección\nPaso 5: Acciones Legales y Notificación\nPaso 6: Lecciones Aprendidas y Simulacros',
      tags: ['Forense', 'Contención', '6 Pasos'],
      accentColor: '#7c3aed',
      badge: '6 Pasos'
    }
  },
  {
    id: 'seg-capas',
    type: 'conceptNode',
    position: { x: 1350, y: 720 },
    data: {
      id: 'seg-capas',
      title: 'Capas de Ciberseguridad',
      subtitle: 'Defensa en Profundidad (7 Capas)',
      branch: 'seguridad',
      branchLabel: 'Seguridad & ISO',
      iconName: 'Layers',
      summary: '01 Física · 02 Red · 03 Perímetro\n04 Aplicación · 05 Dispositivo\n06 Datos · 07 Humana\n(El usuario como última línea de defensa).',
      tags: ['7 Capas', 'Defensa en Profundidad'],
      accentColor: '#7c3aed',
      badge: '7 Capas'
    }
  }
];

export const INITIAL_EDGES: Edge[] = [
  // Del Nodo Central a los 4 Ejes Principales
  {
    id: 'edge-c-r1',
    source: 'central-node',
    sourceHandle: 'top',
    target: 'branch-fundamentos',
    targetHandle: 'bottom',
    label: 'se fundamenta en',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#059669', strokeWidth: 2.5 },
    labelStyle: { fill: '#065f46', fontWeight: 700, fontSize: 11 },
    labelBgStyle: { fill: '#d1fae5', stroke: '#10b981', strokeWidth: 1 },
    labelBgPadding: [6, 4],
    markerEnd: { type: MarkerType.ArrowClosed, color: '#059669' }
  },
  {
    id: 'edge-c-r2',
    source: 'central-node',
    sourceHandle: 'top',
    target: 'branch-pdca',
    targetHandle: 'bottom',
    label: 'se ejecuta mediante',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#d97706', strokeWidth: 2.5 },
    labelStyle: { fill: '#92400e', fontWeight: 700, fontSize: 11 },
    labelBgStyle: { fill: '#fef3c7', stroke: '#f59e0b', strokeWidth: 1 },
    labelBgPadding: [6, 4],
    markerEnd: { type: MarkerType.ArrowClosed, color: '#d97706' }
  },
  {
    id: 'edge-c-r3',
    source: 'central-node',
    sourceHandle: 'bottom',
    target: 'branch-servicedesk',
    targetHandle: 'top',
    label: 'opera a través de',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#2563eb', strokeWidth: 2.5 },
    labelStyle: { fill: '#1e40af', fontWeight: 700, fontSize: 11 },
    labelBgStyle: { fill: '#dbeafe', stroke: '#3b82f6', strokeWidth: 1 },
    labelBgPadding: [6, 4],
    markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' }
  },
  {
    id: 'edge-c-r4',
    source: 'central-node',
    sourceHandle: 'bottom',
    target: 'branch-seguridad',
    targetHandle: 'top',
    label: 'se regula bajo',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#7c3aed', strokeWidth: 2.5 },
    labelStyle: { fill: '#5b21b6', fontWeight: 700, fontSize: 11 },
    labelBgStyle: { fill: '#ede9fe', stroke: '#8b5cf6', strokeWidth: 1 },
    labelBgPadding: [6, 4],
    markerEnd: { type: MarkerType.ArrowClosed, color: '#7c3aed' }
  },

  // FUNDAMENTOS EDGES
  {
    id: 'edge-r1-ecuacion',
    source: 'branch-fundamentos',
    target: 'fund-ecuacion',
    targetHandle: 'top',
    label: 'evalúa mediante',
    type: 'smoothstep',
    style: { stroke: '#059669', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#059669' }
  },
  {
    id: 'edge-r1-objetivos',
    source: 'branch-fundamentos',
    target: 'fund-objetivos',
    targetHandle: 'top',
    label: 'persigue',
    type: 'smoothstep',
    style: { stroke: '#059669', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#059669' }
  },
  {
    id: 'edge-eq-eficacia',
    source: 'fund-ecuacion',
    target: 'fund-eficacia',
    targetHandle: 'top',
    label: '+',
    type: 'smoothstep',
    style: { stroke: '#10b981', strokeWidth: 2, strokeDasharray: '4 4' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' }
  },
  {
    id: 'edge-eq-eficiencia',
    source: 'fund-ecuacion',
    target: 'fund-eficiencia',
    targetHandle: 'top',
    label: '+',
    type: 'smoothstep',
    style: { stroke: '#10b981', strokeWidth: 2, strokeDasharray: '4 4' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' }
  },
  {
    id: 'edge-eq-efectividad',
    source: 'fund-ecuacion',
    target: 'fund-efectividad',
    targetHandle: 'top',
    label: '=',
    type: 'smoothstep',
    style: { stroke: '#059669', strokeWidth: 2.5 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#059669' }
  },

  // CICLO PDCA EDGES
  {
    id: 'edge-r2-plan',
    source: 'branch-pdca',
    target: 'pdca-plan',
    targetHandle: 'top',
    label: 'Fase Inicial',
    type: 'smoothstep',
    style: { stroke: '#d97706', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#d97706' }
  },
  {
    id: 'edge-pdca-plan-do',
    source: 'pdca-plan',
    target: 'pdca-do',
    targetHandle: 'left',
    label: 'ejecutar',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#d97706', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#d97706' }
  },
  {
    id: 'edge-pdca-do-check',
    source: 'pdca-do',
    target: 'pdca-check',
    targetHandle: 'top',
    label: 'evaluar',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#d97706', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#d97706' }
  },
  {
    id: 'edge-pdca-check-act',
    source: 'pdca-check',
    target: 'pdca-act',
    targetHandle: 'right',
    label: 'estandarizar',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#d97706', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#d97706' }
  },
  {
    id: 'edge-pdca-act-plan',
    source: 'pdca-act',
    target: 'pdca-plan',
    targetHandle: 'bottom',
    label: 'reinicio en espiral',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#d97706', strokeWidth: 2, strokeDasharray: '5 5' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#d97706' }
  },

  // SERVICE DESK EDGES
  {
    id: 'edge-r3-modelos',
    source: 'branch-servicedesk',
    target: 'sd-modelos',
    targetHandle: 'top',
    type: 'smoothstep',
    style: { stroke: '#2563eb', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' }
  },
  {
    id: 'edge-r3-responsabilidades',
    source: 'branch-servicedesk',
    target: 'sd-responsabilidades',
    targetHandle: 'top',
    type: 'smoothstep',
    style: { stroke: '#2563eb', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' }
  },
  {
    id: 'edge-r3-cambios',
    source: 'branch-servicedesk',
    target: 'sd-cambios',
    targetHandle: 'top',
    type: 'smoothstep',
    style: { stroke: '#2563eb', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' }
  },

  // SEGURIDAD & ISO EDGES
  {
    id: 'edge-r4-iso',
    source: 'branch-seguridad',
    target: 'iso-ecosistema',
    targetHandle: 'top',
    type: 'smoothstep',
    style: { stroke: '#7c3aed', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#7c3aed' }
  },
  {
    id: 'edge-r4-protocolo',
    source: 'branch-seguridad',
    target: 'seg-protocolo',
    targetHandle: 'top',
    type: 'smoothstep',
    style: { stroke: '#7c3aed', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#7c3aed' }
  },
  {
    id: 'edge-r4-capas',
    source: 'branch-seguridad',
    target: 'seg-capas',
    targetHandle: 'top',
    type: 'smoothstep',
    style: { stroke: '#7c3aed', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#7c3aed' }
  }
];
