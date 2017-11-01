import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import InputBar from '../components/input_bar'
import ToDoShow from '../components/todo_show'
import * as TodoActions from '../actions'

const App = ({todos, actions}) => (
  <div>
    <InputBar addTodo={actions.addTodo} />
    <ToDoShow todos={todos} actions={actions} />
  </div>
)
 

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)