import React, { memo } from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';
import { IconRenderer } from '../IconHelper';
import { CustomNodeData } from '../../data/flowElements';
import { ChevronRight } from 'lucide-react';

export const BranchNode: React.FC<NodeProps> = memo(({ data, selected }) => {
  const nodeData = data as unknown as CustomNodeData;
  const accent = nodeData.accentColor || '#2563eb';

  return (
    <div
      className={`concept-node branch-node ${selected ? 'node-selected' : ''}`}
      style={{
        width: 350,
        padding: '20px 18px',
        borderRadius: '16px',
        background: '#ffffff',
        border: selected ? `2.5px solid ${accent}` : `1.5px solid #cbd5e1`,
        boxShadow: selected
          ? `0 12px 30px ${accent}25, 0 4px 10px rgba(0,0,0,0.06)`
          : `0 8px 20px rgba(15, 23, 42, 0.06), 0 2px 4px rgba(15, 23, 42, 0.04)`,
        color: '#0f172a',
        position: 'relative',
        transition: 'all 0.25s ease'
      }}
    >
      <Handle type="target" position={Position.Top} id="top" style={{ background: accent, width: 10, height: 10, border: '2px solid #ffffff' }} />
      <Handle type="target" position={Position.Bottom} id="bottom" style={{ background: accent, width: 10, height: 10, border: '2px solid #ffffff' }} />
      <Handle type="target" position={Position.Left} id="left" style={{ background: accent, width: 10, height: 10, border: '2px solid #ffffff' }} />
      <Handle type="target" position={Position.Right} id="right" style={{ background: accent, width: 10, height: 10, border: '2px solid #ffffff' }} />

      <Handle type="source" position={Position.Top} id="src-top" style={{ background: accent, width: 10, height: 10, border: '2px solid #ffffff' }} />
      <Handle type="source" position={Position.Bottom} id="src-bottom" style={{ background: accent, width: 10, height: 10, border: '2px solid #ffffff' }} />
      <Handle type="source" position={Position.Left} id="src-left" style={{ background: accent, width: 10, height: 10, border: '2px solid #ffffff' }} />
      <Handle type="source" position={Position.Right} id="src-right" style={{ background: accent, width: 10, height: 10, border: '2px solid #ffffff' }} />

      {/* Accent top stripe */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: accent,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16
        }}
      />

      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: '10px',
              background: `${accent}15`,
              border: `1.5px solid ${accent}40`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: accent
            }}
          >
            <IconRenderer name={nodeData.iconName} size={20} />
          </div>
          <div>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 800,
                color: accent,
                textTransform: 'uppercase',
                letterSpacing: '0.06em'
              }}
            >
              {nodeData.badge || 'EJE TEMÁTICO'}
            </span>
            <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 500 }}>Eje Temático Principal</div>
          </div>
        </div>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: '16px',
          fontWeight: 800,
          color: '#0f172a',
          margin: '0 0 4px 0',
          lineHeight: '1.3'
        }}
      >
        {nodeData.title}
      </h3>

      {/* Subtitle */}
      {nodeData.subtitle && (
        <p
          style={{
            fontSize: '12px',
            color: '#64748b',
            margin: '0 0 10px 0',
            lineHeight: '1.4',
            fontWeight: 500
          }}
        >
          {nodeData.subtitle}
        </p>
      )}

      {/* Summary box */}
      <p
        style={{
          fontSize: '12px',
          color: '#334155',
          lineHeight: '1.5',
          margin: '0 0 12px 0',
          background: '#f8fafc',
          padding: '8px 12px',
          borderRadius: '8px',
          borderLeft: `3px solid ${accent}`,
          fontWeight: 500
        }}
      >
        {nodeData.summary}
      </p>

      {/* Tags & Action */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 8, borderTop: '1px solid #f1f5f9' }}>
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {nodeData.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '10px',
                padding: '2px 6px',
                borderRadius: '4px',
                background: '#f1f5f9',
                color: '#475569',
                fontWeight: 600
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '11.5px', color: accent, fontWeight: 700 }}>
          Detalles <ChevronRight size={13} />
        </div>
      </div>
    </div>
  );
});
BranchNode.displayName = 'BranchNode';
