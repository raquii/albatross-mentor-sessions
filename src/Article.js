//minutes
export default function Article({ isOn, title, date, preview }) {
	return (
		<article>
			<h3 className={isOn ? "dark" : ""}>{title}</h3>
			<small>{date}</small>
			<p>{preview}</p>
		</article>
	);
}
