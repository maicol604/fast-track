import React from 'react';
import { Handle } from 'react-flow-renderer';
import styled from 'styled-components';

const primaryColor = '#15295c';
const drawerColor = "#b3b3b3";

const NodeWrapper = styled.div`
    border: 1px solid #ccc;
    //border-left: 0;
    //border-right: 0;
    cursor: default;
    position: relative;
    background-color: #fff;
    border-radius: .25em;
    .drag-handle{
        cursor: move;
        display: flex;
        border-bottom: 1px solid  ${primaryColor};
        padding: .25em .75em;
        color: #fff;
        background-color: ${primaryColor};
        border-radius: .2em .2em 0 0;
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
        border-radius: 1em 0 0 1em;
        background-color: #3498db;
        border: none;
        width: .5em;
        height: 1em;
        transition: all .25s;
        //height: calc(100% + 2px);
        position: absolute;
        left: 1.5em;
        &:hover{
            filter: brightness(1.25);
        }
    }
    .out-handle-if, .out-handle-else{
        border-radius: 0;
        border-radius: 0 1em 1em 0;
        background-color: #5ed1d8;
        border: none;
        width: .5em;
        height: 1em;
        transition: all .25s;
        //right: 1.5em;
        //height: calc(50% + 0px);   
        //position: absolute;
        position: relative;
        top: auto;
        left: 0;
        &:hover{
            filter: brightness(1.25);
        }
    }
    .handle-in-container{
        background-color: transparent;
        height: 100%;
        width: 2em;
        position: absolute;
        left: -2em;
        top: 0;
        padding-top: 2em;
        box-sizing: border-box;
        &:hover{
            .in-handle{
                width: 1em; 
                left: 1em;
            }
        }
    }
    .handle-out-container{
        background-color: transparent;
        height: 100%;
        width: 2em;
        position: absolute;
        right: -2em;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-top: 2em;
        box-sizing: border-box;
        &:hover{
            .out-handle-if, .out-handle-else{
                width: 1em; 
                right: 1em;
            }
        }
    }
    .out-handle-if{
        //top: calc(25%);
        background-color: #2ecc71;
    }
    .out-handle-else{
        //top: calc(75%);
        background-color: #e74c3c;
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
            border-radius: .25em;
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

export default ({ data }) => {

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
        <div className='handle-in-container'>
            <Handle 
                type="target" 
                position="left" 
                id={`in-${data.id}`} 
                className={'in-handle'} 
            />
        </div>
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
        <div className='handle-out-container'>
            <Handle
                type="source"
                position="right"
                id={`out-if-${data.id}`}
                className={'out-handle-if'} 
            />
            <Handle
                type="source"
                position="right"
                id={`out-else-${data.id}`}
                className={'out-handle-else'} 
            />
        </div>
      </NodeWrapper>
    );
};