import { useSelector } from "react-redux";
import { useMatch, Link } from "react-router-dom";

const User = () => {

	const match = useMatch('/users/:id')
	const users = useSelector(state => state.users)

	const user = match
		? users.find(user => user.id === match.params.id)
		: null

	return (
		<>
			{user ? 
				<div className="user">
					<div>
						<h2>{user? user.username : null}</h2>
						<p>Added blogs</p>
                		<ul>
                    		{user?.blogs?.map(
                        		blog => <li key={blog.id}>{blog.title}</li>
                    		)}
                		</ul>
					</div>
				</div>
				: 
				<p>Login to see user info!</p>
			}
			<p><Link to={`/users`}>Back</Link></p>
		</>
	);
};

export default User;
