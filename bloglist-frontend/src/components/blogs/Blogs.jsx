import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Togglable from "../Togglable";
import BlogForm from './BlogForm'

const Blogs = () => {

    const user = useSelector(state => state.user)
    const blogs = useSelector(state => state.blogs)
	
    return(
		<>
			{user ? 
				<>
					<Togglable buttonLabel="New Blog" >
						<BlogForm />
					</Togglable>
					<h2>Blogs</h2>
					<ul>
						{blogs.map((blog) => (
							<li key={blog.id}>
								<Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
							</li>
						))}
					</ul>
				</> : 
				<>
					<p>Login to see al the blogs</p>
				</> 
			}
			<p><Link to={`/`}>Back</Link></p> 
		</> 
    )
};

export default Blogs;
