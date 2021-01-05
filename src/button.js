import React,  { useState } from 'react';
import './App.css';

function Button() {
   
    const [ counterHP20, setCounter ] = useState(0);
    function add() {
        setCounter(counterHP20+1)
    }
    function substract() {
        setCounter(counterHP20-1)
    }
    function addToCart() {
        console.log("Agregado")
    }
 
    return (
        <div>
        <h2>{counterHP20} </h2>
        <button onClick={add} >Sumar</button> 
        <button onClick={substract}>Restar</button>
        <button onClick={addToCart}>Agregar al carro</button>
        </div>
        
        
    );

  }



  export default Button;