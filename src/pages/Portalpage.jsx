import React, { useState } from "react";
import Portal from "../components/Portal";
import SearchFilter from "../components/SearchFilter";

function Portalpage({ data }) {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedGenre, setSelectedGenre] = useState("");

	const genres = [...new Set(data.map((item) => item.genre))];

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
