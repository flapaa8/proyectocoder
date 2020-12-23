import React from 'react';
import p20 from './images/p20hu.webp'
import './App.css';


function Post() {
    return (
          
        <div class="post" data-category="HTML">
            <div class="ctn-img">
              <img src={p20} alt="" />
            </div>
            <h2>Huawei P20 </h2>
            <span>64Gb Almacenamiento 4Gb RAM</span>
            <ul class="ctn-tag">
              <li>$24.000</li>
              
            </ul>
            <a href="#"><button>Comprar!</button></a>
          </div>
    )
  };


export default Post;