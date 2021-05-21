import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	const navStyle = {
		color: "white",
	};

	return (
		<nav class="justify-content-center">
			<Link to="/">
				<h3>Kwik-E-Mart</h3>
			</Link>
		</nav>
	);
};

export default Nav;
