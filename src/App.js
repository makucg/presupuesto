import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';

function App() {

  //State presupuesto
  const [presupuesto, guardarPresupuesto] = useState(0);

  //State restante
  const [restante, guardarRestante] = useState(0);

  //State mostrar formulario inicial
  const [verpregunta, actulizarVerPregunta] = useState(true);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        
        <div className="contenido contenido-principal">

          {
            verpregunta 
            ? (
              <Pregunta 
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actulizarVerPregunta={actulizarVerPregunta}
              />
            ) 
            : (
              <div className="row">
                <div className="one-half column">
                  <Formulario />
                </div>
                <div className="one-half column">
                  2
                </div>
              </div>
            )
          }
          
        </div>
      </header>
    </div>
  );
}

export default App;
