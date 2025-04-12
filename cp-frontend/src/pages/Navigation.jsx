import { Outlet, Link } from "react-router";

function Navigation() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/making">Making-of</Link>
					</li>
					<li>
						<Link to="/portalpage">Projects</Link>
					</li>
					<li>
						<Link to="/parallax" target="_blank" rel="noopener noreferrer">Parallax</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navigation;
