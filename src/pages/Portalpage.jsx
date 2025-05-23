import React, { useState } from "react";
import Portal from "../components/Portal";
import SearchFilter from "../components/SearchFilter";

function Portalpage({ data }) {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedGenre, setSelectedGenre] = useState("");

		useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(
					"https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json"
				);
				const result = await res.json();
				setData(result);
			} catch (error) {
				console.error("Failed to fetch data:", error);
			}
		};

		fetchData();
	}, []);

	const genres = [...new Set(data.map((item) => item.genre).filter(Boolean))];

	const filteredData = data.filter((item) => {
		const matchesTitle = item.fairytale
			.toLowerCase()
			.includes(searchTerm.toLowerCase());
		const matchesGenre = selectedGenre
			? item.genre.toLowerCase() === selectedGenre.toLowerCase()
			: true;
		return matchesTitle && matchesGenre;
	});

	return (
		<section className="popullar-section">
			<SearchFilter
				onSearch={setSearchTerm}
				onGenreChange={setSelectedGenre}
				genres={genres}
			/>

			<div className="portal-grid">
				{filteredData.map((item) => (
					<Portal
						key={item.id}
						id={item.id}
						thumbnail={item.imgThumbnail}
						title_fairytale={item.fairytale}
						link={item.fairytaleLink}
					/>
				))}
			</div>
		</section>
	);
}

export default Portalpage;
