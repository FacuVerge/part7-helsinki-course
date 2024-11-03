import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from '../reducers/user';
import { initializeBlogs } from '../reducers/blogs';
import { initializeUsers } from '../reducers/users';
import { setNotification } from "../reducers/notifications";
import login from "../services/login";
import { Form, Button } from 'react-bootstrap'

const LoginForm = () => {

    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

    const handleLogin = async (event) => {
		
        event.preventDefault();
        try {
            await login.login({
                username,
                password,
            }).then((response) => {
                window.localStorage.setItem("loggedBlogappUser", JSON.stringify(response.data));
                dispatch(setUser(response.data))
                dispatch(initializeUsers())
                dispatch(initializeBlogs())
            })
        } catch(e) {
            dispatch(setNotification("Wrong credentials"))
        }

        setUsername("");
        setPassword("");
	};

    return(
        !user ? 
        <Form onSubmit={handleLogin}>
            <h2>Log in to application</h2>
            <Form.Group>
                Username
                <Form.Control
                    data-testid="username"
                    type="text"
                    value={username}
                    name="Username"
                    onChange={({ target }) => setUsername(target.value)}
                />
            </Form.Group>
            <Form.Group>
                Password
                <Form.Control
                    data-testid="password"
                    type="password"
                    value={password}
                    name="Password"
                    onChange={({ target }) => setPassword(target.value)}
                />
            </Form.Group>
            <Button type="submit">login</Button>
        </Form> : 
        <></> 
    )
};

export default LoginForm;
