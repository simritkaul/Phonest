import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "../Nav/Nav";
import Home from "../../pages/Home/Home";
import Add from "../../pages/Add/Add";
import Edit from "../../pages/Edit/Edit";
import Individual from "../../pages/Individual/Individual";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-container'>
                <Nav />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/add' element={<Add />} />
                    <Route path='/edit' element={<Edit />} />
                    <Route path='/individual' element={<Individual />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
