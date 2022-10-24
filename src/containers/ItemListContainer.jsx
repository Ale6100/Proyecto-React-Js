import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/firebaseConfig"; 
import Loader from "../components/Loader";
import ItemList from "../components/ItemList";
import actualizarClase from "../utils/actualizarClase";

const ItemListContainer = () => {

    const [data, setData] = useState([]) // Array donde estarán los items de los datos extraidos del firebase
    const [loading, setLoading] = useState(false) // Establezco que inicialmente los archivos no se están cargando
    const [error, setError] = useState(false)
    const { id } = useParams() // Devuelve el id que viene en la url 

    useEffect(() => {
        setLoading(true)
        const consultaAlFirestore = async () => {
            let q
            if (id !== undefined) { // Si pasamos un id en la url, entonces no extraigo todoos productos, sino sólo aquellos cuya propiedad id_category es igual a ese ids l
                q = query(collection(db, "pasajes"), where("id_category", "==", parseInt(id)))
            } else {
                q = query(collection(db, "pasajes"))
            }
            const querySnapshot = await getDocs(q) // Obtiene los documentos de la collección de la base de datos db. La colección se llama pasajes
            const dataFromFirestore = querySnapshot.docs.map(document => (
                { // Recorro el array y coloco el id de firestore en cada objeto
                    id: document.id, ...document.data()
                }
            ))
            return dataFromFirestore
        }
        consultaAlFirestore()
        .then(result => setData(result))
        .catch(err => {console.error(err); setError(true)})
        .finally(() => setLoading(false))
        
        const ruta = window.location.pathname
        if (ruta === "/") { // Cambio las clases de los links del la NavBar para indicarle al usuario donde está ubicado
            actualizarClase("navInicio")
        } else if (ruta === "/category/1") {
            actualizarClase("navPlanetas")
        } else if (ruta === "/category/2") {
            actualizarClase("navSatelites")
        } else if (ruta === "/category/3") {
            actualizarClase("navOtros")
        }
        
    }, [id]) // La función flecha del useEffect se va a ejecutar cuando se monta el componente y cuando se actualiza el id

    return (
        <main>
            {
            loading
            ? <Loader />
            : (
                error 
                ? <p className="errorCargaDatos">Error! No se cargaron los datos. Intente de nuevo más tarde</p>
                :
                <>
                    <div className="divIntro">
                        <p>Quiere darse una "escapada" en sus vacaciones? Aproveche las novedosas ofertas que tenemos y compre un pasaje para pisar los cuerpos celestes rocosos disponibles y sobrevolar los gaseosos! Aventúrese a hacer un recorrido fuera de este mundo!</p>
                    </div>
                    <ItemList items={data} />
                </> 
                )
            }
        </main>
    );
}

export default ItemListContainer;
