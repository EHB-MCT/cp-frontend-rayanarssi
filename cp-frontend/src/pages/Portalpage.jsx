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
		<div className="component-container">
			<SearchFilter
				onSearch={setSearchTerm}
				onGenreChange={setSelectedGenre}
				genres={genres}
			/>
			{filteredData.map((item) => (
				<div className="component" key={item.id}>
					<Portal
						id={item.id}
						surname={item.surname}
						horizontal_cover={item.horizontal_cover}
						title_fairytale={item.title_fairytale}
					/>
				</div>
			))}
		</div>
	);
}

export default Portalpage;
