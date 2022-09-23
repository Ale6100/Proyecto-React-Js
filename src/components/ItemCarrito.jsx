import React from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const ItemCarrito = ({ id, pictureUrl, title, cantidad, price }) => {
    const { removeItem } = useContext(CartContext)

    return (
        <div id={`producto-carrito-${id}`} className="divItemCarrito">
            <div className="divImagenTituloItemCarrito borde-derecha">
                <div className="divImagenItemCarrito">
                    <img src={`/img/${pictureUrl}`}/>
                </div> 
                
                <p className="pTitleItemCarrito">{title}</p>
            </div>

            <div className="divpriceItemCarrito">
                <div>
                    <p>Pasajes: {cantidad}</p>
                    <p className="pPriceItemCarrito">(${price} c/u)</p>
                </div>
                
                <p>${cantidad*price}</p>

                <button className="botonBorrar" onClick={() => removeItem(id)}>Eliminar</button>
            </div>   
        </div>
    );
}

export default ItemCarrito;
