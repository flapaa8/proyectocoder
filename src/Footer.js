import React from 'react'; 
import icon from './images/icon.jpg'
import './App.css';


function Footer() {
    return (
          
        <div className="container-footer">
        <footer>
          <div className="logo-footer">
          <img src={icon}  alt="" />
          </div>
          <div className="redes-footer">
            <a
              href="https://api.whatsapp.com/send?phone=+54 9 1133910411&text=Buen dia, tengo una consulta:"
              ><i className="fab fa-whatsapp icon-redes-footer"></i
            ></a>
            <a href="https://www.instagram.com/serviciotec.zn/"
              ><i className="fab fa-instagram icon-redes-footer"></i
            ></a>
            <a href="#"
              ><i className="fas fa-envelope-square icon-redes-footer"></i
            ></a>
          </div>

          <hr />
          <h4>@ 2020 Servicio Tec - Todos Los Derechos Reservados</h4>
        </footer>
        </div>
    )
  };


export default Footer;