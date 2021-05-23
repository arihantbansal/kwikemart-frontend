import React from "react";
import { Redirect } from "react-router";

const LandingPage = props => {
	if (props.user) {
		return <Redirect to="/dashboard" />;
	}

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
					<p>
						Logged in status: {Boolean(props.user) ? "Yes" : "No"}
					</p>
					<form className="login-form" onSubmit={props.handleLogin}>
						<div className="login-e">
							Username: &emsp;
							<input
								type="text"
								name="username"
								value={props.username}
								onChange={({ target }) =>
									props.setUsername(target.value)
								}
							/>
						</div>
						<div className="login-p">
							Password:
							<input
								type="password"
								name="password"
								value={props.password}
								onChange={({ target }) =>
									props.setPassword(target.value)
								}
							/>
						</div>
						<button type="submit" className="login-b">
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;