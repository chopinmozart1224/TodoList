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
          <Edit newTodo
              onSave={this.handleSave}
              placeholder="Enter anything" 
         />
       </div>
    )
  }
}