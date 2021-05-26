import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const NewUser = ({ createUser }) => {
	const [inputValues, setInputValues] = useState(null);

	const handleInputChange = event => {
		const target = event.target;
		const { value, name } = target;

		setInputValues(prevValues => {
			return {
				...prevValues,
				[name]: value,
			};
		});
	};

	const addUser = event => {
		event.preventDefault();
		try {
			const name = inputValues?.name;
			const role = inputValues?.role;
			const username = inputValues?.username;
			const password = inputValues?.password;

			const user = {
				name,
				role,
				username,
				password,
			};

			createUser(user);

			setInputValues({ name: "", role: "", username: "", password: "" });
		} catch (exception) {
			console.log(exception);
		}
	};

	return (
		<div>
			<div className="newUser">
				<Form className="newu" onSubmit={addUser}>
					<Form.Group controlId="exampleForm.ControlInput1">
						<Row>
							<Form.Label className="username">
								Add a new user
							</Form.Label>
						</Row>
						<Row>
							{" "}
							<Form.Control
								type="text"
								name="name"
								placeholder="Jane Doe"
								value={inputValues?.name || ""}
								onChange={handleInputChange}
							/>
						</Row>
					</Form.Group>

					<Form.Group controlId="exampleForm.ControlSelect1">
						<Form.Label>Role: </Form.Label>
						<Form.Control
							as="select"
							name="role"
							value={inputValues?.role || ""}
							onChange={handleInputChange}>
							<option>Admin</option>
							<option>Cashier</option>
							<option>Staff</option>
						</Form.Control>
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlInput1">
						<Row>
							<Form.Label>Username:</Form.Label>
						</Row>
						<Row>
							{" "}
							<Form.Control
								type="text"
								placeholder="janedoe"
								name="username"
								value={inputValues?.username || ""}
								onChange={handleInputChange}
							/>
						</Row>
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlInput1">
						<Row>
							<Form.Label>Password:</Form.Label>
						</Row>
						<Row>
							{" "}
							<Form.Control
								type="password"
								name="password"
								value={inputValues?.password || ""}
								onChange={handleInputChange}
							/>
						</Row>
					</Form.Group>
					<Button
						className="newuButton"
						variant="secondary"
						type="submit">
						Submit
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default NewUser;
