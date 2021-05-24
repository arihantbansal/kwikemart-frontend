import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ handleLogout }) => {
	return (
		<nav className="navbar">
			<Link to="/">
				<h3>Kwik-E-Mart</h3>
			</Link>

			<ul className="nav-links">
				<Link to="/about">
					<li>About</li>
				</Link>
				<li>
					<button onClick={handleLogout}>Logout</button>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
