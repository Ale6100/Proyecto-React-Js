// import './utils/baseDeDatos.js' // Importo este script la primera vez que se ejecuta el programa, para poder exportar los datos del json al firestore
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
