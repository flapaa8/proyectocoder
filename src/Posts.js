import React from 'react';
import Post from './Post';
import ItemList from './ItemList'
import './App.css';


function Posts() {
    return (
          
        <div className="posts">
          <Post/>
        <ItemList/>
        </div>
    )
  };


export default Posts;