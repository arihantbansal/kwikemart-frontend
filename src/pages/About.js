import React from "react";
import Nav from "components/Nav";
import AboutUs from "components/AboutUs";

const About = props => {
	return (
		<div className="landing-screen3">
			<div className="navd">
				<Nav
					handleLogout={props.handleLogout}
					handleToggleSidebar={props.handleToggleSidebar}
				/>
			</div>
			<div className="about-content">
				<AboutUs />
			</div>
		</div>
	);
};

export default About;
