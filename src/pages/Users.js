import React, { useState, useEffect } from "react";
import Nav from "components/Nav";
// import ProductCardH from "../components/ProductCardH";
import Sidebar from "components/Sidebar";
import UserCard from "components/UserCard";
import userService from "services/users";

const Users = ({ category }) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		userService.getAll().then(allUsers => {
			setUsers(allUsers);
		});
	}, []);

	return (
		<div className="landing-screen3">
			<div className="navd">
				<Nav />
			</div>
			<div className="dashhome">
				<Sidebar />
				<div className="dash-content">
					{users
						.sort((a, b) => a.name.localeCompare(b.name))
						.map(user => (
							<UserCard key={user.id} user={user} />
						))}
				</div>
			</div>
		</div>
	);
};

export default Users;
