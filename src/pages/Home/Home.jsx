import React, { useState, useEffect } from "react";
import "./Home.css";
import { phoneList } from "../../assets/phoneList";
import { Link } from "react-router-dom";
import Grid from "../../components/Grid/Grid";
import List from "../../components/List/List";

const Home = () => {
    const [filterVal, setFilterVal] = useState("none");
    const [sortVal, setSortVal] = useState("id");
    const [gridDisplay, setGridDisplay] = useState(true);
    const [phones, setPhones] = useState([]);

    const handleFilterChange = (event) => {
        setFilterVal(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortVal(event.target.value);
    };

    const toggle = (event) => {
        if (event.target.outerText === "Grid") {
            setGridDisplay(true);
        } else if (event.target.outerText === "List") {
            setGridDisplay(false);
        }
        // console.log(event.target.classList.value);
    };

    useEffect(() => {
        setPhones(phoneList);
    }, []);

    return (
        <div className='home-container'>
            <div className='btns-container'>
                <Link to={"/add"}>
                    <button className='add-btn'>Add item</button>
                </Link>
                <h4>Filter</h4>
                <select className='filters' onChange={handleFilterChange}>
                    <option className='filter-opt' value='fruit'>
                        Brand
                    </option>
                    <option className='filter-opt' value='vegetable'>
                        Vegetable
                    </option>
                    <option className='filter-opt' value='meat'>
                        Meat
                    </option>
                </select>
                <h4>Sort</h4>
                <select className='sort' onChange={handleSortChange}>
                    <option className='sort-opt' value='new-to-old'>
                        Newest Arrivals
                    </option>
                    <option className='sort-opt' value='low-to-high'>
                        Price (Low to High)
                    </option>
                    <option className='sort-opt' value='high-to-low'>
                        Price (High to Low)
                    </option>
                </select>
                <button className={`grid-btn ${gridDisplay ? "current" : ""}`} onClick={toggle}>
                    Grid
                </button>
                <button className={`list-btn ${gridDisplay ? "" : "current"}`} onClick={toggle}>
                    List
                </button>
            </div>
            {gridDisplay && <Grid phones={phones} />}
            {!gridDisplay && <List phones={phones} />}
        </div>
    );
};

export default Home;
