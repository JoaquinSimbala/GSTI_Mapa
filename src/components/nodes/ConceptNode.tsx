import React, { memo } from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';
import { IconRenderer } from '../IconHelper';
import { CustomNodeData } from '../../data/flowElements';
import { ExternalLink } from 'lucide-react';

export const ConceptNode: React.FC<NodeProps> = memo(({ data, selected }) => {
  const nodeData = data as unknown as CustomNodeData;
  const accent = nodeData.accentColor || '#4f46e5';

  return (
    <div
      className={`concept-node ${selected ? 'node-selected' : ''}`}
      style={{
        width: 320,
        padding: '16px 16px',
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

      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: '8px',
              background: `${accent}15`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: accent
            }}
          >
            <IconRenderer name={nodeData.iconName} size={17} />
          </div>
          <span style={{ fontSize: '10.5px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
            {nodeData.branchLabel}
          </span>
        </div>

        {nodeData.badge && (
          <span
            style={{
              fontSize: '10.5px',
              color: accent,
              background: `${accent}12`,
              border: `1px solid ${accent}30`,
              padding: '2px 8px',
              borderRadius: '999px',
              fontWeight: 700
            }}
          >
            {nodeData.badge}
          </span>
        )}
      </div>

      {/* Title */}
      <h4
        style={{
          fontSize: '14.5px',
          fontWeight: 800,
          color: '#0f172a',
          margin: '0 0 3px 0',
          lineHeight: '1.3'
        }}
      >
        {nodeData.title}
      </h4>

      {/* Subtitle */}
      {nodeData.subtitle && (
        <div style={{ fontSize: '11.5px', color: accent, fontWeight: 600, marginBottom: 8 }}>
          {nodeData.subtitle}
        </div>
      )}

      {/* Summary with whitespace preservation */}
      <div
        style={{
          fontSize: '11.5px',
          color: '#334155',
          lineHeight: '1.45',
          margin: '0 0 10px 0',
          whiteSpace: 'pre-line',
          fontWeight: 500
        }}
      >
        {nodeData.summary}
      </div>

      {/* Tags & Action icon */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 8, borderTop: '1px solid #f1f5f9' }}>
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {nodeData.tags?.slice(0, 2).map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '9.5px',
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

        <span style={{ fontSize: '10.5px', color: accent, display: 'flex', alignItems: 'center', gap: 3, fontWeight: 700 }}>
          Ver detalle <ExternalLink size={10} />
        </span>
      </div>
    </div>
  );
});
ConceptNode.displayName = 'ConceptNode';
