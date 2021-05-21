import React, { useState, useEffect } from "react";
import Nav from "components/Nav";
import ProductCardH from "components/ProductCardH";
import Sidebar from "components/Sidebar";
import productService from "services/products";

const Products = ({ category }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		productService.getAll().then(allProducts => {
			setProducts(allProducts);
		});
	}, []);

	return (
		<div className="landing-screen3">
			<div className="navd">
				<Nav />
			</div>
			<div className="dashhome">
				<Sidebar />
				<div className="dash-content">
					{products
						.sort((a, b) => a.name.localeCompare(b.name))
						.map(product => (
							<ProductCardH key={product.id} product={product} />
						))}
				</div>
			</div>
		</div>
	);
};

export default Products;
