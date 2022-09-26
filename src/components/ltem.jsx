import React from 'react';
import { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import alertaProductoAgregado from '../utils/alertaProductoAgregado';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const Item = ({ id, pictureUrl, title, price, stock, item }) => {

    const [contadorItems, setContadorItems] = useState(0)
    const { addItem } = useContext(CartContext);

    const onAdd = (cantidad) => {
        alertaProductoAgregado(title, cantidad)
        setContadorItems(cantidad)
        addItem(item, cantidad)
    }

    return (
        <div className="divItem">
            <div className="divImagenItem">
                <img src={`${pictureUrl}`}/>
            </div>

            <div className="divTitlePriceItem">
                <p className="pTitleItem">{title}</p>
                <p>${price} - Stock: {stock}</p>
            </div>

            { // Análogo a lo colocado en ItemDetail
                contadorItems == 0 ?
                <ItemCount stock={stock} initial={contadorItems} clickAgregar={onAdd} />
                : <Link className="linkBotonIrCarrito" to={`/cart`}> <button className="botonIrCarrito">Ir al carrito</button></Link>
            }
            <div className="divInfoItem">
                <Link to={`/item/${id}`}><button>+Info</button></Link>
            </div>
        </div>
    );
}

export default Item;
