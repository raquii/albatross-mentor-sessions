import { useEffect, useState } from "react";

/* 
useEffect
- what are side effects?
	When a function, expression, or operation does 
	something with an observable effect that it 
	doesn't communicate, meaning it doesnt return a value

- when do we use useEffect?
	fetching data from an API, 
	setTimeout/setInterval, 
	asyncronous work, 
	reading from local storage,
	etc.

	- what is an api?
		application programming interface

- when does useEffect run?
	“The question is not 'when does this effect run?' 
	But 'with which state does this effect synchronize with'”

	- what is a dependency array?
		useEffect(ƒn); = syncs with ALL States
		useEffect(ƒn, []); = sync with NO States
		useEffect(ƒn, [these, states]); = sync with 'these' & 'states'
*/

/**
 * Custom Hook - Returns a string with the current locale time every second
 */
function useSetClock() {
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		const intervalId = setInterval(() => {
			const newTime = new Date().toLocaleTimeString();
			setTime(newTime);
		}, 1000);

		return function () {
			clearInterval(intervalId);
		};
	}, []);

	return time;
}

/**
 * Returns an `<h3>` element with the current time
 */
function ClockTime() {
	const time = useSetClock();
	return <h3>{time.toString()}</h3>;
}

/**
 * Returns Clock component with a toggle button
 */
export default function Clock() {
	const [showClock, setShowClock] = useState(false);

	return (
		<div id="clock-container">
			{showClock && <ClockTime />}
			<button
				type="button"
				className="btn"
				onClick={() => setShowClock(!showClock)}>
				{showClock ? "Hide Clock" : "Show Clock"}
			</button>
		</div>
	);
}
