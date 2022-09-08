import React from 'react';
import IntemCount from './intemCount';

const ItemListContainer = (props) => {
    return (
        <div>
            <p>{props.greeting}</p>
            <IntemCount stock={5} initial={1}/>
        </div>
    );
}

export default ItemListContainer;
