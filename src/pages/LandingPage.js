import React from "react";
import { Redirect } from "react-router";
import { FaAngleDoubleDown } from "react-icons/fa";
import AboutUs from "components/AboutUs";

const LandingPage = props => {
	if (props.user) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<div className="landing-screen1">
			<div className="home-content">
				<div className="home-tagline">
					<h1>Kwik-E-Mart</h1>
					<h3>Inventory Manager</h3>
				</div>

				<div className="home-login">
					<h3>Login To Our Portal</h3>
					<form className="login-form" onSubmit={props.handleLogin}>
						<div className="login-input">
							Username:
							<input
								type="text"
								name="username"
								value={props.username}
								onChange={({ target }) =>
									props.setUsername(target.value)
								}
							/>
						</div>
						<div className="login-input">
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
						<button type="submit" className="login-btn">
							Login
						</button>
					</form>
				</div>
			</div>
			<div>
				<a href="#about">
					<button className="exploredown">
						<FaAngleDoubleDown size={50} />
					</button>
				</a>
			</div>

			<AboutUs />
		</div>
	);
};

export default LandingPage;
