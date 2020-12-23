import React from 'react';
import './App.css';

function Header() {
    return (
        <header>
        <div className="header-content">
            <div className="logo">
                <h1> Servicio <b>Tec</b></h1>

            </div>

            <div className="menu" id="show-menu">

                <nav>
                    <ul>
                        <li><a href="#"><i className="fas fa-bars"></i> </a></li>
                        <li><a href="#"><i className="fas fa-bars"></i></a></li>
                        <li className="menu-selected"><a href="blog.html" className="text-menu-selected"><i
                                    className="fas fa-bars"></i>Productos</a></li>
                        <li><a href="contacto.html"><i className="fas fa-bars"></i></a></li>
                    </ul>
                </nav>

            </div>

        </div>
        <div id="icon-menu">
            <i className="fas fa-bars"></i>
        </div>
        </header>
    );
  }

  export default Header;