import React, { useState, useEffect } from "react";
import Portal from "../components/Portal";
import SearchFilter from "../components/SearchFilter";

function Portalpage() {
	const [data, setData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedGenre, setSelectedGenre] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(
					"https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json"
				);
				const result = await res.json();
				setData(result);
				setIsLoading(false);
			} catch (error) {
				console.error("Failed to fetch data:", error);
				setIsLoading(false);
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
		<section className="popular-section">
			<SearchFilter
				onSearch={setSearchTerm}
				onGenreChange={setSelectedGenre}
				genres={genres}
			/>

			<h1 className="portal-title-main">
				ALL <span className="highlight">STUNNING</span> <br />
				PROJECTS
			</h1>

			<div className="portal-grid">
				{filteredData.map((item) => {
					return (
						<Portal
							key={item.id}
							id={item.id}
							imgThumbnail={item.imgThumbnail}
							fairytale={item.fairytale}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default Portalpage;
