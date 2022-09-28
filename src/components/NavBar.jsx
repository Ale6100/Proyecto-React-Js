import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navBar">
      <div className="title">
        <Link to="/">SPACE TRAVELS</Link>
      </div>

      <nav>
        <ul className="categories">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/category/1">Planetas</Link>
          </li>
          <li>
            <Link to="/category/2" >Satélites</Link>
          </li>
          <li>
            <Link to="/category/3">Otros</Link>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
}

export default NavBar;
