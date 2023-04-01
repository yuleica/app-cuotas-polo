import React from 'react';
import {Link, Outlet} from 'react-router-dom';


export const Navbar = () => {
  return (
    <div>
        <nav>
            <div>
                <a href='/'>Cooperativas</a>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to='/cuotas'>Ingresar Cuotas</Link>
                    </li>
                    <li>
                        <Link to='/cooperativas'>Ingresar Cooperativas</Link>
                    </li>
                </ul>
            </div>

        </nav>
        <section>
          <Outlet></Outlet>
        </section>
        
    </div>
  )
}