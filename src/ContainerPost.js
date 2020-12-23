import React from 'react';
import Inputs from './Inputs'
import ContainerCategory from './ContainerCategory'
import Posts from './Posts'
import ItemList from './ItemList'
import './App.css';


function ContainerPost() {
    return (
          
        <div className="container-posts">

        <Inputs/>
        <ContainerCategory/>   
        <div className="SHOW">  
        <Posts/>
        <ItemList/>
        </div>
        
          </div>
    )
  };


export default ContainerPost;