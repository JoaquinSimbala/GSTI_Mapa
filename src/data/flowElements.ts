import { Node, Edge, MarkerType } from '@xyflow/react';

export interface CustomNodeData {
  id: string;
  title: string;
  subtitle?: string;
  branch: 'central' | 'generales' | 'tecnicas' | 'certificacion' | 'practica';
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

// Layout balanceado, espacioso y sin solapamiento para Semana 13 - Sesión 2 UTP
export const INITIAL_NODES: Node<CustomNodeData>[] = [
  // ================= NODO CENTRAL =================
  {
    id: 'central-node',
    type: 'centralNode',
    position: { x: 0, y: 0 },
    data: {
      id: 'central-node',
      title: 'PRÁCTICAS DE GESTIÓN ITIL & ESQUEMA DE CERTIFICACIÓN',
      subtitle: 'Gestión de Servicios de TI · Semana 13 - Sesión 2 (UTP Agosto 2026)',
      branch: 'central',
      branchLabel: 'Núcleo Central',
      iconName: 'Sparkles',
      summary: 'Marco integrador que comprende las prácticas de gestión de servicios (12 generales y 3 técnicas), normas internacionales (ISO 20000, ISO 22237, ISO 31000, COBIT) y el esquema de certificación PeopleCert para optimizar la calidad y el valor en organizaciones.',
      tags: ['ITIL 4', 'Prácticas de Gestión', 'Certificación', 'UTP S13', 'ISO 20000', 'COBIT'],
      canExpand: true,
      isExpanded: true,
      badge: 'Núcleo Central S13'
    }
  },

  // ================= RAMA 1: PRÁCTICAS DE GESTIÓN GENERAL ITIL (Superior Izquierda) =================
  {
    id: 'branch-generales',
    type: 'branchNode',
    position: { x: -950, y: -450 },
    data: {
      id: 'branch-generales',
      title: 'PRÁCTICAS DE GESTIÓN GENERAL ITIL',
      subtitle: '12 Capacidades Directivas y Organizacionales para Alinear TI al Negocio',
      branch: 'generales',
      branchLabel: '1. Prácticas Generales ITIL',
      iconName: 'Layers',
      summary: 'Permiten estandarizar operaciones, alinear tecnología con objetivos estratégicos, mejorar calidad y confiabilidad, y fomentar la mejora continua e innovación sistemática.',
      tags: ['Gobernanza', 'Estrategia', 'Mejora Continua', 'Riesgos', 'Finanzas'],
      accentColor: '#059669',
      badge: '12 Prácticas Generales'
    }
  },
  {
    id: 'gen-arquitectura',
    type: 'conceptNode',
    position: { x: -1550, y: -800 },
    data: {
      id: 'gen-arquitectura',
      title: 'Gestión de Arquitectura',
      subtitle: 'Estructura TI & Negocio · Data Platform',
      branch: 'generales',
      branchLabel: '1. Prácticas Generales ITIL',
      iconName: 'Boxes',
      summary: 'Define la estructura y componentes del negocio y TI para apoyar la estrategia. Incluye plataformas de datos modernas (Data Lakes, Data Loaders, Service Data y AI Stores).',
      tags: ['Arquitectura', 'Data Lake', 'Big Data', 'Semantix'],
      accentColor: '#059669',
      badge: 'Estrategia TI'
    }
  },
  {
    id: 'gen-mejora-continua',
    type: 'stepNode',
    position: { x: -1050, y: -850 },
    data: {
      id: 'gen-mejora-continua',
      title: 'Gestión Continua de la Mejora (PDCA)',
      subtitle: 'Ciclo Deming: Plan ➔ Do ➔ Check ➔ Act',
      branch: 'generales',
      branchLabel: '1. Prácticas Generales ITIL',
      iconName: 'RotateCw',
      summary: 'Identifica sistemáticamente oportunidades de mejora en servicios, procesos y prácticas aplicando el ciclo PDCA y el Registro de Mejora Continua (CIR).',
      tags: ['PDCA', 'Deming', 'CIR', 'Kaizen'],
      accentColor: '#059669',
      badge: 'Calidad Continua'
    }
  },
  {
    id: 'gen-seguridad',
    type: 'conceptNode',
    position: { x: -550, y: -800 },
    data: {
      id: 'gen-seguridad',
      title: 'Seguridad de la Información',
      subtitle: 'Tríada CIA: Confidencialidad, Integridad y Disponibilidad',
      branch: 'generales',
      branchLabel: '1. Prácticas Generales ITIL',
      iconName: 'Shield',
      summary: 'Protege la confidencialidad, integridad y disponibilidad de la información frente a ciberamenazas y garantiza el cumplimiento normativo.',
      tags: ['Seguridad', 'Tríada CIA', 'ISO 27001', 'Ciberseguridad'],
      accentColor: '#059669',
      badge: 'Ciberdefensa'
    }
  },
  {
    id: 'gen-conocimiento',
    type: 'conceptNode',
    position: { x: -1550, y: -540 },
    data: {
      id: 'gen-conocimiento',
      title: 'Gestión del Conocimiento',
      subtitle: 'Información Correcta en el Momento Oportuno',
      branch: 'generales',
      branchLabel: '1. Prácticas Generales ITIL',
      iconName: 'BookOpen',
      summary: 'Asegura que la información y el conocimiento corporativo estén disponibles para habilitar decisiones ágiles y resolver incidentes con la KEDB.',
      tags: ['Conocimiento', 'KEDB', 'DIKW', 'Autoservicio'],
      accentColor: '#059669',
      badge: 'Capital Intelectual'
    }
  },
  {
    id: 'gen-medicion-reporte',
    type: 'conceptNode',
    position: { x: -1550, y: -280 },
    data: {
      id: 'gen-medicion-reporte',
      title: 'Medición y Reporte',
      subtitle: 'Métricas, KPIs y Cuadros de Mando',
      branch: 'generales',
      branchLabel: '1. Prácticas Generales ITIL',
      iconName: 'BarChart3',
      summary: 'Define métricas, indicadores y reportes cuantitativos y cualitativos para respaldar la toma de decisiones directivas y evitar el "efecto sandía".',
      tags: ['Métricas', 'KPIs', 'SLAs', 'Dashboards'],
      accentColor: '#059669',
      badge: 'Telemetría'
    }
  },
  {
    id: 'gen-cambio-org',
    type: 'conceptNode',
    position: { x: -1550, y: -20 },
    data: {
      id: 'gen-cambio-org',
      title: 'Cambio Organizacional (OCM)',
      subtitle: 'Adopción Humana y Cultura Empresarial',
      branch: 'generales',
      branchLabel: '1. Prácticas Generales ITIL',
      iconName: 'Users',
      summary: 'Facilita la adopción humana de las transformaciones tecnológicas en la empresa, superando la resistencia al cambio mediante ADKAR y Kotter.',
      tags: ['Factor Humano', 'Cultura', 'ADKAR', 'Adopción'],
      accentColor: '#059669',
      badge: 'Gestión Humana'
    }
  },
  {
    id: 'gen-cartera',
    type: 'conceptNode',
    position: { x: -550, y: -540 },
    data: {
      id: 'gen-cartera',
      title: 'Gestión de Cartera (Portfolio)',
      subtitle: 'Inversiones, Pipeline y Catálogo de Servicios',
      branch: 'generales',
      branchLabel: '1. Prácticas Generales ITIL',
      iconName: 'Target',
      summary: 'Gestiona inversiones, servicios y proyectos para maximizar el valor. Controla el Pipeline de propuestas, el Catálogo activo y los servicios retirados.',
      tags: ['Portfolio', 'Inversión', 'Pipeline', 'ROI'],
      accentColor: '#059669',
      badge: 'Retorno de Valor'
    }
  },
  {
    id: 'gen-proyectos',
    type: 'conceptNode',
    position: { x: -550, y: -280 },
    data: {
      id: 'gen-proyectos',
      title: 'Gestión de Proyectos',
      subtitle: 'Planificación, Supervisión y Control',
      branch: 'generales',
      branchLabel: '1. Prácticas Generales ITIL',
      iconName: 'Workflow',
      summary: 'Planifica, supervisa y controla los proyectos de TI y negocio cumpliendo alcance, tiempo, costo y calidad mediante metodologías híbridas (PMBOK + Scrum).',
      tags: ['Proyectos', 'PMBOK', 'Scrum', 'Control'],
      accentColor: '#059669',
      badge: 'Entrega a Tiempo'
    }
  },
  {
    id: 'gen-financiera',
    type: 'conceptNode',
    position: { x: -550, y: -20 },
    data: {
      id: 'gen-financiera',
      title: 'Gestión Financiera del Servicio',
      subtitle: 'Presupuestos, Costos (CapEx/OpEx) y FinOps',
      branch: 'generales',
      branchLabel: '1. Prácticas Generales ITIL',
      iconName: 'TrendingUp',
      summary: 'Controla presupuestos, costos y retornos relacionados con los servicios de TI. Calcula el Costo Total de Propiedad (TCO) y optimiza costos en la nube.',
      tags: ['Finanzas', 'CapEx', 'OpEx', 'FinOps', 'TCO'],
      accentColor: '#059669',
      badge: 'Eficiencia de Costos'
    }
  },
  {
    id: 'gen-relaciones',
    type: 'conceptNode',
    position: { x: -1100, y: -160 },
    data: {
      id: 'gen-relaciones',
      title: 'Gestión de Relaciones (BRM)',
      subtitle: 'Vínculos Productivos con Clientes y Stakeholders',
      branch: 'generales',
      branchLabel: '1. Prácticas Generales ITIL',
      iconName: 'Users',
      summary: 'Desarrolla relaciones productivas con clientes y partes interesadas, facilitando la comprensión empática de prioridades de negocio y satisfacción.',
      tags: ['BRM', 'Clientes', 'Satisfacción', 'Stakeholders'],
      accentColor: '#059669',
      badge: 'Alianza Estratégica'
    }
  },
  {
    id: 'gen-riesgos',
    type: 'stepNode',
    position: { x: -1100, y: 100 },
    data: {
      id: 'gen-riesgos',
      title: 'Gestión de Riesgos (ISO 31000)',
      subtitle: 'Matriz 5x5: Gross, Net y Target Risk',
      branch: 'generales',
      branchLabel: '1. Prácticas Generales ITIL',
      iconName: 'ShieldAlert',
      summary: 'Identifica, evalúa y mitiga riesgos mediante matrices de calor 5x5 (Low, Moderate, High, Extreme). Reduce el Gross Risk hacia el Target Risk deseado.',
      tags: ['Riesgos', 'ISO 31000', 'Matriz 5x5', 'Heatmap'],
      accentColor: '#059669',
      badge: 'Control de Riesgos'
    }
  },
  {
    id: 'gen-proveedores',
    type: 'conceptNode',
    position: { x: -650, y: 240 },
    data: {
      id: 'gen-proveedores',
      title: 'Gestión de Proveedores',
      subtitle: 'Contratos de Soporte (UCs) y Acuerdos de Nivel',
      branch: 'generales',
      branchLabel: '1. Prácticas Generales ITIL',
      iconName: 'ListChecks',
      summary: 'Garantiza que los proveedores externos (cloud vendors, telecomunicaciones, software) cumplan con los acuerdos establecidos y contratos de soporte (UCs).',
      tags: ['Proveedores', 'Vendors', 'Underpinning Contracts', 'Cloud'],
      accentColor: '#059669',
      badge: 'Gestión Externa'
    }
  },

  // ================= RAMA 2: PRÁCTICAS TÉCNICAS Y DESPLIEGUE (Superior Derecha) =================
  {
    id: 'branch-tecnicas',
    type: 'branchNode',
    position: { x: 950, y: -450 },
    data: {
      id: 'branch-tecnicas',
      title: 'PRÁCTICAS DE GESTIÓN TÉCNICA & DESPLIEGUE',
      subtitle: 'Capacidades Técnicas para Mantener y Desarrollar los Servicios',
      branch: 'tecnicas',
      branchLabel: '2. Prácticas Técnicas y Despliegue',
      iconName: 'Cpu',
      summary: 'Cubren las capacidades de ingeniería de infraestructura, redes redundantes, almacenamiento RAID, desarrollo de software y automatización CI/CD.',
      tags: ['Despliegues', 'CI/CD', 'Infraestructura', 'RAID', 'Redes', 'App Web'],
      accentColor: '#2563eb',
      badge: 'Ingeniería & Operaciones'
    }
  },
  {
    id: 'tec-despliegues',
    type: 'stepNode',
    position: { x: 550, y: -800 },
    data: {
      id: 'tec-despliegues',
      title: 'Gestión de Despliegues',
      subtitle: 'Distribución Segura de Software y Hardware',
      branch: 'tecnicas',
      branchLabel: '2. Prácticas Técnicas y Despliegue',
      iconName: 'Rocket',
      summary: 'Planifica y ejecuta la distribución de software o hardware en entornos operativos utilizando estrategias como Blue-Green, Canary y Rollbacks controlados.',
      tags: ['Despliegues', 'Deployment', 'Blue-Green', 'Rollback'],
      accentColor: '#2563eb',
      badge: 'Distribución Ágil'
    }
  },
  {
    id: 'tec-cicd-pipeline',
    type: 'stepNode',
    position: { x: 1050, y: -850 },
    data: {
      id: 'tec-cicd-pipeline',
      title: 'Pipeline CI/CD Automatizado',
      subtitle: 'Commit ➔ Build ➔ Test ➔ Artifact ➔ Deploy ➔ Monitoring',
      branch: 'tecnicas',
      branchLabel: '2. Prácticas Técnicas y Despliegue',
      iconName: 'Zap',
      summary: 'Flujo moderno de integración y entrega continua con herramientas líderes (Docker, Jenkins, ArgoCD, CodePipeline, Kubernetes) para acelerar valor.',
      tags: ['CI/CD', 'Docker', 'Kubernetes', 'Automatización'],
      accentColor: '#2563eb',
      badge: 'Flujo DevOps'
    }
  },
  {
    id: 'tec-infraestructura',
    type: 'conceptNode',
    position: { x: 1550, y: -800 },
    data: {
      id: 'tec-infraestructura',
      title: 'Infraestructura y Plataforma',
      subtitle: 'Centros de Cómputo ISO/IEC 22237 & Cloud',
      branch: 'tecnicas',
      branchLabel: '2. Prácticas Técnicas y Despliegue',
      iconName: 'Server',
      summary: 'Administra los entornos tecnológicos donde se ejecutan los servicios (servidores, clusters, virtualización y nubes públicas como AWS u Oracle Cloud).',
      tags: ['Infraestructura', 'Data Center', 'ISO 22237', 'Cloud'],
      accentColor: '#2563eb',
      badge: 'Base Operacional'
    }
  },
  {
    id: 'tec-alta-disp-raid',
    type: 'conceptNode',
    position: { x: 1550, y: -540 },
    data: {
      id: 'tec-alta-disp-raid',
      title: 'Alta Disponibilidad & RAID',
      subtitle: 'RAID 0, RAID 1 y RAID 01 (0+1) en Almacenamiento',
      branch: 'tecnicas',
      branchLabel: '2. Prácticas Técnicas y Despliegue',
      iconName: 'Database',
      summary: 'Arreglos de discos para tolerancia a fallas: fraccionamiento (RAID 0), espejo (RAID 1) y combinados (RAID 0+1) para proteger datos críticos.',
      tags: ['RAID', 'Almacenamiento', 'Tolerancia a Fallas', 'Discos'],
      accentColor: '#2563eb',
      badge: 'Resiliencia de Datos'
    }
  },
  {
    id: 'tec-redes-cloud',
    type: 'conceptNode',
    position: { x: 1550, y: -280 },
    data: {
      id: 'tec-redes-cloud',
      title: 'Redes & Conectividad Cloud',
      subtitle: 'OSPF, EIGRP, SD-WAN MPLS L2 y Cloud Peering',
      branch: 'tecnicas',
      branchLabel: '2. Prácticas Técnicas y Despliegue',
      iconName: 'Network',
      summary: 'Conectividad empresarial de alta disponibilidad con protocolos dinámicos de enrutamiento (OSPF, EIGRP), HSRP/EtherChannel y canales Cloud Peering hacia AWS y Oracle.',
      tags: ['Redes', 'OSPF', 'SD-WAN', 'Cloud Peering', 'AWS', 'Oracle'],
      accentColor: '#2563eb',
      badge: 'Topología Redundante'
    }
  },
  {
    id: 'tec-desarrollo-sw',
    type: 'conceptNode',
    position: { x: 550, y: -540 },
    data: {
      id: 'tec-desarrollo-sw',
      title: 'Desarrollo y Gestión de Software',
      subtitle: 'Diseño, Construcción, Pruebas y Mantenimiento',
      branch: 'tecnicas',
      branchLabel: '2. Prácticas Técnicas y Despliegue',
      iconName: 'Code',
      summary: 'Diseña, construye, prueba y mantiene aplicaciones con altos estándares de código limpio, pruebas de seguridad SAST/DAST y mantenibilidad.',
      tags: ['Software', 'Desarrollo', 'Pruebas', 'Código Limpio'],
      accentColor: '#2563eb',
      badge: 'Ingeniería de SW'
    }
  },
  {
    id: 'tec-anatomia-web',
    type: 'conceptNode',
    position: { x: 550, y: -280 },
    data: {
      id: 'tec-anatomia-web',
      title: 'Anatomía de una App Web Moderna',
      subtitle: 'FrontEnd, API, BackEnd, Base de Datos y Hosting',
      branch: 'tecnicas',
      branchLabel: '2. Prácticas Técnicas y Despliegue',
      iconName: 'Globe',
      summary: 'Estructura por capas: FrontEnd (React/Vue/JS), API REST/GraphQL, BackEnd (Node/Python/Go/.NET), Bases de Datos SQL/NoSQL y Hosting multicloud.',
      tags: ['App Web', 'Frontend', 'Backend', 'API', 'Cloud'],
      accentColor: '#2563eb',
      badge: 'Stack Tecnológico'
    }
  },
  {
    id: 'tec-metafora-culinaria',
    type: 'stepNode',
    position: { x: 650, y: -20 },
    data: {
      id: 'tec-metafora-culinaria',
      title: 'Metáfora Culinaria de la Web',
      subtitle: 'Cocina (Backend) · Salón (Frontend) · Mozo (API) · Food Truck (Fullstack)',
      branch: 'tecnicas',
      branchLabel: '2. Prácticas Técnicas y Despliegue',
      iconName: 'Activity',
      summary: 'Analogía pedagógica de la sesión 13: la Cocina procesa la lógica, el Salón recibe a los clientes, el Mozo traslada datos y el Food Truck ofrece el servicio completo.',
      tags: ['Metáfora Culinaria', 'Backend', 'Frontend', 'API', 'Fullstack'],
      accentColor: '#2563eb',
      badge: 'Pedagogía UTP'
    }
  },

  // ================= RAMA 3: ESQUEMA DE CERTIFICACIÓN ITIL & GOBERNANZA (Inferior Izquierda) =================
  {
    id: 'branch-certificacion',
    type: 'branchNode',
    position: { x: -950, y: 550 },
    data: {
      id: 'branch-certificacion',
      title: 'ESQUEMA DE CERTIFICACIÓN ITIL & GOBERNANZA',
      subtitle: 'Estándar Internacional ITSM, Costos PeopleCert y Marcos Globales',
      branch: 'certificacion',
      branchLabel: '3. Certificación ITIL & Estándares',
      iconName: 'Award',
      summary: 'Valida competencias en gestión de servicios de TI reconocidas globalmente. Detalla los costos de certificación oficial y su integración con COBIT e ISO.',
      tags: ['Certificación', 'PeopleCert', 'ATO', 'Costos', 'COBIT', 'ISO 20000'],
      accentColor: '#d97706',
      badge: 'Acreditación Global'
    }
  },
  {
    id: 'cert-importancia-itil',
    type: 'conceptNode',
    position: { x: -1550, y: 400 },
    data: {
      id: 'cert-importancia-itil',
      title: 'Importancia de la Certificación ITIL',
      subtitle: 'Alineación Estratégica, Calidad y Eficiencia',
      branch: 'certificacion',
      branchLabel: '3. Certificación ITIL & Estándares',
      iconName: 'CheckCircle2',
      summary: 'Estándar internacional de gestión de servicios (ITSM) que alinea la tecnología con las necesidades del negocio, optimizando calidad, eficiencia y valor.',
      tags: ['Importancia', 'ITSM', 'Estándar', 'Valor'],
      accentColor: '#d97706',
      badge: 'Estándar de Oro'
    }
  },
  {
    id: 'cert-costos-stats',
    type: 'stepNode',
    position: { x: -1550, y: 680 },
    data: {
      id: 'cert-costos-stats',
      title: 'Costos de Certificación ITIL',
      subtitle: 'Autodidacta ($680 - $865) vs. Curso ATO ($500 - $2,500)',
      branch: 'certificacion',
      branchLabel: '3. Certificación ITIL & Estándares',
      iconName: 'Calculator',
      summary: 'Datos estadísticos oficiales de PeopleCert y ATOs: examen supervisado directo ($680-$865) o cursos con capacitación acreditada ($500-$2,500).',
      tags: ['Costos', 'PeopleCert', 'ATO', 'Estadísticas', 'Examen'],
      accentColor: '#d97706',
      badge: 'Inversión Real'
    }
  },
  {
    id: 'cert-cuatro-dimensiones',
    type: 'conceptNode',
    position: { x: -1550, y: 960 },
    data: {
      id: 'cert-cuatro-dimensiones',
      title: 'Las 4 Dimensiones de ITIL 4',
      subtitle: 'Organización, Tecnología, Socios y Flujos de Valor',
      branch: 'certificacion',
      branchLabel: '3. Certificación ITIL & Estándares',
      iconName: 'Compass',
      summary: 'Cuatro pilares holísticos para la gestión equilibrada de servicios: Organizaciones y personas, Información y tecnología, Socios y proveedores, y Flujos de valor.',
      tags: ['4 Dimensiones', 'Personas', 'Tecnología', 'Socios', 'Procesos'],
      accentColor: '#d97706',
      badge: 'Enfoque Holístico'
    }
  },
  {
    id: 'cert-cobit-gobierno',
    type: 'conceptNode',
    position: { x: -550, y: 400 },
    data: {
      id: 'cert-cobit-gobierno',
      title: 'COBIT 2019: Gobierno de TI',
      subtitle: 'EDM: Evaluar, Dirigir y Monitorear',
      branch: 'certificacion',
      branchLabel: '3. Certificación ITIL & Estándares',
      iconName: 'Scale',
      summary: 'Marco de gobierno empresarial de ISACA que complementa a ITIL distinguiendo claramente el Gobierno corporativo (EDM) de la Gestión operativa (PBRM).',
      tags: ['COBIT 2019', 'Gobierno de TI', 'ISACA', 'EDM'],
      accentColor: '#d97706',
      badge: 'Gobierno Directivo'
    }
  },
  {
    id: 'cert-iso-20000',
    type: 'conceptNode',
    position: { x: -550, y: 680 },
    data: {
      id: 'cert-iso-20000',
      title: 'ISO/IEC 20000: Norma Certificable',
      subtitle: 'Sistema de Gestión de Servicios de TI (SGSTI)',
      branch: 'certificacion',
      branchLabel: '3. Certificación ITIL & Estándares',
      iconName: 'Award',
      summary: 'Norma formal internacional para certificar a organizaciones completas en la entrega de servicios de TI confiables, alineada con la estructura de alto nivel ISO.',
      tags: ['ISO 20000', 'SGSTI', 'Auditoría', 'Certificable'],
      accentColor: '#d97706',
      badge: 'Certificación Org'
    }
  },
  {
    id: 'cert-iso-datacenter',
    type: 'conceptNode',
    position: { x: -550, y: 960 },
    data: {
      id: 'cert-iso-datacenter',
      title: 'ISO/IEC 22237 & ISO 31000',
      subtitle: 'Infraestructura Data Center & Gestión de Riesgos',
      branch: 'certificacion',
      branchLabel: '3. Certificación ITIL & Estándares',
      iconName: 'Server',
      summary: 'Normas internacionales para diseño redundante de instalaciones de centros de datos (ISO 22237) y directrices universales de tratamiento de riesgos (ISO 31000).',
      tags: ['ISO 22237', 'Data Center', 'ISO 31000', 'Riesgos'],
      accentColor: '#d97706',
      badge: 'Normativa Técnica'
    }
  },
  {
    id: 'cert-video-intro',
    type: 'detailNode',
    position: { x: -1050, y: 950 },
    data: {
      id: 'cert-video-intro',
      title: 'Video Formativo: Certificación ITIL',
      subtitle: 'YouTube Shorts formativo y debate participativo',
      branch: 'certificacion',
      branchLabel: '3. Certificación ITIL & Estándares',
      iconName: 'Zap',
      summary: 'Cápsula audiovisual (https://www.youtube.com/shorts/h5K4frTL8as) que motiva la participación en clase respondiendo: "¿Por qué certificarse en ITIL?".',
      tags: ['Video', 'YouTube', 'Dinámica', 'Participación'],
      accentColor: '#d97706',
      badge: 'Recurso Multimedia'
    }
  },

  // ================= RAMA 4: PRÁCTICA Y CASOS DE APLICACIÓN UTP (Inferior Derecha) =================
  {
    id: 'branch-practica',
    type: 'branchNode',
    position: { x: 950, y: 550 },
    data: {
      id: 'branch-practica',
      title: 'PRÁCTICA Y CASOS DE APLICACIÓN UTP',
      subtitle: 'Resolución de Casos de Sesión 13, PDCA y Avance de Proyecto',
      branch: 'practica',
      branchLabel: '4. Casos Prácticos UTP',
      iconName: 'Award',
      summary: 'Actividades académicas de la sesión: Caso 01 (práctica aplicada de gestión), Caso 02 (mapa conceptual interactivo) y Caso 03 (Capítulo III del proyecto).',
      tags: ['Caso 01', 'Caso 02', 'Caso 03', 'PDCA', 'Capítulo III'],
      accentColor: '#7c3aed',
      badge: 'Evaluación y Práctica'
    }
  },
  {
    id: 'prac-caso-01',
    type: 'stepNode',
    position: { x: 550, y: 400 },
    data: {
      id: 'prac-caso-01',
      title: 'Caso 01: Caso Práctico de Servicios',
      subtitle: 'Aplicar una Práctica de Gestión en una Empresa',
      branch: 'practica',
      branchLabel: '4. Casos Prácticos UTP',
      iconName: 'FileCheck',
      summary: 'Elaborar un caso práctico donde se considere y resuelva un problema organizacional mediante una práctica de gestión (ej. Despliegues, Seguridad o Riesgos).',
      tags: ['Caso 01', 'Práctica Aplicada', 'Despliegues', 'Solución'],
      accentColor: '#7c3aed',
      badge: 'Actividad 1'
    }
  },
  {
    id: 'prac-caso-02',
    type: 'stepNode',
    position: { x: 1550, y: 400 },
    data: {
      id: 'prac-caso-02',
      title: 'Caso 02: Mapa Conceptual Interactivo',
      subtitle: 'Síntesis Estructurada de la Sesión 13',
      branch: 'practica',
      branchLabel: '4. Casos Prácticos UTP',
      iconName: 'Workflow',
      summary: 'Elaborar un mapa conceptual o mental de la sesión articulando prácticas ITIL, esquema de certificación PeopleCert, normas ISO y el ciclo PDCA.',
      tags: ['Caso 02', 'Mapa Conceptual', 'Síntesis', 'UTP S13'],
      accentColor: '#7c3aed',
      badge: 'Actividad 2'
    }
  },
  {
    id: 'prac-caso-03',
    type: 'stepNode',
    position: { x: 550, y: 720 },
    data: {
      id: 'prac-caso-03',
      title: 'Caso 03: Presentar Capítulo III Proyecto',
      subtitle: 'Sustentación del Avance del Proyecto Integrador',
      branch: 'practica',
      branchLabel: '4. Casos Prácticos UTP',
      iconName: 'FileSpreadsheet',
      summary: 'Presentar formalmente el Capítulo III del avance del proyecto: arquitectura de servicios de TI, diseño de SLAs, catálogo y matriz de riesgos bajo ISO 31000.',
      tags: ['Caso 03', 'Proyecto', 'Capítulo III', 'Sustentación'],
      accentColor: '#7c3aed',
      badge: 'Actividad 3'
    }
  },
  {
    id: 'prac-ciclo-pdca',
    type: 'conceptNode',
    position: { x: 1550, y: 720 },
    data: {
      id: 'prac-ciclo-pdca',
      title: 'Ciclo PDCA en la Práctica',
      subtitle: 'Planificar ➔ Hacer ➔ Verificar ➔ Actuar',
      branch: 'practica',
      branchLabel: '4. Casos Prácticos UTP',
      iconName: 'RotateCw',
      summary: 'Las cuatro preguntas clave de la sesión: ¿Qué y cómo hacerlo? (Plan), Hacerlo (Do), ¿Pasó según lo previsto? (Check) y ¿Cómo mejorar la próxima vez? (Act).',
      tags: ['PDCA', 'Deming', 'Mejora Continua', 'Ciclo Calidad'],
      accentColor: '#7c3aed',
      badge: 'Rueda de Deming'
    }
  },
  {
    id: 'prac-problem-solution',
    type: 'conceptNode',
    position: { x: 1050, y: 950 },
    data: {
      id: 'prac-problem-solution',
      title: 'Enfoque Problem-Solution & Calidad',
      subtitle: 'Sinergia ITSM, Calidad y DevOps',
      branch: 'practica',
      branchLabel: '4. Casos Prácticos UTP',
      iconName: 'Target',
      summary: 'Conversión estructurada de problemas en soluciones sostenibles con calidad garantizada, apalancando la agilidad de DevOps con la gobernanza de ITIL.',
      tags: ['Problem', 'Solution', 'Quality', 'DevOps', 'ITSM'],
      accentColor: '#7c3aed',
      badge: 'Excelencia ITSM'
    }
  }
];

// Aristas de conexión estructuradas y con estilo diferenciado por rama
export const INITIAL_EDGES: Edge[] = [
  // ================= CONEXIONES DESDE EL NODO CENTRAL =================
  {
    id: 'edge-central-generales',
    source: 'central-node',
    target: 'branch-generales',
    sourceHandle: 'left',
    targetHandle: 'right',
    animated: true,
    style: { stroke: '#059669', strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#059669', width: 18, height: 18 }
  },
  {
    id: 'edge-central-tecnicas',
    source: 'central-node',
    target: 'branch-tecnicas',
    sourceHandle: 'right',
    targetHandle: 'left',
    animated: true,
    style: { stroke: '#2563eb', strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb', width: 18, height: 18 }
  },
  {
    id: 'edge-central-certificacion',
    source: 'central-node',
    target: 'branch-certificacion',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    animated: true,
    style: { stroke: '#d97706', strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#d97706', width: 18, height: 18 }
  },
  {
    id: 'edge-central-practica',
    source: 'central-node',
    target: 'branch-practica',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    animated: true,
    style: { stroke: '#7c3aed', strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#7c3aed', width: 18, height: 18 }
  },

  // ================= RAMA 1: CONEXIONES PRÁCTICAS GENERALES ITIL =================
  {
    id: 'edge-gen-mejora',
    source: 'branch-generales',
    target: 'gen-mejora-continua',
    sourceHandle: 'src-top',
    targetHandle: 'bottom',
    style: { stroke: '#059669', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#059669' }
  },
  {
    id: 'edge-gen-arq',
    source: 'branch-generales',
    target: 'gen-arquitectura',
    sourceHandle: 'src-top',
    targetHandle: 'bottom',
    style: { stroke: '#059669', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#059669' }
  },
  {
    id: 'edge-gen-seg',
    source: 'branch-generales',
    target: 'gen-seguridad',
    sourceHandle: 'src-top',
    targetHandle: 'bottom',
    style: { stroke: '#059669', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#059669' }
  },
  {
    id: 'edge-gen-conoc',
    source: 'branch-generales',
    target: 'gen-conocimiento',
    sourceHandle: 'src-left',
    targetHandle: 'right',
    style: { stroke: '#059669', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#059669' }
  },
  {
    id: 'edge-gen-med',
    source: 'branch-generales',
    target: 'gen-medicion-reporte',
    sourceHandle: 'src-left',
    targetHandle: 'right',
    style: { stroke: '#059669', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#059669' }
  },
  {
    id: 'edge-gen-cambio',
    source: 'branch-generales',
    target: 'gen-cambio-org',
    sourceHandle: 'src-left',
    targetHandle: 'right',
    style: { stroke: '#059669', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#059669' }
  },
  {
    id: 'edge-gen-cart',
    source: 'branch-generales',
    target: 'gen-cartera',
    sourceHandle: 'src-right',
    targetHandle: 'left',
    style: { stroke: '#059669', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#059669' }
  },
  {
    id: 'edge-gen-proy',
    source: 'branch-generales',
    target: 'gen-proyectos',
    sourceHandle: 'src-right',
    targetHandle: 'left',
    style: { stroke: '#059669', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#059669' }
  },
  {
    id: 'edge-gen-fin',
    source: 'branch-generales',
    target: 'gen-financiera',
    sourceHandle: 'src-right',
    targetHandle: 'left',
    style: { stroke: '#059669', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#059669' }
  },
  {
    id: 'edge-gen-rel',
    source: 'branch-generales',
    target: 'gen-relaciones',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    style: { stroke: '#059669', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#059669' }
  },
  {
    id: 'edge-gen-riesg',
    source: 'branch-generales',
    target: 'gen-riesgos',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    style: { stroke: '#059669', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#059669' }
  },
  {
    id: 'edge-gen-prov',
    source: 'branch-generales',
    target: 'gen-proveedores',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    style: { stroke: '#059669', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#059669' }
  },

  // ================= RAMA 2: CONEXIONES PRÁCTICAS TÉCNICAS Y DESPLIEGUE =================
  {
    id: 'edge-tec-despl',
    source: 'branch-tecnicas',
    target: 'tec-despliegues',
    sourceHandle: 'src-top',
    targetHandle: 'bottom',
    style: { stroke: '#2563eb', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' }
  },
  {
    id: 'edge-tec-cicd',
    source: 'branch-tecnicas',
    target: 'tec-cicd-pipeline',
    sourceHandle: 'src-top',
    targetHandle: 'bottom',
    style: { stroke: '#2563eb', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' }
  },
  {
    id: 'edge-tec-infra',
    source: 'branch-tecnicas',
    target: 'tec-infraestructura',
    sourceHandle: 'src-top',
    targetHandle: 'bottom',
    style: { stroke: '#2563eb', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' }
  },
  {
    id: 'edge-tec-raid',
    source: 'branch-tecnicas',
    target: 'tec-alta-disp-raid',
    sourceHandle: 'src-right',
    targetHandle: 'left',
    style: { stroke: '#2563eb', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' }
  },
  {
    id: 'edge-tec-redes',
    source: 'branch-tecnicas',
    target: 'tec-redes-cloud',
    sourceHandle: 'src-right',
    targetHandle: 'left',
    style: { stroke: '#2563eb', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' }
  },
  {
    id: 'edge-tec-sw',
    source: 'branch-tecnicas',
    target: 'tec-desarrollo-sw',
    sourceHandle: 'src-left',
    targetHandle: 'right',
    style: { stroke: '#2563eb', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' }
  },
  {
    id: 'edge-tec-web',
    source: 'branch-tecnicas',
    target: 'tec-anatomia-web',
    sourceHandle: 'src-left',
    targetHandle: 'right',
    style: { stroke: '#2563eb', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' }
  },
  {
    id: 'edge-tec-culinaria',
    source: 'branch-tecnicas',
    target: 'tec-metafora-culinaria',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    style: { stroke: '#2563eb', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#2563eb' }
  },
  // Conexión lógica interna técnica
  {
    id: 'edge-logic-deploy-cicd',
    source: 'tec-despliegues',
    target: 'tec-cicd-pipeline',
    sourceHandle: 'src-right',
    targetHandle: 'left',
    style: { stroke: '#3b82f6', strokeWidth: 1.5, strokeDasharray: '4 4' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' }
  },
  {
    id: 'edge-logic-web-culinaria',
    source: 'tec-anatomia-web',
    target: 'tec-metafora-culinaria',
    sourceHandle: 'src-bottom',
    targetHandle: 'left',
    style: { stroke: '#3b82f6', strokeWidth: 1.5, strokeDasharray: '4 4' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' }
  },

  // ================= RAMA 3: CONEXIONES CERTIFICACIÓN ITIL & GOBERNANZA =================
  {
    id: 'edge-cert-imp',
    source: 'branch-certificacion',
    target: 'cert-importancia-itil',
    sourceHandle: 'src-left',
    targetHandle: 'right',
    style: { stroke: '#d97706', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#d97706' }
  },
  {
    id: 'edge-cert-cost',
    source: 'branch-certificacion',
    target: 'cert-costos-stats',
    sourceHandle: 'src-left',
    targetHandle: 'right',
    style: { stroke: '#d97706', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#d97706' }
  },
  {
    id: 'edge-cert-4dim',
    source: 'branch-certificacion',
    target: 'cert-cuatro-dimensiones',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    style: { stroke: '#d97706', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#d97706' }
  },
  {
    id: 'edge-cert-cobit',
    source: 'branch-certificacion',
    target: 'cert-cobit-gobierno',
    sourceHandle: 'src-right',
    targetHandle: 'left',
    style: { stroke: '#d97706', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#d97706' }
  },
  {
    id: 'edge-cert-iso20k',
    source: 'branch-certificacion',
    target: 'cert-iso-20000',
    sourceHandle: 'src-right',
    targetHandle: 'left',
    style: { stroke: '#d97706', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#d97706' }
  },
  {
    id: 'edge-cert-isodc',
    source: 'branch-certificacion',
    target: 'cert-iso-datacenter',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    style: { stroke: '#d97706', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#d97706' }
  },
  {
    id: 'edge-cert-video',
    source: 'branch-certificacion',
    target: 'cert-video-intro',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    style: { stroke: '#d97706', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#d97706' }
  },

  // ================= RAMA 4: CONEXIONES PRÁCTICA Y CASOS UTP =================
  {
    id: 'edge-prac-c1',
    source: 'branch-practica',
    target: 'prac-caso-01',
    sourceHandle: 'src-left',
    targetHandle: 'right',
    style: { stroke: '#7c3aed', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#7c3aed' }
  },
  {
    id: 'edge-prac-c2',
    source: 'branch-practica',
    target: 'prac-caso-02',
    sourceHandle: 'src-right',
    targetHandle: 'left',
    style: { stroke: '#7c3aed', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#7c3aed' }
  },
  {
    id: 'edge-prac-c3',
    source: 'branch-practica',
    target: 'prac-caso-03',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    style: { stroke: '#7c3aed', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#7c3aed' }
  },
  {
    id: 'edge-prac-pdca',
    source: 'branch-practica',
    target: 'prac-ciclo-pdca',
    sourceHandle: 'src-right',
    targetHandle: 'left',
    style: { stroke: '#7c3aed', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#7c3aed' }
  },
  {
    id: 'edge-prac-prob',
    source: 'branch-practica',
    target: 'prac-problem-solution',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    style: { stroke: '#7c3aed', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#7c3aed' }
  },
  // Conexión lógica entre casos
  {
    id: 'edge-logic-c1-c2',
    source: 'prac-caso-01',
    target: 'prac-caso-02',
    sourceHandle: 'src-right',
    targetHandle: 'left',
    style: { stroke: '#8b5cf6', strokeWidth: 1.5, strokeDasharray: '4 4' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#8b5cf6' }
  },
  {
    id: 'edge-logic-c2-pdca',
    source: 'prac-caso-02',
    target: 'prac-ciclo-pdca',
    sourceHandle: 'src-bottom',
    targetHandle: 'top',
    style: { stroke: '#8b5cf6', strokeWidth: 1.5, strokeDasharray: '4 4' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#8b5cf6' }
  }
];
