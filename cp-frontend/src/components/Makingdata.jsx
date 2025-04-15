function MakingData(item) {
	return (
		<div>
			<img src={item.banner} alt="" />
			<h2>{item.surname} {item.name}</h2>
			<h2>{item.title_fairytale}</h2>
			<video controls src={item.video} />
			<p>{item.description}</p>
			<img src={item.extra_image1} alt="" />
			<img src={item.extra_image2} alt="" />
			<img src={item.extra_image3} alt="" />
		</div>
	);
}

export default MakingData;
