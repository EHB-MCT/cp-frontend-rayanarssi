import { Link } from "react-router";

function Portal({ id, surname, horizontal_cover, title_fairytale }) {
	const base = import.meta.env.BASE_URL;

	return (
		<>
			<Link to={`/making/${id}`}>
				<img src={`${base}/${horizontal_cover}`} alt={title_fairytale} />
			</Link>
			<h2>{surname}</h2>
			<h2>{title_fairytale}</h2>
		</>
	);
}

export default Portal;
