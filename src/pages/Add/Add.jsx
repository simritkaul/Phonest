import React, { useState } from "react";
import "./Add.css";
import { useSelector, useDispatch } from "react-redux";
import { addPhone, selectInitialPhones } from "../../features/phone/phoneSlice";
import { Link, useLocation } from "react-router-dom";

const Add = () => {
    // const location = useLocation().state;
    // let currentInfo = {};

    const location = useLocation();
    const currentInfo = location.state?.currentInfo;

    console.log(currentInfo);

    const idCount = useSelector(selectInitialPhones);
    let updatedPhoneDetails = {
        id: idCount.length + 1,
        brandName: "",
        phoneName: "",
        imageUrl: "",
        price: 0,
        storage: 0,
        ram: 0,
        battery: 0,
    };
    const [phoneDetails, setPhoneDetails] = useState(
        currentInfo
            ? currentInfo
            : {
                  id: idCount.length + 1,
                  brandName: "",
                  phoneName: "",
                  imageUrl: "",
                  price: 0,
                  storage: 0,
                  ram: 0,
                  battery: 0,
              }
    );

    const handleInputBrand = (event) => {
        updatedPhoneDetails.brandName = event.target.value;
        setPhoneDetails({ ...phoneDetails, brandName: event.target.value });
    };

    const handleInputPhone = (event) => {
        updatedPhoneDetails.phoneName = event.target.value;
        setPhoneDetails({ ...phoneDetails, phoneName: event.target.value });
    };

    const handleInputImageUrl = (event) => {
        updatedPhoneDetails.imageUrl = event.target.value;
        setPhoneDetails({ ...phoneDetails, imageUrl: event.target.value });
    };

    const handleInputPrice = (event) => {
        updatedPhoneDetails.price = parseInt(event.target.value);
        setPhoneDetails({ ...phoneDetails, price: parseInt(event.target.value) });
    };

    const handleInputStorage = (event) => {
        updatedPhoneDetails.storage = parseInt(event.target.value);
        setPhoneDetails({ ...phoneDetails, storage: parseInt(event.target.value) });
    };

    const handleInputRam = (event) => {
        updatedPhoneDetails.ram = parseInt(event.target.value);
        setPhoneDetails({ ...phoneDetails, ram: parseInt(event.target.value) });
    };

    const handleInputBattery = (event) => {
        updatedPhoneDetails.battery = parseInt(event.target.value);
        setPhoneDetails({ ...phoneDetails, battery: parseInt(event.target.value) });
    };

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className='add-container'>
            <form className='new-info' onSubmit={handleSubmit}>
                <label className='new-info-label'>
                    Brand Name
                    <input type='text' name='brand' onChange={handleInputBrand} />
                </label>
                <label className='new-info-label'>
                    Phone Name
                    <input type='text' name='phone' onChange={handleInputPhone} />
                </label>
                <label className='new-info-label'>
                    Image Url for the Phone
                    <input type='text' name='image' onChange={handleInputImageUrl} />
                </label>
                <label className='new-info-label'>
                    Price
                    <input type='number' name='price' onChange={handleInputPrice} />
                </label>
                <label className='new-info-label'>
                    Storage
                    <input type='number' name='storage' onChange={handleInputStorage} />
                </label>
                <label className='new-info-label'>
                    RAM
                    <input type='number' name='ram' onChange={handleInputRam} />
                </label>
                <label className='new-info-label'>
                    Battery
                    <input type='number' name='battery' onChange={handleInputBattery} />
                </label>
                <Link to={"/"}>
                    <input
                        type='submit'
                        className='new-info-btn'
                        value='Add to Inventory'
                        onClick={() => dispatch(addPhone(phoneDetails))}
                    />
                </Link>
                {/* <button type='submit' className='new-info-btn' onClick={handleSubmit}>
                    Add to Inventory
                </button> */}
            </form>
        </div>
    );
};

export default Add;
