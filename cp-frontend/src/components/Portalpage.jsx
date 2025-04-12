function Portalpage(props) {
	return (
		<>
			<img src={props.horizonal_cover} alt="" />
			<h2>{props.surname}</h2>
			<h2>{props.name}</h2>
		</>
	);
}

export default Portalpage;
