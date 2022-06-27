import React from "react";
import "./Nav.css";
import phonestLogo from "../../assets/Phonest Logo.png";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Nav = () => {
    return (
        <div className='nav-container'>
            <img src={phonestLogo} alt='Phonest' className='nav-logo' />
            <div className='search-form'>
                <form className='nav-form'>
                    <input
                        type='text'
                        name='searchtext'
                        className='searchinput'
                        placeholder='Type what you are looking for'
                    />
                    <button className='searchbtn' type='submit'>
                        <FaSearch style={{ fontSize: "14px" }} />
                    </button>
                </form>
            </div>
            <h3>Welcome, John</h3>
        </div>
    );
};

export default Nav;
