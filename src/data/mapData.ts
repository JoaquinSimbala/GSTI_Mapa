export interface NodeDetailData {
  id: string;
  title: string;
  subtitle?: string;
  branch: 'central' | 'fundamentos' | 'pdca' | 'servicedesk' | 'seguridad';
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
  'central-node': {
    id: 'central-node',
    title: 'Mejora Continua del Servicio de TI',
    subtitle: 'Núcleo Estratégico y Operativo de TI',
    branch: 'central',
    branchLabel: 'Visión General',
    iconName: 'Sparkles',
    shortDesc: 'Disciplina sistemática para mantener la competitividad tecnológica, satisfacer usuarios y optimizar recursos.',
    fullDesc: 'La Mejora Continua en Servicios de TI (ITSM) es la práctica organizacional orientada a evaluar, refinar y evolucionar permanentemente los servicios, procesos e infraestructura tecnológica. No es una actividad aislada, sino una cultura y metodología que busca la excelencia operativa y la alineación directa con los objetivos del negocio.',
    bulletPoints: [
      'Mantener la competitividad de la organización en mercados dinámicos.',
      'Adaptarse con agilidad a los cambios tecnológicos y demandas del usuario.',
      'Satisfacer con altos estándares las expectativas del cliente interno y externo.',
      'Reducir costos operativos innecesnaires y eliminar desperdicios (Lean IT).',
      'Impulsar la innovación continua y maximizar la productividad del equipo de soporte.'
    ],
    practicalCase: {
      title: 'Caso Universidad / Empresa Tecnológica',
      description: 'Tras reiteradas caídas en plataformas educativas y de soporte en horas pico, la mesa de ayuda implementa revisiones semanales de métricas y automatización de tickets.',
      solutionOrTakeaway: 'Reducción del 42% en tiempos de espera y 99.8% de disponibilidad en servicios críticos.'
    },
    standards: ['ISO 9001', 'ISO/IEC 20000-1', 'ITIL 4 Continual Improvement'],
    tags: ['Estrategia', 'Calidad', 'Lean IT', 'Productividad'],
    level: 0
  },

  // RAMA 1: FUNDAMENTOS
  'branch-fundamentos': {
    id: 'branch-fundamentos',
    title: 'Fundamentos y Rendimiento',
    subtitle: 'Pilares cuantitativos y estratégicos del servicio',
    branch: 'fundamentos',
    branchLabel: 'Fundamentos y Rendimiento',
    iconName: 'TrendingUp',
    shortDesc: 'La base conceptual que sustenta la mejora continua mediante métricas de rendimiento y visión estratégica.',
    fullDesc: 'Para mejorar un servicio primero se debe medir. Los fundamentos establecen cómo balancear el alcance de los objetivos del servicio con el consumo racional de recursos técnicos y financieros.',
    bulletPoints: [
      'Articulación de la Ecuación de Rendimiento Global (Eficacia + Eficiencia = Efectividad).',
      'Definición de metas cuantificables a corto, mediano y largo plazo.',
      'Eliminación sistemática de cuellos de botella y sobrecostos operativos.'
    ],
    level: 1,
    tags: ['Rendimiento', 'Métricas', 'Estrategia']
  },
  'fund-ecuacion': {
    id: 'fund-ecuacion',
    title: 'Ecuación de Rendimiento Global',
    subtitle: 'Eficacia + Eficiencia = Efectividad',
    branch: 'fundamentos',
    branchLabel: 'Fundamentos y Rendimiento',
    iconName: 'Calculator',
    shortDesc: 'Modelo matemático conceptual para evaluar la calidad integral del servicio de TI.',
    fullDesc: 'No basta con solucionar el problema (eficacia) si se consumen recursos desproporcionados (ineficiencia). La excelencia en TI requiere Efectividad integral: lograr el máximo impacto con el costo y tiempo óptimos.',
    metricsOrFormula: {
      label: 'Fórmula de Efectividad Integral',
      formula: 'Efectividad = f(Eficacia, Eficiencia) ≈ (Eficacia × Eficiencia) / 100%',
      details: [
        'Eficacia: % de cumplimiento de metas y resolución exitosa de incidentes.',
        'Eficiencia: Grado de optimización de horas-hombre, servidores y presupuesto invertido.',
        'Efectividad: Coeficiente de excelencia resultante cuando ambos factores son elevados.'
      ]
    },
    practicalCase: {
      title: 'Comparativa de Soporte Técnico',
      description: 'El Técnico A resuelve 20 tickets gastando 10 horas de horas extra sin documentación (Eficaz pero ineficiente). El Técnico B resuelve 18 tickets en 6 horas usando scripts estandarizados y documentando la base de conocimiento.',
      solutionOrTakeaway: 'El Técnico B genera mayor Efectividad y sostenibilidad a la organización.'
    },
    tags: ['Eficacia', 'Eficiencia', 'Efectividad', 'KPIs'],
    level: 2
  },
  'fund-eficacia': {
    id: 'fund-eficacia',
    title: 'Eficacia (Logro de Metas)',
    subtitle: '¿Se cumplió el objetivo establecido?',
    branch: 'fundamentos',
    branchLabel: 'Fundamentos y Rendimiento',
    iconName: 'Target',
    shortDesc: 'Capacidad de alcanzar el resultado deseado o el SLA comprometido con el usuario.',
    fullDesc: 'La eficacia mide exclusivamente si la meta fue alcanzada, sin ponderar en primera instancia los recursos gastados. En Service Desk se traduce en resolver el ticket, mantener el uptime y satisfacer al usuario.',
    bulletPoints: [
      'Cumplimiento del SLA pactado (ej. tiempo de resolución < 2 horas).',
      'Tasa de resolución en primer contacto (First Contact Resolution - FCR).',
      'Satisfacción final del usuario (CSAT >= 90%).'
    ],
    level: 3,
    tags: ['Metas', 'SLA', 'Resultados']
  },
  'fund-eficiencia': {
    id: 'fund-eficiencia',
    title: 'Eficiencia (Optimización de Recursos)',
    subtitle: '¿Cuánto costó lograr el objetivo?',
    branch: 'fundamentos',
    branchLabel: 'Fundamentos y Rendimiento',
    iconName: 'Cpu',
    shortDesc: 'Relación entre los recursos consumidos (tiempo, dinero, servidores, personal) y los resultados obtenidos.',
    fullDesc: 'Un servicio eficiente evita el desperdicio, utiliza automatizaciones, plantillas de autoservicio y gestión inteligente de colas para atender más usuarios con un costo operativo controlado.',
    bulletPoints: [
      'Costo medio por ticket resuelto.',
      'Aprovechamiento de la capacidad de cómputo y licencias de software.',
      'Minimización del tiempo ocioso y de tareas manuales repetitivas.'
    ],
    level: 3,
    tags: ['Costos', 'Recursos', 'Optimización']
  },
  'fund-efectividad': {
    id: 'fund-efectividad',
    title: 'Efectividad (Impacto Integral)',
    subtitle: 'Resultado sinérgico: Eficacia + Eficiencia',
    branch: 'fundamentos',
    branchLabel: 'Fundamentos y Rendimiento',
    iconName: 'CheckCircle2',
    shortDesc: 'Síntesis virtuosa donde las metas se cumplen con la mayor economía y calidad posible.',
    fullDesc: 'La efectividad es el indicador definitivo de madurez de la gestión del servicio. Asegura que el área de TI no sea percibida como un centro de costos costoso o ineficaz, sino como un motor de valor estratégico para la empresa.',
    level: 3,
    tags: ['Sinergia', 'Valor TI', 'Excelencia']
  },
  'fund-objetivos': {
    id: 'fund-objetivos',
    title: 'Objetivos Estratégicos',
    subtitle: 'Dirección a largo plazo para TI',
    branch: 'fundamentos',
    branchLabel: 'Fundamentos y Rendimiento',
    iconName: 'Compass',
    shortDesc: 'Horizontes organizacionales que orientan cada iteración de mejora en los servicios.',
    fullDesc: 'Establecen hacia dónde debe avanzar el departamento de TI en consonancia con la visión general de la institución.',
    bulletPoints: [
      'Adaptación continua frente a cambios tecnológicos y fluctuaciones del mercado.',
      'Reducción de costos operativos innecesarios y eliminación de desperdicios (Lean).',
      'Creación y consolidación de una cultura de calidad sostenible en todo el personal.'
    ],
    level: 2,
    tags: ['Estrategia', 'Cultura', 'Calidad']
  },

  // RAMA 2: METODOLOGÍA CÍCLICA (PDCA)
  'branch-pdca': {
    id: 'branch-pdca',
    title: 'Metodología Cíclica (Ciclo PDCA)',
    subtitle: 'Círculo de Deming: Planificar, Hacer, Verificar y Actuar',
    branch: 'pdca',
    branchLabel: 'Metodología Cíclica (PDCA)',
    iconName: 'RotateCw',
    shortDesc: 'Motor iterativo estandarizado para la resolución sistemática de problemas y mejora continua.',
    fullDesc: 'El Ciclo PDCA (Plan-Do-Check-Act), atribuido a Walter Shewhart y popularizado por Edwards Deming, es la base operativa de ISO 9001 e ISO 20000 para transformar procesos de TI a través de ciclos evolutivos constantes.',
    bulletPoints: [
      'Enfoque iterativo en 4 fases sucesivas.',
      'Basado en evidencia empírica, datos y pruebas controladas.',
      'Al completarse, se reinicia con nuevos estándares superiores (espiral de mejora).'
    ],
    standards: ['ISO 9001:2015', 'Ciclo Deming', 'Six Sigma'],
    level: 1,
    tags: ['Deming', 'PDCA', 'Metodología', 'Calidad']
  },
  'pdca-plan': {
    id: 'pdca-plan',
    title: '1. Planificar (Plan)',
    subtitle: 'Diagnóstico, priorización y diseño de metas',
    branch: 'pdca',
    branchLabel: 'Metodología Cíclica (PDCA)',
    iconName: 'FileSpreadsheet',
    shortDesc: 'Identificar áreas críticas de mejora, recolectar datos y definir metas con claridad.',
    fullDesc: 'En la etapa de Planificación se evalúa la situación actual del servicio mediante auditorías, encuestas de satisfacción de usuarios y métricas previas. Se establecen hipótesis de mejora y planes detallados de acción.',
    bulletPoints: [
      'Identificar áreas de dolor o lentitud en los servicios de TI.',
      'Análisis profundo de procesos vigentes y cuellos de botella.',
      'Recolección de encuestas de satisfacción de usuarios finales (CSAT/NPS).',
      'Definición de objetivos SMART (Específicos, Medibles, Alcanzables, Relevantes y Temporales).'
    ],
    level: 2,
    tags: ['Diagnóstico', 'Metas', 'Análisis']
  },
  'pdca-do': {
    id: 'pdca-do',
    title: '2. Hacer (Do)',
    subtitle: 'Implementación controlada y pruebas piloto',
    branch: 'pdca',
    branchLabel: 'Metodología Cíclica (PDCA)',
    iconName: 'Wrench',
    shortDesc: 'Ejecutar las soluciones planificadas en entornos de prueba o pilotos acotados.',
    fullDesc: 'Consiste en poner en práctica los cambios diseñados. Para minimizar riesgos en producción, se recomienda realizar pruebas piloto, capacitar exhaustivamente al personal técnico y desplegar ajustes tecnológicos graduales.',
    bulletPoints: [
      'Implementar los cambios y mejoras planificadas.',
      'Ejecución de pruebas piloto en grupos controlados de usuarios.',
      'Capacitación y sensibilización del personal del Service Desk.',
      'Aplicación de ajustes tecnológicos y parametrización de herramientas ITSM.'
    ],
    level: 2,
    tags: ['Piloto', 'Capacitación', 'Ejecución']
  },
  'pdca-check': {
    id: 'pdca-check',
    title: '3. Verificar (Check)',
    subtitle: 'Evaluación de resultados frente a metas y KPIs',
    branch: 'pdca',
    branchLabel: 'Metodología Cíclica (PDCA)',
    iconName: 'BarChart3',
    shortDesc: 'Medir el impacto de los cambios ejecutados y contrastarlos con las metas iniciales.',
    fullDesc: 'Fase de análisis riguroso de resultados. Se revisan los datos recolectados durante la fase Do para comprobar si se lograron los objetivos previstos o si surgieron efectos secundarios indeseados.',
    bulletPoints: [
      'Evaluar resultados obtenidos contra las metas formuladas en el Plan.',
      'Medición periódica de indicadores clave (KPIs de tickets, SLAs, tiempos de caída).',
      'Retroalimentación directa de usuarios y clientes.',
      'Auditorías internas para verificar la adherencia a buenas prácticas.'
    ],
    level: 2,
    tags: ['KPIs', 'Auditoría', 'Feedback']
  },
  'pdca-act': {
    id: 'pdca-act',
    title: '4. Actuar (Act)',
    subtitle: 'Estandarización, documentación y reinicio del ciclo',
    branch: 'pdca',
    branchLabel: 'Metodología Cíclica (PDCA)',
    iconName: 'Award',
    shortDesc: 'Consolidar y estandarizar las mejoras exitosas, documentando para no retroceder.',
    fullDesc: 'Si los resultados fueron positivos, se institucionalizan mediante nuevas políticas, actualización de manuales de procedimientos y base de conocimiento. Luego el ciclo se reinicia para seguir mejorando.',
    bulletPoints: [
      'Estandarizar y consolidar las soluciones exitosas en toda la organización.',
      'Actualización formal de manuales de procedimientos y bases de conocimiento ITSM.',
      'Comunicación transparente de resultados al equipo y directivos.',
      'Reinicio del ciclo con nuevos objetivos y desafíos de mayor madurez.'
    ],
    level: 2,
    tags: ['Estandarización', 'Manuales', 'Reinicio']
  },

  // RAMA 3: SERVICE DESK Y GESTIÓN DE CAMBIOS
  'branch-servicedesk': {
    id: 'branch-servicedesk',
    title: 'Service Desk y Gestión de Cambios',
    subtitle: 'Punto único de contacto y control operativo seguro',
    branch: 'servicedesk',
    branchLabel: 'Service Desk y Gestión de Cambios',
    iconName: 'Headset',
    shortDesc: 'La interfaz operativa primaria entre los usuarios y el área de TI, respaldada por controles de cambio estrictos.',
    fullDesc: 'El Service Desk actúa como el SPOC (Single Point of Contact). No solo atiende incidencias y requerimientos, sino que coordina y ejecuta la gestión de cambios para asegurar que ninguna modificación comprometa la continuidad operativa.',
    bulletPoints: [
      'Estructuras adaptadas a la dispersión geográfica y criticidad del negocio.',
      'Ciclo completo de incidentes: registro, diagnóstico, escalado y cierre.',
      'Gestión de Cambios formal para salvaguardar la estabilidad de los sistemas de producción.'
    ],
    level: 1,
    tags: ['ServiceDesk', 'ITIL', 'ITSM', 'Cambios']
  },
  'sd-modelos': {
    id: 'sd-modelos',
    title: 'Estructura y Ubicación del Service Desk',
    subtitle: 'Modelos arquitectónicos de atención',
    branch: 'servicedesk',
    branchLabel: 'Service Desk y Gestión de Cambios',
    iconName: 'Network',
    shortDesc: 'Diversas modalidades organizacionales según geografía, costos y necesidades de soporte.',
    fullDesc: 'Dependiendo del tamaño de la empresa, su presupuesto y el grado de especialización requerido, el Service Desk adopta uno o varios modelos combinados.',
    bulletPoints: [
      'Centralizado: Un solo equipo concentra todas las solicitudes. Mejor control y procesos uniformes, pero riesgo de saturación.',
      'Descentralizado: Equipos dedicados en cada sede o área. Respuesta rápida y cercana, pero costos mayores.',
      'Virtual: Soporte distribuido mediante tecnologías en la nube e Internet. Flexibilidad global.',
      'Jerárquico / Escalonado: Niveles N1 (contacto/básico), N2 (técnico especializado), N3 (expertos/proveedor).',
      'Local / In-situ: Técnicos físicamente en las oficinas para soporte presencial directo.',
      'Remoto: Atención mediante herramientas de acceso a distancia y telefonía IP.',
      'Follow-the-Sun: Centros en diferentes husos horarios para soporte ininterrumpido 24/7 sin turnos nocturnos.',
      'Offshore / Nearshore: Subcontratación de soporte en otros países para optimización de costos.'
    ],
    level: 2,
    tags: ['Topología', 'Centralizado', 'Virtual', 'Follow-the-sun']
  },
  'sd-responsabilidades': {
    id: 'sd-responsabilidades',
    title: 'Responsabilidades Operativas',
    subtitle: 'El flujo continuo del ticket en ITSM',
    branch: 'servicedesk',
    branchLabel: 'Service Desk y Gestión de Cambios',
    iconName: 'ListChecks',
    shortDesc: 'Funciones esenciales del personal de soporte para garantizar la continuidad y satisfacción.',
    fullDesc: 'El Service Desk gestiona el ciclo de vida del incidente desde la llamada o portal web hasta la confirmación de conformidad del usuario.',
    bulletPoints: [
      'Registro y diagnóstico inicial de incidencias y solicitudes.',
      'Restauración inicial del servicio (quick fixes, reinicio de credenciales, guías).',
      'Escalado técnico eficiente a soporte de segundo y tercer nivel.',
      'Monitoreo continuo de SLAs (tiempos de primera respuesta y resolución).',
      'Comunicación empática y transparente con los usuarios.',
      'Herramientas ITSM líderes: ServiceNow, Zendesk, Jira Service Management.'
    ],
    practicalCase: {
      title: 'Caso Slide 15: Error en Zoom y Bloqueo de Cuenta UTP',
      description: 'Durante una clase virtual, la aplicación Zoom deja de responder y el profesor queda bloqueado por error de dominio en Lenovo.',
      solutionOrTakeaway: 'El operador N1 diagnostica vía Service Desk, genera ticket de emergencia, aplica solución rápida y escala a infraestructura para parche masivo.'
    },
    level: 2,
    tags: ['Incidentes', 'SLA', 'ServiceNow', 'Zendesk']
  },
  'sd-cambios': {
    id: 'sd-cambios',
    title: 'Controles de Gestión de Cambios',
    subtitle: '4 Fases para salvaguardar la estabilidad de TI',
    branch: 'servicedesk',
    branchLabel: 'Service Desk y Gestión de Cambios',
    iconName: 'SlidersHorizontal',
    shortDesc: 'Marco de control obligatorio para autorizar, evaluar, probar y auditar cualquier cambio en producción.',
    fullDesc: 'La mayoría de incidentes graves de TI son provocados por cambios no controlados. Este proceso de 4 pasos garantiza que toda modificación añada valor sin generar caídas catastróficas.',
    bulletPoints: [
      'Paso 1: Solicitud de Cambio (RFC formal): Solicitar autorización previa y justificación técnica antes de intervenir sistemas.',
      'Paso 2: Evaluación de Impacto y Riesgos: Analizar sistemas dependientes, tiempos de indisponibilidad y planes de marcha atrás (Rollback).',
      'Paso 3: Implementación Controlada: Ejecutar los cambios en ventanas de mantenimiento y ambientes de testing controlados.',
      'Paso 4: Monitoreo y Evaluación Post-Implementación: Supervisar el comportamiento de los sistemas durante las primeras 48h y verificar satisfacción.'
    ],
    standards: ['ISO 20000', 'ITIL 4 Change Enablement'],
    level: 2,
    tags: ['RFC', 'Rollback', 'Control', 'Riesgos']
  },

  // RAMA 4: MARCOS NORMATIVOS Y GESTIÓN DE SEGURIDAD
  'branch-seguridad': {
    id: 'branch-seguridad',
    title: 'Marcos Normativos y Gestión de Seguridad',
    subtitle: 'Gobernanza, cumplimiento ISO y defensa en profundidad',
    branch: 'seguridad',
    branchLabel: 'Marcos Normativos y Seguridad',
    iconName: 'ShieldAlert',
    shortDesc: 'Regulación formal y protocolos de ciberdefensa que aseguran la confidencialidad, integridad y continuidad del negocio.',
    fullDesc: 'La mejora continua debe estar anclada a estándares internacionales reconocidos y a una postura proactiva de seguridad de la información ante la creciente sofisticación de ciberamenazas.',
    bulletPoints: [
      'Ecosistema integrado de normas ISO aplicables a tecnología.',
      'Protocolo metódico de respuesta ante ciberincidentes en 6 pasos.',
      'Estrategia de Ciberseguridad en 7 Capas de Defensa en Profundidad.'
    ],
    level: 1,
    tags: ['ISO', 'SGSI', 'Ciberseguridad', 'Incidentes']
  },
  'iso-ecosistema': {
    id: 'iso-ecosistema',
    title: 'Ecosistema de Normas ISO',
    subtitle: 'Estándares internacionales de calidad y gobernanza',
    branch: 'seguridad',
    branchLabel: 'Marcos Normativos y Seguridad',
    iconName: 'FileCheck',
    shortDesc: 'Conjunto de normas técnicas que guían la gestión, calidad, riesgo y gobierno de las TI.',
    fullDesc: 'Las normas ISO proporcionan el marco de referencia formal para que las auditorías y procesos de mejora tengan validez y consistencia internacional.',
    bulletPoints: [
      'ISO 9001 / ISO 25000: Gestión de la calidad de procesos y evaluación de la calidad de productos de software (SQuaRE).',
      'ISO 38500: Gobernanza corporativa de las tecnologías de la información (evaluar, dirigir y monitorizar).',
      'ISO 31000 / ISO 27005: Gestión integral y evaluación metodológica de riesgos tecnológicos y empresariales.',
      'ISO 27001 / ISO 27032: Sistemas de Gestión de Seguridad de la Información (SGSI) y directrices de ciberseguridad.',
      'ISO 27031: Preparación y continuidad de las TIC ante incidentes disruptivos y desastres.'
    ],
    level: 2,
    tags: ['ISO9001', 'ISO27001', 'ISO38500', 'ISO31000']
  },
  'seg-protocolo': {
    id: 'seg-protocolo',
    title: 'Protocolo ante Ciberincidentes',
    subtitle: '6 Pasos críticos de respuesta y mitigación',
    branch: 'seguridad',
    branchLabel: 'Marcos Normativos y Seguridad',
    iconName: 'AlertTriangle',
    shortDesc: 'Guía secuencial estandarizada para reaccionar ante una brecha de seguridad o malware.',
    fullDesc: 'Cuando ocurre un incidente de ciberseguridad, actuar con método evita la propagación del daño y preserva la evidencia legal necesaria.',
    bulletPoints: [
      'Paso 1: Identificación y Primeras Acciones: Mantener la calma, detectar anomalías y aislar de inmediato los equipos afectados de la red.',
      'Paso 2: Contención: Reforzar la seguridad perimetral, revocar tokens y forzar cambio de credenciales de accesos privilegiados.',
      'Paso 3: Investigación y Análisis Forense: Determinar el vector de ataque, evaluar la amenaza y preservar cadenas de custodia.',
      'Paso 4: Informar a la Dirección: Reportar claramente el impacto financiero y operativo, presentando una estrategia de mitigación ejecutiva.',
      'Paso 5: Acciones Legales y Notificación: Notificar a las autoridades competentes y preparar evidencias para acciones judiciales correspondientes.',
      'Paso 6: Lecciones Aprendidas y Simulacros: Reunir a los equipos, actualizar políticas de defensa y realizar simulacros de crisis.'
    ],
    level: 2,
    tags: ['CSIRT', 'Forense', 'Contención', 'Respuesta']
  },
  'seg-capas': {
    id: 'seg-capas',
    title: 'Capas de Ciberseguridad',
    subtitle: 'Defensa en Profundidad (7 Capas)',
    branch: 'seguridad',
    branchLabel: 'Marcos Normativos y Seguridad',
    iconName: 'Layers',
    shortDesc: 'Estrategia de múltiples barreras defensivas para que la falla de una no comprometa todo el ecosistema.',
    fullDesc: 'La seguridad no es un único producto, sino una cadena de capas interconectadas desde la infraestructura física hasta la conciencia del personal.',
    bulletPoints: [
      '01 Capa Física: Protege el acceso físico a servidores, cuartos técnicos y racks (cerraduras electrónicas, cámaras CCTV, biometría).',
      '02 Capa de Red: Controla y protege el tráfico entre dispositivos (firewalls internos, segmentación VLAN, mitigación anti-DDoS).',
      '03 Capa de Perímetro: Primera línea frente a Internet (gateways seguros, WAF de borde, proxies de filtrado web).',
      '04 Capa de Aplicación: Asegura que el software esté libre de vulnerabilidades (SAST/DAST, parches al día, autenticación multifactor).',
      '05 Capa de Dispositivo: Protege los endpoints (antivirus EDR, cifrado BitLocker, gestión de dispositivos móviles MDM).',
      '06 Capa de Datos: Protege la confidencialidad e integridad de la información (cifrado en reposo y tránsito, backups inmutables, DLP).',
      '07 Capa Humana: El usuario es la última y crucial línea de defensa (capacitación continua, concientización contra phishing e ingeniería social).'
    ],
    level: 2,
    tags: ['DefensaEnProfundidad', '7Capas', 'SeguridadTI']
  }
};
