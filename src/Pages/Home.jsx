import React, { useState, useCallback } from 'react';
import Flow from '../Components/Flow';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import TextUpdaterNode from '../Components/TextUpdaterNode';
import {
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from '@xyflow/react';

const initialNodes = [];
const initialEdges = [];

const nodeTypes = { textUpdater: TextUpdaterNode };

const Home = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [error, setError] = useState('');

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => {
        const alreadyHasSource = eds.some((e) => e.source === params.source);
        if (alreadyHasSource) return eds;
        return addEdge(params, eds);
      }),
    []
  );

  const onNodeClick = useCallback((_, node) => {
    setSelectedNodeId(node.id);
  }, []);

  const selectedNode = nodes.find((n) => n.id === selectedNodeId) || null;

  // ✅ Save button logic
  const handleSave = () => {
  setError(''); // reset error

  if (nodes.length <= 1) {
    alert('Flow saved successfully!');
    return;
  }

  // Find nodes with no connections at all (isolated nodes)
  const isolatedNodes = nodes.filter((node) => {
    const hasOutgoing = edges.some((e) => e.source === node.id);
    const hasIncoming = edges.some((e) => e.target === node.id);
    return !hasOutgoing && !hasIncoming;
  });

  if (isolatedNodes.length > 0) {
    setError('Cannot save flow');
    return;
  }

  alert('Flow saved successfully!');
};


  return (
    <div>
      <Navbar onSave={handleSave} error={error} />

      <div className="flex mt-2">
        <div className="w-screen h-[35rem]">
          <Flow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            onNodeClick={onNodeClick}
          />
        </div>

        <Sidebar
          setNodes={setNodes}
          setEdges={setEdges}
          selectedNode={selectedNode}
          clearSelection={() => setSelectedNodeId(null)}
        />
      </div>
    </div>
  );
};

export default Home;
