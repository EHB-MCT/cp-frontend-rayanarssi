import { useParams } from "react-router";
import DATA from "../api/fairytales.json";
import MakingData from "./Makingdata";

function Making() {
	const { id } = useParams();
	const story = DATA.find((item) => item.id.toString() === id);

	if (!story) return <p>Story not found.</p>;

	return (
		<div className="making-page">
			<h1>Making of </h1>

			<MakingData {...story} />
		</div>
	);
}

export default Making;
