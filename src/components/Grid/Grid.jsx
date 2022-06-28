import React from "react";
import { Link } from "react-router-dom";
import "./Grid.css";

const Grid = ({ phones }) => {
    return (
        <div className='grid-container'>
            {phones.map((phone) => {
                return (
                    <div className='grid-item' key={phone.id}>
                        <Link to={"/individual"}>
                            <img src={phone.imageUrl} alt={phone.phoneName} className='grid-img' />
                        </Link>
                        <h1 className='grid-item-name'>
                            {phone.brandName} {phone.phoneName}
                        </h1>
                        <div className='grid-btns-price'>
                            <Link to={"/add"}>
                                <button className='grid-edit-btn'>Edit</button>
                            </Link>
                            <button className='grid-delete-btn'>Delete</button>
                            <p className='grid-price'>₹{phone.price}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Grid;
