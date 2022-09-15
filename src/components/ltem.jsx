import React from 'react';
import IntemCount from './IntemCount';
import agregarAlCarrito from '../utils/agregarAlCarrito';

const Item = ({ pictureUrl, title, price, stock }) => {

    return (
        <div className="divItem">
            <div className="divImagenItem">
                <img src={`./img/${pictureUrl}`}/>
            </div>

            <div className="divTitlePriceItem">
                <p className="pTitleItem">{title}</p>
                <p>${price} - Stock: {stock}</p>
            </div>
            <IntemCount stock={stock} initial={1} clickAgregar={(cantidad)=>agregarAlCarrito(title, cantidad)}/>
        </div>
    );
}

export default Item;
