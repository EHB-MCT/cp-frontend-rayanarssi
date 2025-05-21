function PopularCard({ fairytale }) {
		const base = import.meta.env.BASE_URL;

	return (
		<div className="popular-card">
			<div className="popular-image-wrapper">
				<img
					src={`${base}/${fairytale.horizontal_cover}`}
					alt={fairytale.title_fairytale}
					className="popular-image"
				/>
			</div>
			<div className="card-content">
				<p className="card-title">
					<strong>{fairytale.title_fairytale}</strong>
				</p>
				<p className="card-author">
					{fairytale.surname} {fairytale.name}
				</p>
			</div>
		</div>
	);
}

export default PopularCard;
