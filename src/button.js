import React, { Component } from 'react';
import './App.css';

class Button extends Component {
   
    constructor(props) {
        super(props)
        this.state= {counter: 0}
    }
    add() {
        this.setState({counter:this.state.counter + 1})
        
    }
   render(){
    return (
        <button onClick={this.add.bind(this)} >Comprar!: {this.state.counter} </button>
        
    );
}
  }



  export default Button;