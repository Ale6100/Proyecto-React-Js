import React from 'react';
import agregarAlCarrito from '../utils/agregarAlCarrito'; // Importo la función agregarAlCarrito
import IntemCount from './IntemCount';

const ItemDetail = ({ item }) => { // Pido que coloque en pantalla una breve descripción más amplia sobre el pasaje seleccionado

    return (
        <div className="divDetail">
            <div className="divIzquierdaDetail">
                <img src={`./img/${item.pictureUrl}`} />
            </div>

            <div className="divDerechaDetail">
                <p className="pTitleDetail">{item.title}</p>

                <p className="pDescriptionDetail">{item.description}</p>
            </div>

            <div className="divContenedorDetail">
                {/* Tuve que poner este condicional porque react trataba de buscar las propiedades del objeto details cuando aún no estaba creado */}
                {(item.details != undefined) && (
                <div className="divDetalles">
                    <p> <span>Categoria</span>: {item.details.category}</p>
                    <p><span>Orbita a</span>: {item.details.orbita}</p>
                    <p><span>Distancia</span>: {item.details.distancekm}km</p>
                    <p><span>Gravedad</span>: {item.details.gravityms}m/s^2</p>
                    <p><span>Período de rotación</span>: {item.details.period}</p>
                </div>
                )}

                <div className="divContadorPrecio">
                    <div>
                        <p className="pPriceDetail">${item.price}</p>
                        <p className="pStockDetail">Stock: {item.stock}</p>
                    </div>

                    <IntemCount stock={item.stock} initial={1} clickAgregar={(cantidad) => agregarAlCarrito(item.title, cantidad)} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail