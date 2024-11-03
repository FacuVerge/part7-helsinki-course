import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../reducers/user";
import '../index.css'

const NavBar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.user)

    const handleLogOut = (event) => {
        event.preventDefault();
        window.localStorage.removeItem("loggedBlogappUser");
        dispatch(setUser(null));
        navigate('/')
    };
	return (
        <div className="navBar">
            <Link to={`/blogs`}>Blogs</Link>
            <Link to={`/users`}>Users</Link>
            {user? 
                <>
                    {user.username} logged in
                    <button type="submit" onClick={handleLogOut}>
                        Log Out
                    </button>
                </> : 
                <></>
            }
        </div>
    );
};

export default NavBar;
