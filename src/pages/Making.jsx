import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import MakingData from "../components/Makingdata";

function Making() {
	const { id } = useParams();
	const [fairytales, setFairytales] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedOption, setSelectedOption] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(
					"https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json"
				);
				const data = await res.json();
				setFairytales(data);
				setIsLoading(false);

				if (!id && data.length > 0) {
					const randomFairytale = data[Math.floor(Math.random() * data.length)];
					setSelectedOption(randomFairytale);
				}
			} catch (error) {
				console.error("Failed to fetch fairytales:", error);
				setIsLoading(false);
			}
		};

		fetchData();
	}, [id]);

	const filteredOptions = fairytales.filter((item) =>
		item.fairytale.toLowerCase().includes(searchTerm.toLowerCase())
	);

	if (id) {
		const story = fairytales.find((item) => item.id === id);
		return (
			<div className="making-page">
				<h1>Making of</h1>
				{story ? (
					<MakingData id={story.id} />
				) : (
					<p>Story not found for ID: {id}</p>
				)}
			</div>
		);
	}

	return (
		<section className="making-page">
			<h1>Making of</h1>
			<div className="search-dropdown-container">
				<input
					type="text"
					placeholder="Search for a fairytale..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="search-input2"
				/>
				{searchTerm && (
					<ul className="dropdown">
						{filteredOptions.map((item) => (
							<li
								key={item.id}
								onClick={() => setSelectedOption(item)}
								className="dropdown-item"
							>
								{item.fairytale}
							</li>
						))}
					</ul>
				)}
			</div>

			{isLoading ? (
				<p>Loading...</p>
			) : selectedOption ? (
				<div className="component">
					<MakingData id={selectedOption.id} />
				</div>
			) : (
				<p>Please search and select a fairytale to view details.</p>
			)}
		</section>
	);
}

export default Making;
