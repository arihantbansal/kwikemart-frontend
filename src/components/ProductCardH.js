import React, { useState }from 'react'
import "../App.css";
import { FaPlus, FaMinus,FaDollyFlatbed,FaTrashAlt } from 'react-icons/fa';
const ProductCardH = () => {
    return (
        <div className="hcard" >
            <div className="hptitle">
                <h3>Dell Inspirion 5000 Laptop</h3>
            </div>
            <div className="restcardcontent">
                
                <i className="categoryimage">
                    <FaDollyFlatbed size={100}/>
                </i>
                
                <div className="detailcontent">  
                    <div className="hpdetails">
                        <h4>Category-Electronics</h4>
                        <h4>PRICE-$5999/-</h4>
                    </div>
                    <div className="hstock">
                        <div className="hstocktitle">
                            <h4>Stock in Inventory :</h4>
                        </div>
                        <div className="hstockcontent">
                            <button className="hplus" >
                                <FaPlus size={10}/>
                            </button>
                            <h4>1</h4>
                            <button className="hminus">
                                <FaMinus size={10}/>
                            </button>
                            <button className="hTrash">
                                <FaTrashAlt size={10}/>
                            </button>
                        </div>
                    </div> 
                </div>
            </div>
            </div>
    )
}
export default ProductCardH

