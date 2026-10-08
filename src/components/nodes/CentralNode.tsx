import React, { memo } from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';
import { Sparkles, Eye } from 'lucide-react';
import { CustomNodeData } from '../../data/flowElements';

export const CentralNode: React.FC<NodeProps> = memo(({ data, selected }) => {
  const nodeData = data as unknown as CustomNodeData;

  return (
    <div
      className={`concept-node central-node ${selected ? 'node-selected' : ''}`}
      style={{
        width: 390,
        padding: '24px 22px',
        borderRadius: '18px',
        background: '#ffffff',
        border: selected ? '2.5px solid #4f46e5' : '2px solid #6366f1',
        boxShadow: selected
          ? '0 12px 35px rgba(79, 70, 229, 0.25), 0 4px 10px rgba(0, 0, 0, 0.06)'
          : '0 10px 25px rgba(15, 23, 42, 0.08), 0 2px 6px rgba(15, 23, 42, 0.04)',
        color: '#0f172a',
        position: 'relative',
        transition: 'all 0.25s ease'
      }}
    >
      {/* Handles */}
      <Handle type="source" position={Position.Top} id="top" style={{ background: '#4f46e5', width: 12, height: 12, border: '2px solid #ffffff' }} />
      <Handle type="source" position={Position.Bottom} id="bottom" style={{ background: '#4f46e5', width: 12, height: 12, border: '2px solid #ffffff' }} />
      <Handle type="source" position={Position.Left} id="left" style={{ background: '#4f46e5', width: 12, height: 12, border: '2px solid #ffffff' }} />
      <Handle type="source" position={Position.Right} id="right" style={{ background: '#4f46e5', width: 12, height: 12, border: '2px solid #ffffff' }} />
      <Handle type="target" position={Position.Top} id="target-top" style={{ opacity: 0 }} />
      <Handle type="target" position={Position.Bottom} id="target-bottom" style={{ opacity: 0 }} />

      {/* Header Badge */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: '#eef2ff',
            color: '#4338ca',
            border: '1px solid #c7d2fe',
            padding: '4px 12px',
            borderRadius: '999px',
            fontSize: '11px',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.06em'
          }}
        >
          <Sparkles size={13} className="spin-slow" />
          NÚCLEO PRINCIPAL
        </span>
        <span
          style={{
            fontSize: '11px',
            color: '#64748b',
            background: '#f1f5f9',
            padding: '3px 8px',
            borderRadius: '6px',
            fontWeight: 600
          }}
        >
          UTP Semana 9
        </span>
      </div>

      {/* Title */}
      <h2
        style={{
          fontSize: '19px',
          fontWeight: 800,
          lineHeight: '1.25',
          margin: '0 0 6px 0',
          color: '#1e1b4b',
          letterSpacing: '-0.02em'
        }}
      >
        {nodeData.title}
      </h2>

      {/* Subtitle */}
      <p
        style={{
          fontSize: '12px',
          color: '#475569',
          margin: '0 0 14px 0',
          lineHeight: '1.45',
          fontWeight: 500
        }}
      >
        {nodeData.subtitle}
      </p>

      {/* Purpose list */}
      <div
        style={{
          background: '#f8fafc',
          border: '1.5px solid #e2e8f0',
          borderRadius: '12px',
          padding: '12px 14px',
          marginBottom: '16px'
        }}
      >
        <div style={{ fontSize: '11px', fontWeight: 800, color: '#4338ca', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Propósito Fundamental:
        </div>
        <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '12px', color: '#334155', lineHeight: '1.55', fontWeight: 500 }}>
          <li>Mantener competitividad, adaptarse al cambio.</li>
          <li>Satisfacer al cliente interno y externo.</li>
          <li>Reducir costos y eliminar desperdicios (Lean IT).</li>
          <li>Impulsar la productividad permanente.</li>
        </ul>
      </div>

      {/* Action Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          {nodeData.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '10.5px',
                padding: '2px 8px',
                borderRadius: '6px',
                background: '#eef2ff',
                color: '#4338ca',
                fontWeight: 700
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        <button
          className="node-action-btn"
          title="Ver análisis completo en el panel"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            fontSize: '11.5px',
            fontWeight: 700,
            color: '#ffffff',
            background: 'linear-gradient(135deg, #4f46e5, #4338ca)',
            border: 'none',
            padding: '6px 14px',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 3px 8px rgba(79, 70, 229, 0.3)'
          }}
        >
          <Eye size={12} />
          Explorar
        </button>
      </div>
    </div>
  );
});
CentralNode.displayName = 'CentralNode';
