import React from 'react';
import p20 from './images/p20hu.webp'
import Button from './button'
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
            <Button/>
          </div>
    )
  };


export default Post;