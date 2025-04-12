import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Portalpage from "./pages/Portalpage";
import Home from "./pages/Home";
import Navigation from "./pages/Navigation";
import Navigation2 from "./pages/Navigation2";
import Parallax from "./pages/Parallax";
import DATA from "./api/fairytales.json";

function App() {
    console.log("DATA in App.jsx:", DATA); // Debugging

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path="/portalpage" element={<Portalpage data={DATA} />} />
                </Route>
                <Route path="parallax" element={<Navigation2 />}>
                    <Route index element={<Parallax />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;