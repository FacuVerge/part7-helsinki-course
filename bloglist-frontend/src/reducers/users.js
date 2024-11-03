import { createSlice } from '@reduxjs/toolkit'
import users from '../services/users'

const usersSlice = createSlice({
	name: 'users',
	initialState: [],
	reducers: {
		setUsers(state, action) {      
			return action.payload    
		}
	},
})

export const initializeUsers = () => {  
	return async dispatch => {    
		await users.getAll().then((users) => dispatch(setUsers(users)));      
	}
}
  
export const { setUsers } = usersSlice.actions
  
export default usersSlice.reducer