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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	const [user, setUser] = useState(null);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [notificationMessage, setNotificationMessage] = useState(null);
	const [notificationType, setNotificationType] = useState(null);

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem("loggedKwikUser");
		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON);
			setUser(user);
			productService.setToken(user.token);
			userService.setToken(user.token);
		}
	}, []);

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
		} catch (exception) {
			console.log(exception);
			setNotificationMessage("Wrong credentials");
			setNotificationType("error");
			setTimeout(() => {
				setNotificationMessage(null);
				setNotificationType(null);
			}, 5000);
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
	};

	return (
		<Router>
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
					/>
					<ProtectedRoute
						exact
						path="/products"
						user={user}
						handleLogout={handleLogout}
						component={Products}
					/>
					<ProtectedRoute
						exact
						path="/users"
						user={user}
						handleLogout={handleLogout}
						component={Users}
					/>
					<Route
						exact
						path="/unauthorized"
						component={Unauthorized}
					/>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
