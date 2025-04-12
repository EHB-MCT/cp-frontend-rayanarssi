import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Portalpage from "./pages/Portalpage";
import Home from "./pages/Home";
import Making from "./pages/Making";
import Navigation from "./pages/Navigation";
import Navigation2 from "./pages/Navigation2";
import Parallax from "./pages/Parallax";
// import DATA from "./api/fairytales.json";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path="/making" element={<Making />} />
					<Route path="/portalpage" element={<Portalpage />} />
				</Route>
				<Route path="parallax" element={<Navigation2 />}>
					<Route index element={<Parallax />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>

		/* <div className="component-container">
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
	); */
	);
}

export default App;
