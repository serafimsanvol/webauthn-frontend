import { Link, Outlet } from "react-router";

const Layout = ({}) => {
	return (
		<section className="h-[100vh] flex flex-col">
			<header className="bg-blue-500 text-white p-4">
				<nav className="flex justify-between items-center">
					<ul className="flex space-x-4">
						<li>
							<Link to="/">Signup</Link>
						</li>
						<li>
							<Link to="/signin">Sign in</Link>
						</li>
						<li>
							<Link to="/protected">Protected</Link>
						</li>
						<li>
							<Link to="/passkey">Passkey</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="/logout">Logout</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main className=" flex-[1] overflow-y-auto p-4">
				<Outlet />
			</main>
		</section>
	);
};

export default Layout;
