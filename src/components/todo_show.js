import React, { Component } from 'react'
import TodoItem from './todo_item'
 
export default class ShowList extends Component {
 
  render() {
    const { todos, actions } = this.props
    

    return (
      <div className="container">
        <section>
            <ul className="todo-list">
              <h5>Click items for editing</h5>
              {todos.map(todo =>
               <TodoItem key={todo.id} todo={todo} {...actions} />
              )}
            </ul>
        </section>
       </div>
    )
  }
}