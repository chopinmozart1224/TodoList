import {addTodo} from '../src/actions'
import {ADD_TODO} from '../src/constants/constant'

describe('adding', () => {

	it('should create an action to add a todo', () => {
    const text = 'text'
   	const expectedAction = {
      type: types.ADD_TODO,
      text
    }
   	expect(actions.addTodo(text)).toEqual(expectedAction)
  	})

})

}
 

