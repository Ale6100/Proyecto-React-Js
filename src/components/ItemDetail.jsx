import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => { // Pido que coloque en pantalla una breve descripción más amplia sobre el pasaje seleccionado

    const [contadorItems, setContadorItems] = useState(0) // contadorItems dejará de ser 0 cuando apretemos en el botón con valor "Añadir al carrito"

    const { addItem } = useContext(CartContext);

    const onAdd = (cantidad) => {
        setContadorItems(cantidad)
        addItem(item, cantidad)
    }

    return (
        <div className="divDetail">
            <div className="divIzquierdaDetail">
                <img src={`${item.pictureUrl}`} alt="Imagen cuerpo celeste" />
            </div>

            <div className="divDerechaDetail">
                <p className="pTitleDetail">{item.title}</p>

                <p className="pDescriptionDetail">{item.description}</p>
            </div>

            <div className="divContenedorDetail">
                {(item.details !== undefined) && (
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

                    {
                        contadorItems === 0 ?
                        <ItemCount stock={item.stock} clickAgregar={onAdd} />
                        : <Link className="linkBotonIrCarrito" to={`/cart`}><button className="botonIrCarrito">Ir al carrito</button></Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
