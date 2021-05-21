import React, { useState } from "react";
import "../App.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const ProductCard = () => {
	return (
		<div className="card">
			<div className="ptitle">
				<h3>Dell Inspirion 5000 Laptop</h3>
			</div>
			<div className="pdetails">
				<h4>Category-Electronics</h4>
				<h4>PRICE-$5999/-</h4>
			</div>
			<div className="stock">
				<div className="stocktitle">
					<h4>Stock Left</h4>
				</div>
				<div className="stockcontent">
					<button className="plus">
						<FaPlus size={20} />
					</button>
					<h4>1</h4>
					<button className="minus">
						<FaMinus size={20} />
					</button>
				</div>
			</div>
		</div>
	);
};
export default ProductCard;
