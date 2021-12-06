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
    //position: relative;
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

const Node = styled.div`
    border: 1px solid #ccc;
    cursor: move;
    background-color: #fff;
    border-radius: .25em;
    position: relative;
    margin-bottom: 1em;
    .header{
        padding: .25em .75em;
        color: #fff;
        background-color: ${props => props.color};
    }
    .skeleton-container{
        padding: .5em;
        padding-bottom: 0;
        display: flex;
        flex-direction: column;
        .item{
            height: 1em;
            background: #ecf0f1;
            margin-bottom: .5em;
            border-radius: .25em;
        }
    }
    .input{
        width: .5em;
        height: 1em;
        background: #3498db;
        top: calc(50% - .5em);
        position: absolute;
        border-radius: 1em 0 0 1em;
        left: -.5em;
    }
    .output{
        width: .5em;
        height: 1em;
        background: #2ecc71;
        top: calc(50% - .5em);
        position: absolute;
        border-radius: 0 1em 1em 0;
        right: -.5em;
    }
`;

export default ({nodes}) => {

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
        <Container>
            {nodes.map((data, index)=>
                <Node 
                    onDragStart={(event) => onDragStart(event, data.type)} 
                    draggable
                    color={data.color}
                    key={index}
                >
                    <div className='header'>
                        {data.name}
                    </div>
                    <div className='skeleton-container'>
                        <div className='item'></div>
                        <div className='item'></div>    
                    </div>
                    {
                    // <div className='input'></div>
                    // <div className='output'></div>
                    }
                </Node>
            )}
            {
                // <div className="dndnode" onDragStart={(event) => onDragStart(event, 'ifElse')} draggable>
                //     Nodo si y no
                // </div>
                // <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'answer')} draggable>
                //     Nodo respuesta 
                // </div>
            }
      </Container>
    );
}