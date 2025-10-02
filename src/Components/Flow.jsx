import React from 'react';
import { ReactFlow, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

function Flow({ nodes, edges, onNodesChange, onEdgesChange, onConnect, nodeTypes, onNodeClick }) {

  const edgesWithArrows = edges.map((edge) => ({
    ...edge,
    markerEnd: {
      type: 'arrowclosed', // closed arrow
      color: '#555',       // arrow color
      width: 10,
      height: 10,
    },
    style: { stroke: '#555', strokeWidth: 2 }, // edge line color & thickness
  }));


  return (
    <div style={{ height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edgesWithArrows}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        fitView
      >
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
