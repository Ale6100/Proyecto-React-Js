import React from 'react';
import { useEffect, useState } from 'react';
import fetchSimulado from '../utils/fetchSimulado';
import Loader from '../components/Loader';
import ItemList from '../components/ItemList';

const ItemListContainer = (props) => {

    const [data, setData] = useState([]) // Array donde estarán los items del archivo pasajes.json
    const [loading, setLoading] = useState(false) // Establezco que inicialmente los archivos no se están cargando

    useEffect( () => {
        setLoading(true) // seteo al Loading como true para indicar que ya se inició a cargar los datos
        fetch("./pasajes.json") // Traigo los pasajes del archivo json
        .then(response => response.json())
        .then(dataFromDB => { // Simulo que el array traido del fetch está siendo traido por una promesa (fetchSimulado) que tarda dos segundos en resolverse
            fetchSimulado(dataFromDB)
            .then(result => setData(result)) // Actualizo el array data. Lo declaro como el array que devolvió el fetch
            .catch(err => console.error(err))
            .finally(() => setLoading(false)) // Establezco que cuando terminó de resolverse, ya no se están cargando los datos
            
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <p>{props.greeting}</p>
            {
                loading ? <Loader /> : <ItemList items={data} /> // Ejecuto el componente Loader mientras el array de datos no está cargado
            }
        </div>
    );
}

export default ItemListContainer;
