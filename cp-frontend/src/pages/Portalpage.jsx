import React, { useState } from "react";
import Portal from "./Portal";
import SearchFilter from "./SearchFilter";

function Portalpage({ data }) {
	console.log("Portalpage data:", data); // Debugging

	const [searchTerm, setSearchTerm] = useState("");

	// Filter the data based on the search term
	const filteredData = data.filter((portalpage) =>
		portalpage.title_fairytale.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="component-container">
			{/* Pass the setSearchTerm function to SearchFilter */}
			<SearchFilter onSearch={setSearchTerm} />

			{/* Map over the filtered data */}
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
