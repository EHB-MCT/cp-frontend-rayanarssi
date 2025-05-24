import { Link } from "react-router";

function Portal({ id, imgThumbnail, fairytale }) {
	return (
		<div className="portal-card">
			<Link to={`/making/${id}`}>
				<img src={imgThumbnail} alt={fairytale} />
			</Link>
			<div className="portal-content">
				<h2 className="portal-title">{fairytale}</h2>
			</div>
		</div>
	);
}

export default Portal;
