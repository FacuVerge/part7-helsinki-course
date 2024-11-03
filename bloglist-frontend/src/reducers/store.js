import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from './blogs'
import userReducer from './user'
import notificationReducer from './notifications'
import usersReducer from './users'

const store = configureStore({  
    reducer: {    
        blogs: blogsReducer,    
        user: userReducer,
        users: usersReducer,
        notification: notificationReducer
    }
})

export default store