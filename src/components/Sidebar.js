import React from "react";
import "../App";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<ProSidebar style={{ width: "300px", position: "fixed" }}>
				<Menu iconShape="square">
					<MenuItem style={{ width: "300px" }}>Dashboard</MenuItem>

					<SubMenu style={{ width: "300px" }} title="Categories">
						<MenuItem style={{ width: "300px" }}>
							Electronics
						</MenuItem>
						<MenuItem style={{ width: "300px" }}>
							Home Appliances
						</MenuItem>
						<MenuItem style={{ width: "300px" }}>Clothes</MenuItem>
						<MenuItem style={{ width: "300px" }}>Grocery</MenuItem>
						<MenuItem style={{ width: "300px" }}>Kids</MenuItem>
					</SubMenu>
					<SubMenu
						style={{ width: "300px", transition: "2s" }}
						title="Users">
						<MenuItem style={{ width: "300px" }}>Admin</MenuItem>
						<MenuItem style={{ width: "300px" }}>Cashier</MenuItem>
						<MenuItem style={{ width: "300px" }}>Staff</MenuItem>
					</SubMenu>
					<MenuItem style={{ width: "300px" }}>Log Out</MenuItem>
				</Menu>
			</ProSidebar>
		</div>
	);
};

export default Sidebar;
