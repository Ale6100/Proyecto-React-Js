import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className="navBar">
      <div className="title">
        <Link to="/" className='linkNav'>SPACE TRAVELS</Link>
      </div>

      <nav>
        <ul className="categories">
          <li>
            <Link to="/category/1" className='linkNav'>Planetas</Link>
          </li>
          <li>
            <Link to="/category/2" className='linkNav'>Satélites</Link>
          </li>
          <li>
            <Link to="/category/3" className='linkNav'>Otros</Link>
          </li>
        </ul>
      </nav>

      <CartWidget />

    </header>
  );
}

export default NavBar;
