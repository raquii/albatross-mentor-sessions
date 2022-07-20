import { FaMoon, FaSun } from "react-icons/fa";

export default function Toggle({ isOn, setIsOn }) {
	function handleChange() {
		setIsOn(!isOn);
	}

	return (
		<>
			<input
				type="checkbox"
				className="checkbox"
				id="checkbox"
				checked={isOn}
				onChange={handleChange}
			/>
			<label htmlFor="checkbox" className="label">
				<FaSun className="fa-sun" />
				<FaMoon className="fa-moon" />
				<div className="ball" />
			</label>
		</>
	);
}
