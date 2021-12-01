import './App.css';
import React from 'react';
import Flow from './Components/Flow';

function App() {

  return (
    <div className="App">
      <Flow
        //initialElements={JSON.parse(JSON.stringify(elements))}
      />
    </div>
    /*<DnDFlow/>*/
  );
}

export default App;
