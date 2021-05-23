import React from "react";
import Nav from "components/Nav";
import Sidebar from "components/Sidebar";

const Dashboard = props => {
	console.log(props);
	return (
		<div className="landing-screen3">
			<div className="navd">
				<Nav handleLogout={props.handleLogout} />
			</div>
			<div className="dashhome">
				<Sidebar />
				<div className="dash-content">{/* <Statistic /> */}</div>
			</div>
		</div>
	);
};

export default Dashboard;
