import { useState } from "react";

const postObj = {
	title: "",
	date: "",
	preview: "",
	minutes: ""
};

export default function NewPostForm() {
	const [showPostForm, setShowPostForm] = useState(false);
	const [newPost, setNewPost] = useState(postObj);

	function handleSubmit(e) {
		e.preventDefault();
		console.log(newPost);
		// setNewPost(postObj);
	}

	function handleChange(e) {
		const key = e.target.id;
		const value = e.target.value;
		console.log("key: ", key);
		console.log("value: ", value);
		setNewPost({ ...newPost, [key]: value });
	}

	return (
		<div id="form-container">
			<button
				type="button"
				className="btn"
				id="new-post-btn"
				onClick={() => setShowPostForm(!showPostForm)}
			>
				{showPostForm ? "Close" : "+ New Post"}
			</button>
			{showPostForm && (
				<form onSubmit={handleSubmit} id="post-form">
					<h2> New Post </h2>
					<ul>
						<li>
							<label htmlFor="title">Title</label>
							<input
								type="text"
								id="title"
								onChange={handleChange}
								value={newPost.title}
							/>
						</li>
						<li>
							<label htmlFor="date">Date</label>
							<input
								type="date"
								id="date"
								onChange={handleChange}
								value={newPost.date}
							/>
						</li>
						<li>
							<label htmlFor="preview">Preview</label>
							<input
								type="text"
								id="preview"
								onChange={handleChange}
								value={newPost.preview}
							/>
						</li>
						<li>
							<label htmlFor="minutes">Minutes</label>
							<input
								type="number"
								id="minutes"
								onChange={handleChange}
								value={newPost.minutes}
							/>
						</li>
					</ul>
					<button type="submit" className="btn">
						Submit
					</button>
				</form>
			)}
		</div>
	);
}
