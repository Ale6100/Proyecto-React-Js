import React from 'react';
import Item from './ltem';

const ItemList = ({ items }) => { // Obtiene un array de items y los coloca uno por uno en el DOM gracias al componente Item y el método map
    
    return (
        <div className="itemList">
            {
            items.map( item => (
                <Item            
                    key = {item.id}
                    id = {item.id}
                    pictureUrl = {item.pictureUrl}
                    title = {item.title}
                    price = {item.price}
                    stock = {item.stock}
                    item = {item}
                />
            ))
            }
        </div>
    );
}

export default ItemList;
