import React from "react";
import { FaUser, FaUserTimes } from "react-icons/fa";

const UserCard = ({ user }) => {
	return (
		<div className="ucard">
			<i className="userimage">
				<FaUser size={100} />
			</i>

			<div className="userdetails">
				<h3>Name - {user.name} </h3>
				<h5>Username - {user.username}</h5>
				<h5>Role - {user.role}</h5>
			</div>
			<button className="usercontrol">
				<h4>Delete User</h4>
				<FaUserTimes size={20} />
			</button>
		</div>
	);
};
export default UserCard;
