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
    branch: 'Núcleo Central S13',
    title: 'Prácticas de Gestión ITIL & Esquema de Certificación',
    subtitle: 'Propósito Estratégico y Logro de Sesión 13 (UTP)',
    description: 'Marco integrador que comprende las prácticas de gestión de servicios (12 generales y 3 técnicas), normas internacionales (ISO 20000, ISO 22237, ISO 31000, COBIT) y el esquema de certificación PeopleCert para optimizar la calidad y el valor en organizaciones.',
    keyHighlight: 'Logro Central: Comprender los fundamentos de práctica de gestión de servicios de TI y el esquema de certificación en las organizaciones.'
  },
  {
    nodeId: 'branch-generales',
    branch: '1. Prácticas Generales ITIL',
    title: 'Prácticas de Gestión General (12 Prácticas)',
    subtitle: 'Gobernanza, Arquitectura, Riesgos, Finanzas y Mejora Continua',
    description: 'Capacidades directivas esenciales: Arquitectura (Data Platforms), Mejora Continua (Ciclo PDCA), Seguridad CIA, Conocimiento (KEDB), Medición/KPIs, Cambio Organizacional (OCM), Cartera/Portfolio, Proyectos, Finanzas (CapEx/OpEx), Relaciones (BRM), Riesgos (ISO 31000) y Proveedores (UCs).',
    keyHighlight: 'Alineación: Estandarizan las operaciones de TI, alinean tecnología al negocio y optimizan la calidad y confiabilidad de servicios.'
  },
  {
    nodeId: 'branch-tecnicas',
    branch: '2. Prácticas Técnicas y Despliegue',
    title: 'Prácticas de Gestión Técnica & Despliegue',
    subtitle: 'Ingeniería de Software, CI/CD, Infraestructura y Redes',
    description: 'Cubren las capacidades técnicas para mantener y desarrollar los servicios: Gestión de Despliegues (Blue-Green/Canary/Rollback), Pipeline CI/CD automatizado, Gestión de Infraestructura (ISO/IEC 22237), Arreglos RAID (0, 1, 0+1), Redes OSPF/EIGRP/SD-WAN, Cloud Peering (AWS/Oracle) y la Anatomía Web Moderna explicada con la Metáfora Culinaria.',
    keyHighlight: 'Capacidades Técnicas: Garantizan el funcionamiento continuo, alta disponibilidad y entrega continua de software seguro.'
  },
  {
    nodeId: 'branch-certificacion',
    branch: '3. Certificación ITIL & Estándares',
    title: 'Esquema de Certificación ITIL & Gobernanza',
    subtitle: 'PeopleCert vs ATO, Costos Oficiales y Marcos Globales',
    description: 'Estándar mundial para ITSM. Detalla la inversión requerida: modalidad autodidacta ($680 - $865 pagados a PeopleCert) vs. curso oficial ATO ($500 - $2,500). Integra las 4 Dimensiones de ITIL 4 y los marcos complementarios: COBIT 2019 (Gobierno EDM), ISO/IEC 20000 (Certificación organizacional), ISO/IEC 22237 e ISO 31000.',
    keyHighlight: 'Valor Profesional: Credencial reconocida globalmente que acredita el dominio de la gestión de servicios y eleva el perfil profesional.'
  },
  {
    nodeId: 'branch-practica',
    branch: '4. Casos Prácticos UTP',
    title: 'Práctica y Casos de Aplicación UTP',
    subtitle: 'Resolución de Casos de Sesión 13, PDCA y Avance de Proyecto',
    description: 'Actividades de aplicación de la sesión: Caso 01 (diseño de un caso práctico aplicando una práctica de gestión de servicios), Caso 02 (construcción de mapa conceptual interactivo) y Caso 03 (sustentación del Capítulo III del proyecto de TI), estructurados bajo el Ciclo Deming (PDCA) y el enfoque Problem-Solution-Quality.',
    keyHighlight: 'Aplicación Real: Demostrar competencias resolviendo casos organizacionales y defendiendo el avance del proyecto.'
  }
];

interface GuidedTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFocusNode: (nodeId: string) => void;
}

export const GuidedTourModal: React.FC<GuidedTourModalProps> = ({
  isOpen,
  onClose,
  onFocusNode
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      onFocusNode(TOUR_STEPS[0].nodeId);
    }
  }, [isOpen, onFocusNode]);

  if (!isOpen) return null;

  const step = TOUR_STEPS[currentStep];

  const handleNext = () => {
    if (currentStep < TOUR_STEPS.length - 1) {
      const nextIdx = currentStep + 1;
      setCurrentStep(nextIdx);
      onFocusNode(TOUR_STEPS[nextIdx].nodeId);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      const prevIdx = currentStep - 1;
      setCurrentStep(prevIdx);
      onFocusNode(TOUR_STEPS[prevIdx].nodeId);
    }
  };

  const handleJumpToStep = (index: number) => {
    setCurrentStep(index);
    onFocusNode(TOUR_STEPS[index].nodeId);
  };

  return (
    <div
      className="tour-modal-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(15, 23, 42, 0.45)',
        backdropFilter: 'blur(4px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div
        className="tour-card"
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '560px',
          boxShadow: '0 25px 60px rgba(15, 23, 42, 0.25)',
          border: '1.5px solid #e2e8f0',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          animation: 'fadeInScale 0.25s ease'
        }}
      >
        {/* Top Header */}
        <div
          style={{
            padding: '18px 24px',
            borderBottom: '1px solid #f1f5f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#f8fafc'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: '8px',
                background: '#eef2ff',
                color: '#4f46e5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Compass size={18} />
            </div>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#4f46e5', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Recorrido Pedagógico Guiado
              </span>
              <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Paso {currentStep + 1} de {TOUR_STEPS.length}: {step.branch}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: '#e2e8f0',
              border: 'none',
              borderRadius: '8px',
              width: 30,
              height: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#475569',
              cursor: 'pointer'
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '24px 26px', flex: 1 }}>
          <div style={{ marginBottom: 12 }}>
            <h4 style={{ fontSize: '19px', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0', lineHeight: 1.3 }}>
              {step.title}
            </h4>
            <p style={{ fontSize: '13px', color: '#64748b', margin: 0, fontWeight: 500 }}>
              {step.subtitle}
            </p>
          </div>

          <p style={{ fontSize: '13.5px', color: '#334155', lineHeight: '1.6', marginBottom: 16 }}>
            {step.description}
          </p>

          <div
            style={{
              padding: '12px 14px',
              borderRadius: '10px',
              background: '#f0fdf4',
              border: '1px solid #bbf7d0',
              color: '#166534',
              fontSize: '12.5px',
              lineHeight: 1.5
            }}
          >
            <span style={{ fontWeight: 700 }}>💡 Punto Clave: </span>
            {step.keyHighlight}
          </div>
        </div>

        {/* Footer Navigation */}
        <div
          style={{
            padding: '16px 24px',
            borderTop: '1px solid #f1f5f9',
            background: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Step dots */}
          <div style={{ display: 'flex', gap: 6 }}>
            {TOUR_STEPS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleJumpToStep(idx)}
                style={{
                  width: idx === currentStep ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: idx === currentStep ? '#4f46e5' : '#cbd5e1',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                aria-label={`Ir al paso ${idx + 1}`}
              />
            ))}
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                padding: '8px 14px',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                background: '#ffffff',
                color: currentStep === 0 ? '#94a3b8' : '#334155',
                fontSize: '13px',
                fontWeight: 600,
                cursor: currentStep === 0 ? 'not-allowed' : 'pointer'
              }}
            >
              <ChevronLeft size={16} />
              <span>Anterior</span>
            </button>

            <button
              onClick={handleNext}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                padding: '8px 18px',
                borderRadius: '8px',
                border: 'none',
                background: '#4f46e5',
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(79, 70, 229, 0.3)'
              }}
            >
              <span>{currentStep === TOUR_STEPS.length - 1 ? 'Finalizar' : 'Siguiente'}</span>
              {currentStep < TOUR_STEPS.length - 1 && <ChevronRight size={16} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
