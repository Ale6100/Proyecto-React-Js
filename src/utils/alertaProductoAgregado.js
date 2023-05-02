import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const alertaProductoAgregado = (producto, cantidadActual, cantidadAAgregar, condicion) => { // Le muestro al usuario que los pasajes que pidió ya se agregaron al carrito, mediante la librería Toastify
    let texto
    if (condicion === "todo agregado") {
        texto = (cantidadAAgregar === 1)
        ? `Un pasaje con destino a ${producto.title} agregado al carrito`
        : `Agregaste ${cantidadAAgregar} pasajes con destino a ${producto.title} al carrito`

    } else if (condicion === "agregado parcial") { // Ejemplo: si el stock es de 100, pero ya hay 70 productos en el carrito y querés agregar 50 más, entonces recorta 70 - (100 - 50) = 20 productos de los que pediste para no sobrepasar el stock
        texto = `No sobrepases el límite! Recortamos ${cantidadActual - (producto.stock - cantidadAAgregar)} productos para no superar el stock`
    
    } else {
        texto = `Cuidado con el stock! No puedes agregar más items de este producto`
    }
    
    Toastify({
        text: texto,
        duration: 3500,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
        background: "linear-gradient(to right, rgb(0, 0, 0), rgb(60, 60, 100))",
        border : "1px solid rgb(120, 120, 200)",
        borderRadius : "5px",
        marginTop: "23px"
        }
    }).showToast();
}

export default alertaProductoAgregado
