import React from 'react';
import { useState } from 'react';
import ItemCount from './ItemCount';
import agregarAlCarrito from '../utils/agregarAlCarrito';
import { Link } from 'react-router-dom';

const Item = ({ id, pictureUrl, title, price, stock }) => {

    const [contadorItems, setContadorItems] = useState(0)

    return (
        <div className="divItem">
            <div className="divImagenItem">
                <img src={`/img/${pictureUrl}`}/>
            </div>

            <div className="divTitlePriceItem">
                <p className="pTitleItem">{title}</p>
                <p>${price} - Stock: {stock}</p>
            </div>

            { // Análogo a lo colocado en ItemDetail
                contadorItems == 0 ?
                <ItemCount stock={stock} initial={contadorItems} clickAgregar={(cantidad) => {agregarAlCarrito(title, cantidad)}} setContadorItems={setContadorItems} /> // Pido que el setContadorItems vaya a ItemCount
                : <Link className="linkBotonIrCarrito" to={`/cart`}> <button className="botonIrCarrito">Ir al carrito</button></Link>
            }
            <div className="divInfoItem">
                <Link to={`/item/${id}`}><button>+Info</button></Link>
            </div>
        </div>
    );
}

export default Item;
