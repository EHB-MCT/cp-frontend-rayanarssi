import { Outlet, Link } from "react-router";

function Navigation2() {
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
						<Link to="/Making">Making-of</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
}

export default Navigation2;
