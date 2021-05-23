import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<ProSidebar style={{ width: "300px", position: "fixed" }}>
				<Menu iconShape="square">
					<MenuItem style={{ width: "300px" }}>
						<Link to="/dashboard">Dashboard</Link>
					</MenuItem>
					<SubMenu style={{ width: "300px" }} title="Categories">
						<MenuItem style={{ width: "300px" }}>
							<Link to="/products/all">All</Link>
						</MenuItem>
						<MenuItem style={{ width: "300px" }}>
							<Link to="/products/electronics">Electronics</Link>
						</MenuItem>
						<MenuItem style={{ width: "300px" }}>
							<Link to="/products/fashion">Fashion</Link>
						</MenuItem>
						<MenuItem style={{ width: "300px" }}>
							<Link to="/products/grocery">Grocery</Link>
						</MenuItem>
						<MenuItem style={{ width: "300px" }}>
							<Link to="/products/books">Books</Link>
						</MenuItem>
					</SubMenu>
					<SubMenu
						style={{ width: "300px", transition: "2s" }}
						title="Users">
						<MenuItem style={{ width: "300px" }}>
							<Link to="/users/all">All</Link>
						</MenuItem>
						<MenuItem style={{ width: "300px" }}>
							<Link to="/users/admin">Admin</Link>
						</MenuItem>
						<MenuItem style={{ width: "300px" }}>
							<Link to="/users/cashier">Cashier</Link>
						</MenuItem>
						<MenuItem style={{ width: "300px" }}>
							<Link to="/users/staff">Staff</Link>
						</MenuItem>
					</SubMenu>
				</Menu>
			</ProSidebar>
		</div>
	);
};

export default Sidebar;
