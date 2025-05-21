import { Link } from "react-router";

function Portal({ id, thumbnail, title_fairytale }) {
		const base = import.meta.env.BASE_URL;

	return (
		<div className="portal-card">
			<Link to={`/making/${id}`}>
				<img src={`${base}${thumbnail}`} alt={title_fairytale} />
			</Link>
			<div className="portal-content">
				<h2>{title_fairytale}</h2>
			</div>
		</div>
	);
}

export default Portal;
