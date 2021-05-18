import "../App.css";
import DashboardContent from "./DashboardContent";

import Nav from "./Nav";
import ProductCard from "./ProductCard";
import ProductCardH from "./ProductCardH";
import UserCard from "./UserCard";
import Sidebar from "./Sidebar";


const Dashboard = () => {
	return (
		<div className="landing-screen3">
			<Nav />
			<div className="dashhome">
				<Sidebar />
				<div className="dash-content">
					<ProductCard />
					
					<UserCard />
					<ProductCardH/>
				</div>
				
			</div>
		</div>
	);
};

export default Dashboard;
