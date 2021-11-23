import './App.css';
import Flow from './Components/Flow';

const sampleAnswers = [
  {
    text:'Respuesta 1'
  },
  {
    text:'Respuesta 2'
  },
  {
    text:'Respuesta 3'
  },
  {
    text:'Respuesta 4'
  },
]

const initialElements = [
  {
    id: '1',
    type: 'ifElse',
    position: { x: 100, y: 100 },
    data: { title:'Titulo de la pregunta si/no', id:1, answers:[sampleAnswers[0], sampleAnswers[1]] },
    dragHandle: '.drag-handle'
  },
  {
    id: '2',
    type: 'normal',
    position: { x: 400, y: 100 },
    data: { title:'Titulo de la pregunta normal', id:1, answers:[...sampleAnswers] },
    dragHandle: '.drag-handle'
  },  
  {
    id: '3',
    type: 'answer',
    position: { x: 500, y: 400 },
    data: { title:'Titulo de la pregunta con respuesta unica condicionada', id:2, answers:[...sampleAnswers] },
    dragHandle: '.drag-handle'
  }, 
  /*{
    id: '3',
    type: 'normal',
    position: { x: 100, y: 100 },
    data: { title:'Titulo de la pregunta', id:3, answers:[] },
    dragHandle: '.drag-handle'
  }, 
  {
    id: '4',
    type: 'normal',
    position: { x: 100, y: 100 },
    data: { title:'Titulo de la pregunta', id:4, answers:[] },
    dragHandle: '.drag-handle'
  }, 
  {
    id: '5',
    type: 'normal',
    position: { x: 100, y: 100 },
    data: { title:'Titulo de la pregunta', id:5, answers:[] },   
    dragHandle: '.drag-handle' 
  },   
  {
    id: 'edges-e3-5',
    source: '4',
    target: '5',
    label: 'Yes',
    animated: true,
    style: { stroke: '#15295c', strokeWidth:3 },
  },*/
];

function App() {
  return (
    <div className="App">
      <Flow
        initialElements={initialElements}
      />
    </div>
  );
}

export default App;
