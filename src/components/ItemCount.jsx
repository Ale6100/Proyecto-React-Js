import React from 'react';
import { useState } from 'react';

const IntemCount = ({stock, initial, clickAgregar}) => {
    
    const [cantidad, setCantidad] = useState(initial);

    function aumentarContador() { // Aumenta en 1 el número que representa la cantidad items a añadir al carrito, siempre y cuando haya stock
        if (cantidad < stock) {
            setCantidad(cantidad+1)
        }
    }

    function disminuirContador() { // Disminuye en 1 siempre y cuando cantidad sea mayor que cero
        if (cantidad > 0) {
            setCantidad(cantidad-1)
        }
    }
   
    return (
        <div className="itemCount">
            <div className="divBotonesContador">
                <button onClick={aumentarContador}>+</button>
                <p>{cantidad}</p>
                <button onClick={disminuirContador}>-</button>
            </div>

            <button onClick={()=>clickAgregar(cantidad)} disabled={cantidad==0}>Añadir al carrito</button>
        </div>
    );
}

export default IntemCount;
