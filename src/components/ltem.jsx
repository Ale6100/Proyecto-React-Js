import React from 'react';
import ItemCount from './ItemCount';
import agregarAlCarrito from '../utils/agregarAlCarrito';
import { Link } from 'react-router-dom';

const Item = ({ id, pictureUrl, title, price, stock }) => {

    return (
        <div className="divItem">
            <div className="divImagenItem">
                <img src={`/img/${pictureUrl}`}/>
            </div>

            <div className="divTitlePriceItem">
                <p className="pTitleItem">{title}</p>
                <p>${price} - Stock: {stock}</p>
            </div>
            <ItemCount stock={stock} initial={1} clickAgregar={(cantidad)=>agregarAlCarrito(title, cantidad)}/>
            <div className="divInfoItem">
                <Link to={`/item/${id}`}><button>+Info</button></Link>
            </div>
        </div>
    );
}

export default Item;
