import { Link } from "react-router-dom";
import Nav from "../components/Nav";

function Login() {
	return (
		<div className="landing-screen2">
			<Nav />
			<div className="home-content">
				<div className="home-tagline">
					<h2>Hire</h2>
					<h2>An</h2>
					<h2>Inventory</h2>
					<h2>Manager</h2>
				</div>

				<div className="home-login">
					<h3>Enter your registered email id and password.</h3>
					<form className="login-form">
						<input
							type="text"
							placeholder="admin@inventoryauditor"
							name="text"
							className="login-e"
						/>
						<input
							type="text"
							placeholder="********"
							name="text"
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
}

export default Login;
