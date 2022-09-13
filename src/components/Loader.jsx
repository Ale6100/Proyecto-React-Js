import { Momentum } from '@uiball/loaders'

// Creo un componente Loader. La animación que trae la voy a usar para indicarle a un usuario cuando ciertos datos no estén listos para ser mostrados

const Loader = () => { 
    return (
        <div className="loader">
            <Momentum
            size={80}
            speed={0.9} 
            color="rgb(30, 30, 50)" 
            />
        </div>
    )
}

export default Loader