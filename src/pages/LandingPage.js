import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<div className="landing-screen1">
			<div className="home-content">
				<div className="home-tagline">
					<h2>Hire</h2>
					<h2>An</h2>
					<h2>Online</h2>
					<h2>Inventory</h2>
					<h2>Manager</h2>
				</div>

				<div className="home-login">
					<h3>Sign In to avail services</h3>
					<Link to="/login">
						<h2>Login</h2>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
