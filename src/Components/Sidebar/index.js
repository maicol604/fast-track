import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 15vw;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    box-sizing: border-box;
    padding: 1em;
    z-index: 1000;
    background-color: #fff;
    .dragable-element{
        cursor: move;
        &:hover{
            transform: rotateX(.1);
        }
    }
    .dndnode{
        border: 1px solid #000;
        border-radius: .25em;
        padding: 1em;
        margin-bottom: .5em;
    }
`;

export default () => {

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <Container>
            <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'normal')} draggable>
                Nodo basico
            </div>
            <div className="dndnode" onDragStart={(event) => onDragStart(event, 'ifElse')} draggable>
                Nodo si y no
            </div>
            <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'answer')} draggable>
                Nodo respuesta 
            </div>
      </Container>
    );
}