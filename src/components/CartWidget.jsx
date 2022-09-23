import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
    const { cantidadItemsCarrito } = useContext(CartContext);
    const [numero, setNumero] = useState("")

    useEffect(() => {
        setNumero(cantidadItemsCarrito()) // Actualiza el número sobre el símbolo del carrito
    }, [cantidadItemsCarrito()]);

    return (
        <div className="iconoCarrito">
            <Link to="/cart"> <BsCart4/> </Link>
            <p className="iconoCantidadProductos" hidden={numero==0}>{numero}</p>
        </div>
    );
}

export default CartWidget;
