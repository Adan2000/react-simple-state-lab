import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super()
    this.state = {
      color: props.value
    }
  }
  
  handleClick = () => {
    this.setState({
      color: '#333'
    })
  }
  
  render() {
    return (
      <div 
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}>
      </div>
    )
  }
  
}


//we first set a constructor method, we pass in the props
//passed in from the parent(Matrix). which is an array 
//of values (colors)
//we then set the color initial state to the props value

//we then make a function called HandleClick that will 
//will set the initial state to a different color 
//which is grey/black

//in our render method we set the style to the state color
//we add a onClick method(W/OUT a button) that activates 
//the handleClick method which in turn will change the color.




