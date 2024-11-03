import axios from "axios";

const baseUrl = "/api/users";
const token = window.localStorage.getItem("loggedBlogappUser") ? 
				'Bearer ' + JSON.parse(window.localStorage.getItem("loggedBlogappUser")).token 
				: null ;

const getOne = async (id) => {
	const config = {
		headers: { Authorization: token },
	};
	const request = axios.get(`${baseUrl}/${id}`, config);
	return request.then((response) => response.data);
};

const getAll = async () => {
	const config = {
		headers: { Authorization: token },
	};
	const request = axios.get(`${baseUrl}`, config);
	return request.then((response) => response.data);
};

export default { getOne, getAll };
