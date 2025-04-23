function PopularCard({ fairytale }) {
	return (
		<div className="popular-card">
			<div className="popular-image-wrapper">
				<img
					src={fairytale.horizontal_cover}
					alt={fairytale.title_fairytale}
					className="popular-image"
				/>
			</div>
			<div className="card-content">
				<p className="card-title">
					<strong>{fairytale.title_fairytale}</strong>
				</p>
			</div>
			<span>→</span>
		</div>
	);
}

export default PopularCard;
