import React from 'react';
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import fetchSimulado from "../utils/fetchSimulado"
import Loader from "../components/Loader"
import ItemDetail from "../components/ItemDetail"

const ItemDetailContainer = () => {
    
    const [data, setData] = useState({}) // Objeto donde estará algún item del archivo pasajes.json
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const { id } = useParams()

    useEffect( () => {
        setLoading(true) 
        fetch("/pasajes.json")
        .then(response => response.json())
        .then(dataFromDB => { 
            fetchSimulado(dataFromDB.find(item => item.id == id)) // Selecciono el objeto correspondiente al id dado por el useParams() 
            .then(result => setData(result)) // Actualizo el objeto data. Lo declaro como el objeto que devolvió el fetch
            .catch(err => {console.error(err); setError(true)})
            .finally(() => setLoading(false))
        })
        .catch(err => console.error(err))
    }, [])
        
    return (
        <div>
            {
                loading ? <Loader /> : (error ? <p className="errorCargaDatos">Error! No se cargaron los datos. Intente de nuevo más tarde</p> : <ItemDetail item={data} />) // Coloco un mensaje de error en caso de que los datos no hayan podido ser cargados
            }
        </div>
    )
}

export default ItemDetailContainer
