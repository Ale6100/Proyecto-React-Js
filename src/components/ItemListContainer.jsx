import React from 'react';
import IntemCount from './intemCount';

const ItemListContainer = (props) => {
    
    const agregarAlCarrito = () => {
        alert(`Producto agregado al carrito`)
    }

    return (
        <div>
            <p>{props.greeting}</p>
            <IntemCount stock={5} initial={1} clickAgregar={agregarAlCarrito}/>
        </div>
    );
}

export default ItemListContainer;
