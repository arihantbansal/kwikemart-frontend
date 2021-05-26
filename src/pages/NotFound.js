import React from "react";
import { Link } from "react-router-dom";
import "Unauthorized.css";

const NotFound = () => {
	return (
		<div className="container">
			<div className="gandalf">
				<div className="fireball"></div>
				<div className="skirt"></div>
				<div className="sleeves"></div>
				<div className="shoulders">
					<div className="hand left"></div>
					<div className="hand right"></div>
				</div>
				<div className="head">
					<div className="hair"></div>
					<div className="beard"></div>
				</div>
			</div>
			<div className="message">
				<h1>One does not simply walk into a 404 ...</h1>
				<p>
					Because, you know, ring of fire, or whatever.
					<br />
					Maybe you have a typo in the url? Or you meant to go to a
					different location? Like...Hobbiton?
				</p>
			</div>
			<p>
				<Link to="/">Back to Home</Link>
			</p>
		</div>
	);
};

export default NotFound;
