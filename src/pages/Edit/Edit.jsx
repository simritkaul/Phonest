import React, { useState } from "react";
import "./Edit.css";
import { useDispatch } from "react-redux";
import { editPhone } from "../../features/phone/phoneSlice";
import { Link, useLocation } from "react-router-dom";

const Edit = () => {
    const location = useLocation();
    const { currentInfo } = location.state;

    console.log(location);

    const [phoneDetails, setPhoneDetails] = useState(currentInfo);

    const handleInputBrand = (event) => {
        setPhoneDetails({ ...phoneDetails, brandName: event.target.value });
    };

    const handleInputPhone = (event) => {
        setPhoneDetails({ ...phoneDetails, phoneName: event.target.value });
    };

    const handleInputImageUrl = (event) => {
        setPhoneDetails({ ...phoneDetails, imageUrl: event.target.value });
    };

    const handleInputPrice = (event) => {
        setPhoneDetails({ ...phoneDetails, price: parseInt(event.target.value) });
    };

    const handleInputStorage = (event) => {
        setPhoneDetails({ ...phoneDetails, storage: parseInt(event.target.value) });
    };

    const handleInputRam = (event) => {
        setPhoneDetails({ ...phoneDetails, ram: parseInt(event.target.value) });
    };

    const handleInputBattery = (event) => {
        setPhoneDetails({ ...phoneDetails, battery: parseInt(event.target.value) });
    };

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className='edit-container'>
            <form className='new-info' onSubmit={handleSubmit}>
                <label className='new-info-label'>
                    Brand Name
                    <input type='text' name='brand' value={phoneDetails.brandName} onChange={handleInputBrand} />
                </label>
                <label className='new-info-label'>
                    Phone Name
                    <input type='text' name='phone' value={phoneDetails.phoneName} onChange={handleInputPhone} />
                </label>
                <label className='new-info-label'>
                    Image Url for the Phone
                    <input type='text' name='image' value={phoneDetails.imageUrl} onChange={handleInputImageUrl} />
                </label>
                <label className='new-info-label'>
                    Price
                    <input type='number' name='price' value={phoneDetails.price} onChange={handleInputPrice} />
                </label>
                <label className='new-info-label'>
                    Storage
                    <input type='number' name='storage' value={phoneDetails.storage} onChange={handleInputStorage} />
                </label>
                <label className='new-info-label'>
                    RAM
                    <input type='number' name='ram' value={phoneDetails.ram} onChange={handleInputRam} />
                </label>
                <label className='new-info-label'>
                    Battery
                    <input type='number' name='battery' value={phoneDetails.battery} onChange={handleInputBattery} />
                </label>
                <Link to={"/"}>
                    <input
                        type='submit'
                        className='new-info-btn'
                        value='Edit Inventory Item'
                        onClick={() => dispatch(editPhone(phoneDetails))}
                    />
                </Link>
                {/* <button type='submit' className='new-info-btn' onClick={handleSubmit}>
                    Add to Inventory
                </button> */}
            </form>
        </div>
    );
};

export default Edit;
