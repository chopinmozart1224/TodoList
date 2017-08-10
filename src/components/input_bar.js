import React, { Component } from 'react'
import Edit from './edit'

export default class InputBar extends Component {
 
  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <div className="container">
       <header className="header">
         <Edit newTodo
              onSave={this.handleSave}
              placeholder="Enter anything" 
         />
       </header>
      </div>
    )
  }
}