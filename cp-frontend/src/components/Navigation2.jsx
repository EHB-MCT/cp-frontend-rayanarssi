import { Outlet, Link, useParams } from "react-router";

function Navigation2() {
	const { id } = useParams();

	return (
		<>
			<nav className="navigation-bar">
				<ul>
					<li>
						<Link to="/home">
							<img className="logo" src="./Logo.png" alt="logo" />
						</Link>
					</li>

					<li>
						{id && (
							<Link to={`/making/${id}`}>Making-of</Link>
						)}
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
}

export default Navigation2;
