import React from "react";
import { FaUser, FaUserTimes } from "react-icons/fa";

const UserCard = ({ user, deleteUser }) => {
	const currentUser = JSON.parse(localStorage.getItem("loggedKwikUser"));

	const removeUser = () => {
		const { id } = user;
		deleteUser(id);
	};

	return (
		
	
		<div className="ucard">
			<i className="userimage">
				<FaUser size={100} />
			</i>
			<div className="userdetails">
				<h3>Name - {user.name} </h3>
				<h5>Username - {user.username}</h5>
				<h5>
					Role -{" "}
					{user.role
						.split(" ")
						.map(
							w => w[0].toUpperCase() + w.substr(1).toLowerCase()
						)
						.join(" ")}
				</h5>
			</div>
			
			{currentUser.role.toLowerCase() === "admin" && (
				<button className="usercontrol" onClick={removeUser}>
					<h4>Delete User</h4>
					<FaUserTimes size={20} />
				</button>
			)}
		</div>
	);
};
export default UserCard;
