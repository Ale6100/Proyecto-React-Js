import { createContext, useState } from "react";
import alertaProductoAgregado from "../utils/alertaProductoAgregado"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]); // Originalmente el carrito está vacío

    const addItem = (product, cantidad) => { // Actualiza el carrito agregando un producto la cantidad de veces que le hayamos pedido
        
        if (isInCart(product.id)) { 
            /*
            Los siguientes condicionales analizan si se puede agregar al carrito todo lo que pediste cuando apretas en "Agregar al carrito".
            Está pensado para evitar aquellos casos donde se agreguen productos al carrito pero en vez de ir al carrito y comprar... se decida cambiar de página y volver para agregar al carrito el mismo producto, provocando que en el carrito queden más items que el stock disponible
            */
            const index = cartList.findIndex( item => item.id === product.id)
            if (product.stock >= cartList[index].cantidad + cantidad) { // Si se puede agregar todo lo que pediste, lo hace 
                alertaProductoAgregado(product, cartList[index].cantidad, cantidad, "todo agregado")
                cartList[index].cantidad += cantidad

            } else if ((product.stock < cartList[index].cantidad + cantidad) && (product.stock !== cartList[index].cantidad)) { // Si la cantidad a agregar sobrepasa al stock, entonces defino la cantidad en el carrito como la máxima posible (es decir, como al stock)
                alertaProductoAgregado(product, cartList[index].cantidad, cantidad, "agregado parcial")
                cartList[index].cantidad = product.stock
            
            } else { // Se ejecuta si la cantidad que ya hay en el carrito es la máxima disponible (product.stock == cartList[index].cantidad), es decir, no agrega nada al carrito
                alertaProductoAgregado(product, cartList[index].cantidad, cantidad, "no hay lugar")
            }

            setCartList([...cartList])
            
        } else { // Esto se ejecuta si el producto se guarda en el carrito por primera vez
            product.cantidad = cantidad
            setCartList([...cartList, product])
            alertaProductoAgregado(product, null, cantidad, "todo agregado")
        }
    }

    const clear = () => { // Borra el carrito (lo redefine como un array vacío)
        setCartList([])
    }



    const isInCart = (id) => { // Devuelve true si el producto con este id ya pertenece al carrito
        return cartList.some(item => item.id === id)
    }

    const removeItem = (id) => { // Remueve el elemento con este id del carrito
        const index = cartList.findIndex( item => item.id === id)
        cartList.splice(index, 1)
        setCartList([...cartList])
    }

    const cantidadItemsCarrito = () => { // Itera sobre el carrito y suma la cantidad total de productos
        return cartList.reduce((previousValue, producto) => previousValue + producto.cantidad, 0);
    }

    const precioTotal = () => {
        return cartList.reduce((previousValue, producto) => previousValue + (producto.price*producto.cantidad), 0);
    }

    return (
        <CartContext.Provider value={{ cartList, addItem, clear, removeItem, cantidadItemsCarrito, precioTotal }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
