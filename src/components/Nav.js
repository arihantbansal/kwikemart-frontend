import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = ({ handleLogout, handleToggleSidebar }) => {
	return (
		<nav className="navbar">
			<div className="btn-toggle" onClick={handleToggleSidebar}>
				<FaBars />
			</div>
			<Link to="/">
				<h3>Kwik-E-Mart</h3>
			</Link>

			<ul className="nav-links">
				<li>
					<Link to="/about">
						<button>About</button>
					</Link>
				</li>
				<li>
					<button onClick={handleLogout}>Logout</button>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
