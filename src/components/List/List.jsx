import React from "react";
import { Link } from "react-router-dom";
import "./List.css";

const List = ({ phones }) => {
    return (
        <div className='list-container'>
            {phones.map((phone) => {
                return (
                    <div className='list-item' key={phone.id}>
                        <img src={phone.imageUrl} alt={phone.phoneName} className='list-img' />
                        <h1 className='list-item-name'>
                            {phone.brandName} {phone.phoneName}
                        </h1>
                        <p className='list-price'>₹{phone.price}</p>
                        <Link to={"/add"}>
                            <button className='list-edit-btn'>Edit</button>
                        </Link>
                        <button className='list-delete-btn'>Delete</button>
                        <Link to={"/individual"}>
                            <button className='list-show-btn'>Show More</button>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default List;
