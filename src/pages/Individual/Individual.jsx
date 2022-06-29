import React from "react";
import "./Individual.css";
import { Link, useLocation } from "react-router-dom";

const Individual = () => {
    const location = useLocation();
    const currentInfo = location.state?.currentInfo;

    console.log(currentInfo);

    return (
        <div className='individual-container'>
            <div className='individual-info-container'>
                <div className='individual-img-container'>
                    <img src={currentInfo.imageUrl} alt={currentInfo.phoneName} className='individual-img' />
                </div>
                <div className='individual-information'>
                    <div className='individual-info'>
                        <h1 className='info-name'>
                            {currentInfo.brandName} {currentInfo.phoneName}
                        </h1>
                        <h2 className='info-price'>₹{currentInfo.price}</h2>
                    </div>
                    <div className='info-specs'>
                        <div className='spec'>
                            <h2 className='spec-title'>Storage</h2>
                            <h3 className='spec-val'>{currentInfo.storage} GB</h3>
                        </div>
                        <div className='spec'>
                            <h2 className='spec-title'>RAM</h2>
                            <h3 className='spec-val'>{currentInfo.ram} GB</h3>
                        </div>
                        <div className='spec'>
                            <h2 className='spec-title'>Battery</h2>
                            <h3 className='spec-val'>{currentInfo.battery} mAh</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className='go-back'>
                <Link to={"/"}>
                    <button className='go-back-btn'>Back to inventory</button>
                </Link>
            </div>
        </div>
    );
};

export default Individual;
