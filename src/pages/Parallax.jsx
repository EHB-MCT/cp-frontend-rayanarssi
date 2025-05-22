import Intro from "../components/Intro";
import Scene1 from "../components/Scene1";
import Scene2 from "../components/Scene2";

function Parallax() {
	return (
		<div style={{ overflowX: "hidden" }}>
			<Intro />
			<Scene1 />
			<Scene2 /> 
		
		</div>
	);
}

export default Parallax;
