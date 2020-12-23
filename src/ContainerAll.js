import React from 'react';
import Cover from './Cover';
import ContainerPost from './ContainerPost';
import './App.css';




function ContainerAll() {
  return (
    <div className="container-all" id="move-content">
      <Cover/>
      <ContainerPost/>
    </div>
  );
}

export default ContainerAll;
