import logo from "../assets/logo.svg";

const blogData = {
	name: "Orange Albatross",
	image: logo,
	about: "Learning React with Code the Dream.",
	posts: [
		{
			id: 1,
			title: "Project Setup and React Basics",
			date: "June 8, 2022",
			preview:
				"Learning how to set up a basic React project using Create-React-App",
			minutes: 5
		},
		{
			id: 2,
			title: "ReactDOM and Components",
			date: "June 15, 2022",
			preview:
				"An introduction to components and the magic of the ReactDOM.",
			minutes: 10
		},
		{
			id: 3,
			title: "Props, State, & Handlers",
			date: "June 15, 2022",
			preview:
				"Using state and props to harness the dynamic powers of React.",
			minutes: 8
		},
		{
			id: 4,
			title: "Lifting State and Props Handling",
			date: "July 6, 2022",
			preview:
				"The art of destructuring and how state can move around our app.",
			minutes: 8
		}
	]
};

export default blogData;
