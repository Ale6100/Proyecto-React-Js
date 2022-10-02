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
            <Link id="navInicio" to="/">Inicio</Link>
          </li>
          <li>
            <Link id="navPlanetas" to="/category/1">Planetas</Link>
          </li>
          <li>
            <Link id="navSatelites" to="/category/2" >Satélites</Link>
          </li>
          <li>
            <Link id="navOtros" to="/category/3">Otros</Link>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
}

export default NavBar;
