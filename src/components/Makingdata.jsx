function MakingData(item) {
			const base = import.meta.env.BASE_URL;

	return (
		<>
			<div className="making-data-container">
				<img
					className="banner"
					src={`${base}${item.horizontal_cover}`}
					alt="Banner"
				/>
				<div className="project-info">
					<p className="label">Project</p>
					<p className="value">{item.title_fairytale}</p>
					<p className="label">By</p>
					<p className="value">
						{item.surname} {item.name}
					</p>
				</div>
			</div>

			<div className="video-description-container">
				<div className="video-section">
					<video controls src={`${base}${item.video}`} />
				</div>
				<div className="description-section">
					<h3>
						<strong>Description</strong>
					</h3>
					<p>{item.description}</p>
					<a href="#" className="discover-link">
						Discover the project
					</a>
				</div>
			</div>
		</>
	);
}

export default MakingData;
