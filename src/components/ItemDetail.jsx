import React from 'react';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import alertaProductoAgregado from '../utils/alertaProductoAgregado';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => { // Pido que coloque en pantalla una breve descripción más amplia sobre el pasaje seleccionado

    const [contadorItems, setContadorItems] = useState(0) // contadorItems dejará de ser 0 cuando apretemos en el botón con valor "Añadir al carrito"

    const { addItem } = useContext(CartContext);

    const onAdd = (cantidad) => {
        alertaProductoAgregado(item.title, cantidad)
        setContadorItems(cantidad)
        addItem(item, cantidad)
    }

    return (
        <div className="divDetail">
            <div className="divIzquierdaDetail">
                <img src={`/img/${item.pictureUrl}`} />
            </div>

            <div className="divDerechaDetail">
                <p className="pTitleDetail">{item.title}</p>

                <p className="pDescriptionDetail">{item.description}</p>
            </div>

            <div className="divContenedorDetail">
                {(item.details != undefined) && (
                <div className="divDetalles">
                    <p> <span>Categoría</span>: {item.details.category}</p>
                    <p><span>Orbita a</span>: {item.details.orbita}</p>
                    <p><span>Radio</span>: {item.details.radiokm}km</p>
                    <p><span>Gravedad</span>: {item.details.gravityms}m/s^2</p>
                    <p><span>Duración del día</span>: {item.details.period}</p>
                </div>
                )}

                <div className="divContadorPrecio">
                    <p>${item.price}</p>
                    <p>Stock: {item.stock}</p>

                    { // Si contadorItems es igual a cero, mostramos el ItemCount. Sino, mostramos el botón que nos lleva al carrito
                        contadorItems == 0 ?
                        <ItemCount stock={item.stock} initial={contadorItems} clickAgregar={(cantidad) => {onAdd(cantidad)}} /> // Pido que el setContadorItems vaya a ItemCount
                        : <Link className="linkBotonIrCarrito" to={`/cart`}><button className="botonIrCarrito">Ir al carrito</button></Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
