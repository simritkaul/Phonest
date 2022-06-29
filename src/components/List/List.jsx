import React from "react";
import { Link } from "react-router-dom";
import { deletePhone } from "../../features/phone/phoneSlice";
import { useDispatch } from "react-redux";
import "./List.css";

const List = ({ phones }) => {
    const dispatch = useDispatch();
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
                        <Link to={"/edit"} state={{ currentInfo: phone }}>
                            <button className='list-edit-btn'>Edit</button>
                        </Link>
                        <button className='list-delete-btn' onClick={() => dispatch(deletePhone(phone))}>
                            Delete
                        </button>
                        <Link to={"/individual"} state={{ currentInfo: phone }}>
                            <button className='list-show-btn'>Show More</button>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default List;
