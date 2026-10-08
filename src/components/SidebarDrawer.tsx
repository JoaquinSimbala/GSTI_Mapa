import React, { useState } from 'react';
import { NodeDetailData } from '../data/mapData';
import { IconRenderer } from './IconHelper';
import {
  X,
  Sparkles,
  BookOpen,
  Sliders,
  CheckCircle,
  Shield,
  Layers,
  RotateCw,
  Target
} from 'lucide-react';

interface SidebarDrawerProps {
  selectedDetail: NodeDetailData | null;
  onClose: () => void;
  onNavigateToNode?: (nodeId: string) => void;
}

export const SidebarDrawer: React.FC<SidebarDrawerProps> = ({ selectedDetail, onClose }) => {
  const [activeTab, setActiveTab] = useState<'teoria' | 'interactivo'>('teoria');

  // Interactive PDCA Step State
  const [pdcaActiveStep, setPdcaActiveStep] = useState<number>(0);

  // Interactive Cyber Incident Step
  const [resolvedIncidentSteps, setResolvedIncidentSteps] = useState<Record<number, boolean>>({});

  // Interactive 7 Layers Active Layer
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(0);

  if (!selectedDetail) return null;

  const getBranchColor = (branch: string) => {
    switch (branch) {
      case 'fundamentos':
        return '#059669';
      case 'pdca':
        return '#d97706';
      case 'servicedesk':
        return '#2563eb';
      case 'seguridad':
        return '#7c3aed';
      default:
        return '#4f46e5';
    }
  };

  const branchColor = getBranchColor(selectedDetail.branch);

  const layersList = [
    { num: '01', name: 'Capa Física', desc: 'Control de acceso a cuartos de servidores, CCTV, biometría, cerraduras electrónicas.', threat: 'Intrusión física, robo de discos duros o servidores.' },
    { num: '02', name: 'Capa de Red', desc: 'Segmentación de VLANs, firewalls internos, mitigación anti-DDoS, switches gestionados.', threat: 'Sniffing de paquetes, movimientos laterales maliciosos.' },
    { num: '03', name: 'Capa de Perímetro', desc: 'Gateways de seguridad, Web Application Firewalls (WAF), proxies inversos y DMZ.', threat: 'Ataques externos masivos, escaneos de puertos y bots.' },
    { num: '04', name: 'Capa de Aplicación', desc: 'Desarrollo seguro (OWASP Top 10), autenticación multifactor (MFA), parches al día.', threat: 'Inyección SQL, Cross-Site Scripting (XSS), APIs expuestas.' },
    { num: '05', name: 'Capa de Dispositivo (Endpoint)', desc: 'Antivirus EDR corporativo, cifrado BitLocker, control de dispositivos USB.', threat: 'Ransomware en computadoras de usuarios, memorias infectadas.' },
    { num: '06', name: 'Capa de Datos', desc: 'Cifrado de datos en reposo y tránsito (TLS/AES), backups inmutables, políticas DLP.', threat: 'Exfiltración de información confidencial y bases de datos.' },
    { num: '07', name: 'Capa Humana', desc: 'Capacitación constante, simulacros de phishing, cultura de reporte rápido de incidentes.', threat: 'Ingeniería social, phishing, contraseñas débiles compartidas.' }
  ];

  const incidentStepsList = [
    { step: 1, title: 'Identificación y Primeras Acciones', action: 'Mantener la calma, registrar la hora y aislar de inmediato los equipos afectados de la red (desconectar cable/WiFi).' },
    { step: 2, title: 'Contención Rápida', action: 'Reforzar perímetros, revocar sesiones y forzar cambio de credenciales de administradores y cuentas de dominio.' },
    { step: 3, title: 'Investigación y Forense', action: 'Preservar volcados de memoria y logs de auditoría para identificar vector y amenaza sin alterar la evidencia.' },
    { step: 4, title: 'Informar a la Dirección', action: 'Emitir reporte ejecutivo con estimación de impacto en negocio y plan de recuperación en marcha.' },
    { step: 5, title: 'Acciones Legales y Notificación', action: 'Notificar formalmente a autoridades competentes y policía cibernética con evidencia preservada.' },
    { step: 6, title: 'Lecciones Aprendidas', action: 'Reunir al equipo multidisciplinario, cerrar brechas detectadas y programar simulacros preventivos.' }
  ];

  const handleStepCheckbox = (stepNum: number) => {
    setResolvedIncidentSteps((prev) => ({
      ...prev,
      [stepNum]: !prev[stepNum]
    }));
  };

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
            Fundamentos
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
            Guía / Dinámica
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
              <p style={{ fontSize: '13px', color: '#1e293b', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                {selectedDetail.fullDesc}
              </p>
            </div>

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
                  Normas y Estándares Asociados
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
            {/* HERRAMIENTA 1: EXPLICACIÓN DE LA ECUACIÓN DE RENDIMIENTO */}
            {(selectedDetail.branch === 'fundamentos' || selectedDetail.id.startsWith('fund-')) && (
              <div
                style={{
                  background: '#f0fdf4',
                  border: '1.5px solid #86efac',
                  borderRadius: '14px',
                  padding: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <Target size={18} color="#059669" />
                  <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#065f46' }}>
                    Ecuación de Rendimiento Global
                  </span>
                </div>

                <div style={{ background: '#ffffff', borderRadius: '10px', padding: '14px', border: '1px solid #bbf7d0', marginBottom: 12 }}>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#059669', textAlign: 'center', marginBottom: 6 }}>
                    Eficacia + Eficiencia = Efectividad
                  </div>
                  <p style={{ fontSize: '12px', color: '#166534', margin: 0, textAlign: 'center', lineHeight: 1.45 }}>
                    Cumplir las metas prometidas al usuario optimizando recursos económicos, tiempo y esfuerzo técnico.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ padding: '8px 10px', background: '#ffffff', borderRadius: '8px', border: '1px solid #dcfce7' }}>
                    <strong style={{ color: '#059669', fontSize: '12px' }}>• Eficacia:</strong>{' '}
                    <span style={{ color: '#334155', fontSize: '12px' }}>Mide el cumplimiento de metas: SLAs de resolución, First Contact Resolution y satisfacción.</span>
                  </div>
                  <div style={{ padding: '8px 10px', background: '#ffffff', borderRadius: '8px', border: '1px solid #dcfce7' }}>
                    <strong style={{ color: '#0284c7', fontSize: '12px' }}>• Eficiencia:</strong>{' '}
                    <span style={{ color: '#334155', fontSize: '12px' }}>Mide la optimización de recursos: costos por ticket, horas invertidas y capacidad de servidores.</span>
                  </div>
                  <div style={{ padding: '8px 10px', background: '#ffffff', borderRadius: '8px', border: '1px solid #dcfce7' }}>
                    <strong style={{ color: '#7c3aed', fontSize: '12px' }}>• Efectividad:</strong>{' '}
                    <span style={{ color: '#334155', fontSize: '12px' }}>El resultado sinérgico e integral de ambas dimensiones combinadas.</span>
                  </div>
                </div>
              </div>
            )}

            {/* HERRAMIENTA 2: FASES PDCA */}
            {(selectedDetail.branch === 'pdca' || selectedDetail.id.startsWith('pdca-')) && (
              <div
                style={{
                  background: '#fffbeb',
                  border: '1.5px solid #fde68a',
                  borderRadius: '14px',
                  padding: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <RotateCw size={18} color="#d97706" />
                  <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#92400e' }}>
                    Secuencia del Ciclo Deming (PDCA)
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
                  {[
                    { step: 0, label: '1. Planificar', color: '#0284c7' },
                    { step: 1, label: '2. Hacer', color: '#d97706' },
                    { step: 2, label: '3. Verificar', color: '#059669' },
                    { step: 3, label: '4. Actuar', color: '#7c3aed' }
                  ].map((item) => (
                    <button
                      key={item.step}
                      onClick={() => setPdcaActiveStep(item.step)}
                      style={{
                        padding: '10px 8px',
                        borderRadius: '8px',
                        border: pdcaActiveStep === item.step ? `2px solid ${item.color}` : '1px solid #e2e8f0',
                        background: pdcaActiveStep === item.step ? '#ffffff' : '#f8fafc',
                        color: pdcaActiveStep === item.step ? item.color : '#64748b',
                        fontWeight: 800,
                        fontSize: '11.5px',
                        cursor: 'pointer'
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div
                  style={{
                    background: '#ffffff',
                    padding: '14px',
                    borderRadius: '10px',
                    border: '1px solid #fef3c7',
                    fontSize: '12.5px',
                    color: '#334155',
                    lineHeight: 1.5
                  }}
                >
                  {pdcaActiveStep === 0 && (
                    <div>
                      <strong style={{ color: '#0284c7' }}>1. Planificar (Plan):</strong> Identificar áreas críticas mediante análisis de procesos y encuestas de satisfacción de usuarios para definir objetivos claros y medibles.
                    </div>
                  )}
                  {pdcaActiveStep === 1 && (
                    <div>
                      <strong style={{ color: '#d97706' }}>2. Hacer (Do):</strong> Implementar mejoras planificadas en pruebas piloto controladas y capacitar al personal técnico antes de liberar a producción masiva.
                    </div>
                  )}
                  {pdcaActiveStep === 2 && (
                    <div>
                      <strong style={{ color: '#059669' }}>3. Verificar (Check):</strong> Evaluar resultados frente a metas iniciales mediante medición de KPIs de tickets, retroalimentación y auditorías internas.
                    </div>
                  )}
                  {pdcaActiveStep === 3 && (
                    <div>
                      <strong style={{ color: '#7c3aed' }}>4. Actuar (Act):</strong> Estandarizar y consolidar las soluciones exitosas en manuales de procedimientos y reiniciar el ciclo con nuevos objetivos superiores.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* HERRAMIENTA 3: CHECKLIST DE 6 PASOS ANTE CIBERINCIDENTES */}
            {(selectedDetail.branch === 'seguridad' || selectedDetail.id === 'seg-protocolo') && (
              <div
                style={{
                  background: '#faf5ff',
                  border: '1.5px solid #e9d5ff',
                  borderRadius: '14px',
                  padding: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Shield size={18} color="#7c3aed" />
                    <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#5b21b6' }}>
                      Protocolo de 6 Pasos ante Incidentes
                    </span>
                  </div>
                  <span style={{ fontSize: '11px', color: '#6d28d9', fontWeight: 700 }}>
                    {Object.values(resolvedIncidentSteps).filter(Boolean).length}/6 Completados
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {incidentStepsList.map((item) => {
                    const isChecked = !!resolvedIncidentSteps[item.step];
                    return (
                      <div
                        key={item.step}
                        onClick={() => handleStepCheckbox(item.step)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 10,
                          padding: '10px 12px',
                          borderRadius: '8px',
                          background: isChecked ? '#f0fdf4' : '#ffffff',
                          border: isChecked ? '1.5px solid #86efac' : '1px solid #e2e8f0',
                          cursor: 'pointer',
                          transition: 'all 0.15s'
                        }}
                      >
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: '5px',
                            border: isChecked ? '2px solid #059669' : '2px solid #94a3b8',
                            background: isChecked ? '#059669' : '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ffffff',
                            marginTop: 2,
                            flexShrink: 0
                          }}
                        >
                          {isChecked && <CheckCircle size={14} />}
                        </div>
                        <div>
                          <div style={{ fontSize: '12px', fontWeight: 800, color: isChecked ? '#065f46' : '#0f172a' }}>
                            Paso {item.step}: {item.title}
                          </div>
                          <div style={{ fontSize: '11.5px', color: '#475569', lineHeight: 1.4, marginTop: 2 }}>
                            {item.action}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* HERRAMIENTA 4: EXPLORADOR DE LAS 7 CAPAS */}
            {(selectedDetail.branch === 'seguridad' || selectedDetail.id === 'seg-capas') && (
              <div
                style={{
                  background: '#faf5ff',
                  border: '1.5px solid #e9d5ff',
                  borderRadius: '14px',
                  padding: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <Layers size={18} color="#7c3aed" />
                  <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#5b21b6' }}>
                    Defensa en Profundidad: 7 Capas
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12 }}>
                  {layersList.map((layer, idx) => (
                    <button
                      key={layer.num}
                      onClick={() => setSelectedLayerIndex(idx)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        border: selectedLayerIndex === idx ? '1.5px solid #7c3aed' : '1px solid #e2e8f0',
                        background: selectedLayerIndex === idx ? '#ede9fe' : '#ffffff',
                        color: selectedLayerIndex === idx ? '#5b21b6' : '#334155',
                        fontSize: '11.5px',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      <span>{layer.num} - {layer.name}</span>
                      <span style={{ fontSize: '10px', color: '#7c3aed' }}>Ver detalle →</span>
                    </button>
                  ))}
                </div>

                {layersList[selectedLayerIndex] && (
                  <div
                    style={{
                      background: '#ffffff',
                      padding: '12px',
                      borderRadius: '8px',
                      borderLeft: '4px solid #7c3aed',
                      border: '1px solid #e2e8f0',
                      borderLeftWidth: 4
                    }}
                  >
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#5b21b6', marginBottom: 4 }}>
                      {layersList[selectedLayerIndex].num} - {layersList[selectedLayerIndex].name}
                    </div>
                    <div style={{ fontSize: '11.5px', color: '#334155', marginBottom: 6, lineHeight: 1.4 }}>
                      {layersList[selectedLayerIndex].desc}
                    </div>
                    <div style={{ fontSize: '11px', color: '#b91c1c', fontWeight: 600 }}>
                      ⚠️ <strong>Riesgo mitigado:</strong> {layersList[selectedLayerIndex].threat}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* HERRAMIENTA 5: MODELOS DE SERVICE DESK */}
            {(selectedDetail.branch === 'servicedesk' || selectedDetail.id.startsWith('sd-')) && (
              <div
                style={{
                  background: '#eff6ff',
                  border: '1.5px solid #bfdbfe',
                  borderRadius: '14px',
                  padding: '16px'
                }}
              >
                <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#1e40af', marginBottom: 10 }}>
                  Comparativa de Modelos de Service Desk
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    { model: 'Centralizado', pro: 'Mayor control y procesos uniformes', con: 'Riesgo de saturación con alta demanda' },
                    { model: 'Virtual', pro: 'Flexibilidad geográfica y menor costo', con: 'Dependencia crítica de conectividad' },
                    { model: 'Follow-the-Sun', pro: 'Soporte 24/7 sin turnos nocturnos', con: 'Coordinación compleja entre husos horarios' },
                    { model: 'Jerárquico (N1/N2/N3)', pro: 'Escalación técnica estructurada', con: 'Demoras si el ticket rebota entre niveles' }
                  ].map((m) => (
                    <div
                      key={m.model}
                      style={{
                        padding: '10px 12px',
                        borderRadius: '8px',
                        background: '#ffffff',
                        border: '1px solid #dbeafe'
                      }}
                    >
                      <div style={{ fontSize: '12.5px', fontWeight: 800, color: '#1d4ed8' }}>{m.model}</div>
                      <div style={{ fontSize: '11.5px', color: '#15803d', marginTop: 2 }}>✓ Ventaja: {m.pro}</div>
                      <div style={{ fontSize: '11.5px', color: '#b91c1c', marginTop: 2 }}>✗ Reto: {m.con}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
          Gestión del Servicio de TI · UTP 2026
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
