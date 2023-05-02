# Space Travels / Proyecto e-commerce ReactJs

Este proyecto lo realicé en mi curso de ReactJs donde debía hacer un e-commerce. Se trata de una agencia de viajes espacial donde puedes simular que te compras pasajes con destino a otros cuerpos celestes pertenecientes al sistema solar.

Te invito a ver una demo subida a la web [aquí](https://spacetravels.netlify.app/)

## Comenzando 🚀

Lee atentamente las siguientes instrucciones si deseas obtener una copia funcional del proyecto en tu computadora.

Primero debes descargar el archivo comprimido _zip_ desde el botón verde "code" o  hacer click [aquí](https://github.com/Ale6100/Proyecto-React-Js/archive/refs/heads/main.zip).

Si en cambio deseas tener una copia en tu propio repositorio de GitHub puedes _Forkear_ el proyecto. 

Mira **Despliegue** para conocer cómo desplegar el proyecto.

### Pre-requisitos 📋

Necesitas tener previamente descargado e instalado [NodeJs](https://nodejs.org/).

### Instalación 🔧

Instala las dependencias con el comando

```
npm install
```

Aunque no son necesarios para el funcionamiento del proyecto una vez que está terminado, incluí los archivos baseDeDatos.js, pasajes.json y la carpeta img como copia de respaldo y para documentar el proceso de trabajo. Utilicé los datos de pasajes extraídos de Firebase, pero antes de ello, los creé en pasajes.json utilizando las imágenes de la carpeta img. Además, desde el mismo código, pude subirlos a Firebase gracias a la implementación de baseDeDatos.js. A continuación explico los pasos a seguir:

La idea es trabajar con datos en firebase. Estos datos están en pasajes.json. Lo que debes hacer es pasar estos datos colocando tus credenciales de firebase en firebaseConfig.js. También debes saber que los links correspondientes a las imágenes del json pueden ser cualquiera. Ocupate de subirlas a algún lado (como por ejemplo al Storage de firebase como hice yo) y luego poner esos links en el json. Una vez hecho esto, debes exportar los datos del json a firebase ejecutando el programa con `npm start` una sóla vez mientras la primera línea de index.js está descomentada, luego debes comentarla para que no trate de exportar los datos dos veces.

## Despliegue 📦

Corre el proyecto con el comando

```
npm start
```

## Construido con 🛠️

* HTML
* CSS
* JavaScript
* [ReactJs](https://reactjs.org/)
* [NodeJs](https://nodejs.org/)
* [Firebase](https://firebase.google.com/)
* [Sweet Alert 2](https://sweetalert2.github.io/)
* [Toastify](https://apvarun.github.io/toastify-js/)
* [React Icons](https://react-icons.github.io/react-icons)
* [React Router Dom](https://www.npmjs.com/package/react-router-dom)
* [Loaders - Uiball](https://uiball.com/loaders/)

## Autor ✒️

* **Alejandro Portaluppi** - [LinkedIn](https://www.linkedin.com/in/alejandro-portaluppi/)

## Expresiones de Gratitud 🎁

* [Alex Marin Mendez](https://www.linkedin.com/in/alexmarinmendez/) - Profesor ReactJs
* [Nicolás Krein Werle](https://www.linkedin.com/in/nicol%C3%A1s-krein-werle-810595191/) - Tutor ReactJs
