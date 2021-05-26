import React from "react";
import "App.css";
import { FaPlus, FaMinus, FaDollyFlatbed, FaTrashAlt } from "react-icons/fa";

const ProductCardH = ({ product, deleteProduct, updateProduct }) => {
	const currentUser = JSON.parse(localStorage.getItem("loggedKwikUser"));

	const removeProduct = () => {
		const { id } = product;
		deleteProduct(id);
	};

	const increaseQuantity = () => {
		const { id, name, category, price } = product;

		const updatedProduct = {
			quantity: product.quantity + 1,
			name,
			category,
			price,
		};

		updateProduct(id, updatedProduct);
	};

	const decreaseQuantity = () => {
		const { id, name, category, price } = product;

		const updatedProduct = {
			quantity: product.quantity - 1,
			name,
			category,
			price,
		};

		updateProduct(id, updatedProduct);
	};

	return (
		<div className="hcard">
			<div className="hptitle">
				<h3>{product.name}</h3>
			</div>
			<div className="restcardcontent">
				<i className="categoryimage">
					<FaDollyFlatbed size={100} />
				</i>

				<div className="detailcontent">
					<div className="hpdetails">
						<h4>Category - {product.category}</h4>
						<h4>Price - ₹ {product.price}</h4>
					</div>
					<div className="hstock">
						<div className="hstocktitle">
							<h4>Stock in Inventory :</h4>
						</div>
						<div className="hstockcontent">
							{currentUser.role.toLowerCase() === "admin" && (
								<button
									className="hplus"
									onClick={increaseQuantity}>
									<FaPlus size={20} />
								</button>
							)}
							<h4>{product.quantity}</h4>
							{currentUser.role.toLowerCase() !== "staff" && (
								<button
									className="hminus"
									onClick={decreaseQuantity}>
									<FaMinus size={20} />
								</button>
							)}
							{currentUser.role.toLowerCase() === "admin" && (
								<button
									className="hTrash"
									onClick={removeProduct}>
									<FaTrashAlt size={20} />
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProductCardH;
