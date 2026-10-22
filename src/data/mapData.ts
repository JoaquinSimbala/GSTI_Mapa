export interface NodeDetailData {
  id: string;
  title: string;
  subtitle?: string;
  branch: 'central' | 'valor' | 'svs' | 'principios' | 'practica';
  branchLabel: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  bulletPoints?: string[];
  practicalCase?: {
    title: string;
    description: string;
    solutionOrTakeaway: string;
  };
  metricsOrFormula?: {
    label: string;
    formula?: string;
    details: string[];
  };
  standards?: string[];
  tags?: string[];
  level: number;
}

export const CONCEPT_DETAILS: Record<string, NodeDetailData> = {
  // ================= NODO CENTRAL =================
  'central-node': {
    id: 'central-node',
    title: 'Sistema de Valor del Servicio (SVS) - ITIL 4',
    subtitle: 'Gestión del Servicio de TI · Semana 11, Sesión 1 (UTP Agosto 2026)',
    branch: 'central',
    branchLabel: 'Núcleo Central',
    iconName: 'Sparkles',
    shortDesc: 'Marco integrador que transforma la Oportunidad y Demanda del cliente en Valor tangible y co-creado mediante productos y servicios alineados al negocio.',
    fullDesc: 'El Sistema de Valor del Servicio (SVS) de ITIL 4 representa la evolución de la gestión tradicional de TI hacia un modelo holístico y ágil. Garantiza que todas las actividades y componentes de la organización trabajen en conjunto de manera fluida y flexible para convertir las necesidades del mercado y clientes en valor real, gobernado por principios rectores imperecederos y mejorado continuamente.',
    bulletPoints: [
      'Logro de la sesión: Aplicar los componentes del SVS de ITIL 4 mediante la resolución de un caso práctico organizacional.',
      'Capacidad demostrada para transformar la demanda del cliente en valor tangible y alineado a los objetivos estratégicos.',
      'Integración armónica de los 5 componentes: Principios Rectores, Gobernanza, Cadena de Valor del Servicio (SVC), Prácticas y Mejora Continua.',
      'Soporte técnico fundamentado en arquetipos de desarrollo ágil (Scrum) y bases de datos modernas.'
    ],
    metricsOrFormula: {
      label: 'Ecuación Fundamental del SVS',
      formula: 'Oportunidad / Demanda + SVS (Gobernanza + SVC + Prácticas + Mejora + 7 Principios) ➔ Valor Co-creado',
      details: [
        'Entrada: Oportunidades y demandas emergentes de clientes y usuarios.',
        'Procesamiento: Interacción dinámica de la Cadena de Valor y las 34 Prácticas de ITIL.',
        'Salida: Valor tangible en utilidad funcional, garantía de servicio y rentabilidad de negocio.'
      ]
    },
    practicalCase: {
      title: 'Caso de Transformación Organizacional',
      description: 'Una institución educativa o financiera recibe una demanda urgente de migrar sus procesos presenciales a un portal digital transaccional de autoservicio 24/7.',
      solutionOrTakeaway: 'Aplicando el SVS, la demanda se alinea con la gobernanza institucional, se activa la cadena de valor para diseñar y desplegar el software en sprints iterativos, logrando valor co-creado inmediato.'
    },
    standards: ['ITIL 4 Foundation', 'Axelos 2011/2019', 'ISO/IEC 20000-1', 'Scrum Alliance', 'ISO 38500'],
    tags: ['ITIL 4', 'SVS', 'Creación de Valor', 'UTP', 'Estrategia TI'],
    level: 0
  },

  // ================= RAMA 1: CONCEPCIÓN Y ARQUETIPOS DEL VALOR =================
  'branch-valor': {
    id: 'branch-valor',
    title: 'Concepción y Arquetipos del Valor',
    subtitle: 'Perspectiva multidimensional del valor en ITIL, finanzas y tecnología',
    branch: 'valor',
    branchLabel: '1. Arquetipos de Valor',
    iconName: 'Target',
    shortDesc: 'El valor no es solo financiero; en ITIL se estructura como la combinación indivisible de beneficios percibidos, utilidad y garantía, apalancado por arquetipos técnicos.',
    fullDesc: 'Para gestionar servicios con éxito es imprescindible entender qué constituye verdaderamente el valor para el cliente. Mientras que el enfoque financiero clásico (Rappaport) busca maximizar flujos de caja y el modelo de Porter optimiza actividades primarias y de apoyo para generar margen, ITIL 4 establece que el valor del servicio se co-crea y solo existe cuando se conjugan la idoneidad funcional (Utilidad) y la certeza operativa (Garantía).',
    bulletPoints: [
      'Definición de Axelos (2011): Suma de beneficios percibidos, utilidad y garantía.',
      'Enfoque de Rappaport (1986): Flujos futuros de efectivo descontados para los accionistas.',
      'Cadena de Valor de Porter: Generación de margen a través de actividades de apoyo y primarias.',
      'Arquetipos sistémicos de software y bases de datos como vehículos habilitadores del valor.'
    ],
    standards: ['Axelos ITIL Service Strategy', 'Porter Value Chain', 'Rappaport Shareholder Value'],
    tags: ['Utilidad', 'Garantía', 'Porter', 'Rappaport', 'Valor de TI'],
    level: 1
  },
  'val-definicion-itil': {
    id: 'val-definicion-itil',
    title: 'Ecuación de Valor en ITIL (Axelos)',
    subtitle: 'Beneficios Percibidos = Utilidad + Garantía',
    branch: 'valor',
    branchLabel: '1. Arquetipos de Valor',
    iconName: 'Calculator',
    shortDesc: 'Concepto oficial de ITIL: el valor requiere tanto funcionalidad adecuada como condiciones confiables de entrega.',
    fullDesc: 'Según Axelos (2011, ITIL Service Strategy), el valor es la suma de los beneficios percibidos, la utilidad y la garantía que un servicio proporciona a los clientes. Si un software cuenta con funciones espectaculares (alta utilidad) pero el servidor colapsa constantemente (cero garantía), el valor percibido total es nulo. Ambos componentes son obligatorios para generar satisfacción.',
    metricsOrFormula: {
      label: 'Fórmula Conceptual de Valor en Servicio',
      formula: 'Valor Real = Utilidad (Fit for Purpose) × Garantía (Fit for Use)',
      details: [
        'Si Utilidad = 0 ➔ No hay funcionalidad ni beneficio (Valor = 0).',
        'Si Garantía = 0 ➔ El servicio es inestable o inseguro (Valor = 0).',
        'El Valor es multiplicativo: requiere certidumbre y propósito simultáneos.'
      ]
    },
    practicalCase: {
      title: 'Plataforma de Matrícula Universitaria',
      description: 'El sistema permite inscribir cursos y ver horarios (Utilidad perfecta), pero durante las primeras horas de matrícula se cae por sobrecarga de peticiones.',
      solutionOrTakeaway: 'Falla la Garantía (disponibilidad y capacidad). El estudiante y la universidad perciben fracaso del servicio hasta corregir la infraestructura.'
    },
    tags: ['Axelos', 'Ecuación de Valor', 'Calidad', 'ITSM'],
    level: 2
  },
  'val-utilidad': {
    id: 'val-utilidad',
    title: 'Utilidad (Utility)',
    subtitle: 'Fit for Purpose: ¿Qué hace el servicio?',
    branch: 'valor',
    branchLabel: '1. Arquetipos de Valor',
    iconName: 'Wrench',
    shortDesc: 'Funcionalidad ofrecida por un producto o servicio para satisfacer una necesidad particular del cliente.',
    fullDesc: 'La Utilidad representa la capacidad del servicio de mejorar el rendimiento del cliente o de eliminar restricciones y dolores de cabeza que le impiden alcanzar sus objetivos. Es la respuesta directa a la pregunta: ¿qué funciones específicas ofrece el sistema?',
    bulletPoints: [
      'Aumenta el rendimiento: acelera transacciones, automatiza cálculos, optimiza tiempos.',
      'Elimina restricciones: permite trabajar en remoto, reduce tareas manuales propensas a error.',
      'Determina si el producto es adecuado para el propósito (Fit for Purpose).'
    ],
    tags: ['Fit for Purpose', 'Funcionalidad', 'Rendimiento'],
    level: 3
  },
  'val-garantia': {
    id: 'val-garantia',
    title: 'Garantía (Warranty)',
    subtitle: 'Fit for Use: ¿Cómo se entrega el servicio?',
    branch: 'valor',
    branchLabel: '1. Arquetipos de Valor',
    iconName: 'Shield',
    shortDesc: 'Certeza y confianza de que un producto o servicio cumplirá con los requisitos acordados de calidad.',
    fullDesc: 'La Garantía asegura que el servicio esté disponible cuando se le necesita, tenga la capacidad de absorber la demanda de tráfico, sea resistente ante desastres y mantenga la confidencialidad e integridad de la información sensible.',
    bulletPoints: [
      'Disponibilidad (Availability): % de tiempo en que el servicio está accesible.',
      'Capacidad (Capacity): Capacidad de procesar grandes volúmenes de usuarios simultáneos.',
      'Continuidad (Continuity): Recuperación rápida ante contingencias o catástrofes (DRP).',
      'Seguridad (Security): Protección de datos confidenciales y cumplimiento de normativas.'
    ],
    tags: ['Fit for Use', 'SLA', 'Disponibilidad', 'Ciberseguridad'],
    level: 3
  },
  'val-cocreacion': {
    id: 'val-cocreacion',
    title: 'Co-Creación de Valor',
    subtitle: 'Relación interactiva y bidireccional de valor',
    branch: 'valor',
    branchLabel: '1. Arquetipos de Valor',
    iconName: 'Users',
    shortDesc: 'En ITIL 4, el valor no se produce y entrega como un paquete cerrado; se genera a través de la colaboración activa entre proveedor y consumidor.',
    fullDesc: 'A diferencia de enfoques antiguos donde el área de TI actuaba como un fabricante aislado que "entregaba" sistemas, ITIL 4 postula que el valor es un resultado compartido. El consumidor aporta sus datos, retroalimentación y uso efectivo, mientras que el proveedor ajusta la tecnología a las necesidades cambiantes del negocio.',
    bulletPoints: [
      'Superación del enfoque unidireccional proveedor ➔ cliente.',
      'Participación activa del usuario en el refinamiento del servicio.',
      'Alineación mutua con los resultados esperados (Outcomes).'
    ],
    tags: ['Co-Creación', 'Colaboración', 'Stakeholders', 'ITIL 4'],
    level: 3
  },
  'val-financiero-porter': {
    id: 'val-financiero-porter',
    title: 'Enfoque Financiero & Cadena de Porter',
    subtitle: 'Rappaport (1986) y Cadena de Valor Empresarial',
    branch: 'valor',
    branchLabel: '1. Arquetipos de Valor',
    iconName: 'TrendingUp',
    shortDesc: 'Complementariedad estratégica: el valor como generador de flujos descontados de caja y margen en procesos primarios y de apoyo.',
    fullDesc: 'En la diapositiva 7 se contrastan dos visiones capitales de negocio:\n1. Rappaport (1986, Creating Shareholder Value): El valor se determina por la capacidad de generar flujos de efectivo futuros descontados, orientando la gestión a maximizar el valor para los accionistas.\n2. Michael Porter: La ventaja competitiva surge al optimizar la cadena de valor, compuesta por Actividades de Apoyo (Infraestructura de la empresa, Recursos Humanos, Desarrollo Tecnológico, Abastecimiento) y Actividades Primarias (Logística Interna, Operaciones, Logística Externa, Marketing y Ventas, Servicios), generando un Margen económico sostenible.',
    bulletPoints: [
      'TI como Actividad de Apoyo clave (Desarrollo Tecnológico) que potencia las Actividades Primarias.',
      'Impacto en flujos de efectivo: reducción de costos de transacción e incremento de ventas.',
      'El servicio de TI debe reflejarse en el margen de rentabilidad corporativo.'
    ],
    standards: ['Porter Value Chain (1985)', 'Rappaport (1986)'],
    tags: ['Porter', 'Rappaport', 'Margen', 'Finanzas TI'],
    level: 2
  },
  'val-arquetipos-tech': {
    id: 'val-arquetipos-tech',
    title: 'Arquetipos de Software y Bases de Datos',
    subtitle: 'Scrum, Compilación y los 12 Tipos de DBMS (Slide 6)',
    branch: 'valor',
    branchLabel: '1. Arquetipos de Valor',
    iconName: 'Database',
    shortDesc: 'La infraestructura y arquitectura tecnológica sobre la cual descansa la creación de valor en sistemas de TI.',
    fullDesc: 'La diapositiva 6 del PDF presenta la base técnica sistémica requerida para habilitar el valor del servicio:\n• Framework Scrum: Sprints ágiles, Product Owner, Scrum Master, Daily Standups y Sprint Reviews para entregar incrementos de software con valor.\n• Arquitectura de ejecución: Código fuente (C++, Java, Python) transformado por compiladores, bytecode y máquinas virtuales hasta el hardware.\n• Tipos de Bases de Datos para distintos tipos de valor:\n  1. SQL Relacional (MySQL, MS SQL Server) para transacciones ACID.\n  2. Columnar (Redshift, Cassandra) para analítica masiva OLAP.\n  3. In-Memory (SAP HANA, MemSQL) para latencia ultra baja.\n  4. Vector Database (Milvus, Pinecone) para Inteligencia Artificial y embeddings.\n  5. Key-Value (Redis, DynamoDB) para sesiones y caché veloz.\n  6. Document Database (MongoDB, Couchbase) para datos semiestructurados.\n  7. Time-Series (InfluxDB, TimescaleDB) para monitoreo y telemetría IoT.\n  8. Graph Database (Neo4j, Azure Cosmos) para relaciones complejas y redes.\n  9. NewSQL (Google Spanner, CockroachDB) para escalabilidad global con ACID.\n  10. Spatial Database (PostGIS) para geolocalización.\n  11. Blockchain Database (BigChainDB) para registros inmutables.\n  12. Object-Oriented (db4o, ObjectDB) para ingeniería avanzada.',
    bulletPoints: [
      'Elección del DBMS en función de la garantía requerida (velocidad, consistencia, volumen).',
      'Desarrollo iterativo ágil con Scrum para materializar requerimientos en valor.',
      'Flujo por capas: Vista (Frontend) ➔ Procesamiento (Backend) ➔ Acceso a Datos ➔ DBMS.'
    ],
    tags: ['DBMS', 'Scrum', 'Vector DB', 'SQL', 'NoSQL', 'Arquitectura'],
    level: 2
  },

  // ================= RAMA 2: ESTRUCTURA DEL SISTEMA DE VALOR DEL SERVICIO =================
  'branch-svs': {
    id: 'branch-svs',
    title: 'Estructura del Sistema de Valor del Servicio (SVS)',
    subtitle: 'Arquitectura de 5 componentes: Entrada ➔ SVS ➔ Salida',
    branch: 'svs',
    branchLabel: '2. Componentes SVS',
    iconName: 'Layers',
    shortDesc: 'El marco integrador de ITIL 4 que describe cómo todos los componentes organizacionales interactúan sistemáticamente para producir valor.',
    fullDesc: 'El Sistema de Valor del Servicio (SVS) de ITIL 4 establece un modelo operativo flexible y escalable diseñado para superar los silos departamentales tradicionales. Acepta oportunidades y demandas del entorno y, mediante la gobernanza, las 6 actividades de la Cadena de Valor del Servicio (SVC), las 34 prácticas organizacionales y una cultura de mejora continua, entrega resultados con alto impacto de valor para el negocio.',
    bulletPoints: [
      'Entrada: Oportunidad y Demanda provenientes del mercado y usuarios.',
      'Gobernanza: Evaluación, dirección y control estratégico.',
      'Cadena de Valor del Servicio (SVC): Modelo operativo de 6 actividades.',
      'Prácticas de ITIL: 34 prácticas de gestión general, de servicios y técnicas.',
      'Mejora Continua: Principio transversal para elevar estándares.',
      'Salida: Valor tangible alineado a los objetivos de negocio.'
    ],
    standards: ['ITIL 4 SVS', 'Axelos 2019', 'ISO 38500', 'ISO/IEC 20000'],
    tags: ['SVS', 'SVC', 'Gobernanza', 'Prácticas', 'Demanda'],
    level: 1
  },
  'svs-demanda-valor': {
    id: 'svs-demanda-valor',
    title: 'Entrada: Oportunidad / Demanda ➔ Salida: Valor',
    subtitle: 'El disparador y el desenlace medible del servicio',
    branch: 'svs',
    branchLabel: '2. Componentes SVS',
    iconName: 'Zap',
    shortDesc: 'El SVS existe con el único propósito de capturar la demanda u oportunidad y transformarla en valor tangible.',
    fullDesc: 'El flujo de extremo a extremo comienza con dos insumos primarios:\n• Oportunidades: Posibilidades de agregar valor para clientes, usuarios o la organización interna (ej. adopción de Inteligencia Artificial o nuevos canales).\n• Demanda: Necesidad concreta y explícita de productos y servicios por parte de consumidores.\nEl SVS procesa estos insumos y culmina en la entrega de Valor tangible: soluciones efectivas que impulsan la competitividad y satisfacción.',
    bulletPoints: [
      'Canalización estructurada de solicitudes de clientes sin saturar operaciones.',
      'Alineación entre expectativas del usuario y capacidades reales de TI.',
      'Medición del valor en términos de utilidad percibida y beneficios económicos.'
    ],
    tags: ['Demanda', 'Oportunidad', 'Outcome', 'Valor'],
    level: 2
  },
  'svs-gobernanza': {
    id: 'svs-gobernanza',
    title: 'Gobernanza (Governance)',
    subtitle: 'Dirección, Evaluación y Monitoreo Estratégico',
    branch: 'svs',
    branchLabel: '2. Componentes SVS',
    iconName: 'Scale',
    shortDesc: 'El sistema rector mediante el cual la organización es dirigida y controlada conforme a directrices de alto nivel.',
    fullDesc: 'La Gobernanza es el componente del SVS responsable de mantener la coherencia entre las iniciativas de TI y los objetivos de la alta dirección. El órgano directivo ejerce la gobernanza a través de tres actividades fundamentales:\n1. Evaluar: Analizar la estrategia, condiciones del mercado y riesgos.\n2. Dirigir: Asignar prioridades, presupuestos y políticas rectoras.\n3. Monitorear: Supervisar el desempeño y el cumplimiento normativo (ISO 38500).',
    bulletPoints: [
      'Garantiza que TI sirva al negocio y no trabaje de manera aislada.',
      'Establece límites éticos, legales y normativos de operación.',
      'Asegura la rendición de cuentas (Accountability) de los líderes de TI.'
    ],
    standards: ['ISO/IEC 38500 (Gobernanza de TI)', 'COBIT 2019', 'ITIL 4 Governance'],
    tags: ['Gobernanza', 'Dirección', 'ISO 38500', 'Control'],
    level: 2
  },
  'svs-cadena-valor': {
    id: 'svs-cadena-valor',
    title: 'Cadena de Valor del Servicio (SVC)',
    subtitle: 'Modelo Operativo de 6 Actividades Clave',
    branch: 'svs',
    branchLabel: '2. Componentes SVS',
    iconName: 'Workflow',
    shortDesc: 'El corazón operativo del SVS: un modelo interconectado que permite diseñar flujos de valor dinámicos para productos y servicios.',
    fullDesc: 'La Cadena de Valor del Servicio (Service Value Chain) es una matriz operativa de 6 actividades que pueden combinarse en múltiples secuencias según el flujo de valor:\n1. Planear (Plan): Asegurar una visión compartida del estado actual y dirección.\n2. Mejorar (Improve): Asegurar la mejora continua de productos y servicios.\n3. Comprometer (Engage): Gestionar relaciones y comprender requerimientos de partes interesadas.\n4. Diseñar y Transicionar (Design & Transition): Asegurar que los productos cumplan expectativas de costo y calidad.\n5. Obtener / Construir (Obtain/Build): Adquirir componentes o desarrollar nuevo software.\n6. Entregar y Dar Soporte (Deliver & Support): Operar el servicio garantizando SLAs y resolución de incidentes.',
    bulletPoints: [
      'Flexibilidad total: no es un proceso lineal rígido, sino una red de actividades.',
      'Soporta metodologías ágiles, DevOps y cascada según la necesidad del flujo.',
      'Conecta directamente el requerimiento del cliente con el producto terminado.'
    ],
    tags: ['SVC', 'Cadena de Valor', '6 Actividades', 'Operaciones TI'],
    level: 2
  },
  'svs-practicas-mejora': {
    id: 'svs-practicas-mejora',
    title: 'Prácticas ITIL & Mejora Continua',
    subtitle: '34 Capacidades Organizacionales y Ciclo Continuo',
    branch: 'svs',
    branchLabel: '2. Componentes SVS',
    iconName: 'RotateCw',
    shortDesc: 'Conjunto de recursos y competencias organizacionales diseñadas para ejecutar tareas operativas y evolucionar continuamente.',
    fullDesc: 'En ITIL 4 los "procesos" evolucionaron a "Prácticas", reconociendo que realizar un trabajo exitoso requiere no solo diagramas de flujo, sino personas capacitadas, información, tecnología y socios comerciales. El SVS abarca 34 prácticas divididas en:\n• 14 Prácticas de Gestión General (Estrategia, Gestión de Riesgos, Portafolio, etc.).\n• 17 Prácticas de Gestión de Servicios (Service Desk, Incidentes, Cambios, SLAs, etc.).\n• 3 Prácticas de Gestión Técnica (Desarrollo y Gestión de Software, Infraestructura y Plataformas, Gestión de Despliegue).\nTodo esto es dinamizado por la Mejora Continua en todos los estratos.',
    bulletPoints: [
      'Enfoque holístico en recursos humanos, técnicos y metodológicos.',
      'Cultura de aprendizaje constante para evitar la obsolescencia tecnológica.',
      'Monitoreo periódico de métricas e indicadores clave de rendimiento (KPIs).'
    ],
    standards: ['ITIL 4 Practices', 'ISO/IEC 20000-1', 'Kaizen'],
    tags: ['34 Prácticas', 'Mejora Continua', 'Capacidades', 'ITSM'],
    level: 2
  },

  // ================= RAMA 3: LOS SIETE (7) PRINCIPIOS RECTORES DE ITIL =================
  'branch-principios': {
    id: 'branch-principios',
    title: 'Los 7 Principios Rectores de ITIL 4',
    subtitle: 'Recomendaciones Universales para Guiar Decisiones y Acciones',
    branch: 'principios',
    branchLabel: '3. 7 Principios ITIL',
    iconName: 'Compass',
    shortDesc: 'Directrices imperecederas que pueden guiar a una organización en cualquier circunstancia, permitiendo adoptar agilidad y optimizar la entrega de valor.',
    fullDesc: 'Los Principios Rectores son el núcleo ético y filosófico de ITIL 4. No son reglas dogmáticas, sino principios universales que se aplican a cualquier iniciativa tecnológica, proyecto ágil o resolución de crisis. Permiten a los profesionales de TI tomar decisiones coherentes, eliminar burocracia y mantener siempre la vista en lo que realmente le importa a la organización.',
    bulletPoints: [
      '1. Centrarse en el valor (Focus on value).',
      '2. Comenzar donde se está (Start where you are).',
      '3. Progresar iterativamente con retroalimentación (Progress iteratively with feedback).',
      '4. Colaborar y promover la visibilidad (Collaborate and promote visibility).',
      '5. Pensar y trabajar de forma holística (Think and work holistically).',
      '6. Mantenerlo simple y práctico (Keep it simple and practical).',
      '7. Optimizar y automatizar (Optimize and automate).'
    ],
    standards: ['ITIL 4 Guiding Principles', 'Agile Manifesto', 'Lean IT', 'DevOps Principles'],
    tags: ['Principios Rectores', 'Agilidad', 'Filosofía TI', 'Buenas Prácticas'],
    level: 1
  },
  'princ-1-valor': {
    id: 'princ-1-valor',
    title: '1. Centrarse en el Valor (Focus on Value)',
    subtitle: 'Todas las actividades deben generar valor para clientes y la organización',
    branch: 'principios',
    branchLabel: '3. 7 Principios ITIL',
    iconName: 'Target',
    shortDesc: 'Todo lo que haga la organización debe aportar valor directo o indirecto al cliente y a las partes interesadas (Customer Value).',
    fullDesc: 'La diapositiva 9 y 12 del PDF destacan este principio como el primero y más importante. Todo trabajo, reporte, reunión o línea de código que no contribuya a generar valor para el cliente debe ser cuestionado. Comprende factores del Customer Value como servicio, calidad, costo, experiencia pasada, marketing y percepción social.',
    bulletPoints: [
      'Paso 1: Identificar con claridad quién es el consumidor real del servicio.',
      'Paso 2: Comprender qué constituye "valor" para él (velocidad, ahorro, seguridad, facilidad).',
      'Paso 3: Alinear cada tarea del equipo técnico a esa expectativa de valor.'
    ],
    practicalCase: {
      title: 'Desarrollo de un Portal de Autoservicio',
      description: 'El equipo de TI quería invertir 3 meses en crear animaciones complejas en la web. Al consultar a los usuarios, estos solo querían que la consulta de saldo cargara en menos de 1 segundo.',
      solutionOrTakeaway: 'Centrarse en el valor permitió reorientar el desarrollo hacia la optimización de consultas en la base de datos, entregando valor real de inmediato.'
    },
    tags: ['Customer Value', 'Prioridad', 'Experiencia de Usuario'],
    level: 2
  },
  'princ-2-donde': {
    id: 'princ-2-donde',
    title: '2. Comenzar Donde se Está (Start Where You Are)',
    subtitle: 'Aprovechar recursos, procesos y conocimientos existentes antes de empezar de cero',
    branch: 'principios',
    branchLabel: '3. 7 Principios ITIL',
    iconName: 'CheckCircle2',
    shortDesc: 'Evaluar la situación actual de forma objetiva y aprovechar lo que ya funciona antes de proponer cambios radicales.',
    fullDesc: 'La diapositiva 9 y 12 enseñan el ciclo metodológico: Situation (Describir la situación) ➔ Problem (Delinear el problema) ➔ Solution (Considerar soluciones) ➔ Evaluation (Evaluar las soluciones). Existe una tentación común en TI de "borrar todo y comenzar de cero", lo cual desperdicia inversiones previas e incrementa el riesgo.',
    bulletPoints: [
      'Mirar lo que existe objetivamente mediante métricas reales, no suposiciones.',
      'Reutilizar servicios, infraestructura, código y habilidades del personal.',
      'Modificar solo lo que esté demostradamente roto o deficiente.'
    ],
    practicalCase: {
      title: 'Modernización de Base de Datos Universitaria',
      description: 'Un consultor recomendó reemplazar por completo el sistema SQL legado. Tras una auditoría, se detectó que el 85% de los procedimientos almacenados funcionaban perfectamente y solo requerían índices optimizados y caché en Redis.',
      solutionOrTakeaway: 'Se ahorró el 80% del presupuesto y se mejoró el rendimiento en 2 semanas en vez de 1 año.'
    },
    tags: ['Diagnóstico', 'Reutilización', 'Estado Actual', 'Situation-Problem-Solution'],
    level: 2
  },
  'princ-3-iterar': {
    id: 'princ-3-iterar',
    title: '3. Progresar Iterativamente con Retroalimentación',
    subtitle: 'Avanzar en pequeños pasos y recoger feedback continuamente',
    branch: 'principios',
    branchLabel: '3. 7 Principios ITIL',
    iconName: 'RotateCw',
    shortDesc: 'Avanzar por etapas pequeñas y manejables, obteniendo retroalimentación continua para ajustar el rumbo oportunamente.',
    fullDesc: 'La diapositiva 10 y 12 relacionan este principio directamente con el framework Scrum (Sprints de 1 a 4 semanas, Daily Scrum, Sprint Review) y el Ciclo PDCA (Planear, Hacer, Verificar, Actuar). Dividir iniciativas gigantescas en entregables pequeños reduce el riesgo de fracaso, permite aprender rápido y garantiza que el producto final esté alineado con la realidad.',
    bulletPoints: [
      'Evitar proyectos tipo "Big Bang" que tardan años en mostrar resultados.',
      'Cada ciclo o sprint debe entregar un incremento potencialmente usable.',
      'El feedback del usuario en cada iteración es el insumo para la siguiente mejora.'
    ],
    practicalCase: {
      title: 'Lanzamiento de Aplicación Móvil de Notas',
      description: 'En vez de esperar 8 meses para lanzar una app con 40 funciones, el equipo lanzó en 3 semanas la versión 1.0 con visualización de notas y login seguro.',
      solutionOrTakeaway: 'Recibieron retroalimentación de 10,000 alumnos para construir las siguientes funciones basadas en demanda real.'
    },
    tags: ['Scrum', 'Sprints', 'PDCA', 'Feedback', 'Agilidad'],
    level: 2
  },
  'princ-4-colaborar': {
    id: 'princ-4-colaborar',
    title: '4. Colaborar y Promover la Visibilidad',
    subtitle: 'Fomentar la comunicación, cooperación y transparencia entre todas las partes',
    branch: 'principios',
    branchLabel: '3. 7 Principios ITIL',
    iconName: 'Users',
    shortDesc: 'Involucrar a los equipos correctos, eliminar silos de conocimiento y mostrar abiertamente el trabajo y los progresos.',
    fullDesc: 'La diapositiva 10 ilustra la interacción transparente entre Product Owner, Scrum Master y Development Team, junto al flujo colaborativo de ramas Git (Master, Develop, Feature). El trabajo oculto y las decisiones unilaterales son enemigos del éxito en TI. Cuando las partes interesadas ven el avance en tableros visibles y participan, la confianza y la calidad se multiplican.',
    bulletPoints: [
      'Eliminar silos departamentales entre desarrollo (Dev), operaciones (Ops) y el negocio.',
      'Hacer visible el trabajo mediante tableros Kanban, métricas y dashboards compartidos.',
      'Comunicación directa, empática y continua.'
    ],
    practicalCase: {
      title: 'Implementación de Tableros Kanban Compartidos',
      description: 'El área de negocio se quejaba de que "TI nunca entrega a tiempo". TI implementó un tablero visible donde se mostraban los cuellos de botella y las solicitudes en cola.',
      solutionOrTakeaway: 'El negocio comprendió las limitaciones, priorizó sus peticiones de forma colaborativa y los conflictos desaparecieron.'
    },
    tags: ['Transparencia', 'Colaboración', 'Visibilidad', 'DevOps'],
    level: 2
  },
  'princ-5-holistico': {
    id: 'princ-5-holistico',
    title: '5. Pensar y Trabajar de Forma Holística',
    subtitle: 'Considerar el sistema completo (personas, procesos, tecnología y socios)',
    branch: 'principios',
    branchLabel: '3. 7 Principios ITIL',
    iconName: 'Network',
    shortDesc: 'Ver la organización como un todo interconectado; ningún servicio o componente existe de forma aislada.',
    fullDesc: 'La diapositiva 11 y 12 ilustran la integración holística mediante flujos BPMN coordinados que abarcan desde el solicitante hasta finanzas y gerencia. Ningún área de TI puede operar como una isla. Para entregar un servicio exitoso deben orquestarse las 4 dimensiones de ITIL: Organizaciones y personas, Información y tecnología, Socios y proveedores, y Flujos de valor y procesos.',
    bulletPoints: [
      'Reconocer las relaciones complejas de causa y efecto en todo el ecosistema.',
      'Evitar optimizaciones locales que perjudiquen el rendimiento global del sistema.',
      'Alinear a proveedores externos y aliados estratégicos en el mismo flujo de valor.'
    ],
    tags: ['Pensamiento Sistémico', '4 Dimensiones', 'Flujos E2E', 'BPMN'],
    level: 2
  },
  'princ-6-simple': {
    id: 'princ-6-simple',
    title: '6. Mantenerlo Simple y Práctico (Keep It Simple)',
    subtitle: 'Evitar la complejidad innecesaria; aplicar solo lo que aporte valor',
    branch: 'principios',
    branchLabel: '3. 7 Principios ITIL',
    iconName: 'SlidersHorizontal',
    shortDesc: 'Eliminar pasos redundantes, formularios burocráticos y métricas que no contribuyen al resultado deseado (Filosofía Lean IT).',
    fullDesc: 'La diapositiva 12 destaca la importancia de diseñar procesos con el número mínimo de pasos necesarios. La complejidad excesiva genera retrasos, confusión y errores humanos. Si una regla, aprobación o reporte no produce un valor justificable, debe ser suprimida inmediatamente.',
    bulletPoints: [
      'Diseñar siempre pensando en el usuario final, no en la burocracia.',
      'Preguntar críticamente: "¿Para qué sirve este paso? ¿Qué pasaría si lo quitamos?".',
      'Hacer que la opción más sencilla sea la predeterminada.'
    ],
    practicalCase: {
      title: 'Simplificación del Proceso de Solicitud de Accesos',
      description: 'Para otorgar acceso a un software se requerían 6 firmas manuales y 8 días de espera. Se rediseñó el flujo a un clic de aprobación del jefe directo validado automáticamente por el perfil de RRHH.',
      solutionOrTakeaway: 'Tiempo de entrega reducido de 8 días a 15 minutos con mayor trazabilidad y seguridad.'
    },
    tags: ['Simplicidad', 'Lean IT', 'Eficiencia', 'Eliminar Desperdicios'],
    level: 2
  },
  'princ-7-optimizar': {
    id: 'princ-7-optimizar',
    title: '7. Optimizar y Automatizar (Optimize & Automate)',
    subtitle: 'Mejorar procesos antes de automatizarlos para ganar eficiencia y reducir errores',
    branch: 'principios',
    branchLabel: '3. 7 Principios ITIL',
    iconName: 'Zap',
    shortDesc: 'Estandarizar y simplificar el proceso antes de aplicar herramientas de automatización tecnológica.',
    fullDesc: 'La diapositiva 12 define claramente: "Mejorar procesos antes de automatizarlos para ganar eficiencia y reducir errores". Existe una regla de oro en ingeniería: "Automatizar un mal proceso solo produce malos resultados a la velocidad de la luz". La intervención humana debe reservarse para actividades creativas y de toma de decisiones; las tareas repetitivas deben automatizarse.',
    bulletPoints: [
      'Paso 1: Simplificar y optimizar el proceso eliminando redundancias.',
      'Paso 2: Estandarizar las reglas de negocio y flujos de datos.',
      'Paso 3: Automatizar mediante scripts, RPA, CI/CD o inteligencia artificial.',
      'Paso 4: Monitorear continuamente el rendimiento del bot o script.'
    ],
    practicalCase: {
      title: 'Automatización del Provisionamiento de Servidores',
      description: 'El equipo de infraestructura tardaba 4 días en configurar manualmente máquinas virtuales para los desarrolladores. Estandarizaron la plantilla y crearon un script de Terraform y Ansible.',
      solutionOrTakeaway: 'Despliegues automatizados en 3 minutos con cero errores de configuración humana.'
    },
    tags: ['Automatización', 'Optimización', 'DevOps', 'RPA', 'Estandarización'],
    level: 2
  },

  // ================= RAMA 4: PRÁCTICA Y CASOS DE APLICACIÓN =================
  'branch-practica': {
    id: 'branch-practica',
    title: 'Casos Prácticos y Preguntas Retadoras',
    subtitle: 'Resolución de Casos de la Sesión UTP y Demostración de Logro',
    branch: 'practica',
    branchLabel: '4. Casos Prácticos UTP',
    iconName: 'Award',
    shortDesc: 'Espacio de aplicación directa donde se evalúan los casos propuestos en las diapositivas 13 a 15 del PDF.',
    fullDesc: 'En la sección práctica de la sesión, los estudiantes demuestran la capacidad de aplicar el Sistema de Valor del Servicio (SVS) y los 7 principios rectores en situaciones organizacionales concretas. Comprende el diseño de una arquitectura web con base de datos, una matriz comparativa analítica de principios y la estructuración de la gestión del servicio.',
    bulletPoints: [
      'Pregunta retadora: Aplicación práctica de la gestión de servicios en una organización.',
      'Caso 01: Creación de un sistema orientado a la web con base de datos generadora de valor.',
      'Caso 02: Cuadro comparativo de los principios de la guía del sistema de valor del servicio.',
      'Caso 03: Síntesis mediante mapa mental y conceptual de la sesión.'
    ],
    standards: ['Rúbrica UTP Semana 11', 'Casos de Estudio ITSM'],
    tags: ['Casos UTP', 'Web + BD', 'Matriz SVS', 'Logro de Aprendizaje'],
    level: 1
  },
  'prac-retadora': {
    id: 'prac-retadora',
    title: 'Pregunta Retadora de Sesión',
    subtitle: '¿Cómo aplicaría usted la gestión de servicios?',
    branch: 'practica',
    branchLabel: '4. Casos Prácticos UTP',
    iconName: 'HelpCircle',
    shortDesc: 'Pregunta de inicio y debate en clase para reflexionar sobre la implementación real de ITIL.',
    fullDesc: 'La diapositiva 13 lanza el desafío formativo: "¿Cómo aplicaría usted la gestión de servicios?". La respuesta estratégica consiste en:\n1. Dejar de ver a TI como un centro de costos o soporte técnico reactivo.\n2. Adoptar el SVS para alinear la tecnología a la estrategia y objetivos del negocio.\n3. Aplicar los 7 principios rectores en cada proyecto (empezando con lo que existe, iterando en sprints y manteniendo la simplicidad).\n4. Medir el éxito no solo por "servidores encendidos", sino por la co-creación de valor y satisfacción del usuario.',
    bulletPoints: [
      'Diagnóstico de la demanda real y expectativas del cliente.',
      'Definición de acuerdos de nivel de servicio (SLAs) orientados al resultado.',
      'Cultura de mejora continua y transparencia entre equipos multidisciplinarios.'
    ],
    tags: ['Pregunta Retadora', 'Estrategia', 'Alineación de Negocio'],
    level: 2
  },
  'prac-caso-1': {
    id: 'prac-caso-1',
    title: 'Caso 01: Sistema Web con BD que Genera Valor',
    subtitle: 'Arquitectura de software orientada a la web con gestión de datos (Slide 15)',
    branch: 'practica',
    branchLabel: '4. Casos Prácticos UTP',
    iconName: 'Globe',
    shortDesc: 'Propuesta práctica para diseñar un sistema web con base de datos que transforme demanda en valor tangible.',
    fullDesc: 'El Caso 01 de la práctica pide elaborar un caso práctico para la creación de un sistema web con base de datos generador de valor de servicio.\n\nEjemplo Práctico Desarrollado:\n• Sistema: Plataforma Web de Gestión de Matrícula y Trámites Académicos en la Nube.\n• Demanda del Cliente: Estudiantes necesitan matricularse y gestionar certificados desde cualquier dispositivo sin colas ni caídas.\n• Arquitectura de Arquetipos (Slide 6):\n  - Frontend (Vista): React + Vite para carga instantánea y diseño responsivo.\n  - Backend (Procesamiento): Microservicios con lógica de validación de requisitos.\n  - Base de Datos (DBMS): Arquitectura híbrida con PostgreSQL (SQL para transacciones financieras consistentes) + Redis (In-Memory Key-Value para sesiones concurrentes) + MongoDB para documentos de trámites.\n• Entrega de Valor:\n  - Utilidad: Autonomía 100% digital, eliminación de traslados físicos y validación automática de notas.\n  - Garantía: 99.95% de disponibilidad, escalabilidad elástica en la nube y cifrado TLS con autenticación multifactor.',
    bulletPoints: [
      'Selección justificada de bases de datos según el tipo de datos (SQL vs NoSQL vs In-Memory).',
      'Cumplimiento estricto de Utilidad (Fit for Purpose) y Garantía (Fit for Use).',
      'Alineación con el logro de la sesión: transformar demanda en valor medible.'
    ],
    practicalCase: {
      title: 'Solución del Caso 01 en Examen/Taller',
      description: 'El estudiante presenta el diagrama de arquitectura web, justifica la elección del DBMS según la diapositiva 6 y demuestra cómo el sistema reduce costos operativos e incrementa la satisfacción del cliente.',
      solutionOrTakeaway: 'Aprobación con nota destacada demostrando dominio del SVS y arquetipos técnicos.'
    },
    tags: ['Caso 01', 'Sistema Web', 'Arquitectura BD', 'Utilidad', 'Garantía'],
    level: 2
  },
  'prac-caso-2': {
    id: 'prac-caso-2',
    title: 'Caso 02: Cuadro Comparativo de Principios',
    subtitle: 'Matriz comparativa de los principios de la guía del SVS (Slide 15)',
    branch: 'practica',
    branchLabel: '4. Casos Prácticos UTP',
    iconName: 'FileSpreadsheet',
    shortDesc: 'Cuadro comparativo analítico que sintetiza los principios rectores, su propósito, aplicación y errores a evitar.',
    fullDesc: 'El Caso 02 requiere elaborar un cuadro comparativo relacionado a los principios de la guía del sistema de valor del servicio (SVS):\n\n| Principio Rector | Propósito Estratégico | Aplicación en Proyectos Web/BD | Error Común a Evitar |\n|---|---|---|---|\n| 1. Centrarse en el valor | Vincular cada tarea al cliente | Priorizar features que resuelvan la necesidad del usuario | Construir funciones complejas que nadie usará |\n| 2. Comenzar donde se está | Reutilizar recursos existentes | Auditar bases de datos y APIs legadas antes de reemplazarlas | Descartar todo e iniciar un desarrollo desde cero |\n| 3. Progresar iterativamente con feedback | Mitigar riesgos en etapas cortas | Sprints Scrum de 2 semanas con entregas funcionales | Proyectos monolíticos de 1 año sin validación de usuarios |\n| 4. Colaborar y visibilidad | Romper silos y transparentar | Tableros Kanban, ramas Git y dailies entre Dev y Ops | Ocultar problemas o culpar a otras áreas |\n| 5. Pensar holísticamente | Ver el sistema completo | Integrar personas, procesos, cloud y proveedores | Optimizar el código descuidando la infraestructura o capacitación |\n| 6. Mantenerlo simple | Eliminar burocracia innecesaria | Flujos con número mínimo de pasos y clics | Crear procesos rígidos con aprobaciones innecesarias |\n| 7. Optimizar y automatizar | Maximizar eficiencia tecnológica | Estandarizar consultas y automatizar despliegues CI/CD | Automatizar procesos defectuosos o sin probar |',
    bulletPoints: [
      'Comparativa directa y estructurada de los 7 principios rectores.',
      'Conexión directa con la diapositiva 12 y la práctica de la sesión.',
      'Guía de referencia rápida para toma de decisiones ágiles en TI.'
    ],
    tags: ['Caso 02', 'Cuadro Comparativo', 'Matriz SVS', 'Principios ITIL'],
    level: 2
  },
  'prac-caso-3': {
    id: 'prac-caso-3',
    title: 'Caso 03: Mapa Conceptual de la Sesión',
    subtitle: 'Elaboración de la red conceptual y cognitiva de la sesión (Slide 15)',
    branch: 'practica',
    branchLabel: '4. Casos Prácticos UTP',
    iconName: 'Boxes',
    shortDesc: 'Diseño e integración de todos los conceptos de la Semana 11 - Sesión 1 en un mapa interactivo dinámico.',
    fullDesc: 'El Caso 03 de la práctica solicita elaborar un mapa conceptual o mental de la sesión. Este proyecto web interactivo es la materialización en software de dicha tarea, estructurando las 4 ramas:\n1. Concepción y Arquetipos del Valor (ITIL, Porter, Rappaport, Bases de Datos).\n2. Estructura del Sistema de Valor del Servicio SVS (Demanda, Gobernanza, SVC, Prácticas, Mejora).\n3. Los 7 Principios Rectores de ITIL 4 con sus reglas pedagógicas.\n4. Casos Prácticos y preguntas retadoras de la UTP.\nPermite filtrar por ramas, realizar búsquedas en tiempo real, visualizar detalles de cada concepto e interactuar con herramientas dinámicas de cálculo y comparación.',
    bulletPoints: [
      'Visualización interactiva mediante grafos nodales en React Flow.',
      'Exploración pedagógica de conceptos, fórmulas y casos de estudio.',
      'Cumplimiento integral del logro de la sesión de la Semana 11.'
    ],
    tags: ['Caso 03', 'Mapa Conceptual', 'React Flow', 'Interactivo', 'UTP S11'],
    level: 2
  }
};
