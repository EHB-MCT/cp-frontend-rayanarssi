import Portal from "./Portal";

function Portalpage({ data }) {
	console.log("Portalpage data:", data); // Debugging

	return (
		<div className="component-container">
			{data.map((portalpage) => (
				<div className="component" key={portalpage.id}>
					<Portal
						name={portalpage.name}
						surname={portalpage.surname}
						horizontal_cover={portalpage.horizontal_cover}
					/>
				</div>
			))}
		</div>
	);
}

export default Portalpage;
