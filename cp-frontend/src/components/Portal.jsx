import { Link } from "react-router"; 

function Portal({ id, surname, horizontal_cover, title_fairytale }) {
	return (
		<>
			<Link to={`/parallax/${id}`}>
				<img src={horizontal_cover} alt={title_fairytale} />
			</Link>
			<h2>{surname}</h2>
			<h2>{title_fairytale}</h2>
		</>
	);
}

export default Portal;
