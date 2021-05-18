import React, { useState }from 'react'
import "../App.css";
import { FaUser,FaUserTimes } from 'react-icons/fa';
const UserCard = () => {
    return (
        <div className="ucard" >
            <i className="userimage">
                <FaUser size={100}/>
                </i>
             
             <div className="userdetails">
                <h3>Name-Ayush Pal</h3>
                <h5>Role-Admin</h5>
                <h5>Username-palayush16</h5>
             </div>
             <button className="usercontrol">
                    <h4>Delete User</h4>
                   <FaUserTimes size={20}/>
                    
             </button>
             {/* <div className="ptitle">
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
                    <button className="plus" >
                        <FaPlus/>
                    </button>
                        <h4>1</h4>
                    <button className="minus">
                        <FaMinus/>
                    </button>
                </div>
           </div>  */}
        </div>
    )
}
export default UserCard

