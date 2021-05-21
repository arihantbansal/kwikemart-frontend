import React from "react";
import "App.css";
import { FaPlus, FaMinus, FaDollyFlatbed, FaTrashAlt } from "react-icons/fa";

const ProductCardH = ({ product }) => {
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
							<button className="hplus">
								<FaPlus size={20} />
							</button>
							<h4>{product.quantity}</h4>
							<button className="hminus">
								<FaMinus size={20} />
							</button>
							<button className="hTrash">
								<FaTrashAlt size={20} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProductCardH;
