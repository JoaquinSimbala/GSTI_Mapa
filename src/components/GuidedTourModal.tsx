import React, { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, Compass } from 'lucide-react';

interface TourStep {
  nodeId: string;
  branch: string;
  title: string;
  subtitle: string;
  description: string;
  keyHighlight: string;
}

const TOUR_STEPS: TourStep[] = [
  {
    nodeId: 'central-node',
    branch: 'Núcleo Central',
    title: 'Mejora Continua del Servicio de TI',
    subtitle: 'Propósito Estratégico y Calidad',
    description: 'El núcleo del modelo: mantener la competitividad de la organización, adaptarse al cambio, satisfacer al cliente, reducir costos operativos, eliminar desperdicios (Lean IT) e impulsar la productividad técnica.',
    keyHighlight: 'Propósito: Mantener competitividad, adaptarse al cambio y reducir costos operativos con Lean IT.'
  },
  {
    nodeId: 'branch-fundamentos',
    branch: 'Fundamentos',
    title: 'Fundamentos y Rendimiento Global',
    subtitle: 'Eficacia + Eficiencia = Efectividad',
    description: 'Para mejorar hay que medir. El rendimiento global no se logra solo alcanzando metas a cualquier costo, sino optimizando cada recurso invertido para generar verdadera efectividad del servicio.',
    keyHighlight: 'Ecuación Clave: Eficacia (logro de metas) + Eficiencia (optimización de recursos) = Efectividad integral.'
  },
  {
    nodeId: 'branch-pdca',
    branch: 'Ciclo PDCA',
    title: 'Metodología Cíclica: Ciclo PDCA (Deming)',
    subtitle: 'Planificar, Hacer, Verificar, Actuar',
    description: 'La base iterativa universal de ISO 9001. Comienza analizando procesos y encuestas (Plan), ejecuta pilotos controlados (Do), mide KPIs y feedback (Check), y consolida mediante manuales antes de reiniciar la espiral (Act).',
    keyHighlight: 'Repetición continua: El ciclo nunca termina; cada vuelta eleva el estándar de calidad del servicio.'
  },
  {
    nodeId: 'branch-servicedesk',
    branch: 'Service Desk',
    title: 'Service Desk y Gestión de Cambios',
    subtitle: 'Operaciones ITSM y Estabilidad',
    description: 'El punto único de contacto (SPOC) que opera con modelos Centralizado, Virtual o Follow-the-Sun. Se apoya en ServiceNow/Zendesk e impone los 4 Controles de Cambio (RFC, Evaluación, Implementación Controlada y Monitoreo).',
    keyHighlight: 'Regla de Oro: Toda modificación en producción debe contar con evaluación de riesgos y plan de rollback.'
  },
  {
    nodeId: 'branch-seguridad',
    branch: 'Seguridad & ISO',
    title: 'Marcos Normativos y Gestión de Seguridad',
    subtitle: 'Ecosistema ISO, 6 Pasos y 7 Capas',
    description: 'Gobernanza bajo ISO 38500, riesgos bajo ISO 31000/27005 y seguridad con ISO 27001/27032. Incluye el protocolo de 6 pasos ante ciberincidentes y la defensa en profundidad en 7 capas (desde física hasta humana).',
    keyHighlight: 'Ciberdefensa: El usuario es la 7ª capa (humana) y la última línea de defensa ante ciberamenazas.'
  }
];

interface GuidedTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFocusNode: (nodeId: string) => void;
}

export const GuidedTourModal: React.FC<GuidedTourModalProps> = ({ isOpen, onClose, onFocusNode }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  useEffect(() => {
    if (isOpen) {
      onFocusNode(TOUR_STEPS[currentStep].nodeId);
    }
  }, [isOpen, currentStep, onFocusNode]);

  if (!isOpen) return null;

  const step = TOUR_STEPS[currentStep];

  const handleNext = () => {
    if (currentStep < TOUR_STEPS.length - 1) {
      const next = currentStep + 1;
      setCurrentStep(next);
      onFocusNode(TOUR_STEPS[next].nodeId);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      const prev = currentStep - 1;
      setCurrentStep(prev);
      onFocusNode(TOUR_STEPS[prev].nodeId);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '540px',
        maxWidth: '92vw',
        background: '#ffffff',
        border: '2px solid #6366f1',
        boxShadow: '0 16px 40px rgba(15, 23, 42, 0.16)',
        borderRadius: '18px',
        zIndex: 1050,
        padding: '20px 22px',
        color: '#0f172a',
        animation: 'fadeInUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div
            style={{
              padding: '4px 10px',
              borderRadius: '6px',
              background: '#eef2ff',
              color: '#4338ca',
              fontSize: '11.5px',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: 4
            }}
          >
            <Compass size={14} />
            {step.branch} · Paso {currentStep + 1} de {TOUR_STEPS.length}
          </div>
        </div>

        <button
          onClick={onClose}
          aria-label="Cerrar tour"
          style={{
            background: '#f1f5f9',
            border: 'none',
            color: '#64748b',
            borderRadius: '6px',
            width: 28,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={16} />
        </button>
      </div>

      {/* Content */}
      <h3 style={{ margin: '0 0 4px 0', fontSize: '16.5px', fontWeight: 800, color: '#0f172a' }}>
        {step.title}
      </h3>
      <div style={{ fontSize: '12px', color: '#4f46e5', fontWeight: 700, marginBottom: 10 }}>
        {step.subtitle}
      </div>

      <p style={{ fontSize: '13px', color: '#334155', lineHeight: 1.5, margin: '0 0 12px 0', fontWeight: 500 }}>
        {step.description}
      </p>

      {/* Highlight Box */}
      <div
        style={{
          background: '#eef2ff',
          borderLeft: '4px solid #4f46e5',
          padding: '10px 14px',
          borderRadius: '6px',
          fontSize: '12px',
          color: '#1e1b4b',
          marginBottom: 16,
          fontWeight: 600
        }}
      >
        💡 <strong>Clave:</strong> {step.keyHighlight}
      </div>

      {/* Footer controls & dots */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {TOUR_STEPS.map((_, i) => (
            <div
              key={i}
              onClick={() => {
                setCurrentStep(i);
                onFocusNode(TOUR_STEPS[i].nodeId);
              }}
              style={{
                width: currentStep === i ? 22 : 7,
                height: 7,
                borderRadius: 4,
                background: currentStep === i ? '#4f46e5' : '#cbd5e1',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              padding: '7px 14px',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              background: '#f8fafc',
              color: currentStep === 0 ? '#94a3b8' : '#334155',
              fontSize: '11.5px',
              fontWeight: 700,
              cursor: currentStep === 0 ? 'not-allowed' : 'pointer'
            }}
          >
            <ChevronLeft size={14} /> Anterior
          </button>

          <button
            onClick={handleNext}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              padding: '7px 18px',
              borderRadius: '8px',
              border: 'none',
              background: 'linear-gradient(135deg, #4f46e5, #4338ca)',
              color: '#ffffff',
              fontSize: '11.5px',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: '0 3px 8px rgba(79, 70, 229, 0.3)'
            }}
          >
            {currentStep === TOUR_STEPS.length - 1 ? 'Finalizar' : 'Siguiente'}
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
