import React, { useState } from 'react';
import Pregunta from './components/Pregunta'

function App() {

  //State presupuesto
  const [presupuesto, guardarPresupuesto] = useState(0);

  //State restante
  const [restante, guardarRestante] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        
        <div className="contenido contenido-principal">
          <Pregunta 
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
          />

          <div className="row">
            <div className="one-half column">
              1
            </div>
            <div className="one-half column">
              2
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
