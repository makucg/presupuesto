import React, {Fragment, useState} from 'react';
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante}) => {

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //Función que almace el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10));
    }

    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }


        //Si pasamos la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
    }
    

    return ( 
        <Fragment>
            <h2>Introduce tu presupuesto</h2>

            {
                error 
                ? <Error mensaje="El presupuesto es incorrecto"/>
                : null
            }

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Introduce tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Guardar presupuesto"
                />
            </form>
        </Fragment>
     );
}
 
export default Pregunta;