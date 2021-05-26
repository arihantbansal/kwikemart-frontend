import React, { useState, useEffect } from "react";
import Nav from "components/Nav";
import Sidebar from "components/Sidebar";
import { Card } from "react-bootstrap";
import productService from "services/products";
import userService from "services/users";

const Dashboard = props => {
	const [total, setTotal] = useState(0);
	const [totalUsers, setTotalUsers] = useState(0);

	useEffect(() => {
		productService.getAll().then(allProducts => {
			setTotal(allProducts.length);
		});
		userService.getAll().then(allUsers => {
			setTotalUsers(allUsers.length);
		});
	}, []);

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
				<div className="dash-content">
					<Card
						style={{ width: "12rem", height: "5rem" }}
						className="stats-card">
						<Card.Body>
							<Card.Title>Statistics</Card.Title>
							<Card.Text>Total Items - {total}</Card.Text>
						</Card.Body>
					</Card>
					<Card
						style={{ width: "12rem", height: "5rem" }}
						className="stats-card">
						<Card.Body>
							<Card.Title>Statistics</Card.Title>
							<Card.Text>Total Users - {totalUsers}</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
