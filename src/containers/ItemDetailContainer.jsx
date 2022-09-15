import React from 'react';
import { useState, useEffect } from "react"
import fetchSimulado from "../utils/fetchSimulado"
import Loader from "../components/Loader"
import ItemDetail from "../components/ItemDetail"

const ItemDetailContainer = () => {
    
    const [data, setData] = useState({}) // Objeto donde estará algún item del archivo pasajes.json
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        setLoading(true) 
        fetch("./pasajes.json") // Traigo los pasajes del archivo json
        .then(response => response.json())
        .then(dataFromDB => { 
            fetchSimulado(dataFromDB[2]) // Simulo que el tercer objeto del array está siendo traido por una promesa (fetchSimulado) que tarda dos segundos en resolverse
            .then(result => setData(result)) // Actualizo el objeto data. Lo declaro como el objeto que devolvió el fetch
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
            
        })
        .catch(err => console.error(err))
    }, [])
        
    return (
        <div>
            {
                loading ? <Loader /> : <ItemDetail item={data} /> // Ejecuto el componente Loader mientras el objeto no está listo para ser usado
            }
        </div>
    )
}

export default ItemDetailContainer
