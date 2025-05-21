import { Link } from "react-router";

function Portal({ id, surname, thumbnail, title_fairytale }) {
		const base = import.meta.env.BASE_URL;

	return (
		<>
			<Link to={`/making/${id}`}>
				<img src={`${base}${thumbnail}`} alt={title_fairytale} />
			</Link>
			<h2>{surname}</h2>
			<h2>{title_fairytale}</h2>
		</>
	);
}

export default Portal;
