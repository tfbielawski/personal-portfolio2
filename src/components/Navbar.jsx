import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import Hamburger from 'hamburger-react';

function Navbar() {
    const [expandNav, setExpandNav] = useState(false);
    
    //uselocation hook from react router dom
    const location = useLocation();

    //use effect to run under specified condition:
    useEffect(() => {
        setExpandNav(false);
        //location dep to specify that this runs when location changes value
    },[location]);

    return (
        <div className="navbar" id={expandNav ? "open" : "closed"}>
            <div className="toggleButton">
                {/* Hamburger menu to appear on small screens */}
                <button onClick={() => {setExpandNav((previous) => !previous)}}><Hamburger/></button>
            </div>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/about"> About Me </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/experience"> Experience </Link>
            </div>
        </div>
    );
}

export default Navbar
