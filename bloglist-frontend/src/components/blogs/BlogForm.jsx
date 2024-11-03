import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBlog } from "../../reducers/blogs";
import { Form, Button } from 'react-bootstrap'

const BlogForm = () => {

	const [newTitle, setNewTitle] = useState("");
	const [newAuthor, setNewAuthor] = useState("");
	const [newUrl, setNewUrl] = useState("");

	const dispatch = useDispatch();

	const handleAuthorChange = (event) => {
		setNewAuthor(event.target.value);
	};

	const handleTitleChange = (event) => {
		setNewTitle(event.target.value);
	};

	const handleUrlChange = (event) => {
		setNewUrl(event.target.value);
	};

	const addBlog = (event) => {
		event.preventDefault();
		
		dispatch(createBlog({
			title: newTitle,
			author: newAuthor,
			url: newUrl,
		}));
		
		setNewTitle("");
		setNewAuthor("");
		setNewUrl("");
		
	};

	return (
		<Form onSubmit={addBlog}>
			<Form.Group>
				Title:
				<Form.Control
					data-testid="title"
					value={newTitle}
					onChange={handleTitleChange}
					id="blog-title"
				/>
			</Form.Group>
			<Form.Group>
				Author:
				<Form.Control
					data-testid="author"
					value={newAuthor}
					onChange={handleAuthorChange}
					id="blog-author"
				/>
			</Form.Group>
			<Form.Group>
				Url:
				<Form.Control
					data-testid="url"
					value={newUrl}
					onChange={handleUrlChange}
					id="blog-url"
				/>
			</Form.Group>
			<Button type="submit">Save</Button>
		</Form>
	);
};

export default BlogForm;
