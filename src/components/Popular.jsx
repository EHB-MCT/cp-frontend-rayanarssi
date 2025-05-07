import { useState, useEffect } from "react";
import PopularCard from "./PopularCard";
import data from "../api/fairytales.json";
import "../App.css";

function Popular() {
	const [randomItems, setRandomItems] = useState([]);

	const getRandomItems = () => {
		const shuffled = [...data].sort(() => 0.5 - Math.random());
		return shuffled.slice(0, 3);
	};

	useEffect(() => {
		setRandomItems(getRandomItems());

		const interval = setInterval(() => {
			setRandomItems(getRandomItems());
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className="popular-section">
			<h1 className="section-title">Popular</h1>
			<div className="popular-list">
				{randomItems.map((item) => (
					<PopularCard key={item.id} fairytale={item} />
				))}
			</div>
		</section>
	);
}

export default Popular;
