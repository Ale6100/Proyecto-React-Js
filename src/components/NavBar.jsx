import React from 'react';

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="title">
        <p>BEST BURGERS</p>
      </div>

      <div>
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
      </div>
    </div>
  );
}

export default NavBar;