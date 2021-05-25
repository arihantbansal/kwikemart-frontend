import React, { useState, useEffect } from "react";
import Nav from "components/Nav";
import Sidebar from "components/Sidebar";
import UserCard from "components/UserCard";
import userService from "services/users";
import { useParams } from "react-router";
import NewUser from "components/NewUser";

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

	const deleteUser = async id => {
		try {
			const user = users.filter(u => u.id === id);

			if (window.confirm(`Remove user ${user.name} ?`)) {
				await userService.removeUser(id);

				setUsers(users.filter(u => u.id !== id));
				setUsersToShow(usersToShow.filter(u => u.id !== id));
			}
		} catch (exception) {
			console.error(exception);
		}
	};

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
					<div className="role">
						User Role :{" "}
						{role[0].toUpperCase() + role.substr(1).toLowerCase()}
					</div>
					<NewUser />
					<div className="users">
						{usersToShow
							.sort((a, b) => a.name.localeCompare(b.name))
							.map(user => (
								<UserCard
									key={user.id}
									user={user}
									deleteUser={deleteUser}
								/>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Users;
