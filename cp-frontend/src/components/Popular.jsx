import PopularCard from "./PopularCard";
import data from "../api/fairytales.json";
import "../App.css";

function Popular() {
	return (
		<section className="popular-section">
			<h1 className="section-title">Popular</h1>
			<div className="popular-list">
				{data.slice(0, 3).map((item, index) => (
					<PopularCard key={item.id} index={index} fairytale={item} />
				))}
			</div>
		</section>
	);
}

export default Popular;
