import React, { memo } from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';
import { IconRenderer } from '../IconHelper';
import { CustomNodeData } from '../../data/flowElements';

export const DetailNode: React.FC<NodeProps> = memo(({ data, selected }) => {
  const nodeData = data as unknown as CustomNodeData;
  const accent = nodeData.accentColor || '#059669';

  return (
    <div
      className={`concept-node detail-node ${selected ? 'node-selected' : ''}`}
      style={{
        width: 195,
        padding: '14px 12px',
        borderRadius: '12px',
        background: '#ffffff',
        border: selected ? `2.5px solid ${accent}` : `1.5px solid #a7f3d0`,
        boxShadow: selected
          ? `0 10px 22px ${accent}25, 0 3px 6px rgba(0,0,0,0.06)`
          : `0 4px 12px rgba(15, 23, 42, 0.05)`,
        color: '#0f172a',
        position: 'relative',
        transition: 'all 0.25s ease',
        cursor: 'pointer',
        textAlign: 'center'
      }}
    >
      <Handle type="target" position={Position.Top} id="top" style={{ background: accent, width: 7, height: 7 }} />
      <Handle type="target" position={Position.Bottom} id="bottom" style={{ background: accent, width: 7, height: 7 }} />
      <Handle type="source" position={Position.Bottom} id="src-bottom" style={{ background: accent, width: 7, height: 7 }} />

      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: '#d1fae5',
          border: `1.5px solid #6ee7b7`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: accent,
          margin: '0 auto 6px auto'
        }}
      >
        <IconRenderer name={nodeData.iconName} size={17} />
      </div>

      <h5
        style={{
          fontSize: '13.5px',
          fontWeight: 800,
          color: '#065f46',
          margin: '0 0 2px 0'
        }}
      >
        {nodeData.title}
      </h5>

      {nodeData.subtitle && (
        <div style={{ fontSize: '10px', color: '#047857', fontWeight: 700, marginBottom: 4 }}>
          {nodeData.subtitle}
        </div>
      )}

      <p style={{ fontSize: '10.5px', color: '#334155', lineHeight: '1.35', margin: 0, fontWeight: 500 }}>
        {nodeData.summary}
      </p>
    </div>
  );
});
DetailNode.displayName = 'DetailNode';
