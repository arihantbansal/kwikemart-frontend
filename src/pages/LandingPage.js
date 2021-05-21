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
					<h3>Login To Our Portal</h3>
					<form className="login-form">
						<input
							type="text"
							placeholder="admin"
							name="username"
							className="login-e"
						/>
						<input
							type="password"
							placeholder="password"
							name="password"
							className="login-p"
						/>
						<Link to="/dashboard">
							<button className="login-b">Login</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
