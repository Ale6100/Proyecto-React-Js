import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import ItemCarrito from "./ItemCarrito";
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import Swal from "sweetalert2";
import "toastify-js/src/toastify.css";
import actualizarClase from "../utils/actualizarClase";

const Cart = () => {
    const { cartList, clear, precioTotal } = useContext(CartContext); // Traigo el carrito y las funciones necesarias guardadas en el contexto CartContext

    const crearOrdenDeCompra = async (e) => {
        e.preventDefault()
        const itemsFiltrados = cartList.map(producto => ( // Defino un nuevo array similar al carrito pero con menos propiedades
            {
                id : producto.id,
                title: producto.title,
                price: producto.price,
                quantity: producto.cantidad
            }
        ))

        const orden = {
            buyer : { // Coloco los datos ingresados por el usuario
                name : e.target.name.value,
                phone : e.target.phone.value,
                email : e.target.email.value
            },
            items : itemsFiltrados,
            date : serverTimestamp(),
            total : precioTotal(),
        }

        const newOrderRef = doc(collection(db, "orders")) // No coloco tercer parámetro para que las órdenes de compra tengan un id aleatorio definido por firebase. Observar que es similar al addDoc de firebaseConfig.js
        await setDoc(newOrderRef, orden) // Crea la orden en un documento de la base de datos db en la colección orders (si orders no existe, primero lo crea)
                    
        cartList.forEach( async producto => {
            const productoRef = doc(db, "pasajes", producto.id) // Obtenemos la referencia del documento con id "producto.id" de la colección "pasajes" en la base de datos db
            await updateDoc(productoRef, { // Actualiza la propiedad stock de ese producto (objeto) referenciado
                stock : increment(-producto.cantidad) // A cada stock le restamos la cantidad comprada
            })
        })
        clear()
        Swal.fire({
            icon: 'success',
            title: 'Compra finalizada!',
            text: `El id de su orden es ${newOrderRef.id}`
        })

    }

    if (document.getElementById("navCarrito")) actualizarClase("navCarrito") // Coloreo el link del carrito (ya viene coloreado por defecto, pero este if es por si se borró)

    return (
        <main className="contenedor-carrito">
            <h1>Carrito</h1>

            {
            (cartList.length === 0)
            ? // Retorna únicamente el siguiente div si el carrito está vacío
            <div className="carritoVacio">
                <p>El carrito está vacío. Visita la <Link to="/">página principal</Link> para ver todas nuestras ofertas</p>
            </div>
            :
            <>
            <div className="carrito">
                { // Recorro el carrito colocando todos sus elementos en el DOM
                cartList.map( item =>
                    <ItemCarrito
                    key = {item.id}
                    id = {item.id}
                    pictureUrl = {item.pictureUrl}
                    title = {item.title}
                    cantidad = {item.cantidad}
                    price = {item.price}
                    />
                )}
            </div>
            <div className="divFinalizarCompra">
                <p>Total: ${precioTotal()}</p>
                <form id="formDatos" onSubmit={crearOrdenDeCompra}>
                    <input type="text" name="name" placeholder="Nombre y apellido" required />
                    <input type="number" name="phone" placeholder="Teléfono" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <div>
                        <button className="botonComprar">Finalizar compra</button>
                        <button className="botonBorrar" onClick={clear}>Vaciar carrito</button>
                    </div>
                </form>
            </div>
            </>
            }
        </main>
    )
}

export default Cart;
