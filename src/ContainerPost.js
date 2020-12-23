import React from 'react';
import Inputs from './Inputs'
import ContainerCategory from './ContainerCategory'
import Posts from './Posts'
import './App.css';


function ContainerPost() {
    return (
          
        <div className="container-posts">

        <Inputs/>
        <ContainerCategory/>
        <Posts/>
        
          </div>
    )
  };


export default ContainerPost;