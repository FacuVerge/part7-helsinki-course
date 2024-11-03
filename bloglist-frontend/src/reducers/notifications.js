import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',  
    initialState: null,
    reducers: {
        notificate(state, action) {
            return action.payload
        }
    },
})

export const setNotification = (message) => {  
	return async dispatch => {    
		dispatch(notificate(message));
		setTimeout(() => {
			dispatch(notificate(""));
		}, 5000);    
	}
}

export const { notificate } = notificationSlice.actions
export default notificationSlice.reducer