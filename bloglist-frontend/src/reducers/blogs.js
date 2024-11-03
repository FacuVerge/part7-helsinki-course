import { createSlice } from '@reduxjs/toolkit'
import blogs from '../services/blogs'
import { setNotification } from './notifications'

const blogSlice = createSlice({
	name: 'blogs',
	initialState: [],
	reducers: {
		setBlogs(state, action) {      
			return action.payload    
		}
	},
})

export const initializeBlogs = () => {  
	return async dispatch => {    
		const blogsData = await blogs.getAll().then((blogs) => blogs.sort((a, b) => b.likes - a.likes));    
		dispatch(setBlogs(blogsData))  
	}
}
  
export const createBlog = content => {  
	return async dispatch => {    
		await blogs.create(content).then((response) => {
			dispatch(initializeBlogs())  
			dispatch(setNotification("A New Blog was created successfully!"));
		}).catch((error) => dispatch(setNotification(error.message)));    
	}
}

export const updateBlog = content => {  
	return async dispatch => {    
		await blogs.put(content.blogObject, content.id)
		.then(() => {
			dispatch(initializeBlogs());
			dispatch(setNotification("A Blog was updated successfully!"));
		})
		.catch((error) => dispatch(setNotification(error.message)));  
	}
}

export const deleteBlog = content => {  
	return async dispatch => {    
		await blogs.deleteBlog(content)
		.then(() => {
			dispatch(initializeBlogs())
			dispatch(setNotification("A Blog was deleted successfully!"));
		})
		.catch((error) => dispatch(setNotification(error.message)));
	}
}
  
export const { setBlogs } = blogSlice.actions
  
export default blogSlice.reducer