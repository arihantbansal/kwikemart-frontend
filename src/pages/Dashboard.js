import React, { useEffect, useState } from "react";
import Nav from "components/Nav";
import Sidebar from "components/Sidebar";
import { Link } from "react-router-dom";

const Dashboard = props => {
	console.log(props);
	return (
		<div className="landing-screen3">
			<div className="navd">
				<Nav />
			</div>
			<div className="dashhome">
				<Sidebar handleLogout={props.handleLogout} />
				<div className="dash-content">
					{/* <Statistic /> */}
					<Link to="/">
						<button onClick={props.handleLogout}>Logout</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
