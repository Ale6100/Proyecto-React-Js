import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({ item }) => {

    const [contadorItems, setContadorItems] = useState(0)
    const { addItem } = useContext(CartContext);

    const onAdd = (cantidad) => {
        setContadorItems(cantidad)
        addItem(item, cantidad)
    }

    return (
        <div className="divItem">
            <div className="divImagenItem">
                <img src={`${item.pictureUrl}`} alt="Imagen cuerpo celeste"/>
            </div>

            <div className="divTitlePriceItem">
                <p className="pTitleItem">{item.title}</p>
                <p>${item.price} - Stock: {item.stock}</p>
            </div>

            { // Análogo a lo colocado en ItemDetail
                contadorItems === 0 ?
                <ItemCount stock={item.stock} clickAgregar={onAdd} />
                : <Link className="linkBotonIrCarrito" to={`/cart`}> <button className="botonIrCarrito">Ir al carrito</button></Link>
            }
            <div className="divInfoItem">
                <Link to={`/item/${item.id}`}><button>+Info</button></Link>
            </div>
        </div>
    );
}

export default Item;
