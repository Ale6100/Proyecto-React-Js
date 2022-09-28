import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/firebaseConfig"; 
import Loader from "../components/Loader";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {

    const [data, setData] = useState([]) // Array donde estarán los items de los datos extraidos del firebase
    const [loading, setLoading] = useState(false) // Establezco que inicialmente los archivos no se están cargando
    const [error, setError] = useState(false)
    const { id } = useParams() // Devuelve el id que viene en la url 

    useEffect(() => {
        setLoading(true)
        const consultaAlFirestore = async () => {
            let q
            if (id !== undefined) { // Si pasamos un id en la url, entonces no extraigo todos los productos, sino sólo aquellos cuya propiedad id_category es igual a ese id
                q = query(collection(db, "pasajes"), where("id_category", "==", parseInt(id)))
            } else {
                q = query(collection(db, "pasajes"))
            }
            const querySnapshot = await getDocs(q) // Obtiene los documentos de la collección de la base de datos db. La colección se llama pasajes
            const dataFromFirestore = querySnapshot.docs.map(document => (
                { // Recorro el array y coloco el id de firestore en cada objeto
                    id: document.id,
                    ...document.data()
                }
            ))
            return dataFromFirestore
        }
        consultaAlFirestore()
        .then(result => setData(result))
        .catch(err => {console.error(err); setError(true)})
        .finally(() => setLoading(false))
    }, [id]) // La función flecha del useEffect se va a ejecutar cuando se monta el componente y cuando se actualiza el id

    return (
        <div>
            {
            loading
            ? <Loader />
            : (
                error 
                ? <p className="errorCargaDatos">Error! No se cargaron los datos. Intente de nuevo más tarde</p>
                : <ItemList items={data} />
                )
            }
        </div>
    );
}

export default ItemListContainer;
