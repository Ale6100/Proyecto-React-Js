import React from 'react';
import { useState } from 'react';

const IntemCount = ({stock, initial}) => {
    
    const [cantidad, setCantidad] = useState(initial); // El estado inicial de cantidad es initial

    function aumentarContador() { // Aumenta en 1 el número que representa la cantidad items, siempre y cuando haya stock
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
            <div>
                <p>Ejemplo de contador</p>
            </div>

            <div className="divBotonesContador">
                <button className="botonContador" onClick={aumentarContador}>+</button>
                <p>{cantidad}</p>
                <button className="botonContador" onClick={disminuirContador}>-</button>
            </div>

            <div>
                <button className="botonAniadirAlCarrito">Añadir al carrito</button>
            </div>
        </div>
    );
}

export default IntemCount;
