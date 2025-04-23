import { useParams, Link } from "react-router";
import DATA from "../api/fairytales.json";
import MakingData from "./Makingdata";

function Making() {
	const { id } = useParams();

	if (!id) {
		return <p>Invalid story ID.</p>;
	}

	const story = DATA?.find((item) => item.id.toString() === id);

	if (!story) {
		return <p>Story not found for ID: {id}</p>;
	}

	return (
		<div className="making-page">
			<nav className="navigation-bar">
				<ul>
					<li>
						<Link to="/home">
							<img className="logo" src="/Logo.png" alt="Logo" />
						</Link>
					</li>
					<li>
						<Link to="/Portalpage">Fairytales</Link>
					</li>
				</ul>
			</nav>

			<h1>Making of</h1>
			<MakingData {...story} />
		</div>
	);
}

export default Making;
