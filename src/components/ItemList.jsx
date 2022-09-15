import React from 'react';
import Item from './ltem';

const ItemList = ({ items }) => { // Obtiene el array de items. Coloca uno por uno en el DOM gracias al componente Item y el método map
    
    return (
        <div className="itemList">
            {
            items.map( item => (
                <Item            
                    key = {item.id}
                    pictureUrl = {item.pictureUrl}
                    title = {item.title}
                    price = {item.price}
                    stock = {item.stock}
                />
            ))
            }
        </div>
    );
}

export default ItemList;
