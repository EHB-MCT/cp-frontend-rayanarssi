import Intro from "../components/Intro";
import Scene1 from "../components/Scene1";
import Scene2 from "../components/Scene2";
import Scene3 from "../components/Scene3";
import Scene4 from "../components/Scene4";
import Outro from "../components/Outro";

function Parallax() {
	return (
		<div style={{ overflowX: "hidden" }}>
			<Intro />
			<Scene1 />
			<Scene2 />
			<Scene3 />
			<Scene4 />
			<Outro />
		</div>
	);
}

export default Parallax;
