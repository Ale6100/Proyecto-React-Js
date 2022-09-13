import React from 'react';
import "./App.css";
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Mensaje renderizado!" />
    </>
  );
}

export default App;
