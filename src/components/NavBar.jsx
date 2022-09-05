import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <header className="navBar">
      <div className="title">
        <p>BEST BURGERS</p>
      </div>

      <nav>
        <ul className="categories">
          <li>
            <p>Destacados</p>
          </li>
          <li>
            <p>Hamburguesas</p>
          </li>
          <li>
            <p>Bebidas</p>
          </li>
          <li>
            <p>Ensaladas</p>
          </li>
          <li>
            <p>Contacto</p>
          </li>
        </ul>
      </nav>

      <CartWidget />

    </header>
  );
}

export default NavBar;
