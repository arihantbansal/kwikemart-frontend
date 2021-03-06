import React, { useState, useEffect } from "react";
import Nav from "components/Nav";
import ProductCardH from "components/ProductCardH";
import Sidebar from "components/Sidebar";
import productService from "services/products";
import { Redirect, useParams } from "react-router";
import NewProduct from "components/NewProduct";

const Products = props => {
	const [products, setProducts] = useState([]);
	const [productsToShow, setProductsToShow] = useState(products);
	const { category } = useParams();
	const currentUser = JSON.parse(localStorage.getItem("loggedKwikUser"));

	useEffect(() => {
		productService.getAll().then(allProducts => {
			setProducts(allProducts);
			if (category.toLowerCase() !== "all") {
				setProductsToShow(
					allProducts.filter(
						p => p.category.toLowerCase() === category
					)
				);
			} else {
				setProductsToShow(allProducts);
			}
		});
	}, [category]);

	const addProduct = async productObject => {
		try {
			// Check if all required fields are filled in
			if (
				!productObject.name ||
				!productObject.category ||
				!productObject.price ||
				!productObject.quantity
			) {
				console.error("productObject missing fields");
				return;
			}

			await productService.create(productObject);
			const updatedProducts = await productService.getAll();
			setProducts(updatedProducts);
			if (category.toLowerCase() !== "all") {
				setProductsToShow(
					updatedProducts.filter(
						p => p.category.toLowerCase() === category
					)
				);
			} else {
				setProductsToShow(updatedProducts);
			}
		} catch (err) {
			console.error(err);
		}
	};

	const updateProduct = async (id, productObject) => {
		try {
			await productService.update(id, productObject);

			const updatedProduct = {
				...productObject,
				id,
			};

			setProducts(
				products.map(p => (p.id !== id ? product : updatedProduct))
			);
			setProductsToShow(
				productsToShow.map(p =>
					p.id !== id ? product : updatedProduct
				)
			);
		} catch (exception) {
			console.error(exception);
		}
	};

	const deleteProduct = async id => {
		try {
			const product = products.filter(p => p.id === id);

			if (window.confirm(`Remove product ${product.name} ?`)) {
				await productService.removeProduct(id);

				setProducts(products.filter(p => p.id !== id));
				setProductsToShow(productsToShow.filter(p => p.id !== id));
			}
		} catch (exception) {
			console.error(exception);
		}
	};

	return (
		<div className="landing-screen3">
			<div className="navd">
				<Nav
					handleLogout={props.handleLogout}
					handleToggleSidebar={props.handleToggleSidebar}
				/>
			</div>
			<div className="dashhome">
				<Sidebar
					handleToggleSidebar={props.handleToggleSidebar}
					toggled={props.toggled}
				/>
				<div className="dash-content">
					<div className="category">
						Category:{" "}
						{category[0].toUpperCase() +
							category.substr(1).toLowerCase()}
					</div>
					<div className="products">
						{currentUser.role.toLowerCase() === "admin" && (
							<NewProduct createProduct={addProduct} />
						)}
						{productsToShow
							.sort((a, b) => a.name.localeCompare(b.name))
							.map(product => (
								<ProductCardH
									key={product.id}
									product={product}
									deleteProduct={deleteProduct}
									updateProduct={updateProduct}
								/>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
