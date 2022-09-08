import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <header className="navBar">
      <div className="title">
        <p>SPACE TRAVELS</p>
      </div>

      <nav>
        <ul className="categories">
          <li>
            <p>Destacados</p>
          </li>
          <li>
            <p>Planetas</p>
          </li>
          <li>
            <p>Satélites</p>
          </li>
          <li>
            <p>Combos</p>
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
