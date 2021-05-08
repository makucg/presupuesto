import PropTypes from "prop-types";
import React from 'react';

const Gasto = ({gasto}) => {
    return ( 
        <li className="gastos">
            <p>
                {gasto.nombre}
                <span className="gasto">{gasto.cantidad}€</span>
            </p>
        </li>
     );
}

Gasto.propTypes = {
  gasto: PropTypes.shape({
    cantidad: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired
  })
}
 
export default Gasto;