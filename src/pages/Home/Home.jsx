import React, { useState, useEffect } from "react";
import "./Home.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Grid from "../../components/Grid/Grid";
import List from "../../components/List/List";

const Home = () => {
    const currentAllPhones = useSelector((state) => state.phone.data);
    console.log(currentAllPhones);
    const [filterVal, setFilterVal] = useState("none");
    const [sortVal, setSortVal] = useState("newtoold");
    const [showInfo, setShowInfo] = useState(currentAllPhones.length > 0 ? true : false);
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

    // Sorting function
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

    useEffect(() => {
        setPhones(currentAllPhones);
        setShowInfo(currentAllPhones.length > 0 ? true : false);
    }, [currentAllPhones]);

    return (
        <div className='home-container'>
            {!showInfo && (
                <div className='no-phone-grid'>
                    <h2>Nothing to see here</h2>
                    <Link to={"/add"}>
                        <button className='add-btn-no-phone'>Add item</button>
                    </Link>
                </div>
            )}
            {showInfo && (
                <div className='btns-container'>
                    <Link to={"/add"}>
                        <button className='add-btn'>Add item</button>
                    </Link>
                    <h4>Filter</h4>
                    <select className='filters' onChange={handleFilterChange}>
                        <option className='filter-opt' value='none'>
                            None
                        </option>
                        <option className='filter-opt' value='brand'>
                            Brand
                        </option>
                    </select>
                    <h4>Sort</h4>
                    <select className='sort' onChange={handleSortChange}>
                        <option className='sort-opt' value='newtoold'>
                            Newest Arrivals
                        </option>
                        <option className='sort-opt' value='lowtohigh'>
                            Price (Low to High)
                        </option>
                        <option className='sort-opt' value='hightolow'>
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
            )}
            {showInfo && gridDisplay && <Grid phones={phones} sortType={sortVal} />}
            {showInfo && !gridDisplay && <List phones={phones} sortType={sortVal} />}
        </div>
    );
};

export default Home;
