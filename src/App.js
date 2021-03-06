import React, { useEffect, useState } from "react";
import "App.css";
import ProtectedRoute from "components/ProtectedRoute";
import LandingPage from "pages/LandingPage";
import Products from "pages/Products";
import Users from "pages/Users";
import Dashboard from "pages/Dashboard";
import Unauthorized from "pages/Unauthorized";
import loginService from "services/login";
import productService from "services/products";
import userService from "services/users";
import { Switch, Route, useHistory } from "react-router-dom";
import About from "pages/About";
import NotFound from "pages/NotFound";

const App = () => {
	const [user, setUser] = useState(null);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [toggled, setToggled] = useState(false);

	const handleToggleSidebar = () => {
		setToggled(!toggled);
	};

	// Notification messages to be added later. It's crashing the UI right now.
	// const [notificationMessage, setNotificationMessage] = useState(null);
	// const [notificationType, setNotificationType] = useState(null);

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem("loggedKwikUser");
		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON);
			setUser(user);
			productService.setToken(user.token);
			userService.setToken(user.token);
		}
	}, []);

	const history = useHistory();

	const handleLogin = async event => {
		event.preventDefault();

		try {
			const user = await loginService.login({
				username,
				password,
			});

			window.localStorage.setItem("loggedKwikUser", JSON.stringify(user));
			productService.setToken(user.token);
			userService.setToken(user.token);
			setUser(user);
			setUsername("");
			setPassword("");
			history.push("/dashboard");
		} catch (exception) {
			console.log(exception);
			// setNotificationMessage("Wrong credentials");
			// setNotificationType("error");
			// setTimeout(() => {
			// 	setNotificationMessage(null);
			// 	setNotificationType(null);
			// }, 5000);
		}
	};

	const handleLogout = async event => {
		event.preventDefault();

		window.localStorage.removeItem("loggedKwikUser");
		productService.setToken(null);
		userService.setToken(null);
		setUser(null);
		setUsername("");
		setPassword("");
		history.push("/");
	};

	return (
		<div className="App">
			<Switch>
				<Route
					exact
					path="/"
					exact
					handleLogin={handleLogin}
					render={props => (
						<LandingPage
							{...props}
							user={user}
							handleLogin={handleLogin}
							setUsername={setUsername}
							setPassword={setPassword}
							username={username}
							password={password}
						/>
					)}
				/>
				<ProtectedRoute
					exact
					path="/dashboard"
					user={user}
					handleLogout={handleLogout}
					component={Dashboard}
					handleToggleSidebar={handleToggleSidebar}
					toggled={toggled}
				/>
				<ProtectedRoute
					exact
					path="/products/:category"
					user={user}
					handleLogout={handleLogout}
					component={Products}
					handleToggleSidebar={handleToggleSidebar}
					toggled={toggled}
				/>
				<ProtectedRoute
					exact
					path="/users/:role"
					user={user}
					handleLogout={handleLogout}
					component={Users}
					handleToggleSidebar={handleToggleSidebar}
					toggled={toggled}
				/>
				<Route
					exact
					path="/about"
					component={About}
					handleToggleSidebar={handleToggleSidebar}
					handleLogout={handleLogout}
				/>
				<Route exact path="/unauthorized" component={Unauthorized} />
				<Route path="*" component={NotFound} />
			</Switch>
		</div>
	);
};

export default App;
