import { Outlet, Link } from "react-router";

function Navigation() {
	return (
		<>
			<nav className="navigation-bar">
				<ul>
					<li>
						<Link to="/Home">
							<img className="logo" src="./Logo.png" alt="" />
						</Link>
					</li>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/Portalpage">Projects</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
}

export default Navigation;
