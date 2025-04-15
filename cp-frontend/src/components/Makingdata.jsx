function MakingData(item) {
	return (
		<>
			<div className="making-data-container">
				<img className="banner" src={item.banner} alt="Banner" />

				<div className="project-meta">
					<h2>
						<strong>Project</strong>
						<br />
						{item.title_fairytale}
					</h2>
					<h2>
						<strong>By</strong>
						<br />
						{item.surname} {item.name}
					</h2>
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
					</div>
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
