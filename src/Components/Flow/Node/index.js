import React from 'react';
import { Handle } from 'react-flow-renderer';
import styled from 'styled-components';

const primaryColor = '#15295c';
const drawerColor = "#b3b3b3";

const NodeWrapper = styled.div`
    border: 1px solid #ccc;
    border-left: 0;
    border-right: 0;
    cursor: default;
    position: relative;
    background-color: #fff;
    //overflow: hidden;
    //border-radius: .25em;
    .drag-handle{
        cursor: move;
        display: flex;
        border-bottom: 1px solid  ${primaryColor};
        padding: .25em .75em;
        color: #fff;
        background-color: ${primaryColor};
        .handle{
            display: flex;
            align-items: center;
            width: max-content;
            margin-right: .25em;
        }
        &:hover{
            .drawer-icon{
                filter: brightness(1.25);
            }
        }
    }
    .in-handle{
        border-radius: 0;
        border-radius: .25em 0 0 .25em;
        background-color: #ffab71;
        border: none;
        width: 1em;
        transition: all .25s;
        height: calc(100% + 2px);
        position: absolute;
        left: -1em;
        &:hover{
            filter: brightness(1.25);
        }
    }
    .out-handle{
        border-radius: 0;
        border-radius: 0 .25em .25em 0;
        background-color: #5ed1d8;
        border: none;
        width: 1em;
        transition: all .25s;
        height: calc(100% + 2px);   
        position: absolute;
        right: -1em;
        &:hover{
            filter: brightness(1.25);
        }
    }
    .drawer-icon{
        stroke:  ${drawerColor};
        transition: all .25s;
    }
    .answers{
        padding: 0;
        padding-top: .5em;
        margin: 0;
        .answer{
            list-style: none;
            cursor: pointer;
            color: #15295c;
            border-bottom: 1px solid #f0f0f0;
            transition: all .25s;
            background-color: #ddd;
            padding: .25em 1em;
            margin-left: .5em;
            margin-right: .5em;
            margin-bottom: .5em;
            position: relative;
            padding-left: 1.5em;
            margin-left: 1.25em;
            text-transform: capitalize;
            &:hover{
                color: #15295c;
            }
            .count-circle{
                height: 2em;
                border-radius: 50%;
                background-color: ${primaryColor};
                position: absolute;
                left: -1em;
                top: calc(50% - 1em);
                width: 2em;
                box-sizing: border-box;
                border: 3px solid #fff;
                color: #fff;
                font-size: 1em;
            }
        }
    }
`;


const NormalNode = ({ data, variant='' }) => {

    return (
      <NodeWrapper>
        <div className='test'>
            <span className="drag-handle">
                <div className='handle'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grip-vertical drawer-icon" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="9" cy="5" r="1" />
                        <circle cx="9" cy="12" r="1" />
                        <circle cx="9" cy="19" r="1" />
                        <circle cx="15" cy="5" r="1" />
                        <circle cx="15" cy="12" r="1" />
                        <circle cx="15" cy="19" r="1" />
                    </svg>
                </div>
                <div>
                    {data.title}
                </div>
            </span>
        </div>
        <Handle 
            type="target" 
            position="left" 
            id={`in-${data.id}`} 
            className={'in-handle'} 
        />

        <ul className={'answers'}>
            {data.answers.map((item, index)=>{
                return (
                    <li key={index} className={'answer'}>
                        {item.text}
                        <div className={'count-circle'}>
                            {index+1}
                        </div>
                    </li>
                )
            })}
        </ul>
        
        <Handle
            type="source"
            position="right"
            id={`out-${data.id}`}
            className={'out-handle'} 
        />
      </NodeWrapper>
    );
  };

  export { NormalNode };