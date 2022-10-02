import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = { // Este objeto lo proporciona firebase. Si quieres copiar y modificar el código a tu gusto debes generar el tuyo
  apiKey: process.env.API_KEY, // Accede a mi api key,
  authDomain: "proyecto-react-5e7e0.firebaseapp.com",
  projectId: "proyecto-react-5e7e0",
  storageBucket: "proyecto-react-5e7e0.appspot.com",
  messagingSenderId: "1080493102289",
  appId: "1:1080493102289:web:b93a413f22e4a32f14a1f0"
};

const app = initializeApp(firebaseConfig); // Me conecto con firebase
const db = getFirestore(app) // Me conecto con firestore

// Traigo los datos del json pero sólo se van a leer una vez, ya que las siguientes veces van a estar subidos a firebase 
// La primera vez que se ejecute el código debe estar descomentada la primera línea del index.js
async function cargarBaseDeDatos() {
  const promise = await fetch("./json/pasajes.json") 
  const pasajes = await promise.json()
  pasajes.forEach(async (producto) => {
    await addDoc(collection(db, "pasajes"),
    { // Agrego los datos que vinieron del json a una colección "pasajes" en mi db. Crea la colección si no existe
      id_category : producto.id_category,
      pictureUrl : producto.pictureUrl,
      title : producto.title,
      price : producto.price,
      stock : producto.stock,
      details : {
        category : producto.details.category,
        orbita : producto.details.orbita,
        radiokm : producto.details.radiokm,
        gravityms : producto.details.gravityms,
        period : producto.details.period
      },
      description : producto.description
    })
  })
}

export {db, cargarBaseDeDatos}
