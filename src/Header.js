import React from 'react';
import './App.css';

function Header() {
    return (
        <div className="header-content">
            <div className="logo">
                <h1> Servicio <b>Tec</b></h1>

            </div>

            <div className="menu" id="show-menu">

                <nav>
                    <ul>
                        <li><a href="#"><i className="fas fa-bars"></i>Inicio </a></li>
                        <li><a href="#"><i className="fas fa-bars"></i>Novedades</a></li>
                        <li class="menu-selected"><a href="blog.html" className="text-menu-selected"><i
                                    className="fas fa-bars"></i>Productos</a></li>
                        <li><a href="contacto.html"><i className="fas fa-bars"></i>Contacto</a></li>
                    </ul>
                </nav>

            </div>

        </div>
    );
  }

  export default Header;