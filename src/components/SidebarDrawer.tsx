import React, { useState } from 'react';
import { NodeDetailData } from '../data/mapData';
import { IconRenderer } from './IconHelper';
import {
  X,
  BookOpen,
  Sliders,
  CheckCircle,
  AlertTriangle,
  Target,
  Database,
  Layers,
  Sparkles,
  Compass,
  FileSpreadsheet,
  Globe,
  Zap,
  CheckCircle2,
  Workflow,
  Shield,
  RotateCw,
  Cpu,
  Calculator,
  Server
} from 'lucide-react';

interface SidebarDrawerProps {
  selectedDetail: NodeDetailData | null;
  onClose: () => void;
  onNavigateToNode?: (nodeId: string) => void;
}

export const SidebarDrawer: React.FC<SidebarDrawerProps> = ({ selectedDetail, onClose }) => {
  const [activeTab, setActiveTab] = useState<'teoria' | 'interactivo'>('teoria');

  // Interactive Certification Calculator States
  const [certMode, setCertMode] = useState<'self' | 'ato'>('self');
  const [participantsCount, setParticipantsCount] = useState<number>(3);
  const [includeRetake, setIncludeRetake] = useState<boolean>(false);

  // Interactive Risk Matrix 5x5 States
  const [probScore, setProbScore] = useState<number>(3); // 1 to 5
  const [impactScore, setImpactScore] = useState<number>(4); // 1 to 5

  // Interactive PDCA Tab
  const [activePdcaStep, setActivePdcaStep] = useState<number>(0);

  // Interactive Web Architecture Layer
  const [selectedWebLayer, setSelectedWebLayer] = useState<number>(0);

  if (!selectedDetail) return null;

  const getBranchColor = (branch: string) => {
    switch (branch) {
      case 'generales':
        return '#059669';
      case 'tecnicas':
        return '#2563eb';
      case 'certificacion':
        return '#d97706';
      case 'practica':
        return '#7c3aed';
      default:
        return '#4f46e5';
    }
  };

  const branchColor = getBranchColor(selectedDetail.branch);

  // Certification Cost calculation
  const baseCostPerPerson = certMode === 'self' ? 772.5 : 1500; // averages based on PDF $680-$865 and $500-$2500
  const retakeCost = includeRetake ? 250 : 0;
  const totalCost = (baseCostPerPerson + retakeCost) * participantsCount;

  // Risk Score calculation (1 to 25)
  const riskSeverity = probScore * impactScore;
  const getRiskCategory = (score: number) => {
    if (score <= 4) return { label: 'Bajo (Low)', color: '#16a34a', bg: '#dcfce7', action: 'Monitoreo rutinario y controles operativos estándar.' };
    if (score <= 9) return { label: 'Moderado (Moderate)', color: '#ca8a04', bg: '#fef9c3', action: 'Procedimientos de gestión y revisiones programadas periódicas.' };
    if (score <= 16) return { label: 'Alto (High)', color: '#ea580c', bg: '#ffedd5', action: 'Plan de mitigación prioritario, asignación de responsable y reporte a jefatura.' };
    return { label: 'Extremo (Extreme)', color: '#dc2626', bg: '#fee2e2', action: 'Acción contingente inmediata, escalamiento a alta dirección y parada de actividad si aplica.' };
  };
  const riskCat = getRiskCategory(riskSeverity);

  // PDCA Steps Data
  const pdcaSteps = [
    {
      code: 'PLAN',
      title: 'Planificar (Plan)',
      question: '¿Qué hacer y cómo hacerlo?',
      desc: 'Definir objetivos de servicio, requerimientos del negocio, identificar brechas y diseñar la estrategia de solución.',
      activities: ['Análisis de causa raíz en problemas recurrentes', 'Diseño de arquitectura de servicios y SLAs', 'Plan de gestión de riesgos según ISO 31000'],
      outputs: 'Plan de Servicio, Matriz de Riesgos y Cronograma'
    },
    {
      code: 'DO',
      title: 'Hacer (Do)',
      question: 'Hacer lo planificado',
      desc: 'Ejecutar las iniciativas y cambios en entornos de prueba o pilotos controlados para verificar su viabilidad técnica.',
      activities: ['Automatización del pipeline CI/CD', 'Despliegues en entornos Staging con Blue-Green', 'Capacitación al personal en buenas prácticas ITIL'],
      outputs: 'Servicio desplegado en piloto y métricas preliminares'
    },
    {
      code: 'CHECK',
      title: 'Verificar (Check)',
      question: '¿Las cosas pasaron según se planificaron?',
      desc: 'Evaluar y medir los resultados frente a los objetivos iniciales, SLAs pactados y satisfacción del usuario final.',
      activities: ['Monitoreo continuo de disponibilidad y latencia', 'Auditoría de cumplimiento de SLAs', 'Encuestas de satisfacción CSAT a clientes'],
      outputs: 'Tableros de Telemetría e Informes de Rendimiento'
    },
    {
      code: 'ACT',
      title: 'Actuar (Act)',
      question: '¿Cómo mejorar la próxima vez?',
      desc: 'Estandarizar las soluciones exitosas, registrar lecciones aprendidas y reiniciar el ciclo para la mejora continua.',
      activities: ['Registro en la Base de Conocimiento (KEDB)', 'Actualización de políticas en el catálogo de servicios', 'Apertura de nuevos ciclos de optimización'],
      outputs: 'Estándar Oficial Actualizado y CIR (Continual Improvement Register)'
    }
  ];

  // Web Architecture & Culinary Metaphor Layers
  const webLayers = [
    {
      name: 'BackEnd (La Cocina)',
      role: 'La Lógica del Negocio',
      culinary: 'La cocina del restaurante: los chefs procesan los pedidos, preparan los platillos siguiendo recetas estrictas y garantizan la frescura.',
      techStack: 'Node.js, Python (FastAPI/Django), Java, Go, .NET Core, Fiber.',
      itilFit: 'Garantía de servicio: reglas de negocio seguras, validaciones y procesamiento de transacciones.'
    },
    {
      name: 'FrontEnd (El Salón)',
      role: 'Lo Que Ve el Usuario',
      culinary: 'El salón decorado: mesas acogedoras, carta visible y ambiente cuidado donde el comensal disfruta la experiencia de usuario.',
      techStack: 'HTML5, CSS3, JavaScript, React, Angular, Vue.',
      itilFit: 'Utilidad y experiencia: interfaces intuitivas, accesibles y responsivas para co-crear valor.'
    },
    {
      name: 'API (El Mozo / Robot)',
      role: 'El Puente de Comunicación',
      culinary: 'El camarero o robot mozo: lleva la orden de la mesa a la cocina y regresa con el plato servido de forma ágil y exacta.',
      techStack: 'REST APIs, GraphQL, OpenAPI / Swagger, JSON Web Tokens (JWT).',
      itilFit: 'Interoperabilidad y desacoplamiento de capas para alta resiliencia.'
    },
    {
      name: 'Base de Datos (La Despensa)',
      role: 'La Memoria Transaccional',
      culinary: 'La despensa y refrigerador: almacena de forma ordenada y segura los ingredientes vitales para cuando la cocina los requiera.',
      techStack: 'SQL (Oracle Database, MySQL, PostgreSQL) y NoSQL (MongoDB, Redis).',
      itilFit: 'Integridad, confidencialidad y disponibilidad de la información (Tríada CIA).'
    },
    {
      name: 'Fullstack (El Food Truck)',
      role: 'La Solución Integral',
      culinary: 'El Food Truck de hamburguesas: un equipo compacto y autónomo que cocina, cobra y sirve directamente en el mismo punto.',
      techStack: 'Stack completo JavaScript/TypeScript (MERN/PERN, Next.js).',
      itilFit: 'Desarrollo ágil de MVPs y prototipado rápido con ciclo continuo de feedback.'
    },
    {
      name: 'CI/CD & Cloud (La Cadena de Suministro)',
      role: 'La Automatización y Alojamiento',
      culinary: 'La logística de abastecimiento automatizada que asegura insumos constantes y estándares de cocina idénticos.',
      techStack: 'Commit ➔ Build ➔ Test ➔ Artifact ➔ Deploy ➔ Monitoring (Docker, Jenkins, ArgoCD, AWS, Oracle Cloud).',
      itilFit: 'Gestión de Despliegues e Infraestructura conforme a ISO/IEC 22237.'
    }
  ];

  return (
    <div
      className="sidebar-drawer-overlay"
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: '460px',
        maxWidth: '100vw',
        background: '#ffffff',
        borderLeft: `2px solid ${branchColor}`,
        boxShadow: '-10px 0 40px rgba(15, 23, 42, 0.15)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        color: '#0f172a',
        animation: 'slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '20px 22px 16px 22px',
          borderBottom: '1px solid #e2e8f0',
          background: '#f8fafc',
          position: 'relative'
        }}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar panel"
          style={{
            position: 'absolute',
            top: 18,
            right: 18,
            background: '#e2e8f0',
            border: 'none',
            color: '#475569',
            width: 32,
            height: 32,
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s'
          }}
          className="hover-bright"
        >
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: '10px',
              background: `${branchColor}15`,
              border: `1.5px solid ${branchColor}40`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: branchColor
            }}
          >
            <IconRenderer name={selectedDetail.iconName} size={22} />
          </div>
          <div>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: branchColor,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              {selectedDetail.branchLabel}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span
                style={{
                  fontSize: '10px',
                  background: '#e2e8f0',
                  color: '#475569',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  fontWeight: 600
                }}
              >
                Nivel {selectedDetail.level}
              </span>
              <span
                style={{
                  fontSize: '10px',
                  background: '#eff6ff',
                  color: '#2563eb',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  fontWeight: 600
                }}
              >
                UTP S13 Sesión 2
              </span>
            </div>
          </div>
        </div>

        <h2
          style={{
            fontSize: '18px',
            fontWeight: 800,
            color: '#0f172a',
            margin: '0 0 4px 0',
            lineHeight: 1.3
          }}
        >
          {selectedDetail.title}
        </h2>
        {selectedDetail.subtitle && (
          <p style={{ fontSize: '12px', color: '#64748b', margin: 0, fontWeight: 500 }}>
            {selectedDetail.subtitle}
          </p>
        )}
      </div>

      {/* Navigation Tabs */}
      <div
        style={{
          display: 'flex',
          borderBottom: '1px solid #e2e8f0',
          background: '#ffffff'
        }}
      >
        <button
          onClick={() => setActiveTab('teoria')}
          style={{
            flex: 1,
            padding: '12px 14px',
            background: 'none',
            border: 'none',
            borderBottom: activeTab === 'teoria' ? `2.5px solid ${branchColor}` : '2.5px solid transparent',
            color: activeTab === 'teoria' ? branchColor : '#64748b',
            fontWeight: activeTab === 'teoria' ? 700 : 500,
            fontSize: '13px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6
          }}
        >
          <BookOpen size={15} />
          <span>Teoría & Fundamentos</span>
        </button>

        <button
          onClick={() => setActiveTab('interactivo')}
          style={{
            flex: 1,
            padding: '12px 14px',
            background: 'none',
            border: 'none',
            borderBottom: activeTab === 'interactivo' ? `2.5px solid ${branchColor}` : '2.5px solid transparent',
            color: activeTab === 'interactivo' ? branchColor : '#64748b',
            fontWeight: activeTab === 'interactivo' ? 700 : 500,
            fontSize: '13px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6
          }}
        >
          <Sliders size={15} />
          <span>Simulador & Práctica</span>
        </button>
      </div>

      {/* Drawer Content */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '22px'
        }}
      >
        {activeTab === 'teoria' ? (
          <div>
            {/* Short Desc Highlight */}
            <div
              style={{
                padding: '12px 14px',
                borderRadius: '10px',
                background: '#f8fafc',
                borderLeft: `4px solid ${branchColor}`,
                marginBottom: '16px',
                fontSize: '13px',
                lineHeight: 1.5,
                color: '#334155',
                fontWeight: 500
              }}
            >
              {selectedDetail.shortDesc}
            </div>

            {/* Full Explanation */}
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                Fundamentación del Tema
              </h4>
              <p style={{ fontSize: '13.5px', lineHeight: '1.65', color: '#475569', margin: 0 }}>
                {selectedDetail.fullDesc}
              </p>
            </div>

            {/* Bullet Points */}
            {selectedDetail.bulletPoints && selectedDetail.bulletPoints.length > 0 && (
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '10px' }}>
                  Aspectos Clave
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {selectedDetail.bulletPoints.map((bp, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '13px', color: '#334155' }}>
                      <CheckCircle size={15} color={branchColor} style={{ marginTop: 2, flexShrink: 0 }} />
                      <span style={{ lineHeight: 1.45 }}>{bp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Metrics or Formula */}
            {selectedDetail.metricsOrFormula && (
              <div
                style={{
                  marginBottom: '20px',
                  padding: '14px 16px',
                  borderRadius: '12px',
                  background: '#f1f5f9',
                  border: '1.5px solid #cbd5e1'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                  <Calculator size={15} color="#475569" />
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#1e293b', textTransform: 'uppercase' }}>
                    {selectedDetail.metricsOrFormula.label}
                  </span>
                </div>
                {selectedDetail.metricsOrFormula.formula && (
                  <div
                    style={{
                      background: '#ffffff',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: branchColor,
                      border: '1px solid #e2e8f0',
                      marginBottom: '10px'
                    }}
                  >
                    {selectedDetail.metricsOrFormula.formula}
                  </div>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {selectedDetail.metricsOrFormula.details.map((d, idx) => (
                    <div key={idx} style={{ fontSize: '12px', color: '#475569', lineHeight: 1.4 }}>
                      • {d}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Practical Case */}
            {selectedDetail.practicalCase && (
              <div
                style={{
                  marginBottom: '20px',
                  padding: '16px',
                  borderRadius: '12px',
                  background: '#f0fdf4',
                  border: '1.5px solid #86efac'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                  <Sparkles size={16} color="#16a34a" />
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#166534', textTransform: 'uppercase' }}>
                    Caso Práctico Organizacional
                  </span>
                </div>
                <h5 style={{ fontSize: '13.5px', fontWeight: 700, color: '#14532d', margin: '0 0 6px 0' }}>
                  {selectedDetail.practicalCase.title}
                </h5>
                <p style={{ fontSize: '12.5px', color: '#166534', lineHeight: 1.5, margin: '0 0 8px 0' }}>
                  {selectedDetail.practicalCase.description}
                </p>
                <div style={{ background: '#ffffff', padding: '10px 12px', borderRadius: '8px', border: '1px solid #bbf7d0', fontSize: '12px', color: '#15803d' }}>
                  <span style={{ fontWeight: 700 }}>Resolución & Aprendizaje: </span>
                  {selectedDetail.practicalCase.solutionOrTakeaway}
                </div>
              </div>
            )}

            {/* Standards & Tags */}
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                Estándares Relacionados
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                {selectedDetail.standards?.map((std, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '11px',
                      background: '#e0e7ff',
                      color: '#3730a3',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      fontWeight: 600
                    }}
                  >
                    {std}
                  </span>
                ))}
              </div>

              <h4 style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                Etiquetas Temáticas
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {selectedDetail.tags?.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '11px',
                      background: '#f1f5f9',
                      color: '#475569',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      fontWeight: 500
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* ================= PESTAÑA INTERACTIVA ================= */
          <div>
            {/* Tool 1: Certification Cost Calculator */}
            <div
              style={{
                background: '#ffffff',
                border: '1.5px solid #fed7aa',
                borderRadius: '14px',
                padding: '16px',
                marginBottom: '18px',
                boxShadow: '0 4px 12px rgba(217, 119, 6, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <Calculator size={18} color="#d97706" />
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#9a3412', margin: 0 }}>
                  Calculadora de Inversión en Certificación ITIL
                </h4>
              </div>
              <p style={{ fontSize: '12px', color: '#78350f', lineHeight: 1.45, margin: '0 0 12px 0' }}>
                Simula el presupuesto según los datos estadísticos de la sesión (Diapositiva 9: Autodidacta PeopleCert vs. Cursos ATO).
              </p>

              {/* Mode Selector */}
              <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                <button
                  onClick={() => setCertMode('self')}
                  style={{
                    flex: 1,
                    padding: '8px',
                    borderRadius: '8px',
                    border: certMode === 'self' ? '2px solid #d97706' : '1px solid #cbd5e1',
                    background: certMode === 'self' ? '#fff7ed' : '#ffffff',
                    color: certMode === 'self' ? '#9a3412' : '#475569',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Autodidacta PeopleCert ($680 - $865)
                </button>
                <button
                  onClick={() => setCertMode('ato')}
                  style={{
                    flex: 1,
                    padding: '8px',
                    borderRadius: '8px',
                    border: certMode === 'ato' ? '2px solid #d97706' : '1px solid #cbd5e1',
                    background: certMode === 'ato' ? '#fff7ed' : '#ffffff',
                    color: certMode === 'ato' ? '#9a3412' : '#475569',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Curso Acreditado ATO ($500 - $2,500)
                </button>
              </div>

              {/* Participants Slider */}
              <div style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: 4 }}>
                  <span>N° de Profesionales a Certificar:</span>
                  <span style={{ color: '#d97706', fontWeight: 800 }}>{participantsCount} persona{participantsCount > 1 ? 's' : ''}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={participantsCount}
                  onChange={(e) => setParticipantsCount(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#d97706' }}
                />
              </div>

              {/* Retake Option */}
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '12px', color: '#475569', cursor: 'pointer', marginBottom: 12 }}>
                <input
                  type="checkbox"
                  checked={includeRetake}
                  onChange={(e) => setIncludeRetake(e.target.checked)}
                  style={{ accentColor: '#d97706' }}
                />
                <span>Incluir seguro de re-toma de examen PeopleCert (+ $250 c/u)</span>
              </label>

              {/* Total Calculation Display */}
              <div
                style={{
                  background: '#fef3c7',
                  padding: '12px',
                  borderRadius: '10px',
                  border: '1px solid #fde68a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#92400e', textTransform: 'uppercase' }}>
                    Inversión Estimada Total
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#78350f' }}>
                    {certMode === 'self' ? 'Exámenes directos supervisados' : 'Capacitación oficial ATO + vouchers'}
                  </div>
                </div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#b45309', fontFamily: 'JetBrains Mono, monospace' }}>
                  ${totalCost.toLocaleString()} USD
                </div>
              </div>
            </div>

            {/* Tool 2: Risk Heatmap Matrix 5x5 */}
            <div
              style={{
                background: '#ffffff',
                border: '1.5px solid #cbd5e1',
                borderRadius: '14px',
                padding: '16px',
                marginBottom: '18px',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.05)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <Shield size={18} color="#059669" />
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  Matriz Interactiva de Riesgos 5x5 (ISO 31000)
                </h4>
              </div>
              <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.45, margin: '0 0 12px 0' }}>
                Calcula la severidad del riesgo multiplicando Probabilidad (1-5) e Impacto (1-5), tal como ilustra la diapositiva 12.
              </p>

              {/* Sliders for Prob & Impact */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#475569' }}>Probabilidad: {probScore} / 5</span>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={probScore}
                    onChange={(e) => setProbScore(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#059669' }}
                  />
                </div>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#475569' }}>Impacto: {impactScore} / 5</span>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={impactScore}
                    onChange={(e) => setImpactScore(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#059669' }}
                  />
                </div>
              </div>

              {/* Risk Score Card */}
              <div
                style={{
                  padding: '12px',
                  borderRadius: '10px',
                  background: riskCat.bg,
                  border: `1.5px solid ${riskCat.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 10
                }}
              >
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: riskCat.color, textTransform: 'uppercase' }}>
                    Nivel: {riskCat.label}
                  </span>
                  <p style={{ fontSize: '11.5px', color: '#1e293b', margin: '4px 0 0 0', lineHeight: 1.35 }}>
                    {riskCat.action}
                  </p>
                </div>
                <div style={{ fontSize: '24px', fontWeight: 900, color: riskCat.color, fontFamily: 'JetBrains Mono, monospace' }}>
                  {riskSeverity}/25
                </div>
              </div>

              {/* Gross, Net, Target explanation */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6, fontSize: '10.5px', textAlign: 'center' }}>
                <div style={{ background: '#f8fafc', padding: '6px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 800, color: '#dc2626' }}>Gross Risk</div>
                  <div style={{ color: '#64748b' }}>Riesgo inherente</div>
                </div>
                <div style={{ background: '#f8fafc', padding: '6px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 800, color: '#d97706' }}>Net Risk</div>
                  <div style={{ color: '#64748b' }}>Con controles</div>
                </div>
                <div style={{ background: '#f8fafc', padding: '6px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 800, color: '#16a34a' }}>Target Risk</div>
                  <div style={{ color: '#64748b' }}>Nivel deseado</div>
                </div>
              </div>
            </div>

            {/* Tool 3: PDCA Deming Cycle Explorer */}
            <div
              style={{
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                borderRadius: '14px',
                padding: '16px',
                marginBottom: '18px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <RotateCw size={18} color="#7c3aed" />
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  Simulador del Ciclo Deming (PDCA)
                </h4>
              </div>

              {/* PDCA Steps Tabs */}
              <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
                {pdcaSteps.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePdcaStep(idx)}
                    style={{
                      flex: 1,
                      padding: '7px 4px',
                      borderRadius: '6px',
                      border: activePdcaStep === idx ? '2px solid #7c3aed' : '1px solid #cbd5e1',
                      background: activePdcaStep === idx ? '#f5f3ff' : '#ffffff',
                      color: activePdcaStep === idx ? '#6d28d9' : '#64748b',
                      fontSize: '11px',
                      fontWeight: 800,
                      cursor: 'pointer'
                    }}
                  >
                    {step.code}
                  </button>
                ))}
              </div>

              {/* Active Step Content */}
              <div style={{ background: '#faf5ff', padding: '12px', borderRadius: '10px', border: '1px solid #e9d5ff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <h5 style={{ fontSize: '13px', fontWeight: 800, color: '#581c87', margin: 0 }}>
                    {pdcaSteps[activePdcaStep].title}
                  </h5>
                  <span style={{ fontSize: '10.5px', background: '#e9d5ff', color: '#6d28d9', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                    {pdcaSteps[activePdcaStep].question}
                  </span>
                </div>
                <p style={{ fontSize: '12px', color: '#6b21a8', lineHeight: 1.45, margin: '0 0 8px 0' }}>
                  {pdcaSteps[activePdcaStep].desc}
                </p>
                <div style={{ fontSize: '11.5px', color: '#4c1d95', marginBottom: 6 }}>
                  <span style={{ fontWeight: 700 }}>Actividades clave:</span>
                  <ul style={{ margin: '4px 0 0 16px', padding: 0 }}>
                    {pdcaSteps[activePdcaStep].activities.map((act, i) => (
                      <li key={i}>{act}</li>
                    ))}
                  </ul>
                </div>
                <div style={{ fontSize: '11px', color: '#581c87', background: '#ffffff', padding: '6px 8px', borderRadius: '6px', border: '1px solid #d8b4fe' }}>
                  <span style={{ fontWeight: 700 }}>Entregable: </span>
                  {pdcaSteps[activePdcaStep].outputs}
                </div>
              </div>
            </div>

            {/* Tool 4: Web Architecture & Culinary Metaphor Explorer */}
            <div
              style={{
                background: '#ffffff',
                border: '1.5px solid #bfdbfe',
                borderRadius: '14px',
                padding: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <Globe size={18} color="#2563eb" />
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#1e3a8a', margin: 0 }}>
                  Anatomía Web & Metáfora Culinaria
                </h4>
              </div>

              {/* Selector */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 10 }}>
                {webLayers.map((l, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedWebLayer(idx)}
                    style={{
                      padding: '5px 8px',
                      borderRadius: '6px',
                      border: selectedWebLayer === idx ? '2px solid #2563eb' : '1px solid #cbd5e1',
                      background: selectedWebLayer === idx ? '#eff6ff' : '#ffffff',
                      color: selectedWebLayer === idx ? '#1d4ed8' : '#475569',
                      fontSize: '11px',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {l.name.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Layer Card */}
              <div style={{ background: '#f0f9ff', padding: '12px', borderRadius: '10px', border: '1px solid #bae6fd' }}>
                <h5 style={{ fontSize: '13px', fontWeight: 800, color: '#0369a1', margin: '0 0 2px 0' }}>
                  {webLayers[selectedWebLayer].name}
                </h5>
                <span style={{ fontSize: '11px', color: '#0284c7', fontWeight: 600, display: 'block', marginBottom: 6 }}>
                  {webLayers[selectedWebLayer].role}
                </span>
                <p style={{ fontSize: '12px', color: '#075985', lineHeight: 1.45, margin: '0 0 8px 0' }}>
                  🍴 <span style={{ fontWeight: 600 }}>Analogía Culinaria: </span>{webLayers[selectedWebLayer].culinary}
                </p>
                <div style={{ fontSize: '11px', color: '#0c4a6e', background: '#ffffff', padding: '6px 8px', borderRadius: '6px', border: '1px solid #7dd3fc', marginBottom: 4 }}>
                  <span style={{ fontWeight: 700 }}>Tecnologías: </span>{webLayers[selectedWebLayer].techStack}
                </div>
                <div style={{ fontSize: '11px', color: '#0369a1' }}>
                  <span style={{ fontWeight: 700 }}>Aporte en ITIL: </span>{webLayers[selectedWebLayer].itilFit}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        style={{
          padding: '12px 22px',
          borderTop: '1px solid #e2e8f0',
          background: '#f8fafc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '11px',
          color: '#64748b'
        }}
      >
        <span>Gestión de Servicios de TI · Semana 13 · UTP 2026</span>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: branchColor,
            fontWeight: 700,
            cursor: 'pointer'
          }}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};
