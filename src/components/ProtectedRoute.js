import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
	const loggedUser = localStorage.getItem("loggedKwikUser");
	return (
		<Route
			{...rest}
			render={props => {
				if (user || loggedUser) {
					return <Component {...rest} {...props} />;
				} else {
					return (
						<Redirect
							to={{
								pathname: "/unauthorized",
								state: {
									from: props.location,
								},
							}}
						/>
					);
				}
			}}
		/>
	);
};

export default ProtectedRoute;
