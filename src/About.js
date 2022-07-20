import Clock from "./Clock";

export default function About({ isOn, name, about, logo }) {
	return (
		<header className={isOn ? "dark about" : "about"}>
			<h1 className={isOn ? "dark" : ""}>{name}</h1>
			<h2 className={isOn ? "dark" : ""}>{about}</h2>
			<img src={logo} alt="blog logo" />
			<Clock />
		</header>
	);
}
