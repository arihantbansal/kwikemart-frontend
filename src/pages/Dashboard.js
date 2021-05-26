import React from "react";
import Nav from "components/Nav";
import Sidebar from "components/Sidebar";
import "Trying.css";

const Dashboard = props => {
	return (
		<div className="landing-screen3">
			<div className="navd">
				<Nav
					handleLogout={props.handleLogout}
					handleToggleSidebar={props.handleToggleSidebar}
				/>
			</div>
			<div className="dashhome">
				<Sidebar
					handleToggleSidebar={props.handleToggleSidebar}
					toggled={props.toggled}
				/>
				<div className="dash-content">{/* <Statistic /> */}</div>
			</div>
		</div>
	);
};

export default Dashboard;
