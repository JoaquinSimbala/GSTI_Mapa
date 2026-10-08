import React, { memo } from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';
import { IconRenderer } from '../IconHelper';
import { CustomNodeData } from '../../data/flowElements';

export const StepNode: React.FC<NodeProps> = memo(({ data, selected }) => {
  const nodeData = data as unknown as CustomNodeData;
  const accent = nodeData.accentColor || '#d97706';

  return (
    <div
      className={`concept-node step-node ${selected ? 'node-selected' : ''}`}
      style={{
        width: 280,
        padding: '16px 14px',
        borderRadius: '14px',
        background: '#ffffff',
        border: selected ? `2.5px solid ${accent}` : `1.5px solid #cbd5e1`,
        boxShadow: selected
          ? `0 10px 25px ${accent}25, 0 3px 8px rgba(0,0,0,0.06)`
          : `0 6px 16px rgba(15, 23, 42, 0.06), 0 2px 4px rgba(15, 23, 42, 0.03)`,
        color: '#0f172a',
        position: 'relative',
        transition: 'all 0.25s ease',
        cursor: 'pointer'
      }}
    >
      <Handle type="target" position={Position.Top} id="top" style={{ background: accent, width: 8, height: 8 }} />
      <Handle type="target" position={Position.Bottom} id="bottom" style={{ background: accent, width: 8, height: 8 }} />
      <Handle type="target" position={Position.Left} id="left" style={{ background: accent, width: 8, height: 8 }} />
      <Handle type="target" position={Position.Right} id="right" style={{ background: accent, width: 8, height: 8 }} />

      <Handle type="source" position={Position.Top} id="src-top" style={{ background: accent, width: 8, height: 8 }} />
      <Handle type="source" position={Position.Bottom} id="src-bottom" style={{ background: accent, width: 8, height: 8 }} />
      <Handle type="source" position={Position.Left} id="src-left" style={{ background: accent, width: 8, height: 8 }} />
      <Handle type="source" position={Position.Right} id="src-right" style={{ background: accent, width: 8, height: 8 }} />

      {/* Step Badge */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: '7px',
              background: `${accent}18`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: accent
            }}
          >
            <IconRenderer name={nodeData.iconName} size={16} />
          </div>
          <span style={{ fontSize: '11px', color: accent, fontWeight: 800, letterSpacing: '0.04em' }}>
            {nodeData.badge || 'ETAPA'}
          </span>
        </div>

        <span
          style={{
            fontSize: '10px',
            color: '#64748b',
            background: '#f1f5f9',
            padding: '2px 7px',
            borderRadius: '4px',
            fontWeight: 600
          }}
        >
          Ciclo Deming
        </span>
      </div>

      {/* Title */}
      <h4
        style={{
          fontSize: '14px',
          fontWeight: 800,
          color: '#0f172a',
          margin: '0 0 3px 0'
        }}
      >
        {nodeData.title}
      </h4>

      {nodeData.subtitle && (
        <div style={{ fontSize: '11px', color: '#b45309', fontWeight: 600, marginBottom: 6 }}>
          {nodeData.subtitle}
        </div>
      )}

      {/* Summary */}
      <p
        style={{
          fontSize: '11.5px',
          color: '#334155',
          lineHeight: '1.45',
          margin: 0,
          fontWeight: 500
        }}
      >
        {nodeData.summary}
      </p>
    </div>
  );
});
StepNode.displayName = 'StepNode';
