import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import ItemCarrito from "./ItemCarrito";
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import actualizarClase from "../utils/actualizarClase";

const Cart = () => {
    const { cartList, clear, precioTotal } = useContext(CartContext); // Traigo el carrito y las funciones necesarias guardadas en el contexto CartContext

    // Las siguientes tres validaciones no son perfectas, pero tratan de simular al atributo required de los inputs (ya que en este código los required no funcionan para validar)
    const textoValido = (texto) => { // Devuelve true si el string "texto" tiene algún carácter no vacío
        return texto.split("").some(elemento => elemento !== " ")
    }

    const numeroValido = (numero) => { // Devuelve true si el string "numero" tiene algún carácter numérico
        return numero.split("").some(elemento => (isNaN(parseInt(elemento)) === false) )
    }

    const mailValido = (mail) => { // Devuelve true si el string "mail" tiene algún arroba y punto
        let mailConArroba = mail.split("").some(elemento => elemento === "@")
        let mailConPunto = mail.split("").some(elemento => elemento === ".")
        return (mailConArroba && mailConPunto)
    }

    const crearOrdenDeCompra = async (e) => {
        e.preventDefault() // Prevengo que actualice la página
        const formulario = document.getElementById("formDatos")
        const nombreForm = formulario.children[0].value
        const telefonoForm = formulario.children[1].value
        const mailForm = formulario.children[2].value

        if (textoValido(nombreForm) && numeroValido(telefonoForm) && mailValido(mailForm)) { // Le pido que cree la orden de compra siempre y cuando los datos ingresados sean válidos
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
                    name : nombreForm,
                    phone : telefonoForm,
                    email : mailForm
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
        } else {
            Toastify({
                text: "Datos incorrectos, por favor revisalos",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(to right, rgb(0, 0, 0), rgb(100, 60, 60))",
                    border : "1px solid rgb(200, 120, 120)",
                    borderRadius : "5px",
                    marginTop: "23px"
                }
            }).showToast();
        }
    }

    if (document.getElementById("navCarrito")) { // Coloreo el link del carrito (ya viene coloreado por defecto, pero este if es por si se borró)
        actualizarClase("navCarrito")
    }

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
                <form id="formDatos">
                    <input type="text" placeholder="Nombre y apellido" />
                    <input type="number" placeholder="Teléfono" />
                    <input type="email" placeholder="Email" />
                    <div>
                        <button onClick={(e) => crearOrdenDeCompra(e)} className="botonComprar">Finalizar compra</button>
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
