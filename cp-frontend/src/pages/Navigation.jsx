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
						<Link to="/portalpage">Projects</Link>
					</li>
					<li>
						<Link to="/parallax">Parallax</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
}

export default Navigation;
