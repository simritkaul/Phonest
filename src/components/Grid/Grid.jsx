import React from "react";
import { Link } from "react-router-dom";
import { deletePhone } from "../../features/phone/phoneSlice";
import { useDispatch } from "react-redux";
import "./Grid.css";

const Grid = ({ phones, sortType }) => {
    const dispatch = useDispatch();

    console.log(sortType);

    const comparelowtohigh = (a, b) => {
        if (a.price < b.price) {
            return -1;
        } else if (a.price > b.price) {
            return 1;
        } else {
            return 0;
        }
    };

    const comparehightolow = (a, b) => {
        if (a.price > b.price) {
            return -1;
        } else if (a.price < b.price) {
            return 1;
        } else {
            return 0;
        }
    };

    const comparenewtoold = (a, b) => {
        if (a.id > b.id) {
            return -1;
        } else if (a.id < b.id) {
            return 1;
        } else {
            return 0;
        }
    };

    return (
        <div className='grid-container'>
            {phones.map((phone) => {
                return (
                    <div className='grid-item' key={phone.id}>
                        <Link to={"/individual"} state={{ currentInfo: phone }}>
                            <img src={phone.imageUrl} alt={phone.phoneName} className='grid-img' />
                        </Link>
                        <h1 className='grid-item-name'>
                            {phone.brandName} {phone.phoneName}
                        </h1>
                        <div className='grid-btns-price'>
                            <Link to={"/edit"} state={{ currentInfo: phone }}>
                                <button className='grid-edit-btn'>Edit</button>
                            </Link>
                            <button className='grid-delete-btn' onClick={() => dispatch(deletePhone(phone))}>
                                Delete
                            </button>
                            <p className='grid-price'>₹{phone.price}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Grid;
