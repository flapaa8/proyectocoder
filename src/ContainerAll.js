import React from 'react';
import Cover from './Cover';
import ContainerPost from './ContainerPost';
import ButtonUp from './ButtonUp';
import Footer from './Footer'
import './App.css';





function ContainerAll() {
  return (
    <div className="container-all" id="move-content">
      <Cover/>
      <ContainerPost/>
      <ButtonUp/>
      <Footer/>
    </div>
  );
}

export default ContainerAll;
