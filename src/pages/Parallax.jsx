import Intro from "../components/Intro";
import Scene1 from "../components/Scene1";

function Parallax() {
	return (
		<div style={{ overflowX: "hidden" }}>
			<Intro />
			<Scene1 />
		</div>
	);
}

export default Parallax;
