import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Portalpage from "./pages/Portalpage";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Making from "./pages/Making";
import DATA from "./api/fairytales.json";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route path="making/:id" element={<Making />} />
					<Route index element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/portalpage" element={<Portalpage data={DATA} />} />
					<Route path="/making" element={<Making />} />
					<Route path="/making/:id" element={<Making />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
