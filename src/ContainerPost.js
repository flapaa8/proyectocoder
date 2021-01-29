import React from 'react';




import './App.css';
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom';


function ContainerPost() {
    return (
          <BrowserRouter>
        <div className="container-posts">

        
        <Switch>
        
        <Route exact path="category/:categoryId"></Route>  
        <Route exact path="category/:categoryId"></Route>
        <Route exact path="category/:categoryId"></Route>
        <Route exact path="category/:categoryId"></Route>
        <Route exact path="category/:categoryId"></Route>
        <Route exact path="category/:categoryId"></Route>
        <Route exact path="category/:categoryId"></Route>
        
        <div className="SHOW">

      
        
        </div>
        </Switch>
          </div>
          
          </BrowserRouter>
    )
  };


export default ContainerPost;