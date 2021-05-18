import React, { useState, useEffect } from "react";


function Item({ match }) {
	useEffect(() => {
		console.log(match);
		fetchItem();
	}, []);

	const [item, setItem] = useState({});

	const fetchItem = async () => {
		const fetchItem = await fetch(
			`https://fakestoreapi.com/products/${match.params.id}`
		);
		const item = await fetchItem.json();
		setItem(item);
		console.log(item);
	};

	return (
		<div className="product">
			<h1>{item.title}</h1>
			<h2>Product Category-{item.category}</h2>
			<img src={item.image} alt="" />
			<h2>Price-{item.price}</h2>
			<h3>Description</h3>
			<h4>{item.description}</h4>
		</div>
	);
}

export default Item;
