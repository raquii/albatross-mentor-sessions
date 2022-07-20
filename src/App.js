import { useState } from "react";
import "./styles.css";
import About from "./About";
import Article from "./Article";
import Toggle from "./Toggle";
import NewPostForm from "./NewPostForm";
import blogData from "./data/blog";



export default function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	return (
		<div className={isDarkMode ? "App dark" : "App"}>
			<Toggle isOn={isDarkMode} setIsOn={setIsDarkMode} />
			<About
				isOn={isDarkMode}
				name={blogData.name}
				logo={blogData.image}
				about={blogData.about}
			/>
			<main>
				{blogData.posts.map((article) => {
					return (
						<Article
							key={article.id}
							title={article.title}
							date={article.date}
							preview={article.preview}
							isOn={isDarkMode}
						/>
					);
				})}
			</main>
			<NewPostForm />
		</div>
	);
}
