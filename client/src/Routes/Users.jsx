import React from "react";
import { Routes,Route } from "react-router-dom";
import Signup from "../pages/users/Signup";
import Signin from "../pages/users/Signin";
import Home from "../pages/users/Home";
function Users(){
    return(
        <>
        <Routes>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Signin/>} ></Route>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
       
        </>
    )
}

export default Users


