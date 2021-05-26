import React, { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import products from "services/products";

const NewProduct = ({ createProduct }) => {
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

	const addBlog = event => {
		event.preventDefault();
		try {
			const name = inputValues?.name;
			const category = inputValues?.category;
			const price = inputValues?.price;
			const quantity = inputValues?.quantity;

			const product = {
				name,
				category,
				price,
				quantity,
			};

			createProduct(product);

			setInputValues({ name: "", category: "", price: "", quantity: "" });
		} catch (exception) {
			console.log(exception);
		}
	};

	return (
		<div className="newProduct">
			<Form className="newp" onSubmit={addBlog}>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Row>
						<Form.Label className="productname">
							Add a new product
						</Form.Label>
					</Row>
					<Row>
						{" "}
						<Form.Control
							type="text"
							name="name"
							placeholder="Product Name"
							value={inputValues?.name || ""}
							onChange={handleInputChange}
						/>
					</Row>
				</Form.Group>

				<Form.Group controlId="exampleForm.ControlSelect1">
					<Form.Label>Category : </Form.Label>
					<Form.Control
						as="select"
						name="category"
						value={inputValues?.category || ""}
						onChange={handleInputChange}>
						<option>Electronics</option>
						<option>Fashion</option>
						<option>Grocery</option>
						<option>Books</option>
					</Form.Control>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlSelect2">
					<Row xs="auto">
						<Form.Label>Price : </Form.Label>
						<Form.Control
							type="number"
							min="0"
							name="price"
							placeholder="001"
							value={inputValues?.price || ""}
							onChange={handleInputChange}
						/>
					</Row>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlSelect2">
					<Row>
						<Form.Label>Quantity : </Form.Label>
						<Form.Control
							type="number"
							min="1"
							name="quantity"
							placeholder="001"
							value={inputValues?.quantity || ""}
							onChange={handleInputChange}
						/>
					</Row>
				</Form.Group>
				<Button
					className="newpButton"
					variant="secondary"
					type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default NewProduct;
