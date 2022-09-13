import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import IntemCount from './IntemCount';

const Item = ( {pictureUrl, title, price, stock} ) => {
    const agregarAlCarrito = (title_prod, cant_prod) => { // Le muestro al usuario que los pasajes que pidió ya se agregaron al carrito, mediante la librería Toastify
        let texto
        if (cant_prod == 1) {
            texto = `Un pasaje con destino a ${title_prod} agregado al carrito`
        } else {
            texto = `Agregaste ${cant_prod} pasajes con destino a ${title_prod} al carrito`
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
            }
          }).showToast();
    }

    return (
        <div className="divItem">
            <div className="divImagenItem">
                <img src={`./img/${pictureUrl}`}/>
            </div>

            <div className="divTitlePriceItem">
                <p className="pTitleItem">{title}</p>
                <p>${price} - Stock: {stock}</p>
            </div>
            <IntemCount stock={stock} initial={1} clickAgregar={(cantidad)=>agregarAlCarrito(title, cantidad)}/>
        </div>
    );
}

export default Item;
