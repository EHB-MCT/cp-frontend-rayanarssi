import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Portalpage from "./pages/Portalpage";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Navigation2 from "./components/Navigation2";
import Parallax from "./pages/Parallax";
import Making from "./components/Making";
import DATA from "./api/fairytales.json";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route path="making/:id" element={<Making />} />
					<Route index element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/portalpage" element={<Portalpage data={DATA} />} />
				</Route>

				<Route path="/parallax/:id" element={<Navigation2 />}>
					<Route index element={<Parallax />} />
				</Route>

				{/* Making route wrapped in ErrorBoundary */}
				{/* The ErrorBoundary component is used to catch and handle any errors that occur within the Making component. */}
				{/* If an error occurs, the ErrorBoundary will display a fallback UI instead of crashing the entire app. */}
				<Route
					path="/making/:id"
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
