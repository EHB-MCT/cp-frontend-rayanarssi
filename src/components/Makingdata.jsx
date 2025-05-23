import { useEffect, useState } from "react";

function MakingData({ id }) {
	const [item, setItem] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(
					"https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json"
				);
				const data = await res.json();
				const match = data.find((f) => f.id === id);
				setItem(match);
			} catch (error) {
				console.error("Failed to fetch:", error);
			}
		};

		fetchData();
	}, [id]);

	if (!item) return <p>Loading...</p>;

	return (
		<>
			<div className="making-data-container">
				<img className="banner" src={item.imgThumbnail} alt="Banner" />
				<div className="project-info">
					<p className="label">Project</p>
					<p className="value">{item.fairytale}</p>
					<p className="label">By</p>
					<p className="value">{item.nameStudent}</p>
				</div>
			</div>

			<div className="video-description-container">
				<div className="video-section">
					{item.videoExplainer && (
						<iframe
							width="560"
							height="315"
							src={`https://www.youtube.com/embed/${item.videoExplainer}`}
							title="YouTube video"
							allowFullScreen
						></iframe>
					)}
				</div>
				<div className="description-section">
					<h3>
						<strong>Description</strong>
					</h3>
					<p>{item.description}</p>
					<a href={item.fairytaleLink} className="about-button">
						Discover the project
					</a>
				</div>
			</div>
		</>
	);
}

export default MakingData;
