function MakingData(item) {
	return (
		<>
			<img src={item.banner} alt="" />
			<h2>
				{item.surname}
				{item.name}{" "}
			</h2>
			<h2>{item.title_fairytale}</h2>
			<img src={item.video} alt="" />
			<p>{item.description}</p>
			<img src={item.extra_image1} alt="" />
			<img src={item.extra_image2} alt="" />
			<img src={item.extra_image3} alt="" />
		</>
	);
}

export default MakingData;
