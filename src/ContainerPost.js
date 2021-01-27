import React from 'react';
import Inputs from './Inputs'
import ContainerCategory from './ContainerCategory'
import Posts from './Posts'
import ItemList from './ItemList'
import './App.css';
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom';


function ContainerPost() {
    return (
          <BrowserRouter>
        <div className="container-posts">

        <Inputs/>
        <Switch>
        <ContainerCategory/> 
        <Route exact path="category/:categoryId"></Route>  
        <Route exact path="category/:categoryId"></Route>
        <Route exact path="category/:categoryId"></Route>
        <Route exact path="category/:categoryId"></Route>
        <Route exact path="category/:categoryId"></Route>
        <Route exact path="category/:categoryId"></Route>
        <Route exact path="category/:categoryId"></Route>
        
        <div className="SHOW">

        <Posts/>
        
        </div>
        </Switch>
          </div>
          
          </BrowserRouter>
    )
  };

/*<ItemList/>*/
export default ContainerPost;