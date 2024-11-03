import axios from "axios";

const baseUrl = "/api/blogs";
const token = window.localStorage.getItem("loggedBlogappUser") ? 
				'Bearer ' + JSON.parse(window.localStorage.getItem("loggedBlogappUser")).token 
				: null ;

const getAll = async () => {
	const config = {
		headers: { Authorization: token },
	};
	return axios.get(baseUrl, config).then((response) => response.data);
};

const create = async (newObject) => {
	const config = {
		headers: { Authorization: token },
	};
	const response = axios.post(baseUrl, newObject, config);
	return response.data;
};

const put = async (newObject, id) => {
	const config = {
		headers: { Authorization: token },
	};
	const response = await axios.put(`${baseUrl}/${id}`, newObject, config);
	return response.data;
};

const deleteBlog = async (id) => {
	const config = {
		headers: { Authorization: token },
	};
	const response = await axios.delete(`${baseUrl}/${id}`, config);
	return response.data;
};

export default { getAll, create, put, deleteBlog };
