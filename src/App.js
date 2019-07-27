import React from 'react';
import Todos from './comps/Todos';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Websocket To-do List!</h1>

      <Todos></Todos>
      
    </div>
  );
}

export default App;
