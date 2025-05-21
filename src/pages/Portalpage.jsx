import React, { useState } from "react";
import Portal from "../components/Portal";
import SearchFilter from "../components/SearchFilter";

function Portalpage({ data }) {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedGenre, setSelectedGenre] = useState("");

	const genres = [...new Set(data.map((item) => item.Genre))];

	const filteredData = data.filter((item) => {
		const matchesTitle = item.title_fairytale
			.toLowerCase()
			.includes(searchTerm.toLowerCase());
		const matchesGenre = selectedGenre
			? item.Genre.toLowerCase() === selectedGenre.toLowerCase()
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
						thumbnail={item.thumbnail}
						title_fairytale={item.title_fairytale}
					/>
				))}
			</div>
		</section>
	);
}

export default Portalpage;
