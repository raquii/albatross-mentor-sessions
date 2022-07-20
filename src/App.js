import { useState } from "react";
import "./styles.css";
import About from "./components/About";
import Article from "./components/Article";
import Toggle from "./components/Toggle";
import NewPostForm from "./components/NewPostForm";
import blogData from "./data/blog";
import UsingRef from "./UsingRef";



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
			<UsingRef />
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
