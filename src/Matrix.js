import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <Cell value={val} />)
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}
Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}
//here we set  some defaultprops



//in genMatrix it maps over Basically, every 'row' 
//in this.props.values and 
//will create a <div className="row"> and pass in 
//several arrays of seperated rows of the data.js

//in genRow vals will = to seperated array rows as above
//in here we will map through those arrays 
//pass in the array of values to Cell as a 'value'