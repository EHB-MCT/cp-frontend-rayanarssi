import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Portalpage from "./components/Portalpage";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Navigation2 from "./components/Navigation2";
import Parallax from "./components/Parallax";
import Making from "./components/Making";
import DATA from "./api/fairytales.json";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
	console.log("DATA in App.jsx:", DATA); // Debugging

	return (
		<BrowserRouter>
			<Routes>
				{/* Main navigation route */}
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/portalpage" element={<Portalpage data={DATA} />} />
				</Route>

				{/* Parallax route */}
				<Route path="parallax" element={<Navigation2 />}>
					<Route index element={<Parallax />} />
				</Route>

				{/* Making route wrapped in ErrorBoundary */}
				{/* The ErrorBoundary component is used to catch and handle any errors that occur within the Making component. */}
				{/* If an error occurs, the ErrorBoundary will display a fallback UI instead of crashing the entire app. */}
				<Route
					path="/making"
					element={
						<ErrorBoundary>
							<Making />
						</ErrorBoundary>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
