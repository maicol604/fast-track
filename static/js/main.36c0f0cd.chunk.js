(this["webpackJsonpfast-track"]=this["webpackJsonpfast-track"]||[]).push([[0],{22:function(n,e,t){},23:function(n,e,t){},30:function(n,e,t){"use strict";t.r(e);var r,o,i,c,a=t(0),s=t.n(a),d=t(5),l=t.n(d),b=(t(22),t(23),t(12)),h=t(14),m=t(2),u=t(1),g=t(3),f=t(4),x="#15295c",p=f.a.div(r||(r=Object(g.a)(["\n    border: 1px solid #ccc;\n    //border-left: 0;\n    //border-right: 0;\n    cursor: default;\n    position: relative;\n    background-color: #fff;\n    //overflow: hidden;\n    border-radius: .25em;\n    .drag-handle{\n        cursor: move;\n        display: flex;\n        border-bottom: 1px solid  ",";\n        padding: .25em .75em;\n        color: #fff;\n        background-color: ",";\n        border-radius: .2em .2em 0 0;\n        .handle{\n            display: flex;\n            align-items: center;\n            width: max-content;\n            margin-right: .25em;\n        }\n        &:hover{\n            .drawer-icon{\n                filter: brightness(1.25);\n            }\n        }\n    }\n    .in-handle{\n        border-radius: 0;\n        border-radius: 1em 0 0 1em;\n        background-color: #3498db;\n        border: none;\n        width: .5em;\n        transition: all .25s;\n        //height: calc(100% + 2px);\n        height: 1em;\n        //position: absolute;\n        //left: -1em;\n        left: 1.5em;\n        top:auto;\n        &:hover{\n            filter: brightness(1.25);\n        }\n    }\n    .out-handle{\n        border-radius: 0;\n        border-radius: 0 1em 1em 0;\n        background-color: #2ecc71;\n        border: none;\n        width: .5em;\n        transition: all .25s;\n        //height: calc(100% + 2px);   \n        height: 1em;\n        //position: absolute;\n        left: 0;\n        top:auto;\n        &:hover{\n            filter: brightness(1.25);\n        }\n    }\n    .drawer-icon{\n        stroke:  ",";\n        transition: all .25s;\n    }\n    .answers{\n        padding: 0;\n        padding-top: .5em;\n        margin: 0;\n        .answer{\n            list-style: none;\n            cursor: pointer;\n            color: #15295c;\n            border-bottom: 1px solid #f0f0f0;\n            transition: all .25s;\n            background-color: #ddd;\n            padding: .25em 1em;\n            margin-left: .5em;\n            margin-right: .5em;\n            margin-bottom: .5em;\n            position: relative;\n            padding-left: 1.5em;\n            margin-left: 1.25em;\n            text-transform: capitalize;\n            border-radius: .25em;\n            &:hover{\n                color: #15295c;\n            }\n            .count-circle{\n                height: 2em;\n                border-radius: 50%;\n                background-color: ",";\n                position: absolute;\n                left: -1em;\n                top: calc(50% - 1em);\n                width: 2em;\n                box-sizing: border-box;\n                border: 3px solid #fff;\n                color: #fff;\n                font-size: 1em;\n                text-align: center;\n            }\n        }\n    }\n    .handle-in-container{\n        background-color: transparent;\n        height: 100%;\n        width: 2em;\n        position: absolute;\n        left: -2em;\n        top: 0;\n        padding-top: 2em;\n        box-sizing: border-box;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        &:hover{\n            .in-handle{\n                width: 1em; \n                left: 1em;\n            }\n        }\n    }\n    .handle-out-container{\n        background-color: transparent;\n        height: 100%;\n        width: 2em;\n        position: absolute;\n        right: -2em;\n        top: 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        padding-top: 2em;\n        box-sizing: border-box;\n        &:hover{\n            .out-handle{\n                width: 1em; \n                right: 1em;\n            }\n        }\n    }\n"])),x,x,"#b3b3b3",x),j="#15295c",v=f.a.div(o||(o=Object(g.a)(["\n    border: 1px solid #ccc;\n    //border-left: 0;\n    //border-right: 0;\n    cursor: default;\n    position: relative;\n    background-color: #fff;\n    border-radius: .25em;\n    .drag-handle{\n        cursor: move;\n        display: flex;\n        border-bottom: 1px solid  ",";\n        padding: .25em .75em;\n        color: #fff;\n        background-color: ",";\n        border-radius: .2em .2em 0 0;\n        .handle{\n            display: flex;\n            align-items: center;\n            width: max-content;\n            margin-right: .25em;\n        }\n        &:hover{\n            .drawer-icon{\n                filter: brightness(1.25);\n            }\n        }\n    }\n    .in-handle{\n        border-radius: 0;\n        border-radius: 1em 0 0 1em;\n        background-color: #3498db;\n        border: none;\n        width: .5em;\n        height: 1em;\n        transition: all .25s;\n        //height: calc(100% + 2px);\n        position: absolute;\n        left: 1.5em;\n        &:hover{\n            filter: brightness(1.25);\n        }\n    }\n    .out-handle-if, .out-handle-else{\n        border-radius: 0;\n        border-radius: 0 1em 1em 0;\n        background-color: #5ed1d8;\n        border: none;\n        width: .5em;\n        height: 1em;\n        transition: all .25s;\n        //right: 1.5em;\n        //height: calc(50% + 0px);   \n        //position: absolute;\n        position: relative;\n        top: auto;\n        left: 0;\n        &:hover{\n            filter: brightness(1.25);\n        }\n    }\n    .handle-in-container{\n        background-color: transparent;\n        height: 100%;\n        width: 2em;\n        position: absolute;\n        left: -2em;\n        top: 0;\n        padding-top: 2em;\n        box-sizing: border-box;\n        &:hover{\n            .in-handle{\n                width: 1em; \n                left: 1em;\n            }\n        }\n    }\n    .handle-out-container{\n        background-color: transparent;\n        height: 100%;\n        width: 2em;\n        position: absolute;\n        right: -2em;\n        top: 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n        padding-top: 2em;\n        box-sizing: border-box;\n        &:hover{\n            .out-handle-if, .out-handle-else{\n                width: 1em; \n                right: 1em;\n            }\n        }\n    }\n    .out-handle-if{\n        //top: calc(25%);\n        background-color: #2ecc71;\n    }\n    .out-handle-else{\n        //top: calc(75%);\n        background-color: #e74c3c;\n    }\n    .drawer-icon{\n        stroke:  ",";\n        transition: all .25s;\n    }\n    .answers{\n        padding: 0;\n        padding-top: .5em;\n        margin: 0;\n        .answer{\n            list-style: none;\n            cursor: pointer;\n            color: #15295c;\n            border-bottom: 1px solid #f0f0f0;\n            transition: all .25s;\n            background-color: #ddd;\n            padding: .25em 1em;\n            margin-left: .5em;\n            margin-right: .5em;\n            margin-bottom: .5em;\n            position: relative;\n            padding-left: 1.5em;\n            margin-left: 1.25em;\n            text-transform: capitalize;\n            border-radius: .25em;\n            &:hover{\n                color: #15295c;\n            }\n            .count-circle{\n                height: 2em;\n                border-radius: 50%;\n                background-color: ",";\n                position: absolute;\n                left: -1em;\n                top: calc(50% - 1em);\n                width: 2em;\n                box-sizing: border-box;\n                border: 3px solid #fff;\n                color: #fff;\n                font-size: 1em;\n                text-align: center;\n            }\n        }\n    }\n"])),j,j,"#b3b3b3",j),O="#15295c",w=f.a.div(i||(i=Object(g.a)(["\n    border: 1px solid #ccc;\n    //border-left: 0;\n    //border-right: 0;\n    cursor: default;\n    position: relative;\n    background-color: #fff;\n    //overflow: hidden;\n    border-radius: .25em;\n    .drag-handle{\n        cursor: move;\n        display: flex;\n        border-bottom: 1px solid  ",";\n        padding: .25em .75em;\n        color: #fff;\n        background-color: ",";\n        border-radius: .2em .2em 0 0;\n        .handle{\n            display: flex;\n            align-items: center;\n            width: max-content;\n            margin-right: .25em;\n        }\n        &:hover{\n            .drawer-icon{\n                filter: brightness(1.25);\n            }\n        }\n    }\n    .in-handle{\n        border-radius: 0;\n        border-radius: 1em 0 0 1em;\n        background-color: #3498db;\n        border: none;\n        width: .5em;\n        transition: all .25s;\n        //height: calc(100% + 2px);\n        height: 1em;\n        //position: absolute;\n        //left: -1em;\n        left: 1.5em;\n        top:auto;\n        &:hover{\n            filter: brightness(1.25);\n        }\n    }\n    .out-handle{\n        border-radius: 0;\n        border-radius: 0 1em 1em 0;\n        background-color: #2ecc71;\n        border: none;\n        width: .5em;\n        transition: all .25s;\n        //height: calc(100% + 2px);   \n        height: 1em;\n        //position: absolute;\n        left: 0;\n        top:auto;\n        &:hover{\n            filter: brightness(1.25);\n        }\n    }\n    .drawer-icon{\n        stroke:  ",";\n        transition: all .25s;\n    }\n    .answers{\n        padding: 0;\n        padding-top: .5em;\n        margin: 0;\n        margin-right: 0em;\n        .answer{\n            list-style: none;\n            cursor: pointer;\n            color: #15295c;\n            border-bottom: 1px solid #f0f0f0;\n            transition: all .25s;\n            background-color: #ddd;\n            padding: .25em 1em;\n            margin-left: .5em;\n            margin-right: .5em;\n            margin-bottom: .5em;\n            position: relative;\n            padding-left: 1.5em;\n            margin-left: 1.25em;\n            text-transform: capitalize;\n            border-radius: .25em;\n            &:hover{\n                color: #15295c;\n            }\n            .count-circle{\n                height: 2em;\n                border-radius: 50%;\n                background-color: ",";\n                position: absolute;\n                left: -1em;\n                top: calc(50% - 1em);\n                width: 2em;\n                box-sizing: border-box;\n                border: 3px solid #fff;\n                color: #fff;\n                font-size: 1em;\n                text-align: center;\n            }\n        }\n    }\n    .handle-in-container{\n        background-color: transparent;\n        height: 100%;\n        width: 2em;\n        position: absolute;\n        left: -2em;\n        top: 0;\n        padding-top: 2em;\n        box-sizing: border-box;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        &:hover{\n            .in-handle{\n                width: 1em; \n                left: 1em;\n            }\n        }\n    }\n    .handle-out-container{\n        background-color: transparent;\n        height: 100%;\n        width: 2em;\n        position: absolute;\n        right: -2em;\n        top: 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        padding-top: 1em;\n        box-sizing: border-box;\n        &:hover{\n            .out-handle{\n                width: 1em; \n                right: 1em;\n            }\n        }\n    }\n"])),O,O,"#b3b3b3",O),y=f.a.div(c||(c=Object(g.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 15vw;\n    position: fixed;\n    left: 0;\n    top: 0;\n    height: 100vh;\n    box-sizing: border-box;\n    padding: 1em;\n    z-index: 1000;\n    background-color: #fff;\n    .dragable-element{\n        cursor: move;\n        &:hover{\n            transform: rotateX(.1);\n        }\n    }\n    .dndnode{\n        border: 1px solid #000;\n        border-radius: .25em;\n        padding: 1em;\n        margin-bottom: .5em;\n    }\n"]))),k=function(){var n=function(n,e){n.dataTransfer.setData("application/reactflow",e),n.dataTransfer.effectAllowed="move"};return Object(u.jsxs)(y,{children:[Object(u.jsx)("div",{className:"dndnode input",onDragStart:function(e){return n(e,"normal")},draggable:!0,children:"Nodo basico"}),Object(u.jsx)("div",{className:"dndnode",onDragStart:function(e){return n(e,"ifElse")},draggable:!0,children:"Nodo si y no"}),Object(u.jsx)("div",{className:"dndnode output",onDragStart:function(e){return n(e,"answer")},draggable:!0,children:"Nodo respuesta"})]})},N={normal:function(n){var e=n.data;n.variant;return Object(u.jsxs)(p,{children:[Object(u.jsx)("div",{className:"test",children:Object(u.jsxs)("span",{className:"drag-handle",children:[Object(u.jsx)("div",{className:"handle",children:Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-grip-vertical drawer-icon",width:"20",height:"20",viewBox:"0 0 24 24","stroke-width":"1.5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[Object(u.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(u.jsx)("circle",{cx:"9",cy:"5",r:"1"}),Object(u.jsx)("circle",{cx:"9",cy:"12",r:"1"}),Object(u.jsx)("circle",{cx:"9",cy:"19",r:"1"}),Object(u.jsx)("circle",{cx:"15",cy:"5",r:"1"}),Object(u.jsx)("circle",{cx:"15",cy:"12",r:"1"}),Object(u.jsx)("circle",{cx:"15",cy:"19",r:"1"})]})}),Object(u.jsx)("div",{children:e.title})]})}),Object(u.jsx)("div",{className:"handle-in-container",children:Object(u.jsx)(m.b,{type:"target",position:"left",id:"in-".concat(e.id),className:"in-handle"})}),Object(u.jsx)("ul",{className:"answers",children:e.answers.map((function(n,e){return Object(u.jsxs)("li",{className:"answer",children:[n.text,Object(u.jsx)("div",{className:"count-circle",children:e+1})]},e)}))}),Object(u.jsx)("div",{className:"handle-out-container",children:Object(u.jsx)(m.b,{type:"source",position:"right",id:"out-".concat(e.id),className:"out-handle"})})]})},ifElse:function(n){var e=n.data;return Object(u.jsxs)(v,{children:[Object(u.jsx)("div",{className:"test",children:Object(u.jsxs)("span",{className:"drag-handle",children:[Object(u.jsx)("div",{className:"handle",children:Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-grip-vertical drawer-icon",width:"20",height:"20",viewBox:"0 0 24 24","stroke-width":"1.5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[Object(u.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(u.jsx)("circle",{cx:"9",cy:"5",r:"1"}),Object(u.jsx)("circle",{cx:"9",cy:"12",r:"1"}),Object(u.jsx)("circle",{cx:"9",cy:"19",r:"1"}),Object(u.jsx)("circle",{cx:"15",cy:"5",r:"1"}),Object(u.jsx)("circle",{cx:"15",cy:"12",r:"1"}),Object(u.jsx)("circle",{cx:"15",cy:"19",r:"1"})]})}),Object(u.jsx)("div",{children:e.title})]})}),Object(u.jsx)("div",{className:"handle-in-container",children:Object(u.jsx)(m.b,{type:"target",position:"left",id:"in-".concat(e.id),className:"in-handle"})}),Object(u.jsx)("ul",{className:"answers",children:e.answers.map((function(n,e){return Object(u.jsxs)("li",{className:"answer",children:[n.text,Object(u.jsx)("div",{className:"count-circle",children:e+1})]},e)}))}),Object(u.jsxs)("div",{className:"handle-out-container",children:[Object(u.jsx)(m.b,{type:"source",position:"right",id:"out-if-".concat(e.id),className:"out-handle-if"}),Object(u.jsx)(m.b,{type:"source",position:"right",id:"out-else-".concat(e.id),className:"out-handle-else"})]})]})},answer:function(n){var e=n.data;n.variant;return Object(u.jsxs)(w,{children:[Object(u.jsx)("div",{className:"test",children:Object(u.jsxs)("span",{className:"drag-handle",children:[Object(u.jsx)("div",{className:"handle",children:Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-grip-vertical drawer-icon",width:"20",height:"20",viewBox:"0 0 24 24","stroke-width":"1.5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",children:[Object(u.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(u.jsx)("circle",{cx:"9",cy:"5",r:"1"}),Object(u.jsx)("circle",{cx:"9",cy:"12",r:"1"}),Object(u.jsx)("circle",{cx:"9",cy:"19",r:"1"}),Object(u.jsx)("circle",{cx:"15",cy:"5",r:"1"}),Object(u.jsx)("circle",{cx:"15",cy:"12",r:"1"}),Object(u.jsx)("circle",{cx:"15",cy:"19",r:"1"})]})}),Object(u.jsx)("div",{children:e.title})]})}),Object(u.jsx)("div",{className:"handle-in-container",children:Object(u.jsx)(m.b,{type:"target",position:"left",id:"in-".concat(e.id),className:"in-handle"})}),Object(u.jsx)("ul",{className:"answers",children:e.answers.map((function(n,t){return Object(u.jsxs)("li",{className:"answer",children:[n.text,Object(u.jsx)("div",{className:"count-circle",children:t+1}),Object(u.jsx)("div",{className:"handle-out-container",children:Object(u.jsx)(m.b,{type:"source",position:"right",id:"out-".concat(e.id,"-").concat(t),className:"out-handle"})})]},t)}))})]})}},z={custom:function(n){var e=n.id,t=n.sourceX,r=n.sourceY,o=n.targetX,i=n.targetY,c=n.sourcePosition,a=n.targetPosition,s=n.style,d=void 0===s?{}:s,l=n.data,b=n.arrowHeadType,g=n.markerEndId,f=Object(m.f)({sourceX:t,sourceY:r,sourcePosition:c,targetX:o,targetY:i,targetPosition:a}),x=Object(m.g)(b,g);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("path",{id:e,style:Object(h.a)({},d),className:"react-flow__edge-path",d:f,markerEnd:x}),Object(u.jsx)("text",{children:Object(u.jsx)("textPath",{href:"#".concat(e),style:{fontSize:"12px"},startOffset:"50%",textAnchor:"middle",children:l.text})})]})}},D=[],T=0,S=function(){var n=s.a.useRef(null),e=s.a.useState(null),t=Object(b.a)(e,2),r=t[0],o=t[1],i=s.a.useState(D),c=Object(b.a)(i,2),a=c[0],d=c[1];return Object(u.jsx)("div",{className:"dndflow",style:{backgroundColor:"red"},children:Object(u.jsxs)(m.c,{children:[Object(u.jsx)("div",{className:"reactflow-wrapper",ref:n,style:{height:"100vh",backgroundColor:"#f0f0f0"},children:Object(u.jsx)(m.e,{nodeTypes:N,edgeTypes:z,elements:a,onConnect:function(n){return d((function(e){return Object(m.d)(n,e)}))},onElementsRemove:function(n){return d((function(e){return Object(m.h)(n,e)}))},onLoad:function(n){return o(n)},onDrop:function(e){e.preventDefault();var t=n.current.getBoundingClientRect(),o=e.dataTransfer.getData("application/reactflow"),i=r.project({x:e.clientX-t.left,y:e.clientY-t.top}),c={id:"dndnode_".concat(T++),type:o,position:i,data:{title:"Titulo de la pregunta",id:a.length+1,answers:[{text:"Respuesta 1"},{text:"Respuesta 1"}]},dragHandle:".drag-handle",animated:!0,style:{stroke:"red"}};d((function(n){return n.concat(c)}))},onDragOver:function(n){n.preventDefault(),n.dataTransfer.dropEffect="move"},children:Object(u.jsx)(m.a,{})})}),Object(u.jsx)(k,{})]})})};var C=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(S,{})})},E=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),r(n),o(n),i(n),c(n)}))};l.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root")),E()}},[[30,1,2]]]);
//# sourceMappingURL=main.36c0f0cd.chunk.js.map