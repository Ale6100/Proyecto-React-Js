import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]); // Originalmente el carrito está vacío
    
    const addItem = (product, cantidad) => { // Actualiza el carrito agregando un producto la cantidad de veces que le hayamos pedido
        if (isInCart(product.id)) { 
            const index = cartList.findIndex( item => item.id == product.id)
            cartList[index].cantidad += cantidad
            setCartList([...cartList])
        } else { // Esto se ejecuta si el producto se guarda en el carrito por primera vez
            product.cantidad = cantidad
            setCartList([...cartList, product])
        }
    }

    const clear = () => { // Borra el carrito (lo redefine como un array vacío)
        setCartList([])
    }

    const isInCart = (id) => { // Devuelve true si el producto con este id ya pertenece al carrito
        return cartList.some(item => item.id == id)
    }

    const removeItem = (id) => { // Remueve el elemento con este id del carrito
        const index = cartList.findIndex( item => item.id == id)
        cartList.splice(index, 1)
        setCartList([...cartList])
    }

    const cantidadItemsCarrito = () => { // Itera sobre el carrito y suma la cantidad total de productos
        return cartList.reduce((previousValue, carrito) => previousValue + carrito.cantidad, 0);
    }

    const precioTotal = () => {
        return cartList.reduce((previousValue, carrito) => previousValue + (carrito.price*carrito.cantidad), 0);
    }

    return (
        <CartContext.Provider value={{ cartList, addItem, clear, removeItem, cantidadItemsCarrito, precioTotal }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
