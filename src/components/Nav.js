import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ handleLogout }) => {
	const navStyle = {
		color: "white",
	};

	return (
		<nav className="justify-content-center">
			<Link to="/">
				<h3>Kwik-E-Mart</h3>
			</Link>

			{/* <ul className="nav-links">
				<Link style={navStyle} to="/about">
					<li>About</li>
				</Link>
				<li>
					<button onClick={handleLogout}>Logout</button>
				</li>
			</ul> */}
		</nav>
	);
};

export default Nav;
