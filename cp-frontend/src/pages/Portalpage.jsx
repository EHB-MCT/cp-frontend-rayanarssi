import React, { useState } from "react";
import Portal from "./Portal";
import SearchFilter from "./SearchFilter";

function Portalpage({ data }) {
	console.log("Portalpage data:", data); // Debugging

	const [searchTerm, setSearchTerm] = useState("");
	const [selectedGenre, setSelectedGenre] = useState("");

	const genres = [...new Set(data.map((item) => item.Genre))];

	const filteredData = data.filter((portalpage) => {
		const matchesTitle = portalpage.title_fairytale
			.toLowerCase()
			.includes(searchTerm.toLowerCase());
		const matchesGenre = selectedGenre
			? portalpage.Genre.toLowerCase() === selectedGenre.toLowerCase()
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

			{filteredData.map((portalpage) => (
				<div className="component" key={portalpage.id}>
					<Portal
						surname={portalpage.surname}
						horizontal_cover={portalpage.horizontal_cover}
						title_fairytale={portalpage.title_fairytale}
					/>
				</div>
			))}
		</div>
	);
}

export default Portalpage;
