import React from 'react';
import './App.css';


function Inputs() {
    return (
          
        <div>

        
        <input
          type="radio"
          id="TODOS"
          name="categories"
          value="TODOS"
          checked
        />
        <input type="radio" id="HTML" name="categories" value="HTML" />
        <input type="radio" id="CSS" name="categories" value="CSS" />
        <input type="radio" id="JS" name="categories" value="JS" />
        <input type="radio" id="PHP" name="categories" value="PHP" />
        <input type="radio" id="NODEJS" name="categories" value="NODEJS" />
        <input type="radio" id="VUE" name="categories" value="VUE" />

        
          </div>
    )
  };


export default Inputs;