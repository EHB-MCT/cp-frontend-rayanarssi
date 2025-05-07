import React from "react";

function SearchFilter({ onSearch, onGenreChange, genres = [] }) {
    return (
        <div className="filter-container">
            <input
                type="text"
                placeholder="Search by title..."
                onChange={(e) => onSearch(e.target.value)}
                className="search-input"
            />

            <select onChange={(e) => onGenreChange(e.target.value)} className="genre-select">
                <option value="">All Genres</option>
                {genres.map((genre, index) => (
                    <option key={index} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SearchFilter;