import React, { useState, useRef } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
} from 'react-flow-renderer';

import { NormalNode, IfElseNode, AnswerNode } from '../Flow/Node';
import Sidebar from '../Sidebar';

const nodeTypes = {
  normal: NormalNode,
  ifElse: IfElseNode,
  answer:AnswerNode,
};

const Sidebar = () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <aside>
            <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'ifElse')} draggable>
                Input Node
            </div>
            <div className="dndnode" onDragStart={(event) => onDragStart(event, 'ifElse')} draggable>
                Default Node
            </div>
            <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'ifElse')} draggable>
                Output Node
            </div>
      </aside>
    );
};

const initialElements = [
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  
  const [elements, setElements] = useState(initialElements);


  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));


  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (event) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const newNode = {
      id: getId(),
      type,
      position,
      data: { title:'Titulo de la pregunta si/no', id:elements.length+1, answers:[{text:'Respuesta 1'}, {text:'Respuesta 1'}] },
      dragHandle: '.drag-handle'
    };

    setElements((es) => es.concat(newNode));
  };

  return (
    <div className="dndflow" style={{backgroundColor:'red'}}>
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}  style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
          <ReactFlow
            nodeTypes={nodeTypes}  
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
          >
            <Controls />
          </ReactFlow>
        </div>
        <Sidebar />
      </ReactFlowProvider>
    </div>
  );
};