import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import DATA from "../api/fairytales.json";
import MakingData from "../components/Makingdata";

function Making() {
    const { id } = useParams();

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);

    // Set a random fairytale as the default selected option on page load
    useEffect(() => {
        if (!id && DATA.length > 0) {
            const randomFairytale = DATA[Math.floor(Math.random() * DATA.length)];
            setSelectedOption(randomFairytale);
        }
    }, [id]);

    const filteredOptions = DATA.filter((item) =>
        item.title_fairytale.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (id) {
        const story = DATA.find((item) => item.id.toString() === id);
        return (
            <div className="making-page">
                <h1>Making of</h1>
                {story ? (
                    <MakingData {...story} />
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
                />
                {searchTerm && (
                    <ul className="dropdown">
                        {filteredOptions.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => setSelectedOption(item)}
                                className="dropdown-item"
                            >
                                {item.title_fairytale}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {selectedOption ? (
                <div className="component">
                    <MakingData {...selectedOption} />
                </div>
            ) : (
                <p>Please search and select a fairytale to view details.</p>
            )}
        </section>
    );
}

export default Making;