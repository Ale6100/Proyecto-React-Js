import React from 'react';
import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
    return (
        <div className="carrito">
            <BsCart4/>
            <p className="iconoCantidadProductos">4</p>
        </div>
    );
}

export default CartWidget;
