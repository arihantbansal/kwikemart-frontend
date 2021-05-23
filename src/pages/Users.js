import React, { useState, useEffect } from "react";
import Nav from "components/Nav";
import Sidebar from "components/Sidebar";
import UserCard from "components/UserCard";
import userService from "services/users";
import { useParams } from "react-router";

const Users = props => {
	const [users, setUsers] = useState([]);
	const [usersToShow, setUsersToShow] = useState(users);
	const { role } = useParams();

	useEffect(() => {
		userService.getAll().then(allUsers => {
			setUsers(allUsers);
			if (role.toLowerCase() !== "all") {
				setUsersToShow(
					allUsers.filter(u => u.role.toLowerCase() === role)
				);
			} else {
				setUsersToShow(allUsers);
			}
		});
	}, [users]);

	return (
		<div className="landing-screen3">
			<div className="navd">
				<Nav handleLogout={props.handleLogout} />
			</div>
			<div className="dashhome">
				<Sidebar />
				<div className="dash-content">
					User Role :{" "}
					{role[0].toUpperCase() + role.substr(1).toLowerCase()}
					{usersToShow
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
