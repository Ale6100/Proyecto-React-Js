import React from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
    const { cantidadItemsCarrito } = useContext(CartContext);

    return (
        <div className="iconoCarrito">
            <Link to="/cart"> <BsCart4/> </Link>
            <p hidden={cantidadItemsCarrito()==0}>{cantidadItemsCarrito()}</p>
        </div>
    );
}

export default CartWidget;
