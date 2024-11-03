import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Users = () => {

    const user = useSelector(state => state.user)
    const users = useSelector(state => state.users)

    return(
		<>
			{user ? 
				<div>
					<h2>Users</h2>
					<Table>
						<thead>
							<tr>
								<th></th>
								<th>Blogs created</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user) => (
								<tr key={user.id}>
									<td><Link to={`/users/${user.id}`}>{user.username}</Link></td>
									<td>{user.blogs.length}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div> : 
				<>
					<p>Login to see al the users</p>
				</> 
			}
			<p><Link to={`/`}>Back</Link></p> 
		</> 
    )
};

export default Users;
