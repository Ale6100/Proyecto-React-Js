import React from "react";
import { Momentum } from "@uiball/loaders";

// La animación que trae el Loader la voy a usar para indicarle a un usuario cuando ciertos están siendo traidos desde la base de datos

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
