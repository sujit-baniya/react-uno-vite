import ReactFlow, {Controls, Background, applyNodeChanges, applyEdgeChanges, addEdge} from '~/packages/flow';
import '~/packages/flow/style.css';
import './text-updater-node.css';

import Circle from "./TextUpdaterNode";
import Triangle from "./TringleNode";
import Trapezoid from "./Trapezoid";
import Rectangle from "./Rectangle";
import {useCallback, useState} from "react";

const initialNodes = [
  { id: 'node-1', type: 'circle', position: { x: 400, y: 0 }, data: { value: 123 } },
  { id: 'node-2', type: 'triangle', position: { x: 10, y: 10 }, data: { value: 123 } },
  { id: 'node-3', type: 'trapezoid', position: { x: 20, y: 20 }, data: { value: 123 } },
  { id: 'node-4', type: 'rectangle', position: { x: 30, y: 30 }, data: { value: 123 } },
];
// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { circle: Circle, triangle: Triangle, trapezoid: Trapezoid, rectangle: Rectangle };

function ShapeFlow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);

  const onNodesChange = useCallback(
      (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
      [setNodes]
  );
  const onEdgesChange = useCallback(
      (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
      [setEdges]
  );
  const onConnect = useCallback(
      (connection) => setEdges((eds) => addEdge(connection, eds)),
      [setEdges]
  );

  return (
      <div style={{ height: '100%' }}>
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
  );
}

export default ShapeFlow;
