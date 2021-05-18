import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";
import Shop from "./components/Shop";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ItemDetail from "./components/ItemDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/dashboard" exact component={Dashboard} />
					<Route path="/login" component={Login} />
					<Route path="/productcard" component={ProductCard} />
					<Route path="/usercard" component={UserCard} />
					<Route path="/shop" exact component={Shop} />
					<Route path="/shop/:id" component={ItemDetail} />
				</Switch>
			</div>
		</Router>
	);
}

const Home = () => {
	return (
		<div className="landing-screen1">
			<Nav />
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

export default App;
