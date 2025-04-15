function SearchFilter({ onSearch }) {
	return (
		<div>
			<input
				type="text"
				placeholder="Search for a fairytale..."
				onChange={(event) => onSearch(event.target.value)}
			/>
		</div>
	);
}

export default SearchFilter;
