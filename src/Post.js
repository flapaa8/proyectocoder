import React, { useState } from 'react';
import p20 from './images/p20hu.webp'
import MG5P from './images/MG5P.jpg'
import Button from './button'
import './App.css';


function Post() {
  setTimeout(function(){useState}, 3000);
          const [post, postState] = useState([
            
            {title:"Huawei P20", detail:"64Gb Almacenamiento 4Gb RAM" ,price:"24.000", img:p20},
            {title:"Moto G5 Plus", detail:"64Gb Almacenamiento 2Gb RAM" ,price:"17.500", img:MG5P}
          ])
          return  <div> 
            {post.map((u) => 
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