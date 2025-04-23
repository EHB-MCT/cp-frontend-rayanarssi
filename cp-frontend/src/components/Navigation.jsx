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
					<li classname="nav-item">
						<Link to="/">About us</Link>
					</li>
					<li classname="nav-item">
						<Link to="/Portalpage">Fairytales</Link>
					</li>
					<li classname="nav-item">
						<Link to="/Portalpage">Making of</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
}

export default Navigation;
