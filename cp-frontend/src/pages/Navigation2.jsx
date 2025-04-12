import { Outlet, Link } from "react-router";

function Navigation2() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
}

export default Navigation2;
