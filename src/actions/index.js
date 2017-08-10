import * as types from '../constants/constant'

export const addTodo = text => ({ 
	type: types.ADD_TODO, 
	text 
})

export const deleteTodo = id => ({ 
	type: types.DELETE_TODO, 
	id 
})

export const editTodo = (id, text) => ({ 
	type: types.EDIT_TODO, 
	id, 
	text 
})

 

 
 