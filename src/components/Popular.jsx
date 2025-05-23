import { useState, useEffect } from "react";
import PopularCard from "./PopularCard";
import "../App.css";

function Popular() {
	const [randomItems, setRandomItems] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(
					"https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json"
				);
				const data = await res.json();
				const shuffled = [...data].sort(() => 0.5 - Math.random());
				setRandomItems(shuffled.slice(0, 3));
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();

		const interval = setInterval(fetchData, 5000);
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
