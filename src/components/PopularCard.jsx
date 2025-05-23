function PopularCard({ fairytale }) {
	return (
		<div className="popular-card">
			<div className="popular-image-wrapper">
				<a
					href={fairytale.fairytaleLink}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={fairytale.imgThumbnail}
						alt={fairytale.fairytale}
						className="popular-image"
					/>
				</a>
			</div>
			<div className="card-content">
				<p className="card-title">
					<strong>{fairytale.fairytale}</strong>
				</p>
				<p className="card-author">{fairytale.nameStudent}</p>
			</div>
		</div>
	);
}

export default PopularCard;
