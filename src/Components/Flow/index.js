import React from 'react';
import Edge from './Edge';
import { NormalNode, IfElseNode, AnswerNode } from './Node';
import ReactFlow, { removeElements, addEdge } from 'react-flow-renderer';

const nodeTypes = {
  normal: NormalNode,
  ifElse: IfElseNode,
  answer:AnswerNode,
};

const edgeTypes = {
  custom: Edge,
};

export default ({ initialElements=[] }) => {

  const [elements, setElements] = React.useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => {
    setElements((els) => addEdge({
      ...params, 
      animated: true,
      style: { 
        stroke: '#15295c', 
        strokeWidth:3 
      },
    }
    , els));
    console.log(params)
  }

  React.useEffect(()=>{
    setElements(initialElements);
  },[initialElements])

  return (
    <div style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>

      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        nodeTypes={nodeTypes}      
        edgeTypes={edgeTypes} 
        onElementClick={(e)=>{
          console.log('event handler',Object.keys(e), e.type==='click')
          if(e.type==='click')
            alert('Click')
        }}
      />

    </div>
  )
}