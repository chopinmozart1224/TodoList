import {deleteTodo} from '../src/actions'
import {DELETE_TODO} from '../src/constants/constant'

describe('deleting', () => {

	 it('has the correct id for deleting', () => {
	 const expectedAction = {
      type: types.DELETE_TODO,
      id
     }
     expect(actions.deleteTodo(id)).toEqual(expectedAction)
     });

})