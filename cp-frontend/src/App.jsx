import { useState } from "react";
import "./App.css";
import Portalpage from "./components/Portalpage";
import DATA from "./api/fairytales.json";

function App() {
	return (
		<div className="component-container">
			{DATA.map((portalpage) => (
				<div className="component" key={portalpage.id}>
					<Portalpage
						name={portalpage.name}
						surname={portalpage.surname}
						horizonal_cover={portalpage.horizontal_cover}
					/>
				</div>
			))}
		</div>
	);
}

export default App;
