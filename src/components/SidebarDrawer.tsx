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
  Workflow
} from 'lucide-react';

interface SidebarDrawerProps {
  selectedDetail: NodeDetailData | null;
  onClose: () => void;
  onNavigateToNode?: (nodeId: string) => void;
}

export const SidebarDrawer: React.FC<SidebarDrawerProps> = ({ selectedDetail, onClose }) => {
  const [activeTab, setActiveTab] = useState<'teoria' | 'interactivo'>('teoria');

  // Interactive Value Simulator States
  const [utilityChecks, setUtilityChecks] = useState<Record<string, boolean>>({
    reqs: true,
    speed: true,
    unblock: true
  });
  const [warrantyChecks, setWarrantyChecks] = useState<Record<string, boolean>>({
    avail: true,
    capac: true,
    sec: true,
    cont: true
  });

  // Interactive 7 Principles Selector
  const [selectedPrincipleIndex, setSelectedPrincipleIndex] = useState<number>(0);

  // Interactive Database Explorer
  const [selectedDbIndex, setSelectedDbIndex] = useState<number>(0);

  if (!selectedDetail) return null;

  const getBranchColor = (branch: string) => {
    switch (branch) {
      case 'valor':
        return '#059669';
      case 'svs':
        return '#2563eb';
      case 'principios':
        return '#d97706';
      case 'practica':
        return '#7c3aed';
      default:
        return '#4f46e5';
    }
  };

  const branchColor = getBranchColor(selectedDetail.branch);

  const utilityCount = Object.values(utilityChecks).filter(Boolean).length;
  const warrantyCount = Object.values(warrantyChecks).filter(Boolean).length;
  const hasFullUtility = utilityCount >= 2;
  const hasFullWarranty = warrantyCount >= 3;
  const isValueCreated = hasFullUtility && hasFullWarranty;

  const principlesList = [
    {
      num: 1,
      name: 'Centrarse en el valor',
      subtitle: 'Focus on Value',
      prop: 'Vincular cada tarea, feature y reunión directamente al valor percibido por el cliente y las partes interesadas.',
      webApp: 'Priorizar módulos que resuelvan la necesidad primaria del usuario (ej. transacciones sin fricción).',
      error: 'Invertir meses en código o diseño estético que nadie utilizará o que no impacta en negocio.',
      afinidad: 'Customer Experience / Product Owner en Scrum'
    },
    {
      num: 2,
      name: 'Comenzar donde se está',
      subtitle: 'Start Where You Are',
      prop: 'Evaluar objetivamente la situación actual (Situation-Problem-Solution) y reutilizar lo que ya funciona.',
      webApp: 'Auditar bases de datos legadas y APIs existentes antes de proponer reconstruir todo desde cero.',
      error: 'Descartar sistemas existentes por moda sin medir métricas reales de rendimiento.',
      afinidad: 'Auditoría Técnica / Evaluación de Deuda Técnica'
    },
    {
      num: 3,
      name: 'Progresar iterativamente con retroalimentación',
      subtitle: 'Progress Iteratively With Feedback',
      prop: 'Dividir iniciativas complejas en etapas pequeñas para recopilar feedback continuo y mitigar riesgos.',
      webApp: 'Lanzar un MVP web en Sprints de 2 semanas con Scrum para validar la base de datos con usuarios reales.',
      error: 'Proyectos monolíticos estilo cascada de 1 año que se desfasan de la realidad al salir a producción.',
      afinidad: 'Scrum (Sprints, Daily, Retrospectives) / Ciclo PDCA'
    },
    {
      num: 4,
      name: 'Colaborar y promover la visibilidad',
      subtitle: 'Collaborate and Promote Visibility',
      prop: 'Romper silos organizacionales, trabajar en equipos multidisciplinarios y transparentar el trabajo.',
      webApp: 'Flujos transparentes con tableros Kanban, ramas Git claras (Master, Develop, Feature) y demos continuas.',
      error: 'Aislar al equipo de base de datos del equipo frontend, generando cuellos de botella y culpas mutuas.',
      afinidad: 'Cultura DevOps / Scrum Team multidisciplinario'
    },
    {
      num: 5,
      name: 'Pensar y trabajar de forma holística',
      subtitle: 'Think and Work Holistically',
      prop: 'Integrar las 4 dimensiones de ITIL (Personas, Procesos, Tecnología, Socios) para garantizar flujos E2E.',
      webApp: 'Coordinar el frontend web con la capacidad del servidor, políticas de seguridad y capacitación a usuarios.',
      error: 'Optimizar una consulta SQL descuidando la experiencia de usuario o la infraestructura de red.',
      afinidad: 'Arquitectura Empresarial / Flujos BPMN'
    },
    {
      num: 6,
      name: 'Mantenerlo simple y práctico',
      subtitle: 'Keep It Simple and Practical',
      prop: 'Eliminar pasos redundantes, burocracia y métricas que no aporten valor directo (Filosofía Lean IT).',
      webApp: 'Formularios web con el mínimo de clics necesarios y esquemas de base de datos limpios y normalizados.',
      error: 'Crear flujos burocráticos con 5 niveles de aprobación para autorizar un cambio menor en web.',
      afinidad: 'Lean IT / Principio KISS (Keep It Simple)'
    },
    {
      num: 7,
      name: 'Optimizar y automatizar',
      subtitle: 'Optimize and Automate',
      prop: 'Estandarizar y simplificar los procesos antes de aplicar herramientas de automatización tecnológica.',
      webApp: 'Optimizar índices en la base de datos antes de automatizar pipelines de despliegue continuo (CI/CD).',
      error: 'Automatizar procesos rotos o desorganizados: "automatizar el caos solo produce caos a alta velocidad".',
      afinidad: 'CI/CD Pipelines / RPA / Infrastructure as Code'
    }
  ];

  const dbList = [
    {
      type: 'SQL Relacional',
      examples: 'MySQL, MS SQL Server, PostgreSQL',
      fit: 'Transacciones bancarias, matrículas, control financiero y consistencia ACID estricta.',
      value: 'Garantiza consistencia absoluta de datos e integridad referencial en sistemas críticos.'
    },
    {
      type: 'In-Memory Database',
      examples: 'Redis, SAP HANA, MemSQL',
      fit: 'Caché de sesiones web de alta concurrencia, tablas de clasificación y analítica en tiempo real.',
      value: 'Latencia sub-milisegundo que dispara la velocidad percibida (Utilidad y Garantía).'
    },
    {
      type: 'Vector Database',
      examples: 'Pinecone, Milvus, Weaviate, Qdrant',
      fit: 'Búsquedas semánticas con Inteligencia Artificial, chatbots RAG y sistemas de recomendación.',
      value: 'Permite entregar servicios cognitivos modernos transformando texto/imágenes en embeddings.'
    },
    {
      type: 'Document Database',
      examples: 'MongoDB, Couchbase',
      fit: 'Catálogos de productos, expedientes de estudiantes y perfiles con esquemas dinámicos.',
      value: 'Agilidad extrema para iterar features sin migraciones rígidas de esquemas en desarrollo web.'
    },
    {
      type: 'Time-Series Database',
      examples: 'InfluxDB, TimescaleDB',
      fit: 'Telemetría de servidores, métricas de APIs en tiempo real y sensores IoT.',
      value: 'Monitoreo proactivo de la Garantía de servicio para prevenir caídas antes de que afecten al usuario.'
    },
    {
      type: 'Columnar Database',
      examples: 'Amazon Redshift, Apache Cassandra',
      fit: 'Analítica de Big Data, data warehouses y procesamiento analítico en línea (OLAP).',
      value: 'Permite a la alta dirección tomar decisiones estratégicas basadas en grandes volúmenes de datos.'
    },
    {
      type: 'Graph Database',
      examples: 'Neo4j, Azure Cosmos DB',
      fit: 'Redes sociales, grafos de conocimiento y detección de fraude en pagos.',
      value: 'Consulta relaciones complejas entre entidades a velocidades imposibles para motores tradicionales.'
    },
    {
      type: 'NewSQL Database',
      examples: 'Google Spanner, CockroachDB',
      fit: 'Sistemas globales en la nube con distribución planetaria sin perder consistencia ACID.',
      value: 'Escalabilidad horizontal ilimitada manteniendo máxima certidumbre transaccional.'
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
                fontWeight: 800,
                color: branchColor,
                textTransform: 'uppercase',
                letterSpacing: '0.06em'
              }}
            >
              {selectedDetail.branchLabel}
            </span>
          </div>
        </div>

        <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 800, color: '#0f172a', lineHeight: 1.3 }}>
          {selectedDetail.title}
        </h3>

        {selectedDetail.subtitle && (
          <p style={{ margin: 0, fontSize: '12px', color: '#64748b', lineHeight: 1.4, fontWeight: 500 }}>
            {selectedDetail.subtitle}
          </p>
        )}

        {/* Tab navigation bar */}
        <div
          style={{
            display: 'flex',
            gap: 6,
            marginTop: 16,
            background: '#e2e8f0',
            padding: '4px',
            borderRadius: '10px'
          }}
        >
          <button
            onClick={() => setActiveTab('teoria')}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
              padding: '7px 4px',
              borderRadius: '7px',
              border: 'none',
              background: activeTab === 'teoria' ? '#ffffff' : 'transparent',
              color: activeTab === 'teoria' ? branchColor : '#64748b',
              fontWeight: activeTab === 'teoria' ? 800 : 600,
              fontSize: '11.5px',
              cursor: 'pointer',
              boxShadow: activeTab === 'teoria' ? '0 2px 4px rgba(0,0,0,0.06)' : 'none'
            }}
          >
            <BookOpen size={13} />
            Fundamentos & Teoría
          </button>

          <button
            onClick={() => setActiveTab('interactivo')}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
              padding: '7px 4px',
              borderRadius: '7px',
              border: 'none',
              background: activeTab === 'interactivo' ? '#ffffff' : 'transparent',
              color: activeTab === 'interactivo' ? branchColor : '#64748b',
              fontWeight: activeTab === 'interactivo' ? 800 : 600,
              fontSize: '11.5px',
              cursor: 'pointer',
              boxShadow: activeTab === 'interactivo' ? '0 2px 4px rgba(0,0,0,0.06)' : 'none'
            }}
          >
            <Sliders size={13} />
            Simulador & Casos
          </button>
        </div>
      </div>

      {/* Body Content */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px 22px',
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
          background: '#ffffff'
        }}
      >
        {/* TAB 1: TEORIA & FUNDAMENTOS */}
        {activeTab === 'teoria' && (
          <>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
                Descripción Detallada
              </div>
              <p style={{ fontSize: '13px', color: '#1e293b', lineHeight: 1.6, margin: 0, fontWeight: 500, whiteSpace: 'pre-line' }}>
                {selectedDetail.fullDesc}
              </p>
            </div>

            {selectedDetail.metricsOrFormula && (
              <div
                style={{
                  background: '#f8fafc',
                  border: `1.5px solid ${branchColor}40`,
                  borderRadius: '12px',
                  padding: '14px 16px'
                }}
              >
                <div style={{ fontSize: '11.5px', fontWeight: 800, color: branchColor, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
                  {selectedDetail.metricsOrFormula.label}
                </div>
                {selectedDetail.metricsOrFormula.formula && (
                  <div
                    style={{
                      background: '#ffffff',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: branchColor,
                      fontFamily: 'monospace',
                      marginBottom: 10,
                      textAlign: 'center'
                    }}
                  >
                    {selectedDetail.metricsOrFormula.formula}
                  </div>
                )}
                <ul style={{ margin: 0, paddingLeft: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {selectedDetail.metricsOrFormula.details.map((d, i) => (
                    <li key={i} style={{ fontSize: '12px', color: '#475569', lineHeight: 1.4 }}>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedDetail.bulletPoints && selectedDetail.bulletPoints.length > 0 && (
              <div
                style={{
                  background: '#f8fafc',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '14px 16px'
                }}
              >
                <div style={{ fontSize: '11.5px', fontWeight: 800, color: branchColor, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>
                  Puntos Clave del Contenido
                </div>
                <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {selectedDetail.bulletPoints.map((item, idx) => (
                    <li key={idx} style={{ fontSize: '12.5px', color: '#334155', lineHeight: 1.5, fontWeight: 500 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedDetail.practicalCase && (
              <div
                style={{
                  background: `${branchColor}08`,
                  border: `1.5px solid ${branchColor}35`,
                  borderRadius: '12px',
                  padding: '14px 16px'
                }}
              >
                <div style={{ fontSize: '11.5px', fontWeight: 800, color: branchColor, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Sparkles size={14} />
                  {selectedDetail.practicalCase.title}
                </div>
                <p style={{ fontSize: '12px', color: '#334155', lineHeight: 1.5, marginBottom: 8 }}>
                  {selectedDetail.practicalCase.description}
                </p>
                <div style={{ fontSize: '11.5px', fontWeight: 700, color: branchColor, background: '#ffffff', padding: '8px 10px', borderRadius: '6px', border: `1px solid ${branchColor}25` }}>
                  💡 Solución / Clave: {selectedDetail.practicalCase.solutionOrTakeaway}
                </div>
              </div>
            )}

            {selectedDetail.standards && (
              <div
                style={{
                  background: `${branchColor}10`,
                  border: `1.5px solid ${branchColor}35`,
                  borderRadius: '12px',
                  padding: '12px 14px'
                }}
              >
                <div style={{ fontSize: '11.5px', fontWeight: 800, color: branchColor, marginBottom: 8 }}>
                  Normas, Fuentes y Estándares
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {selectedDetail.standards.map((std, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '11px',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: '#ffffff',
                        border: `1px solid ${branchColor}40`,
                        color: branchColor,
                        fontWeight: 700
                      }}
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedDetail.tags && (
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {selectedDetail.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: '10.5px',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      background: '#f1f5f9',
                      color: '#475569',
                      fontWeight: 600
                    }}
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}
          </>
        )}

        {/* TAB 2: GUÍA OPERATIVA & SIMULADORES */}
        {activeTab === 'interactivo' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* HERRAMIENTA 1: SIMULADOR DE VALOR ITIL 4 (UTILIDAD + GARANTÍA) */}
            <div
              style={{
                background: isValueCreated ? '#f0fdf4' : '#fffbeb',
                border: isValueCreated ? '1.5px solid #86efac' : '1.5px solid #fde68a',
                borderRadius: '14px',
                padding: '16px',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Target size={18} color={isValueCreated ? '#059669' : '#d97706'} />
                  <span style={{ fontSize: '13.5px', fontWeight: 800, color: isValueCreated ? '#065f46' : '#92400e' }}>
                    Calculadora de Valor (Axelos)
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    padding: '3px 8px',
                    borderRadius: '6px',
                    background: isValueCreated ? '#dcfce7' : '#fef3c7',
                    color: isValueCreated ? '#166534' : '#b45309'
                  }}
                >
                  {isValueCreated ? 'VALOR GENERADO' : 'VALOR INCOMPLETO'}
                </span>
              </div>

              <p style={{ fontSize: '11.5px', color: '#475569', margin: '0 0 12px 0', lineHeight: 1.4 }}>
                Activa las condiciones para comprobar si el servicio de TI entrega valor co-creado real:
              </p>

              {/* Utilidad Checkboxes */}
              <div style={{ background: '#ffffff', borderRadius: '10px', padding: '10px 12px', border: '1px solid #e2e8f0', marginBottom: 10 }}>
                <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#059669', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span>1. Utilidad (Fit for Purpose - ¿Qué hace?)</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {[
                    { key: 'reqs', label: 'Cumple el requerimiento funcional solicitado' },
                    { key: 'speed', label: 'Mejora la velocidad o rendimiento del usuario' },
                    { key: 'unblock', label: 'Elimina restricciones y tareas manuales' }
                  ].map((u) => (
                    <label key={u.key} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '11.5px', color: '#334155', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={utilityChecks[u.key]}
                        onChange={(e) => setUtilityChecks((prev) => ({ ...prev, [u.key]: e.target.checked }))}
                      />
                      <span>{u.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Garantía Checkboxes */}
              <div style={{ background: '#ffffff', borderRadius: '10px', padding: '10px 12px', border: '1px solid #e2e8f0', marginBottom: 12 }}>
                <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#2563eb', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span>2. Garantía (Fit for Use - ¿Cómo se entrega?)</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {[
                    { key: 'avail', label: 'Disponibilidad alta asegurada (>99.9%)' },
                    { key: 'capac', label: 'Capacidad para soportar tráfico pico' },
                    { key: 'sec', label: 'Seguridad, autenticación y cifrado de datos' },
                    { key: 'cont', label: 'Continuidad operativa y backups probados' }
                  ].map((w) => (
                    <label key={w.key} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '11.5px', color: '#334155', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={warrantyChecks[w.key]}
                        onChange={(e) => setWarrantyChecks((prev) => ({ ...prev, [w.key]: e.target.checked }))}
                      />
                      <span>{w.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Resultado del simulador */}
              <div
                style={{
                  padding: '10px 12px',
                  borderRadius: '8px',
                  background: isValueCreated ? '#dcfce7' : '#fee2e2',
                  border: isValueCreated ? '1px solid #86efac' : '1px solid #fca5a5',
                  fontSize: '11.5px',
                  lineHeight: 1.45,
                  color: isValueCreated ? '#166534' : '#991b1b',
                  fontWeight: 600
                }}
              >
                {isValueCreated ? (
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                    <CheckCircle size={16} style={{ flexShrink: 0, marginTop: 1 }} />
                    <span>
                      <strong>¡Servicio con Valor Pleno!</strong> Cumple con Utilidad ({utilityCount}/3) y Garantía ({warrantyCount}/4). La organización y los clientes perciben beneficios tangibles.
                    </span>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                    <AlertTriangle size={16} style={{ flexShrink: 0, marginTop: 1 }} />
                    <span>
                      <strong>Atención:</strong> Falta{' '}
                      {!hasFullUtility && !hasFullWarranty
                        ? 'Utilidad y Garantía'
                        : !hasFullUtility
                        ? 'Utilidad funcional adecuada'
                        : 'Garantía operativa de servicio'}
                      . En ITIL el valor no existe si cualquiera de las dos partes falla.
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* HERRAMIENTA 2: MATRIZ DE LOS 7 PRINCIPIOS RECTORES (CASO 02) */}
            <div
              style={{
                background: '#fffbeb',
                border: '1.5px solid #fde68a',
                borderRadius: '14px',
                padding: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <Compass size={18} color="#d97706" />
                <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#92400e' }}>
                  Matriz Comparativa: 7 Principios ITIL (Caso 02)
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 12 }}>
                {principlesList.map((p, idx) => (
                  <button
                    key={p.num}
                    onClick={() => setSelectedPrincipleIndex(idx)}
                    style={{
                      padding: '6px 8px',
                      borderRadius: '6px',
                      border: selectedPrincipleIndex === idx ? '1.5px solid #d97706' : '1px solid #e2e8f0',
                      background: selectedPrincipleIndex === idx ? '#fef3c7' : '#ffffff',
                      color: selectedPrincipleIndex === idx ? '#92400e' : '#64748b',
                      fontSize: '11px',
                      fontWeight: 800,
                      cursor: 'pointer'
                    }}
                  >
                    P{p.num}
                  </button>
                ))}
              </div>

              {principlesList[selectedPrincipleIndex] && (
                <div
                  style={{
                    background: '#ffffff',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid #fef3c7',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8
                  }}
                >
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#92400e' }}>
                    {principlesList[selectedPrincipleIndex].num}. {principlesList[selectedPrincipleIndex].name}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#475569', lineHeight: 1.45 }}>
                    <strong>🎯 Propósito:</strong> {principlesList[selectedPrincipleIndex].prop}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#15803d', lineHeight: 1.45 }}>
                    <strong>💻 Aplicación en Web/BD:</strong> {principlesList[selectedPrincipleIndex].webApp}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#b91c1c', lineHeight: 1.45 }}>
                    <strong>⚠️ Error a evitar:</strong> {principlesList[selectedPrincipleIndex].error}
                  </div>
                  <div style={{ fontSize: '10.5px', color: '#6d28d9', fontWeight: 700 }}>
                    ⚡ Marco Afín: {principlesList[selectedPrincipleIndex].afinidad}
                  </div>
                </div>
              )}
            </div>

            {/* HERRAMIENTA 3: ARQUITECTURA DE BASES DE DATOS (CASO 01 & SLIDE 6) */}
            <div
              style={{
                background: '#eff6ff',
                border: '1.5px solid #bfdbfe',
                borderRadius: '14px',
                padding: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <Database size={18} color="#2563eb" />
                <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#1e40af' }}>
                  Arquetipos de Bases de Datos (Caso 01)
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 10 }}>
                {dbList.map((db, idx) => (
                  <button
                    key={db.type}
                    onClick={() => setSelectedDbIndex(idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '7px 10px',
                      borderRadius: '6px',
                      border: selectedDbIndex === idx ? '1.5px solid #2563eb' : '1px solid #dbeafe',
                      background: selectedDbIndex === idx ? '#dbeafe' : '#ffffff',
                      color: selectedDbIndex === idx ? '#1e40af' : '#334155',
                      fontSize: '11.5px',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    <span>{db.type}</span>
                    <span style={{ fontSize: '10px', color: '#2563eb' }}>{db.examples.split(',')[0]} →</span>
                  </button>
                ))}
              </div>

              {dbList[selectedDbIndex] && (
                <div
                  style={{
                    background: '#ffffff',
                    padding: '12px',
                    borderRadius: '8px',
                    borderLeft: '4px solid #2563eb',
                    border: '1px solid #dbeafe',
                    borderLeftWidth: 4
                  }}
                >
                  <div style={{ fontSize: '12.5px', fontWeight: 800, color: '#1e40af', marginBottom: 2 }}>
                    {dbList[selectedDbIndex].type}
                  </div>
                  <div style={{ fontSize: '11px', color: '#64748b', marginBottom: 6, fontFamily: 'monospace' }}>
                    Ejemplos: {dbList[selectedDbIndex].examples}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#334155', lineHeight: 1.4, marginBottom: 6 }}>
                    <strong>🎯 Idoneidad:</strong> {dbList[selectedDbIndex].fit}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#047857', lineHeight: 1.4 }}>
                    <strong>💎 Valor de Servicio:</strong> {dbList[selectedDbIndex].value}
                  </div>
                </div>
              )}
            </div>

            {/* HERRAMIENTA 4: ACTIVIDADES DE LA CADENA DE VALOR (SVC) */}
            <div
              style={{
                background: '#faf5ff',
                border: '1.5px solid #e9d5ff',
                borderRadius: '14px',
                padding: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <Workflow size={18} color="#7c3aed" />
                <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#5b21b6' }}>
                  6 Actividades de la Cadena de Valor (SVC)
                </span>
              </div>
              <p style={{ fontSize: '11.5px', color: '#475569', margin: '0 0 10px 0', lineHeight: 1.4 }}>
                Las actividades que componen los flujos de valor en el SVS de ITIL 4:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                {[
                  { name: '1. Planear', desc: 'Visión compartida y dirección' },
                  { name: '2. Mejorar', desc: 'Evolución continua en todo nivel' },
                  { name: '3. Comprometer', desc: 'Gestión con stakeholders (Engage)' },
                  { name: '4. Diseñar/Transición', desc: 'Cumplir expectativas de calidad' },
                  { name: '5. Obtener/Construir', desc: 'Desarrollar y adquirir activos' },
                  { name: '6. Entregar/Soporte', desc: 'Operar según SLAs acordados' }
                ].map((act, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '8px',
                      borderRadius: '6px',
                      background: '#ffffff',
                      border: '1px solid #e9d5ff',
                      fontSize: '11px'
                    }}
                  >
                    <div style={{ fontWeight: 800, color: '#6d28d9' }}>{act.name}</div>
                    <div style={{ color: '#64748b', fontSize: '10.5px' }}>{act.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Navigation */}
      <div
        style={{
          padding: '14px 22px',
          borderTop: '1px solid #e2e8f0',
          background: '#f8fafc',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>
          Gestión del Servicio de TI · Semana 11 · UTP 2026
        </span>

        <button
          onClick={onClose}
          style={{
            padding: '6px 14px',
            borderRadius: '8px',
            border: '1px solid #cbd5e1',
            background: '#ffffff',
            color: '#334155',
            fontSize: '11.5px',
            fontWeight: 700,
            cursor: 'pointer'
          }}
        >
          Cerrar Panel
        </button>
      </div>
    </div>
  );
};
