import { useParams, useNavigate } from "react-router";
import DATA from "../api/fairytales.json";

function Parallax() {
	const { id } = useParams();
	const navigate = useNavigate();

	const story = DATA.find((item) => item.id.toString() === id);

	if (!story) return <p>Story not found.</p>;

	return (
		<div className="parallax-page">
			<h1>{story.title_fairytale}</h1>

			<button onClick={() => navigate(`/making/${id}`)}>See Making Of</button>
		</div>
	);
}

export default Parallax;
