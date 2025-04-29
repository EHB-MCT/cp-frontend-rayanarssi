function MakingData(item) {
	return (
		<>
			<div className="making-data-container">
				<img className="banner" src={item.horizontal_cover} alt="Banner" />
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
					<video controls src={item.video} />
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

			<div className="extra-footage">
				<h3>
					<strong>Extra footage</strong>
				</h3>
				<div className="extra-images">
					<img src={item.extra_image1} alt="Extra 1" />
					<img src={item.extra_image2} alt="Extra 2" />
					<img src={item.extra_image3} alt="Extra 3" />
				</div>
			</div>
		</>
	);
}

export default MakingData;
