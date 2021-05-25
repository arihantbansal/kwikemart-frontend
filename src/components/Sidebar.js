import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

const Sidebar = props => {
	return (
		<div className="sidebar">
			<ProSidebar
				breakPoint="md"
				toggled={props.toggled}
				onToggle={props.handleToggleSidebar}>
				<Menu iconShape="circle">
					<MenuItem>
						<Link to="/dashboard">Dashboard</Link>
					</MenuItem>
					<SubMenu title="Categories">
						<MenuItem>
							<Link to="/products/all">All</Link>
						</MenuItem>
						<MenuItem>
							<Link to="/products/electronics">Electronics</Link>
						</MenuItem>
						<MenuItem>
							<Link to="/products/fashion">Fashion</Link>
						</MenuItem>
						<MenuItem>
							<Link to="/products/grocery">Grocery</Link>
						</MenuItem>
						<MenuItem>
							<Link to="/products/books">Books</Link>
						</MenuItem>
					</SubMenu>
					<SubMenu title="Users">
						<MenuItem>
							<Link to="/users/all">All</Link>
						</MenuItem>
						<MenuItem>
							<Link to="/users/admin">Admin</Link>
						</MenuItem>
						<MenuItem>
							<Link to="/users/cashier">Cashier</Link>
						</MenuItem>
						<MenuItem>
							<Link to="/users/staff">Staff</Link>
						</MenuItem>
					</SubMenu>
				</Menu>
			</ProSidebar>
		</div>
	);
};

export default Sidebar;
