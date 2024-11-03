import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Notification from "./components/Notification";
import Home from "./components/Home";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Blogs from "./components/blogs/Blogs";
import Blog from "./components/blogs/Blog";

const App = () => {

	return (
		<div className="container">
			<NavBar />
			<h1>Blogs App</h1>
			<Notification />
			<Routes>
				<Route path="/blogs/:id" element={<Blog />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/users" element={<Users /> }/>
				<Route path="/users/:id" element={<User /> } />
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;
