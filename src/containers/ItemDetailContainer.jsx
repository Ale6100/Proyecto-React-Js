import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import Loader from "../components/Loader";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
    
    const [data, setData] = useState({}) // Objeto donde estará algún item del archivo pasajes.json
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const { id } = useParams()

    useEffect( () => {
        setLoading(true)
        const getProducto = async () => { // Trae un producto según su id. Además devuelve el objeto con el id integrado
            const docSnap = await getDoc(doc(db, "pasajes", id))
            return {id: id, ...docSnap.data()}
        }
        getProducto()
        .then(result => setData(result)) // Actualizo el objeto data. Lo declaro como el objeto que devolvió la promesa
        .catch(err => {console.error(err); setError(true)})
        .finally(() => setLoading(false))
    }, [id])
        
    return (
        <div>
            {
            loading
            ? <Loader />
            : (
                error
                ? <p className="errorCargaDatos">Error! No se cargaron los datos. Intente de nuevo más tarde</p>
                : <ItemDetail item={data} />
                ) // Coloco un mensaje de error en caso de que los datos no hayan podido ser cargados
            }
        </div>
    )
}

export default ItemDetailContainer
