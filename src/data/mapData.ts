export interface NodeDetailData {
  id: string;
  title: string;
  subtitle?: string;
  branch: 'central' | 'generales' | 'tecnicas' | 'certificacion' | 'practica';
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
    title: 'Prácticas de Gestión ITIL & Esquema de Certificación',
    subtitle: 'Gestión de Servicios de TI · Semana 13, Sesión 2 (UTP Agosto 2026)',
    branch: 'central',
    branchLabel: 'Núcleo Central',
    iconName: 'Sparkles',
    shortDesc: 'Compendio integral de prácticas generales y técnicas de ITIL, estándares internacionales (ISO/COBIT) y el esquema de certificación profesional para la excelencia y alineación en servicios de TI.',
    fullDesc: 'En la Semana 13, Sesión 2 del curso Gestión de Servicios de TI en la UTP, se profundiza en las capacidades organizacionales y técnicas que sustentan la entrega de servicios de alta calidad. Se abordan las 12 Prácticas de Gestión General de ITIL, las Prácticas de Gestión Técnica y Despliegue, los estándares complementarios de gobierno y arquitectura (COBIT 2019, ISO/IEC 20000, ISO/IEC 22237, ISO 31000) y el esquema oficial de certificación PeopleCert, integrando casos prácticos reales y el ciclo de mejora continua (PDCA).',
    bulletPoints: [
      'Logro de la sesión: Comprender los fundamentos de práctica de gestión de servicios de TI y el esquema de certificación en las organizaciones.',
      'Estandarización y alineación: Las prácticas ITIL permiten alinear la tecnología con los objetivos de negocio y optimizar la calidad.',
      'Integración holística: Articulación de capacidades generales (gobernanza, riesgos, cartera) con capacidades técnicas (despliegue, CI/CD, infraestructura, desarrollo de software).',
      'Esquema de certificación: Análisis de modalidades autodidactas vs. acreditadas (ATO), costos de inversión ($680 - $2,500) y valor curricular en la industria global.'
    ],
    metricsOrFormula: {
      label: 'Ecuación de Excelencia en Gestión de Servicios',
      formula: 'Prácticas ITIL (12 Generales + 3 Técnicas) + Estándares (ISO/COBIT) + Certificación PeopleCert ➔ Valor Co-creado & Excelencia Operativa',
      details: [
        'Entrada: Necesidades del negocio, demanda de servicios y requerimientos de confiabilidad.',
        'Procesamiento: Ejecución de prácticas estandarizadas con ciclo PDCA (Deming) y marcos ágiles/DevOps.',
        'Salida: Servicios de TI estables, seguros, alineados al negocio y soportados por profesionales certificados.'
      ]
    },
    practicalCase: {
      title: 'Alineación Estratégica en una Empresa de Servicios Digitales',
      description: 'Una organización financiera requiere transformar su área de infraestructura tradicional en un modelo ágil de servicios bajo ITIL y normas ISO, reduciendo tiempos de despliegue y fallos en producción.',
      solutionOrTakeaway: 'Se implementan prácticas de Gestión de Despliegues automatizadas con CI/CD, Gestión de Riesgos bajo ISO 31000 y se certifica al equipo técnico en ITIL 4 Foundation con PeopleCert, reduciendo incidentes en 45% y alineando TI con el negocio.'
    },
    standards: ['ITIL 4 Foundation', 'COBIT 2019', 'ISO/IEC 20000-1', 'ISO/IEC 22237', 'ISO 31000', 'Ciclo PDCA (Deming)'],
    tags: ['ITIL 4', 'Prácticas de Gestión', 'Certificación', 'UTP S13', 'COBIT', 'ISO 20000'],
    level: 0
  },

  // ================= RAMA 1: PRÁCTICAS DE GESTIÓN GENERAL ITIL =================
  'branch-generales': {
    id: 'branch-generales',
    title: 'Prácticas de Gestión General ITIL',
    subtitle: '12 capacidades directivas y organizacionales para alinear tecnología con el negocio',
    branch: 'generales',
    branchLabel: '1. Prácticas Generales ITIL',
    iconName: 'Layers',
    shortDesc: 'Conjunto de prácticas adaptadas del ámbito de la gestión corporativa general para garantizar gobierno, control, calidad y alineación estratégica en TI.',
    fullDesc: 'Las prácticas de gestión general de ITIL representan conjuntos de recursos organizacionales diseñados para realizar un trabajo o cumplir un objetivo directivo. Abarcan desde la definición de la arquitectura empresarial y la gestión de la seguridad de la información, hasta el control financiero, la gestión de riesgos y proveedores. Permiten estandarizar operaciones, fomentar la innovación y asegurar la mejora continua.',
    bulletPoints: [
      'Estandarización de operaciones de TI para consistencia y calidad.',
      'Alineación directa de la tecnología con los objetivos estratégicos del negocio.',
      'Mejora de la calidad, confiabilidad y disponibilidad de los servicios entregados.',
      'Fomento de la innovación sistemática mediante el ciclo Deming (PDCA).'
    ],
    standards: ['ITIL 4 General Management Practices', 'COBIT 2019', 'ISO 31000', 'ISO/IEC 20000'],
    tags: ['Prácticas Generales', 'Gobernanza', 'Estrategia', 'Calidad', 'Alineación Negocio-TI'],
    level: 1
  },
  'gen-arquitectura': {
    id: 'gen-arquitectura',
    title: 'Gestión de Arquitectura',
    subtitle: 'Estructura y componentes del negocio y TI para apoyar la estrategia',
    branch: 'generales',
    branchLabel: '1. Prácticas Generales ITIL',
    iconName: 'Boxes',
    shortDesc: 'Define la estructura, componentes e interrelaciones entre negocio, aplicaciones, datos e infraestructura para materializar la estrategia empresarial.',
    fullDesc: 'La Gestión de Arquitectura proporciona una comprensión integral de los diferentes elementos que conforman la organización y cómo se interconectan. Incluye la arquitectura de negocio, de servicios, de información y datos (como plataformas de Data Lake, catálogos de metadatos, linaje de datos y pipelines de IA), así como arquitecturas tecnológicas en la nube.',
    bulletPoints: [
      'Define y mantiene la visión arquitectónica empresarial y tecnológica.',
      'Integra plataformas de datos modernas: Data Loaders, Data Lakes, Service Data y AI Stores.',
      'Reduce la complejidad técnica y evita la duplicidad innecesaria de sistemas.',
      'Garantiza que las inversiones tecnológicas respondan a la estrategia de negocio a largo plazo.'
    ],
    practicalCase: {
      title: 'Plataforma de Datos Empresarial (Semantix Data Platform)',
      description: 'Una empresa con múltiples sistemas legados, SaaS y bases de datos dispersas necesita una arquitectura unificada de información para analítica y modelos de Machine Learning.',
      solutionOrTakeaway: 'Se define una arquitectura de datos moderna con Data Loaders hacia un Data Lake centralizado, clasificando datos Raw, Trusted y Service Data con catálogo y linaje, habilitando consumo seguro por herramientas de visualización e Inteligencia Artificial.'
    },
    standards: ['TOGAF', 'ITIL 4 Architecture Management', 'ISO/IEC 42010'],
    tags: ['Arquitectura', 'Data Lake', 'Big Data', 'Estrategia TI', 'Semantix'],
    level: 2
  },
  'gen-mejora-continua': {
    id: 'gen-mejora-continua',
    title: 'Gestión Continua de la Mejora (PDCA)',
    subtitle: 'Identifica oportunidades de mejora en servicios, procesos y prácticas',
    branch: 'generales',
    branchLabel: '1. Prácticas Generales ITIL',
    iconName: 'RotateCw',
    shortDesc: 'Práctica transversal orientada a alinear constantemente las prácticas y servicios de la organización con las cambiantes necesidades del negocio mediante el ciclo PDCA.',
    fullDesc: 'La Gestión Continua de la Mejora asegura que el desempeño organizacional se mantenga en constante evolución positiva. Se fundamenta en el ciclo de Deming: Planificar (Plan), Hacer (Do), Verificar (Check) y Actuar (Act). Utiliza el Registro de Mejora Continua (CIR) para registrar, priorizar y medir el impacto de las iniciativas.',
    bulletPoints: [
      'Aplica el ciclo PDCA: Plan (qué y cómo), Do (ejecución), Check (verificación), Act (mejora para la próxima vez).',
      'Mantiene el Registro de Mejora Continua (CIR) como repositorio estructurado de ideas.',
      'Fomenta la cultura de aprendizaje y retrospectivas ágiles en todos los niveles.',
      'Asegura que los servicios no se vuelvan obsoletos frente a la competencia.'
    ],
    metricsOrFormula: {
      label: 'Ciclo de Deming (PDCA)',
      formula: 'Plan ➔ Do ➔ Check ➔ Act ➔ Mejora Incrementada',
      details: [
        'Plan: Identificar cuellos de botella y diseñar la solución.',
        'Do: Ejecutar la iniciativa en un piloto controlado.',
        'Check: Comparar los indicadores obtenidos con los esperados.',
        'Act: Estandarizar la mejora e iniciar el siguiente ciclo.'
      ]
    },
    practicalCase: {
      title: 'Reducción de Tiempo de Respuesta en Mesa de Ayuda',
      description: 'El tiempo promedio de resolución de incidentes críticos era de 4 horas, afectando la operación del usuario final.',
      solutionOrTakeaway: 'Se planificó e implementó un flujo automatizado de categorización (Plan-Do), se comprobó que el tiempo bajó a 45 minutos (Check) y se oficializó el nuevo procedimiento en toda la empresa (Act).'
    },
    standards: ['ITIL 4 Continual Improvement', 'ISO 9001', 'Kaizen / Lean IT'],
    tags: ['Mejora Continua', 'PDCA', 'Deming', 'CIR', 'Calidad'],
    level: 2
  },
  'gen-seguridad': {
    id: 'gen-seguridad',
    title: 'Gestión de Seguridad de la Información',
    subtitle: 'Protege la confidencialidad, integridad y disponibilidad de la información',
    branch: 'generales',
    branchLabel: '1. Prácticas Generales ITIL',
    iconName: 'Shield',
    shortDesc: 'Garantiza la protección integral de los datos y activos de información frente a amenazas cibernéticas, brechas y pérdidas operativas.',
    fullDesc: 'La Gestión de Seguridad de la Información equilibra la protección contra amenazas con la necesidad operativa de acceder y compartir información. Se basa en la Tríada CIA (Confidencialidad, Integridad y Disponibilidad), complementada con la autenticidad, la trazabilidad (no repudio) y el cumplimiento normativo (protección de datos personales).',
    bulletPoints: [
      'Confidencialidad: Solo personal autorizado accede a la información sensible.',
      'Integridad: Los datos se mantienen exactos, completos y protegidos de alteraciones no autorizadas.',
      'Disponibilidad: La información está lista y accesible para los usuarios autorizados cuando la requieran.',
      'Políticas de ciberseguridad, gestión de identidades y accesos (IAM) y respuesta a incidentes de seguridad.'
    ],
    practicalCase: {
      title: 'Protección de Datos en Pasarela Transaccional',
      description: 'Una plataforma web de pagos requiere asegurar los números de tarjeta y datos financieros de los clientes cumpliendo con estándares internacionales.',
      solutionOrTakeaway: 'Se implementa cifrado end-to-end (AES-256 / TLS 1.3), tokenización de credenciales y autenticación multifactor (MFA), blindando la confidencialidad e integridad conforme a ISO/IEC 27001.'
    },
    standards: ['ISO/IEC 27001', 'ITIL 4 Information Security Management', 'NIST CSF'],
    tags: ['Seguridad', 'Tríada CIA', 'Confidencialidad', 'Integridad', 'Ciberseguridad'],
    level: 2
  },
  'gen-conocimiento': {
    id: 'gen-conocimiento',
    title: 'Gestión del Conocimiento',
    subtitle: 'Asegura que la información correcta esté disponible en el momento adecuado',
    branch: 'generales',
    branchLabel: '1. Prácticas Generales ITIL',
    iconName: 'BookOpen',
    shortDesc: 'Mantiene y mejora el uso eficiente del conocimiento organizacional, lecciones aprendidas y bases de soluciones para habilitar la toma de decisiones.',
    fullDesc: 'La Gestión del Conocimiento evita la pérdida de capital intelectual cuando los especialistas cambian de rol o empresa. Implementa bases de conocimiento accesibles (KEDB - Known Error Database), wikis técnicas, manuales interactivos y procedimientos de autoservicio que reducen la necesidad de escalar incidentes comunes.',
    bulletPoints: [
      'Estructura el modelo DIKW (Datos ➔ Información ➔ Conocimiento ➔ Sabiduría).',
      'Centraliza bases de conocimiento de errores conocidos (KEDB) y soluciones estándar.',
      'Reduce drásticamente el tiempo de resolución en primer contacto (First Contact Resolution).',
      'Facilita la incorporación rápida (onboarding) de nuevos ingenieros y colaboradores.'
    ],
    standards: ['ITIL 4 Knowledge Management', 'ISO 30401', 'KCS (Knowledge-Centered Service)'],
    tags: ['Conocimiento', 'KEDB', 'DIKW', 'Documentación', 'Autoservicio'],
    level: 2
  },
  'gen-medicion-reporte': {
    id: 'gen-medicion-reporte',
    title: 'Medición y Reporte',
    subtitle: 'Define métricas, indicadores y reportes para la toma de decisiones',
    branch: 'generales',
    branchLabel: '1. Prácticas Generales ITIL',
    iconName: 'BarChart3',
    shortDesc: 'Proporciona información objetiva sobre el desempeño de servicios y prácticas para respaldar la toma de decisiones directivas y la mejora continua.',
    fullDesc: 'La práctica de Medición y Reporte define indicadores clave de rendimiento (KPIs), Factores Críticos de Éxito (CSFs) y Acuerdos de Nivel de Servicio (SLAs). Transforma datos operacionales en paneles analíticos gerenciales para evaluar la efectividad y el valor entregado.',
    bulletPoints: [
      'Establece métricas de efectividad, eficiencia, calidad y cumplimiento de SLAs.',
      'Construye cuadros de mando integrales (Balanced Scorecard) y dashboards en tiempo real.',
      'Evita el "efecto sandía" (Watermelon Effect): métricas operativas en verde pero usuarios insatisfechos.',
      'Soporta auditorías de calidad y justificación presupuestal con datos auditables.'
    ],
    standards: ['ITIL 4 Measurement and Reporting', 'Balanced Scorecard', 'COBIT 2019 Metrics'],
    tags: ['Métricas', 'KPIs', 'Reportes', 'SLAs', 'Toma de Decisiones'],
    level: 2
  },
  'gen-cambio-org': {
    id: 'gen-cambio-org',
    title: 'Gestión del Cambio Organizacional',
    subtitle: 'Facilita la adopción humana de cambios dentro de la empresa',
    branch: 'generales',
    branchLabel: '1. Prácticas Generales ITIL',
    iconName: 'Users',
    shortDesc: 'Asegura que los aspectos humanos de cualquier transformación tecnológica sean gestionados eficazmente para lograr una adopción exitosa y sostenible.',
    fullDesc: 'La Gestión del Cambio Organizacional (OCM) se enfoca en las personas y la cultura. Reconoce que las herramientas más avanzadas fracasan si los colaboradores las rechazan o no las comprenden. Utiliza planes de comunicación empática, formación por roles, gestión de patrocinadores y seguimiento de resistencia.',
    bulletPoints: [
      'Diferente a la "Gestión de Habilitación del Cambio" técnica: se enfoca 100% en el factor humano.',
      'Aplica marcos como Kotter (8 pasos del cambio) o ADKAR (Conciencia, Deseo, Conocimiento, Habilidad, Refuerzo).',
      'Desarrolla estrategias de comunicación bidireccional y entrenamiento continuo.',
      'Mitiga el miedo a la obsolescencia laboral frente a la automatización.'
    ],
    standards: ['ITIL 4 Organizational Change Management', 'Prosci ADKAR', 'Kotter 8-Step Model'],
    tags: ['Cambio Organizacional', 'Factor Humano', 'Cultura', 'Adopción', 'ADKAR'],
    level: 2
  },
  'gen-cartera': {
    id: 'gen-cartera',
    title: 'Gestión de Cartera (Portfolio)',
    subtitle: 'Gestiona inversiones, servicios y proyectos para maximizar el valor',
    branch: 'generales',
    branchLabel: '1. Prácticas Generales ITIL',
    iconName: 'Target',
    shortDesc: 'Asegura que la organización disponga de la combinación óptima de programas, proyectos, productos y servicios para ejecutar su estrategia de negocio dentro de los límites de financiamiento y recursos.',
    fullDesc: 'La Gestión de Cartera evalúa y equilibra las demandas competitivas de inversión en TI. Administra el ciclo de vida del portafolio: Servicios Propuestos (Pipeline), Servicios Activos (Catálogo en Producción) y Servicios Retirados (Obsoletos), maximizando el Retorno sobre la Inversión (ROI).',
    bulletPoints: [
      'Segmenta la cartera en: Pipeline (en desarrollo), Catálogo (activos) y Retirados (desmantelados).',
      'Prioriza iniciativas basadas en valor estratégico, viabilidad técnica y riesgo financiero.',
      'Evita duplicidad de proyectos y servicios en distintas áreas corporativas.',
      'Garantiza la asignación eficiente del capital de inversión tecnológica (CapEx vs OpEx).'
    ],
    standards: ['ITIL 4 Portfolio Management', 'PMI Standard for Portfolio Management', 'MoP (Management of Portfolios)'],
    tags: ['Cartera', 'Portfolio', 'Inversión', 'Pipeline', 'Catálogo de Servicios'],
    level: 2
  },
  'gen-proyectos': {
    id: 'gen-proyectos',
    title: 'Gestión de Proyectos',
    subtitle: 'Planifica, supervisa y controla los proyectos de TI y negocio',
    branch: 'generales',
    branchLabel: '1. Prácticas Generales ITIL',
    iconName: 'Workflow',
    shortDesc: 'Asegura que todos los proyectos de la organización se entreguen con éxito gestionando alcance, tiempo, costo, calidad y riesgos.',
    fullDesc: 'La Gestión de Proyectos coordina esfuerzos temporales para crear un producto, servicio o resultado único. En TI moderna, integra metodologías predictivas (PMBOK/PRINCE2) con marcos ágiles (Scrum/Kanban) para acelerar la entrega de valor sin comprometer la estabilidad operativa.',
    bulletPoints: [
      'Control del triángulo de hierro: Alcance, Tiempo y Costo con estándar de Calidad.',
      'Enfoque híbrido: Planificación estratégica global con ejecución iterativa por Sprints.',
      'Gestión proactiva de interesados y comunicación constante con patrocinadores.',
      'Transición fluida de proyectos hacia la operación continua del servicio.'
    ],
    standards: ['PMBOK Guide (PMI)', 'PRINCE2', 'Agile / Scrum Framework', 'ITIL 4 Project Management'],
    tags: ['Proyectos', 'PMBOK', 'Scrum', 'Planificación', 'Control'],
    level: 2
  },
  'gen-financiera': {
    id: 'gen-financiera',
    title: 'Gestión Financiera del Servicio',
    subtitle: 'Controla presupuestos, costos y retornos relacionados con los servicios',
    branch: 'generales',
    branchLabel: '1. Prácticas Generales ITIL',
    iconName: 'TrendingUp',
    shortDesc: 'Respalda la toma de decisiones organizacionales asegurando que los recursos financieros de TI se utilicen de manera eficiente, transparente y rentable.',
    fullDesc: 'La Gestión Financiera de Servicios de TI abarca tres sub-procesos clave: Presupuestación (asegurar fondos para operar y proyectos), Contabilidad (identificar el costo real por servicio, CapEx/OpEx) y Cobro/Facturación (atribuir costos a unidades de negocio). En entornos cloud, adopta prácticas de FinOps.',
    bulletPoints: [
      'Presupuestación, contabilidad analítica y tarificación de servicios.',
      'Cálculo de Costo Total de Propiedad (TCO - Total Cost of Ownership).',
      'Adopción de FinOps para optimizar gastos elásticos en nubes públicas (AWS, Azure, GCP).',
      'Demostración del valor financiero generado por TI para la alta dirección.'
    ],
    metricsOrFormula: {
      label: 'Métricas de Costo de Servicios de TI',
      formula: 'TCO = CapEx (Hardware/Licencias) + OpEx (Operación/Mantenimiento/Nube)',
      details: [
        'CapEx: Gastos de capital en activos fijos e infraestructura física.',
        'OpEx: Gastos operativos continuos en suscripciones cloud, personal y soporte.',
        'ROI: Retorno de inversión generado por la eficiencia del servicio digital.'
      ]
    },
    standards: ['ITIL 4 Service Financial Management', 'FinOps Foundation', 'ISO/IEC 20000-1 Cláusula 6.3'],
    tags: ['Finanzas', 'Presupuestos', 'TCO', 'FinOps', 'ROI'],
    level: 2
  },
  'gen-relaciones': {
    id: 'gen-relaciones',
    title: 'Gestión de Relaciones',
    subtitle: 'Desarrolla relaciones productivas con clientes y partes interesadas',
    branch: 'generales',
    branchLabel: '1. Prácticas Generales ITIL',
    iconName: 'Users',
    shortDesc: 'Establece y fomenta los vínculos entre la organización y sus partes interesadas en los niveles estratégico y táctico.',
    fullDesc: 'La Gestión de Relaciones asegura que las necesidades actuales y futuras de los clientes sean comprendidas y priorizadas. Actúa como canal de confianza bidireccional, facilitando el diálogo sobre prioridades de negocio, satisfacción del cliente y oportunidades de co-creación de valor.',
    bulletPoints: [
      'Identifica y analiza constantemente los requerimientos de las partes interesadas.',
      'Monitorea la percepción del cliente y los índices de satisfacción (CSAT / NPS).',
      'Facilita la resolución constructiva de conflictos entre TI y las áreas usuarias.',
      'Promueve alianzas estratégicas para innovar conjuntamente.'
    ],
    standards: ['ITIL 4 Relationship Management', 'BRM (Business Relationship Management)'],
    tags: ['Relaciones', 'BRM', 'Clientes', 'Stakeholders', 'Satisfacción'],
    level: 2
  },
  'gen-riesgos': {
    id: 'gen-riesgos',
    title: 'Gestión de Riesgos (ISO 31000)',
    subtitle: 'Identifica, evalúa y mitiga riesgos que puedan afectar los servicios',
    branch: 'generales',
    branchLabel: '1. Prácticas Generales ITIL',
    iconName: 'ShieldAlert',
    shortDesc: 'Asegura que la organización comprenda y maneje eficazmente los riesgos operacionales, tecnológicos y de seguridad para proteger los servicios críticos.',
    fullDesc: 'La Gestión de Riesgos bajo ITIL y la norma ISO 31000 establece un enfoque sistemático para identificar amenazas, evaluar su probabilidad e impacto en matrices 5x5, y definir planes de tratamiento (mitigar, transferir, aceptar o evitar). Evalúa el Riesgo Bruto (Gross Risk), aplica controles para obtener el Riesgo Neto (Net Risk) y lo conduce hacia el Riesgo Objetivo (Target Risk).',
    bulletPoints: [
      'Alineada con el estándar internacional de gobernanza de riesgos ISO 31000.',
      'Matriz de calor 5x5: Niveles Bajo (1-4), Moderado (5-9), Alto (10-16) y Extremo (20-25).',
      'Distinción de Gross Risk (sin controles), Net Risk (riesgo residual) y Target Risk (nivel deseado).',
      'Estrategias de respuesta: Mitigación técnica, transferencia (pólizas/SaaS), evasión y aceptación.'
    ],
    metricsOrFormula: {
      label: 'Cálculo de Severidad de Riesgo',
      formula: 'Nivel de Riesgo = Probabilidad (1 a 5) × Impacto (1 a 5) = Rango [1 - 25]',
      details: [
        '1 - 4: Riesgo Bajo (Verde) ➔ Monitoreo rutinario y controles estándar.',
        '5 - 9: Riesgo Moderado (Amarillo) ➔ Procedimientos y revisiones periódicas.',
        '10 - 16: Riesgo Alto (Naranja) ➔ Plan de mitigación prioritario y supervisión ejecutiva.',
        '20 - 25: Riesgo Extremo (Rojo) ➔ Acción inmediata de contingencia y escalamiento a alta dirección.'
      ]
    },
    practicalCase: {
      title: 'Matriz de Riesgos en Centro de Cómputo Bancario',
      description: 'El riesgo de caída del suministro eléctrico principal en el centro de datos tiene probabilidad Moderada (3) e Impacto Extremo (5) = Severidad 15 (Riesgo Alto).',
      solutionOrTakeaway: 'Se implementa mitigación con redundancia UPS de doble conversión y generadores diésel en paralelo (N+1), reduciendo el Net Risk a nivel 3 (Bajo).'
    },
    standards: ['ISO 31000:2018', 'ITIL 4 Risk Management', 'COSO ERM'],
    tags: ['Riesgos', 'ISO 31000', 'Matriz 5x5', 'Gross Risk', 'Net Risk', 'Mitigación'],
    level: 2
  },
  'gen-proveedores': {
    id: 'gen-proveedores',
    title: 'Gestión de Proveedores',
    subtitle: 'Garantiza que los proveedores cumplan con los acuerdos establecidos',
    branch: 'generales',
    branchLabel: '1. Prácticas Generales ITIL',
    iconName: 'ListChecks',
    shortDesc: 'Asegura que los proveedores de la organización y su desempeño se gestionen adecuadamente para respaldar la provisión de servicios de calidad sin interrupciones.',
    fullDesc: 'La Gestión de Proveedores administra las relaciones comerciales con vendors externos (proveedores de nube como AWS u Oracle Cloud, operadores de telecomunicaciones, licencias de software y consultoras). Supervisa Contratos de Soporte (UCs - Underpinning Contracts) y Acuerdos de Nivel Operativo (OLAs) para garantizar cumplimiento de SLAs.',
    bulletPoints: [
      'Negociación de contratos y Acuerdos de Soporte (Underpinning Contracts - UCs).',
      'Evaluación continua de calidad y penalidades por incumplimiento de disponibilidad.',
      'Gestión de proveedores multicloud y mitigación del vendor lock-in.',
      'Alineación estricta de las cláusulas del proveedor con los compromisos del cliente final.'
    ],
    standards: ['ITIL 4 Supplier Management', 'ISO/IEC 20000-1 Cláusula 8.2', 'CIPS Standards'],
    tags: ['Proveedores', 'Vendors', 'Contratos', 'Underpinning Contracts', 'Cloud Providers'],
    level: 2
  },

  // ================= RAMA 2: PRÁCTICAS DE GESTIÓN TÉCNICA Y DESPLIEGUE =================
  'branch-tecnicas': {
    id: 'branch-tecnicas',
    title: 'Prácticas de Gestión Técnica & Despliegue',
    subtitle: 'Capacidades técnicas e ingeniería requeridas para mantener y desarrollar servicios',
    branch: 'tecnicas',
    branchLabel: '2. Prácticas Técnicas y Despliegue',
    iconName: 'Cpu',
    shortDesc: 'Cubren la ingeniería, automatización, infraestructura, arquitectura web y pipelines de despliegue esenciales para operar servicios digitales modernos.',
    fullDesc: 'Las Prácticas de Gestión Técnica de ITIL 4 se centran en las capacidades tecnológicas fundamentales: Gestión de Despliegues, Gestión de Infraestructura y Plataforma, y Desarrollo y Gestión de Software. Integran arquitecturas de alta disponibilidad (RAID, enrutamiento redundante OSPF/EIGRP, SD-WAN, Cloud Peering) y el ciclo automatizado de CI/CD para entregar valor seguro y continuo.',
    bulletPoints: [
      'Capacidades técnicas necesarias para construir, mantener y evolucionar la plataforma digital.',
      'Automatización de despliegues mediante pipelines modernos de CI/CD.',
      'Administración de infraestructura física y en la nube conforme a ISO/IEC 22237.',
      'Comprensión integral de la arquitectura web moderna y su analogía culinaria.'
    ],
    standards: ['ITIL 4 Technical Management Practices', 'ISO/IEC 22237', 'DevOps / CNCF', 'Cisco Networking Standards'],
    tags: ['Prácticas Técnicas', 'Despliegues', 'CI/CD', 'Infraestructura', 'Alta Disponibilidad'],
    level: 1
  },
  'tec-despliegues': {
    id: 'tec-despliegues',
    title: 'Gestión de Despliegues',
    subtitle: 'Planifica y ejecuta la distribución de software o hardware en entornos operativos',
    branch: 'tecnicas',
    branchLabel: '2. Prácticas Técnicas y Despliegue',
    iconName: 'Rocket',
    shortDesc: 'Mueve componentes de software nuevo o modificado, hardware o documentación hacia entornos operativos o de prueba de forma controlada y segura.',
    fullDesc: 'La Gestión de Despliegues (Deployment Management) se enfoca en el movimiento técnico de artefactos. Diferente a la Gestión de Liberación (Release Management), que decide cuándo el valor está disponible para los usuarios comerciales, el despliegue instala y valida los paquetes de software en los servidores usando técnicas modernas como Blue-Green Deployment, Canary Releases y rolling updates.',
    bulletPoints: [
      'Planificación y ejecución de despliegues en Staging, Pre-producción y Producción.',
      'Estrategias de bajo impacto: Blue/Green Deployment y Canary Releases.',
      'Planes automatizados de reversión rápida (Rollback) ante fallas inesperadas.',
      'Validación exhaustiva de integridad y verificación de compatibilidad ambiental.'
    ],
    practicalCase: {
      title: 'Estrategia Blue-Green en Banco Digital',
      description: 'El despliegue de una nueva versión del core bancario no puede causar ni un segundo de indisponibilidad en la app móvil.',
      solutionOrTakeaway: 'Se utiliza la práctica de despliegue Blue-Green: el nuevo software se despliega en el entorno Green inactivo; tras pasar pruebas de humo, el balanceador de carga redirige el 100% del tráfico instantáneamente, reduciendo el downtime a cero.'
    },
    standards: ['ITIL 4 Deployment Management', 'DORA Metrics', 'DevOps Institute'],
    tags: ['Despliegues', 'Deployment', 'Blue-Green', 'Canary', 'Rollback'],
    level: 2
  },
  'tec-cicd-pipeline': {
    id: 'tec-cicd-pipeline',
    title: 'Pipeline de CI/CD Moderno',
    subtitle: 'Commit ➔ Build ➔ Test ➔ Artifact ➔ Deploy ➔ Monitoring',
    branch: 'tecnicas',
    branchLabel: '2. Prácticas Técnicas y Despliegue',
    iconName: 'Zap',
    shortDesc: 'Automatización integral del flujo de entrega continua que transforma código fuente en servicios de producción monitoreados.',
    fullDesc: 'El pipeline de Integración y Entrega Continua (CI/CD) mostrado en las diapositivas representa el estándar técnico para equipos ágiles. Inicia con el Commit del desarrollador, ejecuta compilaciones automáticas (Build), pruebas unitarias y de integración (Test), empaqueta el artefacto (Docker/OCI), lo despliega con orquestadores (ArgoCD/Kubernetes) y supervisa su salud en vivo (Monitoring).',
    bulletPoints: [
      'Commit: Envío de cambios de código a repositorios controlados (Git).',
      'Build & Test: Compilación y ejecución automática de pruebas para detectar bugs tempranamente.',
      'Artifact: Creación de imágenes inmutables de contenedor (Docker Hub / ECR).',
      'Deploy & Monitoring: Despliegue orquestado (ArgoCD, CodePipeline, Jenkins) y telemetría continua.'
    ],
    metricsOrFormula: {
      label: 'Flujo Continuo de CI/CD',
      formula: 'Commit ➔ Build ➔ Test ➔ Artifact ➔ Deploy ➔ Monitoring',
      details: [
        'Lead Time for Changes: Tiempo transcurrido desde el commit hasta producción.',
        'Deployment Frequency: Frecuencia con la que se liberan despliegues exitosos.',
        'Change Failure Rate: Porcentaje de cambios que derivan en degradación del servicio.'
      ]
    },
    standards: ['DevOps CI/CD', 'GitOps / CNCF', 'Jenkins / ArgoCD'],
    tags: ['CI/CD', 'Docker', 'Kubernetes', 'Automatización', 'GitOps'],
    level: 2
  },
  'tec-infraestructura': {
    id: 'tec-infraestructura',
    title: 'Gestión de Infraestructura y Plataforma',
    subtitle: 'Administra los entornos tecnológicos donde se ejecutan los servicios',
    branch: 'tecnicas',
    branchLabel: '2. Prácticas Técnicas y Despliegue',
    iconName: 'Server',
    shortDesc: 'Supervisa y optimiza los recursos de computación, almacenamiento, red y virtualización que sostienen las aplicaciones corporativas.',
    fullDesc: 'Esta práctica garantiza que la infraestructura tecnológica (servidores bare-metal, clusters virtualizados, servicios de nube y centros de datos) esté disponible, escalable y protegida. Incorpora el estándar ISO/IEC 22237 para especificaciones de instalaciones de centros de datos y diseño redundante.',
    bulletPoints: [
      'Administración de servidores físicos, máquinas virtuales e hipervisores.',
      'Gestión de plataformas en la nube pública (AWS, Azure, Oracle Cloud, Google Cloud).',
      'Cumplimiento de estándares de diseño de Centros de Cómputo (ISO/IEC 22237).',
      'Monitoreo proactivo de capacidad, temperatura, energía y consumo de recursos.'
    ],
    standards: ['ISO/IEC 22237 (Data Centre Facilities)', 'ITIL 4 Infrastructure and Platform Management', 'TIA-942'],
    tags: ['Infraestructura', 'Plataforma', 'Data Center', 'Cloud', 'ISO 22237'],
    level: 2
  },
  'tec-alta-disp-raid': {
    id: 'tec-alta-disp-raid',
    title: 'Alta Disponibilidad & Esquemas RAID',
    subtitle: 'RAID 0, RAID 1 y RAID 01 (0+1) para tolerancia a fallos en discos',
    branch: 'tecnicas',
    branchLabel: '2. Prácticas Técnicas y Despliegue',
    iconName: 'Database',
    shortDesc: 'Configuraciones de almacenamiento redundante presentadas en la sesión para evitar la pérdida de datos y garantizar la continuidad del servicio ante averías de disco.',
    fullDesc: 'Los arreglos redundantes de discos independientes (RAID) son cruciales para la garantía de servicio en ITIL. RAID 0 ofrece fraccionamiento de datos (striping) con alta velocidad pero sin redundancia; RAID 1 ofrece espejo (mirroring) con alta seguridad; y RAID 01 (0+1) combina striping y mirroring sobre múltiples discos para ofrecer máxima velocidad y tolerancia simultánea a fallas.',
    bulletPoints: [
      'RAID 0 (Striping): Divide los bloques de datos entre discos. Alta velocidad de lectura/escritura, cero tolerancia a fallas.',
      'RAID 1 (Mirroring): Duplica exactamente los datos en dos discos. Tolerancia a fallo de un disco, capacidad neta 50%.',
      'RAID 01 (0+1): Espejo de franjas (RAID 0 con espejo RAID 1). Alta velocidad con protección contra fallas de discos pares.',
      'Esencial para bases de datos de misión crítica que sustentan servicios digitales 24/7.'
    ],
    metricsOrFormula: {
      label: 'Comparativa de Eficiencia y Resiliencia en RAID',
      formula: 'Capacidad RAID 1 = Capacidad Disco Menor | Capacidad RAID 0+1 = (Total Discos / 2) × Capacidad',
      details: [
        'RAID 0: Rendimiento óptimo, riesgo crítico (si falla un disco se pierde toda la información).',
        'RAID 1: Resiliencia del 100% ante avería de un disco, costo de almacenamiento x2.',
        'RAID 01: Combina el throughput del fraccionamiento con la seguridad del espejo.'
      ]
    },
    standards: ['Storage Networking Industry Association (SNIA)', 'RAID Advisory Board'],
    tags: ['RAID', 'Almacenamiento', 'Alta Disponibilidad', 'Tolerancia a Fallos', 'Discos'],
    level: 2
  },
  'tec-redes-cloud': {
    id: 'tec-redes-cloud',
    title: 'Redes Corporativas & Cloud Peering',
    subtitle: 'OSPF, EIGRP, EtherChannel HSRP, SD-WAN MPLS L2 y Cloud Peering',
    branch: 'tecnicas',
    branchLabel: '2. Prácticas Técnicas y Despliegue',
    iconName: 'Network',
    shortDesc: 'Arquitecturas de red de alta disponibilidad y conectividad híbrida mostradas en la sesión conectando centros de datos, sedes remotas y proveedores de nube.',
    fullDesc: 'La conectividad de servicios empresariales ilustrada en la diapositiva 8 integra topologías de red tolerantes a fallos con protocolos dinámicos de enrutamiento (OSPF en áreas 0 y 1, EIGRP), redundancia de puerta de enlace (HSRP / EtherChannel LACP/PAGP), enlaces SD-WAN MPLS Layer 2 y enlaces dedicados Cloud Peering hacia AWS y Oracle Cloud.',
    bulletPoints: [
      'Redundancia LAN: Agrupación de enlaces con EtherChannel (LACP/PAGP) y gateway alterno con HSRP.',
      'Enrutamiento dinámico: Protocolos OSPF multi-área y EIGRP para convergencia ultrarrápida.',
      'Conectividad WAN moderna: SD-WAN sobre MPLS Layer 2 conectando Sede Central, Oficinas Remotas y Data Centers.',
      'Cloud Peering directo: Canales privados de baja latencia con AWS Direct Connect y Oracle FastConnect.'
    ],
    standards: ['IEEE 802.3ad (LACP)', 'Cisco CCNP Enterprise Standards', 'RFC 2328 (OSPF)', 'MEF 3.0 SD-WAN'],
    tags: ['Redes', 'OSPF', 'EIGRP', 'SD-WAN', 'Cloud Peering', 'AWS', 'Oracle Cloud'],
    level: 2
  },
  'tec-desarrollo-sw': {
    id: 'tec-desarrollo-sw',
    title: 'Desarrollo y Gestión de Software',
    subtitle: 'Diseña, construye, prueba y mantiene aplicaciones y sistemas',
    branch: 'tecnicas',
    branchLabel: '2. Prácticas Técnicas y Despliegue',
    iconName: 'Code',
    shortDesc: 'Asegura que las aplicaciones corporativas cumplan con las necesidades de utilidad y garantía del negocio mediante buenas prácticas de ingeniería de software.',
    fullDesc: 'La práctica de Desarrollo y Gestión de Software establece estándares de programación limpia, pruebas de regresión, seguridad de aplicaciones (SAST/DAST) y refactorización continua. Garantiza que el código no solo satisfaga la funcionalidad requerida, sino que sea mantenible, escalable y seguro.',
    bulletPoints: [
      'Adopción de estándares de arquitectura limpia y principios SOLID.',
      'Pruebas automatizadas unitarias, de integración, de carga y de seguridad en el código.',
      'Control de versiones semántico y revisiones de código cruzadas (Pull Requests).',
      'Mantenimiento preventivo, correctivo y evolutivo alineado a los ciclos del negocio.'
    ],
    standards: ['ISO/IEC 25010 (Calidad de Software)', 'Clean Code Principles', 'OWASP Top 10'],
    tags: ['Software', 'Desarrollo', 'Ingeniería', 'Calidad de Código', 'Pruebas'],
    level: 2
  },
  'tec-anatomia-web': {
    id: 'tec-anatomia-web',
    title: 'Anatomía de una App Web Moderna',
    subtitle: 'FrontEnd, API, BackEnd, Base de Datos y Alojamiento Cloud',
    branch: 'tecnicas',
    branchLabel: '2. Prácticas Técnicas y Despliegue',
    iconName: 'Globe',
    shortDesc: 'Estructura por capas de los servicios web actuales presentada en la diapositiva 11, vinculando código, lógica de negocio y persistencia de datos.',
    fullDesc: 'La arquitectura de aplicaciones web modernas descompone el servicio en capas especializadas e independientes: FrontEnd (lo que ve el usuario: HTML, CSS, JS, React/Angular/Vue), API (el protocolo de comunicación REST/GraphQL), BackEnd (la lógica de negocio: Node.js, Python FastAPI/Django, Java, Go, .NET Core, Fiber), Base de Datos (la memoria transaccional: SQL y NoSQL) y Alojamiento (Cloud Service Providers: AWS, Google Cloud, Azure, Oracle Cloud, Alibaba Cloud).',
    bulletPoints: [
      'FrontEnd: Interfaces responsivas, accesibles y optimizadas en el navegador.',
      'API: Capa desacoplada de intercambio JSON/HTTP con autenticación JWT.',
      'BackEnd: Microservicios o monolitos modulares con alto rendimiento y lógica transaccional.',
      'Base de Datos: Motores relacionales y no relacionales para persistencia segura de datos.',
      'Alojamiento Cloud: Infraestructura elástica global con despliegue geodistribuido.'
    ],
    practicalCase: {
      title: 'Modernización de Monolito a Microservicios Web',
      description: 'Una aplicación bancaria presentaba cuellos de botella severos cuando el front-end demandaba demasiadas consultas directas al servidor de datos.',
      solutionOrTakeaway: 'Se desacopló la arquitectura según la anatomía web moderna: un FrontEnd en React con CDN, un Gateway de APIs para rate-limiting, microservicios en Go/Node.js y réplicas de lectura de base de datos en la nube, triplicando la capacidad transaccional.'
    },
    standards: ['W3C Standards', 'OpenAPI / Swagger', 'Cloud Native Computing Foundation'],
    tags: ['App Web', 'Frontend', 'Backend', 'API', 'Cloud Providers', 'Base de Datos'],
    level: 2
  },
  'tec-metafora-culinaria': {
    id: 'tec-metafora-culinaria',
    title: 'Metáfora Culinaria de la Web Moderna',
    subtitle: 'Backend (Cocina) · Frontend (Salón) · API (Mozo) · Fullstack (Food Truck)',
    branch: 'tecnicas',
    branchLabel: '2. Prácticas Técnicas y Despliegue',
    iconName: 'Activity',
    shortDesc: 'Analogía pedagógica presentada en la sesión 13 (diapositiva 13) para explicar de forma intuitiva los roles técnicos de un servicio web integral.',
    fullDesc: 'La metáfora culinaria compara un servicio digital con un restaurante de alta cocina: El Backend es la Cocina (donde los chefs preparan los ingredientes, procesan los pedidos y guardan las recetas con rigor técnico); el Frontend es el Salón del Restaurante (el espacio decorado, menú visible y mesas confortables que experimenta el cliente); la API es el Mozo/Robot camarero (que toma la orden del salón, la lleva a la cocina y regresa con el platillo servido); y el perfil Fullstack es el Food Truck de hamburguesas (un equipo compacto y autosuficiente que cocina, cobra y atiende directamente en un solo lugar).',
    bulletPoints: [
      'Backend = La Cocina: Lógica de negocio, reglas de validación, algoritmos y almacenamiento seguro de datos.',
      'Frontend = El Salón: Diseño de interfaz, experiencia de usuario (UI/UX) y presentación visual.',
      'API = El Mozo / Camarero: Contrato de comunicación que transporta solicitudes y respuestas estandarizadas.',
      'Fullstack = El Food Truck: Capacidad integral de extremo a extremo en soluciones ágiles y prototipos rápidos.'
    ],
    standards: ['Pedagogía UTP', 'ITIL 4 Service Orientation'],
    tags: ['Metáfora Culinaria', 'Backend', 'Frontend', 'API', 'Fullstack', 'Analogía TI'],
    level: 2
  },

  // ================= RAMA 3: ESQUEMA DE CERTIFICACIÓN ITIL & GOBERNANZA =================
  'branch-certificacion': {
    id: 'branch-certificacion',
    title: 'Esquema de Certificación ITIL & Gobernanza',
    subtitle: 'Estándar Internacional ITSM, Costos PeopleCert y Marcos Globales',
    branch: 'certificacion',
    branchLabel: '3. Certificación ITIL & Estándares',
    iconName: 'Award',
    shortDesc: 'Estructura oficial de certificación profesional en ITIL 4 administrada por PeopleCert, análisis de costos de mercado y sinergia con normas internacionales.',
    fullDesc: 'La certificación ITIL representa el estándar de credenciales más reconocido a nivel global en la gestión de servicios de TI (ITSM). Brinda un lenguaje común a los profesionales, valida competencias organizacionales y alinea la tecnología con las necesidades del negocio. Se complementa con marcos de gobierno como COBIT 2019 y normas certificables como ISO/IEC 20000, ISO/IEC 22237 e ISO 31000.',
    bulletPoints: [
      'Reconocimiento internacional de competencias en gestión y gobierno de servicios.',
      'Estructura de evaluación supervisada por PeopleCert como organismo acreditador oficial.',
      'Datos estadísticos reales de costos: autodidacta ($680 - $865) vs. curso ATO ($500 - $2,500).',
      'Articulación armónica con COBIT 2019 e ISO/IEC 20000 para compliance corporativo.'
    ],
    standards: ['PeopleCert Qualification Scheme', 'ITIL 4 Foundation to Master', 'AXELOS Global Best Practice'],
    tags: ['Certificación', 'PeopleCert', 'ITSM', 'Costos', 'Gobernanza', 'Acreditación'],
    level: 1
  },
  'cert-importancia-itil': {
    id: 'cert-importancia-itil',
    title: 'Importancia y Valor de la Certificación ITIL',
    subtitle: 'Alineación de tecnología con necesidades del negocio y calidad del servicio',
    branch: 'certificacion',
    branchLabel: '3. Certificación ITIL & Estándares',
    iconName: 'CheckCircle2',
    shortDesc: 'Por qué las empresas y profesionales invierten en la certificación: estándar de facto en ITSM para optimizar eficiencia y valor tangible.',
    fullDesc: 'Como se destaca en las diapositivas 4 y 5 del curso, la certificación ITIL es vital porque representa un estándar reconocido internacionalmente para la gestión de servicios de TI (IT Service Management, ITSM). Su objetivo primordial es ayudar a las organizaciones a alinear los servicios de tecnología con las necesidades reales del negocio, optimizando la calidad, eficiencia y valor que ofrecen los departamentos de TI mediante las 4 dimensiones y el ciclo de mejora continua.',
    bulletPoints: [
      'Estándar internacional reconocido en más de 180 países por corporaciones líderes.',
      'Lenguaje común y universal para desarrolladores, operaciones, soporte y directivos.',
      'Enfoque en co-creación de valor para el cliente final y rentabilidad para el negocio.',
      'Garantía de calidad demostrable ante clientes, licitaciones públicas y auditorías.'
    ],
    standards: ['ITIL 4 Foundation', 'AXELOS Best Management Practice'],
    tags: ['Importancia ITIL', 'ITSM', 'Valor de Negocio', 'Estándar Global', 'Alineación'],
    level: 2
  },
  'cert-costos-stats': {
    id: 'cert-costos-stats',
    title: 'Análisis Estadístico de Costos de Certificación',
    subtitle: 'Autodidacta ($680 - $865) vs. Curso Acreditado ATO ($500 - $2,500)',
    branch: 'certificacion',
    branchLabel: '3. Certificación ITIL & Estándares',
    iconName: 'Calculator',
    shortDesc: 'Datos estadísticos oficiales de inversión para obtener la certificación ITIL presentados en la diapositiva 9 de la sesión.',
    fullDesc: 'La diapositiva 9 expone la comparativa real de costos en el mercado global (Fuente: tutors.com/costs/itil-certification-cost): 1) Certificación ITIL autodidacta (Self-Study per exam) con costo promedio de $680 a $865 por examen, el cual incluye el examen supervisado en línea pagado directamente a PeopleCert; 2) Curso en Organización de Capacitación Acreditada (ATO Course per course) con rango de $500 a $2,500 por módulo, el cual incluye horas pedagógicas oficiales, simuladores y materiales.',
    bulletPoints: [
      'Modalidad Autodidacta: $680 - $865 por voucher de examen oficial con PeopleCert.',
      'Modalidad Curso ATO: $500 - $2,500 por módulo con instructores acreditados y simuladores.',
      'PeopleCert: Organismo global exclusivo responsable de la custodia y supervisión del examen.',
      'Retorno sobre la inversión: Los profesionales certificados perciben en promedio entre 25% y 40% mayores salarios en el mercado de TI.'
    ],
    metricsOrFormula: {
      label: 'Estructura de Inversión en Certificación ITIL',
      formula: 'Costo Total = Voucher Examen ($680 - $865) [+ Curso ATO ($500 - $2,500)]',
      details: [
        'Voucher PeopleCert: Obligatorio para rendir el examen oficial en línea con supervisión web.',
        'Curso ATO: Opcional pero recomendado para maximizar la tasa de aprobación en primer intento (>90%).',
        'Fuente oficial citada: https://tutors.com/costs/itil-certification-cost'
      ]
    },
    standards: ['PeopleCert Official Pricing Guidelines', 'ATO Accreditation Manual'],
    tags: ['Costos', 'PeopleCert', 'ATO', 'Estadísticas', 'Examen ITIL', 'Inversión'],
    level: 2
  },
  'cert-cuatro-dimensiones': {
    id: 'cert-cuatro-dimensiones',
    title: 'Las 4 Dimensiones de la Gestión del Servicio',
    subtitle: 'Organizaciones y personas, Información y tecnología, Socios y proveedores, Flujos de valor',
    branch: 'certificacion',
    branchLabel: '3. Certificación ITIL & Estándares',
    iconName: 'Compass',
    shortDesc: 'Los 4 pilares holísticos que sustentan el Sistema de Valor del Servicio de ITIL 4 mostrados en la diapositiva 5.',
    fullDesc: 'Para entregar valor de manera equilibrada y sostenible, ITIL 4 define que toda práctica y servicio debe gestionarse considerando cuatro dimensiones interconectadas: 1. Organizaciones y personas (cultura, roles, habilidades); 2. Información y tecnología (sistemas, bases de datos, redes); 3. Socios y proveedores (relaciones con terceros y contratos de nube); y 4. Flujos de valor y procesos (secuencias eficientes de actividades para entregar resultados).',
    bulletPoints: [
      'Organizaciones y personas: Estructura organizativa, habilidades, cultura y estilos de liderazgo.',
      'Información y tecnología: Datos, aplicaciones, infraestructura e información de soporte.',
      'Socios y proveedores: Contratos, acuerdos de soporte y relaciones con vendors externos.',
      'Flujos de valor y procesos: Secuencia ordenada de pasos y actividades que generan valor sin desperdicios.'
    ],
    standards: ['ITIL 4 Four Dimensions Model', 'Holistic Service Management'],
    tags: ['4 Dimensiones', 'Personas', 'Tecnología', 'Socios', 'Flujos de Valor'],
    level: 2
  },
  'cert-cobit-gobierno': {
    id: 'cert-cobit-gobierno',
    title: 'COBIT 2019: Gobierno Empresarial de TI',
    subtitle: 'Marco rector para gobernar y gestionar las decisiones tecnológicas empresariales',
    branch: 'certificacion',
    branchLabel: '3. Certificación ITIL & Estándares',
    iconName: 'Scale',
    shortDesc: 'Marco de referencia de ISACA presente en las diapositivas 10, 11 y 12 que complementa a ITIL conectando el gobierno de TI con la estrategia corporativa.',
    fullDesc: 'COBIT 2019 establece una clara distinción entre el Gobierno (que evalúa necesidades de las partes interesadas, establece dirección y supervisa el desempeño: Evaluate, Direct, Monitor - EDM) y la Gestión (que planifica, construye, ejecuta y monitorea actividades: PBRM). Mientras ITIL define "cómo" gestionar los servicios de TI en el día a día, COBIT define "qué" debe gobernar la alta dirección.',
    bulletPoints: [
      'Diferenciación estricta entre Gobierno corporativo de TI y Gestión operativa de TI.',
      '40 objetivos de gobierno y gestión agrupados en 5 dominios (EDM, APO, BAI, DSS, MEA).',
      'Factores de diseño para adaptar el sistema de gobierno a la medida de la organización.',
      'Sinergia perfecta con ITIL: COBIT gobierna la estrategia e ITIL ejecuta los servicios.'
    ],
    standards: ['COBIT 2019 Framework (ISACA)', 'ISO/IEC 38500 (Gobierno Corporativo de TI)'],
    tags: ['COBIT 2019', 'ISACA', 'Gobierno de TI', 'EDM', 'Cumplimiento'],
    level: 2
  },
  'cert-iso-20000': {
    id: 'cert-iso-20000',
    title: 'ISO/IEC 20000: Norma Internacional Certificable',
    subtitle: 'Estándar mundial para Sistemas de Gestión de Servicios de TI (SGSTI)',
    branch: 'certificacion',
    branchLabel: '3. Certificación ITIL & Estándares',
    iconName: 'Award',
    shortDesc: 'Norma formal internacional mostrada en la diapositiva 11 que permite certificar a una organización completa en gestión de servicios de TI.',
    fullDesc: 'A diferencia de ITIL (que certifica a personas individuales), la norma ISO/IEC 20000-1 certifica a las organizaciones. Establece los requisitos auditables para diseñar, transicionar, entregar y mejorar servicios de TI que cumplan con los requisitos del cliente y demuestren conformidad ante auditorías internacionales de calidad.',
    bulletPoints: [
      'Norma formal certificable a nivel empresarial emitida por ISO e IEC.',
      'Alineada con la Estructura de Alto Nivel (HLS) común a ISO 9001, ISO 27001 e ISO 22301.',
      'Exige la demostración de mejora continua y control estricto de SLAs y proveedores.',
      'Ventaja competitiva decisiva en licitaciones y contratos corporativos internacionales.'
    ],
    standards: ['ISO/IEC 20000-1:2018', 'ISO/IEC 20000-2 (Guía de aplicación)'],
    tags: ['ISO 20000', 'SGSTI', 'Norma Certificable', 'Auditoría', 'Calidad'],
    level: 2
  },
  'cert-iso-datacenter': {
    id: 'cert-iso-datacenter',
    title: 'ISO/IEC 22237 & ISO 31000',
    subtitle: 'Infraestructuras de Centros de Datos e Integración de Gestión de Riesgos',
    branch: 'certificacion',
    branchLabel: '3. Certificación ITIL & Estándares',
    iconName: 'Server',
    shortDesc: 'Normas internacionales destacadas en las diapositivas 11 y 12 para la confiabilidad física y el control de riesgos de los servicios de TI.',
    fullDesc: 'La norma ISO/IEC 22237 define los requisitos de disponibilidad, seguridad física y eficiencia energética para las instalaciones e infraestructuras de centros de datos (distribución de energía, climatización, cableado y seguridad). En paralelo, ISO 31000 proporciona las directrices universales para la identificación, evaluación y tratamiento de riesgos operacionales y tecnológicos.',
    bulletPoints: [
      'ISO/IEC 22237: Clasificación de clases de disponibilidad (1 a 4) para Data Centers.',
      'Asegura redundancia de energía, refrigeración y conectividad para prevenir paradas no programadas.',
      'ISO 31000: Enfoque integral de gobernanza del riesgo aplicable a proyectos y servicios de TI.',
      'Garantiza que la infraestructura física y lógica respalde los compromisos de disponibilidad pactados.'
    ],
    standards: ['ISO/IEC 22237-1 a 7', 'ISO 31000:2018', 'EN 50600 Data Centre Series'],
    tags: ['ISO 22237', 'Data Center', 'ISO 31000', 'Disponibilidad', 'Energía y Clima'],
    level: 2
  },
  'cert-video-intro': {
    id: 'cert-video-intro',
    title: 'Recurso Multimedia: Video Introductorio ITIL',
    subtitle: 'Análisis y reflexión del video formativo en YouTube Shorts',
    branch: 'certificacion',
    branchLabel: '3. Certificación ITIL & Estándares',
    iconName: 'Zap',
    shortDesc: 'Enlace formativo incluido en la diapositiva 6 (https://www.youtube.com/shorts/h5K4frTL8as) para dinamizar la comprensión de la certificación ITIL.',
    fullDesc: 'La sesión incluye una cápsula interactiva en formato YouTube Short orientada a generar debate en clase mediante las dinámicas "Levantar la mano y/o comentar por el chat". Sintetiza de manera ágil por qué la certificación ITIL se ha convertido en el lenguaje universal de la gestión de servicios y la puerta de entrada a roles de liderazgo tecnológico.',
    bulletPoints: [
      'Cápsula educativa audiovisual en YouTube Shorts: https://www.youtube.com/shorts/h5K4frTL8as.',
      'Dinámica participativa: Levantar la mano y debatir en el chat sobre la relevancia de certificarse.',
      'Foco pedagógico: Conectar la teoría de mejores prácticas con la demanda laboral real.',
      'Síntesis del impacto de ITIL en la eficiencia operativa diaria de un ingeniero de TI.'
    ],
    standards: ['Pedagogía Activa UTP', 'Microlearning'],
    tags: ['Video', 'YouTube Shorts', 'Dinámica', 'Participación', 'UTP S13'],
    level: 2
  },

  // ================= RAMA 4: PRÁCTICA Y CASOS DE APLICACIÓN UTP =================
  'branch-practica': {
    id: 'branch-practica',
    title: 'Práctica y Casos de Aplicación UTP',
    subtitle: 'Resolución de Casos de Sesión 13, PDCA y Avance de Proyecto',
    branch: 'practica',
    branchLabel: '4. Casos Prácticos UTP',
    iconName: 'Award',
    shortDesc: 'Actividades aplicadas de la Semana 13 (Casos 01, 02 y 03) para consolidar los fundamentos de gestión de servicios y el esquema de certificación.',
    fullDesc: 'En la sección ¡Hora de practicar! de la sesión (diapositivas 14 y 15), los estudiantes desarrollan tres actividades clave: 1. Elaborar un caso práctico aplicando una de las prácticas de gestión de servicios; 2. Elaborar un mapa conceptual o mental de la sesión; y 3. Presentar el Capítulo III del avance del proyecto de curso. Se complementa con la articulación Problem-Solution y el ciclo de mejora continua PDCA.',
    bulletPoints: [
      'Caso 01: Aplicación tangible de una práctica de gestión de servicios en un entorno real.',
      'Caso 02: Construcción de mapa conceptual estructurado de la sesión 13.',
      'Caso 03: Sustentación y entrega del Capítulo III del proyecto de curso.',
      'Integración del enfoque de resolución de problemas (Problem ➔ Solution ➔ Quality).'
    ],
    standards: ['Modelo Educativo UTP', 'Aprendizaje Basado en Proyectos (ABP)', 'Rúbrica de Evaluación GSTI'],
    tags: ['Casos Prácticos', 'Caso 01', 'Caso 02', 'Caso 03', 'Capítulo III', 'UTP'],
    level: 1
  },
  'prac-caso-01': {
    id: 'prac-caso-01',
    title: 'Caso 01: Caso Práctico de Gestión de Servicios',
    subtitle: 'Elaborar un caso práctico considerando una práctica de gestión de servicios',
    branch: 'practica',
    branchLabel: '4. Casos Prácticos UTP',
    iconName: 'FileCheck',
    shortDesc: 'Actividad obligatoria de la diapositiva 15 para diseñar una solución aplicada a partir de una de las prácticas de gestión revisadas.',
    fullDesc: 'El Caso 01 desafía a los estudiantes a seleccionar una de las prácticas de gestión de servicios (por ejemplo, Gestión de Despliegues, Gestión de la Seguridad de la Información, o Gestión de Riesgos) y aplicarla a una problemática concreta de una empresa, detallando el diagnóstico, los roles involucrados, los pasos de implementación y los indicadores de éxito.',
    bulletPoints: [
      'Selección de una práctica de gestión (General o Técnica).',
      'Diagnóstico situacional de una organización real o hipotética.',
      'Diseño del procedimiento estandarizado con roles y responsabilidades.',
      'Definición de métricas de éxito (SLAs, MTTR, frecuencia de despliegue).'
    ],
    practicalCase: {
      title: 'Ejemplo de Solución Caso 01: Práctica de Gestión de Despliegues',
      description: 'Una empresa de retail sufría caídas nocturnas constantes de su e-commerce durante las actualizaciones de precios y promociones.',
      solutionOrTakeaway: 'Se elaboró un caso práctico aplicando la Gestión de Despliegues mediante una estrategia de despliegue Canary y pipelines CI/CD automatizados. La solución redujo los incidentes de actualización a cero y permitió liberar parches a cualquier hora del día sin degradar la experiencia de compra.'
    },
    standards: ['Rúbrica Caso Práctico UTP', 'ITIL 4 Practice Guides'],
    tags: ['Caso 01', 'Práctica Aplicada', 'Despliegues', 'Diagnóstico', 'Solución'],
    level: 2
  },
  'prac-caso-02': {
    id: 'prac-caso-02',
    title: 'Caso 02: Mapa Conceptual o Mental de la Sesión',
    subtitle: 'Elaborar un mapa conceptual o mental integrador de la Semana 13 Sesión 2',
    branch: 'practica',
    branchLabel: '4. Casos Prácticos UTP',
    iconName: 'Workflow',
    shortDesc: 'Construcción y representación visual de las relaciones entre prácticas de gestión, esquemas de certificación, estándares y ciclo PDCA.',
    fullDesc: 'El Caso 02 requiere que los estudiantes elaboren un mapa conceptual o mental interactivo que sintetice todo el contenido de la sesión: 12 prácticas generales, 3 prácticas técnicas, estándares (COBIT 2019, ISO 20000, ISO 22237, ISO 31000), costos y modalidades de certificación PeopleCert y el ciclo Deming.',
    bulletPoints: [
      'Articulación jerárquica y conceptual de los temas de la sesión 13.',
      'Conexión visual de prácticas organizacionales con prácticas técnicas de despliegue.',
      'Inclusión del esquema de certificación PeopleCert y datos estadísticos de costos.',
      'Demostración de dominio cognitivo y capacidad de síntesis profesional.'
    ],
    standards: ['Mapeo Conceptual (Novak)', 'Taxonomía de Bloom'],
    tags: ['Caso 02', 'Mapa Conceptual', 'Mapa Mental', 'Síntesis', 'UTP S13'],
    level: 2
  },
  'prac-caso-03': {
    id: 'prac-caso-03',
    title: 'Caso 03: Presentar Capítulo III del Proyecto',
    subtitle: 'Sustentación del Capítulo III del avance del proyecto de curso de TI',
    branch: 'practica',
    branchLabel: '4. Casos Prácticos UTP',
    iconName: 'FileSpreadsheet',
    shortDesc: 'Entrega formal del tercer hito del proyecto integrador de Gestión de Servicios de TI en la UTP.',
    fullDesc: 'El Caso 03 representa la entrega formal del Capítulo III del proyecto de fin de curso. En este capítulo, los equipos deben presentar el diseño detallado del servicio de TI seleccionado, su arquitectura de infraestructura y plataforma, la especificación de acuerdos de servicio (SLAs / OLAs / UCs), el catálogo de servicios y la matriz de riesgos operacionales bajo ISO 31000.',
    bulletPoints: [
      'Entrega y sustentación del Capítulo III del proyecto de curso.',
      'Diseño y especificación técnica de la arquitectura de servicios de TI.',
      'Modelado de catálogo de servicios y Acuerdos de Nivel de Servicio (SLAs).',
      'Matriz de riesgos operacionales y plan de continuidad del servicio.'
    ],
    standards: ['Guía del Proyecto Integrador GSTI UTP', 'ISO/IEC 20000-1'],
    tags: ['Caso 03', 'Proyecto de Curso', 'Capítulo III', 'Avance', 'Sustentación'],
    level: 2
  },
  'prac-ciclo-pdca': {
    id: 'prac-ciclo-pdca',
    title: 'Ciclo de Deming / PDCA en la Práctica',
    subtitle: 'Planificar (Plan) · Hacer (Do) · Verificar (Check) · Actuar (Act)',
    branch: 'practica',
    branchLabel: '4. Casos Prácticos UTP',
    iconName: 'RotateCw',
    shortDesc: 'Marco operativo de mejora continua ilustrado en las diapositivas 5, 10, 11, 12 y 15 para gobernar las decisiones y calidad del servicio.',
    fullDesc: 'El ciclo Plan-Do-Check-Act (PDCA), también conocido como rueda o ciclo de Deming, se reitera a lo largo de toda la presentación como el motor metodológico de la sesión. Plantea cuatro preguntas cardinales: 1. Plan (Planificar: ¿Qué hacer y cómo hacerlo?); 2. Do (Hacer: Realizar lo planificado); 3. Check (Verificar: ¿Las cosas pasaron según se planificaron?); 4. Act (Actuar: ¿Cómo mejorar la próxima vez?).',
    bulletPoints: [
      'Plan (Planificar): Definir objetivos, procesos y recursos necesarios para alcanzar resultados alineados.',
      'Do (Hacer): Implementar y ejecutar el plan a escala controlada.',
      'Check (Verificar): Medir el desempeño respecto a las políticas y metas establecidas.',
      'Act (Actuar): Adoptar medidas correctivas y estandarizar las mejoras exitosas.'
    ],
    metricsOrFormula: {
      label: 'Las 4 Preguntas del Ciclo PDCA',
      formula: 'Plan (¿Qué y cómo?) ➔ Do (Ejecutar) ➔ Check (¿Ocurrió lo previsto?) ➔ Act (¿Cómo optimizar?)',
      details: [
        'Planificar: Identificar desviaciones operativas y proyectar soluciones.',
        'Hacer: Desplegar cambios en ventanas de mantenimiento autorizadas.',
        'Verificar: Analizar telemetría de monitoreo, SLAs y logs de incidentes.',
        'Actuar: Documentar lecciones aprendidas en la base de conocimiento (KEDB).'
      ]
    },
    standards: ['ISO 9001:2015', 'Ciclo de Shewhart/Deming', 'ITIL 4 Continual Improvement Model'],
    tags: ['PDCA', 'Deming', 'Plan Do Check Act', 'Mejora Continua', 'Calidad'],
    level: 2
  },
  'prac-problem-solution': {
    id: 'prac-problem-solution',
    title: 'Enfoque ITSM: Problem ➔ Solution ➔ Quality',
    subtitle: 'Transformación de incidentes y problemas en soluciones de alta calidad con DevOps e ITIL',
    branch: 'practica',
    branchLabel: '4. Casos Prácticos UTP',
    iconName: 'Target',
    shortDesc: 'Ilustración conceptual de la diapositiva 15 que conecta la gestión de problemas con soluciones duraderas, calidad de servicio e integración ITIL/DevOps.',
    fullDesc: 'La diapositiva 15 destaca visualmente el triángulo de excelencia en ITSM: Problem, Solution y Quality. Muestra cómo las organizaciones de TI maduras no se limitan a apagar incendios momentáneos, sino que investigan las causas raíz de los problemas recurrentes, diseñan soluciones definitivas con automatización DevOps y aseguran niveles insuperables de calidad y confiabilidad.',
    bulletPoints: [
      'Problem Management: Identificación de causas raíz de incidentes recurrentes.',
      'Solution Architecture: Implementación de soluciones definitivas y mitigaciones proactivas.',
      'Quality Assurance: Garantía de satisfacción de usuarios y estabilidad operacional.',
      'Sinergia ITIL + DevOps: Velocidad en los despliegues con estabilidad y control de servicio.'
    ],
    standards: ['ITIL 4 Problem Management', 'DevOps Foundation', 'ISO 9001 Quality'],
    tags: ['Problem', 'Solution', 'Quality', 'DevOps', 'ITSM', 'Causa Raíz'],
    level: 2
  }
};
