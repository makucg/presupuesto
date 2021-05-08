import PropTypes from "prop-types";
import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //Agregando gastos

    const agregarGastos = (e) => {
        e.preventDefault();

        //Validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false);

        //Construir gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        //Enviar al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        //Resetear el form
        guardarNombre('');
        guardarCantidad(0);

    }
    

    return ( 
        <form
            onSubmit={agregarGastos}
        >
            <h2>Agrega tus gastos aquí</h2>

            {
                error 
                ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto"/>
                : null
            }

            <div className="campo">
                <label>Nombre gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Catidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 30"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value),10)}
                />
            </div>
            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form> 
    );
}

Formulario.propTypes = {
  guardarCrearGasto: PropTypes.func.isRequired,
  guardarGasto: PropTypes.func.isRequired
}
 
export default Formulario;