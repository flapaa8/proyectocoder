import React, { useState , setItems} from 'react';
import { useEffect } from 'react'
import p20 from './images/p20hu.webp'
import MG5P from './images/MG5P.jpg'
import Button from './button'
import './App.css';
import ItemDetail from './itemDetail';
import { useParams} from 'react-router-dom';

const productos = 
  {
    category:"TODOS",
    categoryId:"Otros",
    title:"Huawei P20", 
    detail:"64Gb Almacenamiento 4Gb RAM" ,
    price:"24.000", 
    img:p20
  }
  

function Post() {
  
  const [products, setProducts] = useState([
            
            
          ]);
          const { id } = useParams()
          useEffect(() => {
            if(id){
              const category = products.filter(product => product.categoryId === id)
              setItems(category)
          }
          else{
            setItems(products)
        }
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
          return  (
         <div>
           { productos ?
           <ItemDetail
           title={productos.title}
          detail={productos.detail}
          price={productos.price}
          img={productos.img}
          />
          :
          <h2>Articulo</h2>}
         </div>
  
         )   }
export default Post;