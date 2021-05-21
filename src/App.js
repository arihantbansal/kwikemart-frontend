import React, { useState } from "react";
import "App.css";
import ProtectedRoute from "components/ProtectedRoute";
import LandingPage from "pages/LandingPage";
import Products from "pages/Products";
import Users from "pages/Users";
import Dashboard from "pages/Dashboard";
import Unauthorized from "pages/Unauthorized";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	const [user, setUser] = useState(false);

	const handleLogin = e => {
		e.preventDefault();
		setUser(true);
	};

	const handleLogout = e => {
		e.preventDefault();
		setUser(false);
	};

	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" exact component={LandingPage} />
					<ProtectedRoute
						exact
						path="/dashboard"
						component={Dashboard}
					/>
					<ProtectedRoute
						exact
						path="/products"
						component={Products}
					/>
					<ProtectedRoute exact path="/users" component={Users} />
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
