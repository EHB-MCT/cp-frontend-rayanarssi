import { useParams, Link } from "react-router";
import React, { useState } from "react";
import DATA from "../api/fairytales.json";
import MakingData from "../components/Makingdata";
import Portal from "../components/Portal";
import SearchFilter from "../components/SearchFilter";

function Making() {
	const { id } = useParams();

	const [searchTerm, setSearchTerm] = useState("");
	const [selectedGenre, setSelectedGenre] = useState("");

	const genres = [...new Set(DATA.map((item) => item.Genre))];

	const filteredData = DATA.filter((item) => {
		const matchesTitle = item.title_fairytale
			.toLowerCase()
			.includes(searchTerm.toLowerCase());
		const matchesGenre = selectedGenre
			? item.Genre.toLowerCase() === selectedGenre.toLowerCase()
			: true;
		return matchesTitle && matchesGenre;
	});

	const story = DATA.find((item) => item.id.toString() === id);

	return (
		<div className="making-page">
			<nav className="navigation-bar">
				<ul>
					<li>
						<Link to="/home">
							<img className="logo" src="/Logo.png" alt="Logo" />
						</Link>
					</li>
					<li>
						<Link to="/portalpage">Fairytales</Link>
					</li>
				</ul>
			</nav>

			<h1>Making of</h1>

			<SearchFilter
				onSearch={setSearchTerm}
				onGenreChange={setSelectedGenre}
			/>

		

			{story ? <MakingData {...story} /> : <p>Story not found for ID: {id}</p>}
		</div>
	);
}

export default Making;
