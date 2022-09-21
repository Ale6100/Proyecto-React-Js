import React, { useState } from 'react';
import agregarAlCarrito from '../utils/agregarAlCarrito'; // Importo la función agregarAlCarrito
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => { // Pido que coloque en pantalla una breve descripción más amplia sobre el pasaje seleccionado

    const [contadorItems, setContadorItems] = useState(0)

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
                        <ItemCount stock={item.stock} initial={contadorItems} clickAgregar={(cantidad) => {agregarAlCarrito(item.title, cantidad)}} setContadorItems={setContadorItems} /> // Pido que el setContadorItems vaya a ItemCount
                        : <Link className="linkBotonIrCarrito" to={`/cart`}><button className="botonIrCarrito">Ir al carrito</button></Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail