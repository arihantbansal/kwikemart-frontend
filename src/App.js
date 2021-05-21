import React, { useState } from "react";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import ProductCard from "./components/ProductCard";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Shop from "./components/Shop";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
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
					<Route exact path="/login" component={Login} />
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
					<ProtectedRoute exact path="/shop" exact component={Shop} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
