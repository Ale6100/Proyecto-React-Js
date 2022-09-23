import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchSimulado from '../utils/fetchSimulado';
import Loader from '../components/Loader';
import ItemList from '../components/ItemList';

const ItemListContainer = () => {

    const [data, setData] = useState([]) // Array donde estarán los items del archivo pasajes.json
    const [loading, setLoading] = useState(false) // Establezco que inicialmente los archivos no se están cargando
    const [error, setError] = useState(false)
    const { id } = useParams() // Devuelve el id que viene en la url 

    useEffect( () => {
        setLoading(true) // Seteo al loading como true para indicar que ya se empezaron a cargar los datos
        fetch("/pasajes.json")
        .then(response => response.json())
        .then(dataFromDB => {
            if (id != undefined) { // Si pasamos un id en la url, entonces no extraigo todos los productos, sino sólo el que tiene integrado dicho id
                fetchSimulado(dataFromDB.filter(item => item.id_category == id))
                .then(result => setData(result))
                .catch(err => {console.error(err); setError(true)})
                .finally(() => setLoading(false))
            } else {
                fetchSimulado(dataFromDB) // Simulo que el array traido del fetch está siendo traido por una promesa (fetchSimulado) que tarda dos segundos en resolverse
                .then(result => setData(result)) // Actualizo el array data. Lo declaro como el array que devolvió el fetch
                .catch(err => {console.error(err); setError(true)})
                .finally(() => setLoading(false)) // Establezco que cuando terminó de resolverse, ya no se están cargando los datos
            }
        })
        .catch(err => {console.error(err); setError(true)})
    }, [id]) // la función flecha del useEffect se va a ejecutar cuando se monta el componente y cuando se actualiza el id

    return (
        <div>
            {
            loading ?
            <Loader /> :
            (error ? <p className="errorCargaDatos">Error! No se cargaron los datos. Intente de nuevo más tarde</p> : <ItemList items={data} />)
            }
        </div>
    );
}

export default ItemListContainer;
