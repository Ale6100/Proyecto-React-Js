import React from 'react';
import { useState } from 'react';

const IntemCount = ({stock, initial, clickAgregar}) => {
    
    const [cantidad, setCantidad] = useState(initial);

    function aumentarContador() { // Aumenta en 1 el número que representa la cantidad items, siempre y cuando haya stock
        if (cantidad < stock) {
            setCantidad(cantidad+1)
        }
    }

    function disminuirContador() { // Disminuye en 1 siempre y cuando cantidad sea mayor que cero
        if (cantidad > 1) {
            setCantidad(cantidad-1)
        }
    }
   
    return (
        <div className="itemCount">
            <div className="divBotonesContador">
                <button className="botonContador" onClick={aumentarContador}>+</button>
                <p className="cantidadContadorItemCount">{cantidad}</p>
                <button className="botonContador" onClick={disminuirContador}>-</button>
            </div>

            <button className="botonAniadirAlCarrito" onClick={()=>clickAgregar(cantidad)} disabled={(stock<1)}>Añadir al carrito</button>
        </div>
    );
}

export default IntemCount;
