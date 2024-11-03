import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMatch, Link, useNavigate } from "react-router-dom";
import { deleteBlog, updateBlog } from "../../reducers/blogs";

const Blog = () => {

	const [newComment, setNewComment] = useState("");
	const match = useMatch('/blogs/:id')
	const blogs = useSelector(state => state.blogs)
	const user = useSelector(state => state.user)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const blog = match
		? blogs.find(blog => blog.id === match.params.id)
		: null

	const handleLike = () => {
		const blogObject = {
			title: blog.title,
			author: blog.author,
			likes: blog.likes + 1,
			url: blog.url,
			user: blog.user.id,
			comments: blog.comments,
		};
		dispatch(updateBlog({blogObject, id: blog.id}))
	};

	const handleDelete = () => {
		if (window.confirm("You are about to delete a blog")) {
			dispatch(deleteBlog(blog.id))
			navigate('/blogs')
		}
	};

	const addComment = (event) => {
		event.preventDefault();
		
		const blogObject = {
			title: blog.title,
			author: blog.author,
			likes: blog.likes,
			url: blog.url,
			user: blog.user.id,
			comments: blog.comments.concat({text: newComment, id: Math.floor(Math.random() * 10000)}),
		};
		dispatch(updateBlog({blogObject, id: blog.id}))
		setNewComment("")
	};

	const handleCommentChange = (event) => {
		setNewComment(event.target.value);
	};

	return (
		<>
			{user ? 
				<div className="blog">
					<h2>{blog?.title}</h2>
						<p>{blog?.url}</p>
						<p>
							Likes: {blog.likes}{" "}
							<button type="button" onClick={handleLike}>
								Like
							</button>
						</p>
						<p>Author: {blog.author}</p>
						<p>Added by {blog.user.name}</p>
						{blog.user.id === user.id ? (
							<button type="button" onClick={handleDelete}>
								Delete
							</button>
						) : (
							<></>
						)}
						<h2>Comments</h2>
						<form onSubmit={addComment}>
							<div>
								New Comment:{" "}
								<input
									data-testid="comment"
									value={newComment}
									onChange={handleCommentChange}
									id="blog-new-comment"
								/>
								<button type="submit">Add comment!</button>
							</div>
						</form>
						<ul>
							{blog?.comments.map(
								comment => <li key={comment.id}><p>{comment.text}</p></li>
							)}
						</ul>
				</div> 
				: 
				<p>Login to see the blogs!</p>
			}
			<p><Link to={`/blogs`}>Back</Link></p>
		</>
	);
};

export default Blog;
