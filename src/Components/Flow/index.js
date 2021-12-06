import React from 'react';
import Edge from './Edge';
import { NormalNode, IfElseNode, AnswerNode } from './Node';
import ReactFlow, { removeElements, addEdge, ReactFlowProvider, Controls } from 'react-flow-renderer';

import Sidebar from '../Sidebar';

const nodeTypes = {
  normal: NormalNode,
  ifElse: IfElseNode,
  answer:AnswerNode,
};

const edgeTypes = {
  custom: Edge,
};

const initialElements = [
];

let id = 0;
const getId = () => `dndnode_${id++}`;

export default () => {
  const reactFlowWrapper = React.useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = React.useState(null);

  
  const [elements, setElements] = React.useState(initialElements);


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
      data: { title:'Titulo de la pregunta', id:elements.length+1, answers:[{text:'Respuesta 1'}, {text:'Respuesta 1'}] },
      dragHandle: '.drag-handle',
      animated: true,
      style: { stroke: 'red' },
    };

    setElements((es) => es.concat(newNode));
  };

  return (
    <div className="dndflow" style={{backgroundColor:'red'}}>
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}  style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
          <ReactFlow
            nodeTypes={nodeTypes} 
            edgeTypes={edgeTypes} 
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
          >
            <Controls/>
          </ReactFlow>
        </div>
        <Sidebar 
          nodes={[
            {
              name:'Nodo normal',
              color:'#e67e22',
              type:'normal'
            },
            {
              name:'Nodo Si/No',
              color:'#9b59b6',
              type:'ifElse'
            },
            {
              name:'Nodo respuesta',
              color:'#3498db',
              type:'answer'
            }
          ]}
        />
      </ReactFlowProvider>
    </div>
  );
};