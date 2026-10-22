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
    branch: 'Núcleo Central SVS',
    title: 'Sistema de Valor del Servicio (SVS) - ITIL 4',
    subtitle: 'Propósito Estratégico y Logro de Sesión UTP',
    description: 'El corazón de ITIL 4: transforma la Demanda y Oportunidades del cliente en Valor tangible y co-creado mediante gobernanza, cadena de valor y prácticas integradas alineadas al negocio.',
    keyHighlight: 'Logro Central: Demostrar capacidad para transformar la demanda en valor tangible con utilidad y garantía.'
  },
  {
    nodeId: 'branch-valor',
    branch: '1. Arquetipos de Valor',
    title: 'Concepción y Arquetipos del Valor',
    subtitle: 'Utilidad + Garantía, Rappaport y los 12 DBMS',
    description: 'El valor requiere idoneidad funcional (Utilidad) y certeza de entrega (Garantía: disponibilidad, capacidad, continuidad y seguridad), complementado por la cadena de Porter y la selección de bases de datos.',
    keyHighlight: 'Ecuación ITIL: Valor = Beneficios Percibidos = Utilidad (Fit for purpose) + Garantía (Fit for use).'
  },
  {
    nodeId: 'branch-svs',
    branch: '2. Componentes SVS',
    title: 'Arquitectura Operativa del SVS',
    subtitle: 'Demanda ➔ Gobernanza ➔ Cadena SVC ➔ Valor',
    description: 'El flujo de extremo a extremo que conecta la Oportunidad/Demanda inicial con el resultado de valor a través de la Gobernanza directiva, las 6 actividades de la Cadena de Valor (SVC) y 34 prácticas.',
    keyHighlight: 'Operación Ágil: La Cadena de Valor (SVC) combina 6 actividades modulares para crear flujos de valor flexibles.'
  },
  {
    nodeId: 'branch-principios',
    branch: '3. 7 Principios ITIL',
    title: 'Los 7 Principios Rectores de ITIL 4',
    subtitle: 'Guías Universales para Decisiones en TI',
    description: 'Recomendaciones imperecederas: 1. Centrarse en valor, 2. Comenzar donde se está, 3. Progresar iterativamente con feedback, 4. Colaborar y visibilidad, 5. Pensar holísticamente, 6. Mantenerlo simple, y 7. Optimizar y automatizar.',
    keyHighlight: 'Regla de Oro: Simplificar y optimizar procesos antes de automatizarlos, y basarse en sprints con Scrum y PDCA.'
  },
  {
    nodeId: 'branch-practica',
    branch: '4. Casos Prácticos UTP',
    title: 'Casos Prácticos y Demostración de Aprendizaje',
    subtitle: 'Aplicación en Web, Bases de Datos y Matriz SVS',
    description: 'Resolución de los 3 casos de la sesión: Caso 01 (Sistema Web con BD generador de valor), Caso 02 (Cuadro comparativo analítico de principios) y Caso 03 (Mapa conceptual de la sesión).',
    keyHighlight: 'Aplicación Real: Demostrar cómo una arquitectura web en la nube entrega valor tangible reduciendo costos y fallas.'
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
