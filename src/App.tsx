import React, { useState, useCallback, useMemo } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
  BackgroundVariant,
  Panel
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { INITIAL_NODES, INITIAL_EDGES, CustomNodeData } from './data/flowElements';
import { CONCEPT_DETAILS, NodeDetailData } from './data/mapData';

import { CentralNode } from './components/nodes/CentralNode';
import { BranchNode } from './components/nodes/BranchNode';
import { ConceptNode } from './components/nodes/ConceptNode';
import { StepNode } from './components/nodes/StepNode';
import { DetailNode } from './components/nodes/DetailNode';

import { HeaderNav } from './components/HeaderNav';
import { SidebarDrawer } from './components/SidebarDrawer';
import { GuidedTourModal } from './components/GuidedTourModal';

const FlowCanvas: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);
  const [edges, setEdges, onEdgesChange] = useEdgesState(INITIAL_EDGES);
  const reactFlow = useReactFlow();

  const [selectedDetail, setSelectedDetail] = useState<NodeDetailData | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isTourOpen, setIsTourOpen] = useState<boolean>(false);

  const nodeTypes = useMemo(
    () => ({
      centralNode: CentralNode,
      branchNode: BranchNode,
      conceptNode: ConceptNode,
      stepNode: StepNode,
      detailNode: DetailNode
    }),
    []
  );

  // Focus and center on a specific node with smooth animation
  const handleFocusNode = useCallback(
    (nodeId: string) => {
      const targetNode = nodes.find((n) => n.id === nodeId);
      if (targetNode) {
        reactFlow.setCenter(targetNode.position.x + 160, targetNode.position.y + 80, {
          zoom: 1.05,
          duration: 800
        });
        const detail = CONCEPT_DETAILS[nodeId];
        if (detail) {
          setSelectedDetail(detail);
        }
      }
    },
    [nodes, reactFlow]
  );

  // On node click
  const onNodeClick = useCallback((_event: React.MouseEvent, node: any) => {
    const detail = CONCEPT_DETAILS[node.id];
    if (detail) {
      setSelectedDetail(detail);
    }
  }, []);

  // Filter branches
  const handleFilterChange = useCallback(
    (branchId: string) => {
      setActiveFilter(branchId);
      if (branchId === 'all') {
        setNodes((nds) =>
          nds.map((n) => ({
            ...n,
            style: { ...n.style, opacity: 1, filter: 'none' }
          }))
        );
        setEdges((eds) =>
          eds.map((e) => ({
            ...e,
            style: { ...e.style, opacity: 1 }
          }))
        );
        setTimeout(() => {
          reactFlow.fitView({ padding: 0.12, duration: 800 });
        }, 50);
      } else {
        setNodes((nds) =>
          nds.map((n) => {
            const data = n.data as CustomNodeData;
            const matches = data.branch === branchId || n.id === 'central-node';
            return {
              ...n,
              style: {
                ...n.style,
                opacity: matches ? 1 : 0.18,
                filter: matches ? 'none' : 'grayscale(90%)'
              }
            };
          })
        );

        setEdges((eds) =>
          eds.map((e) => {
            const src = nodes.find((n) => n.id === e.source)?.data as CustomNodeData;
            const tgt = nodes.find((n) => n.id === e.target)?.data as CustomNodeData;
            const matches =
              (src?.branch === branchId || e.source === 'central-node') &&
              (tgt?.branch === branchId || e.target === 'central-node');
            return {
              ...e,
              style: {
                ...e.style,
                opacity: matches ? 1 : 0.12
              }
            };
          })
        );

        // Center on the branch root
        const branchRootId =
          branchId === 'fundamentos'
            ? 'branch-fundamentos'
            : branchId === 'pdca'
            ? 'branch-pdca'
            : branchId === 'servicedesk'
            ? 'branch-servicedesk'
            : 'branch-seguridad';
        const targetNode = nodes.find((n) => n.id === branchRootId);
        if (targetNode) {
          reactFlow.setCenter(targetNode.position.x + 160, targetNode.position.y + 100, {
            zoom: 0.9,
            duration: 800
          });
        }
      }
    },
    [nodes, reactFlow, setNodes, setEdges]
  );

  // Reset view to overview
  const handleResetView = useCallback(() => {
    setActiveFilter('all');
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        style: { ...n.style, opacity: 1, filter: 'none' }
      }))
    );
    setEdges((eds) =>
      eds.map((e) => ({
        ...e,
        style: { ...e.style, opacity: 1 }
      }))
    );
    reactFlow.fitView({ padding: 0.1, duration: 800 });
  }, [reactFlow, setNodes, setEdges]);

  return (
    <div
      className="app-container light-theme"
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        background: '#f8fafc',
        overflow: 'hidden'
      }}
    >
      {/* Top Header Bar */}
      <HeaderNav
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
        onSearchSelect={handleFocusNode}
        onStartTour={() => setIsTourOpen(true)}
        onResetView={handleResetView}
      />

      {/* Main React Flow Canvas */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.18 }}
        minZoom={0.2}
        maxZoom={2.2}
        defaultViewport={{ x: 0, y: 0, zoom: 0.6 }}
        style={{
          background: '#f8fafc'
        }}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={24}
          size={1.5}
          color="rgba(100, 116, 139, 0.22)"
        />

        <Controls
          position="bottom-left"
          style={{
            background: '#ffffff',
            border: '1.5px solid #cbd5e1',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 6px 18px rgba(15, 23, 42, 0.08)',
            fill: '#334155'
          }}
        />

        <MiniMap
          position="bottom-right"
          nodeColor={(node) => {
            const data = node.data as CustomNodeData;
            switch (data.branch) {
              case 'central':
                return '#4f46e5';
              case 'fundamentos':
                return '#059669';
              case 'pdca':
                return '#d97706';
              case 'servicedesk':
                return '#2563eb';
              case 'seguridad':
                return '#7c3aed';
              default:
                return '#94a3b8';
            }
          }}
          maskColor="rgba(241, 245, 249, 0.75)"
          style={{
            background: '#ffffff',
            border: '1.5px solid #cbd5e1',
            borderRadius: '12px',
            width: 180,
            height: 120,
            boxShadow: '0 8px 20px rgba(15, 23, 42, 0.08)'
          }}
        />

        {/* Floating Quick Legend Bar */}
        <Panel position="bottom-center" className="bottom-legend-panel">
          <div className="bottom-legend-card">
            <div className="legend-items">
              <span className="legend-item">
                <span className="legend-dot" style={{ background: '#4f46e5' }} /> Núcleo Central
              </span>
              <span className="legend-item">
                <span className="legend-dot" style={{ background: '#059669' }} /> 1. Fundamentos
              </span>
              <span className="legend-item">
                <span className="legend-dot" style={{ background: '#d97706' }} /> 2. Ciclo PDCA
              </span>
              <span className="legend-item">
                <span className="legend-dot" style={{ background: '#2563eb' }} /> 3. Service Desk
              </span>
              <span className="legend-item">
                <span className="legend-dot" style={{ background: '#7c3aed' }} /> 4. Ciberseguridad
              </span>
            </div>
            <span className="legend-divider">|</span>
            <span className="legend-hint">
              💡 Haz clic en cualquier cuadro para desplegar su información detallada
            </span>
          </div>
        </Panel>
      </ReactFlow>

      {/* Slide-over Side Drawer */}
      <SidebarDrawer
        selectedDetail={selectedDetail}
        onClose={() => setSelectedDetail(null)}
        onNavigateToNode={handleFocusNode}
      />

      {/* Guided Tour Modal */}
      <GuidedTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onFocusNode={handleFocusNode}
      />
    </div>
  );
};

export default function App() {
  return (
    <ReactFlowProvider>
      <FlowCanvas />
    </ReactFlowProvider>
  );
}
