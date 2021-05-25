import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
const NewProduct = () => {
	return (
		<div className="newProduct">
			<Form className="newp">
				<Form.Group controlId="exampleForm.ControlInput1">
					<Row>
						<Form.Label className="productname">
							Add a new product
						</Form.Label>
					</Row>
					<Row>
						{" "}
						<Form.Control type="text" placeholder="Product name" />
					</Row>
				</Form.Group>

				<Form.Group controlId="exampleForm.ControlSelect1">
					<Form.Label>Category : </Form.Label>
					<Form.Control as="select">
						<option>Electronics</option>
						<option>Fashion</option>
						<option>Grocery</option>
						<option>Books</option>
					</Form.Control>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlSelect2">
					<Row xs="auto">
						<Form.Label>Price : </Form.Label>
						<Form.Control type="text" placeholder="" />
					</Row>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlSelect2">
					<Row>
						<Form.Label>Quantity : </Form.Label>
						<Form.Control type="number" min="0" placeholder="" />
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
