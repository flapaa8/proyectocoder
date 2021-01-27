import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';


function ContainerCategory() {
    return (
          
        <div className="container-category">
                <label for="TODOS" >TODOS</label>
                <label for="HTML">Apple</label>
                <label for="CSS">Moto</label>
                <label for="JS">LG</label>
                <label for="PHP">Samsung</label>
                <label for="NODEJS">Huawei</label>
                <label for="VUE">Otros</label>
            </div>
    )
  };


export default ContainerCategory;