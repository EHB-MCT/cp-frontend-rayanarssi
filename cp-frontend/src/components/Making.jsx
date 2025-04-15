import React, { useState } from "react";
import MakingData from "./Makingdata";
import SearchFilter from "./SearchFilter";
import DATA from "../api/fairytales.json"; 

function Making() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTitles = DATA.filter((movie) =>
        movie.title_fairytale.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Debugging: Log the filtered titles
    console.log("Filtered Titles:", filteredTitles);

    return (
        <>
            <SearchFilter onSearch={setSearchTerm} />
            <h1>Making</h1>
            {filteredTitles.map((item) => (
                <MakingData
                    key={item.id}
                    banner={item.banner}
                    surname={item.surname}
                    name={item.name}
                    title_fairytale={item.title_fairytale}
                    video={item.video}
                    description={item.description}
                    extra_image1={item.extra_image1}
                    extra_image2={item.extra_image2}
                    extra_image3={item.extra_image3}
                />
            ))}
        </>
    );
}

export default Making;