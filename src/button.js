import React,  { useState } from 'react';
import './App.css';

function Button() {
   
    const [ counter, setCounter ] = useState(0);
    function add() {
        
        if (counter<10)
        {setCounter(counter+1)}
    }
    function substract() {
        
        if (counter>0)
        {setCounter(counter-1)}
            
        
    }
    function addToCart() {
        console.log("Agregado")
    }
 
    return (
        <div>
        <h2>{counter} </h2>
        <button onClick={add} >Sumar</button> 
        <button onClick={substract}>Restar</button>
        <button onClick={addToCart}>Agregar al carro</button>
        </div>
        
        
    );

}



  export default Button;