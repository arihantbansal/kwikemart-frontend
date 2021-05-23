import React, { useState, useEffect } from "react";
import Nav from "components/Nav";
import ProductCardH from "components/ProductCardH";
import Sidebar from "components/Sidebar";
import productService from "services/products";
import { useParams } from "react-router";

const Products = props => {
	const [products, setProducts] = useState([]);
	const [productsToShow, setProductsToShow] = useState(products);
	const { category } = useParams();

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
	}, [products]);

	return (
		<div className="landing-screen3">
			<div className="navd">
				<Nav handleLogout={props.handleLogout} />
			</div>
			<div className="dashhome">
				<Sidebar />
				<div className="dash-content">
					Category:{" "}
					{category[0].toUpperCase() +
						category.substr(1).toLowerCase()}
					{productsToShow
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
