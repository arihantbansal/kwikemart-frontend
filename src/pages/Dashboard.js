import React from "react";
import Nav from "components/Nav";
import Sidebar from "components/Sidebar";

const Dashboard = () => {
	return (
		<div className="landing-screen3">
			<div className="navd">
				<Nav />
			</div>
			<div className="dashhome">
				<Sidebar />
				<div className="dash-content">{/* <Statistic /> */}</div>
			</div>
		</div>
	);
};

export default Dashboard;
