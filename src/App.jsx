import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Portalpage from "./pages/Portalpage";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Making from "./pages/Making";
import DATA from "./api/fairytales.json";
import Parallax from "./pages/Parallax";

function App() {
	const redirect = new URLSearchParams(window.location.search).get("redirect");
	if (redirect) {
		// Ajoute le basename ici
		window.history.replaceState(null, "", `/cp-frontend-rayanarssi${redirect}`);
	}
	return (
		<BrowserRouter basename="/cp-frontend-rayanarssi/">
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route path="making/:id" element={<Making />} />
					<Route index element={<Home />} />
					<Route path="home" element={<Home />} />
					<Route path="portalpage" element={<Portalpage data={DATA} />} />
					<Route path="making" element={<Making />} />
				</Route>
				<Route path="parallax" element={<Parallax />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
