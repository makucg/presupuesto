import React from 'react';
import Pregunta from './components/Pregunta'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        
        <div className="contenido contenido-principal">
          <Pregunta />
        </div>
      </header>
    </div>
  );
}

export default App;
