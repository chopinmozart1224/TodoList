import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../constants/constant'

const initialState = [
  {
    text: 'ToDo List',
    id: 0
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          text: action.text
        },
        ...state
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      )
 
    default:
      return state
  }
}