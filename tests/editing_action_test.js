import {editTodo} from '../src/actions'
import {EDIT_TODO} from '../src/constants/constant'

describe('editing', () => {

	it('has the correct id for editing', () => {
    const text = 'text'
   	const expectedAction = {
      type: types.EDIT_TODO, 
      id, 
	  text 
    }
   	expect(actions.editTodo(text)).toEqual(expectedAction)
  	 })


})