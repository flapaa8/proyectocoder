import React, { useState } from 'react';
import { useEffect } from 'react'
import Button from './button'
import p20 from './images/p20hu.webp'
import ItemDetailContainer from './ItemDetailContainer'
function ItemDetail( { title, img, detail, price }) {


    return (
        <div> 
             
            <div class="post" data-category="HTML">
            <div class="ctn-img">
              <img src={img} alt="" />
            </div>
            <h2>{title}</h2>
            <span>{detail}</span>
            <ul class="ctn-tag">
              <li>{price}</li>
              
            </ul>
            <Button/>
          </div>
          </div>
    
    )
}

export default ItemDetail ;