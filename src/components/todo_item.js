import React, { Component } from 'react'
import classnames from 'classnames'
import Edit from './edit'
import {button, Table} from 'react-bootstrap'

export default class TodoItem extends Component {
 
  state = {
    editing: false
  }

  handClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  render() {
    const { todo, deleteTodo } = this.props;

    let element
    if (this.state.editing) {
      element = (
        <Edit text={todo.text}
            editing={this.state.editing}
            onSave={(text) => this.handleSave(todo.id, text)} 
        />
      )
    } else {
      element = (
        <div className="view">
         
          <label onClick={this.handClick}>
            {todo.text}
          </label>
         
          <button className="btn btn-danger"
                  onClick={() => deleteTodo(todo.id)} 
          >
          remove
          </button>
        </div>
      )
    }

    return (
    <Table>
       <tr>
          <td className={classnames({
          editing: this.state.editing
          })}>
         {element}
         </td>
        </tr>
    </Table>
    )
  }
}