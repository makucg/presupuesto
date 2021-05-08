import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  //State presupuesto
  const [presupuesto, guardarPresupuesto] = useState(0);

  //State restante
  const [restante, guardarRestante] = useState(0);

  //State mostrar formulario inicial
  const [verpregunta, actulizarVerPregunta] = useState(true);

  //Gastos
  const [gastos, guardarGastos] = useState([]);

  //Gasto
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);

  //UseEffect que actualiza el restante
  useEffect(() => {
    if(creargasto){
        guardarGastos([
        ...gastos, gasto
      ]);

      guardarRestante(restante-gasto.cantidad);
      guardarCrearGasto(false);
    }
  },[gasto, gastos, creargasto, restante]);


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
                  <Formulario 
                    guardarGasto={guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado 
                    gastos={gastos}
                  />
                  <ControlPresupuesto 
                    presupuesto={presupuesto}
                    restante={restante}
                  />
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
