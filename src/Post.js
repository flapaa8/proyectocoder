import React, { useState } from 'react';
import { useEffect } from 'react'
import p20 from './images/p20hu.webp'
import MG5P from './images/MG5P.jpg'
import Button from './button'
import './App.css';

const productos = [
  {
    title:"Huawei P20", 
    detail:"64Gb Almacenamiento 4Gb RAM" ,
    price:"24.000", 
    img:p20
  },
  {
    title:"Moto G5 Plus", 
    detail:"64Gb Almacenamiento 2Gb RAM" ,
    price:"17.500", 
    img:MG5P
  }
]
function Post() {
  
  const [products, setProducts] = useState([
            
            
          ]);
          useEffect(() => {
            // Armamos nuestra promise (también la podríamos armar fuera del componente). La promise toma dos parametros, que se resuelva bien o sea rechazada. En nuestro caso va a ser siempre resuelta bien, pero podría ser que nosotros le pedimos info a un servidor y falla
    const promesa = new Promise((resolve, reject) => {
      // Acá va nuestra tarea. En este caso, un setTimeout
      setTimeout(function() {
        // Nos devuelve el listado de productos que definimos arriba
        resolve(productos);
      }, 2000); //espera 2 seconds
    })
      // Para "cumplir" la promesa nosotrs tenemos que usar dos cosas, un then si sale bien, y un catch si hay un error
      .then(result => setProducts(result))  // Si salió bien,  le vamos a mandar el listad ode productos al estado
      .catch(err => console.log("Algo salio mal")); // Solo avisamos que algo salió mal
  }, [products]);
          return  <div> 
            {products.map((u) => 
            <div class="post" data-category="HTML">
            <div class="ctn-img">
              <img src={u.img} alt="" />
            </div>
            <h2>{u.title}</h2>
            <span>{u.detail}</span>
            <ul class="ctn-tag">
              <li>{u.price}</li>
              
            </ul>
            <Button/>
          </div>)}
          </div>
    
  };


export default Post;