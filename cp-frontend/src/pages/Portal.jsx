import { Link } from "react-router";

function Portal(props) {
	console.log("Portal props:", props); // Debugging

	return (
		<>
			<Link to="/parallax">
				<img src={props.horizontal_cover} alt="" />
			</Link>
			<h2>{props.surname}</h2>
			<h2>{props.title_fairytale}</h2>
		</>
	);
}

export default Portal;
