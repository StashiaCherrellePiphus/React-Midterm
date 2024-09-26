import React from "react";
import Logo from "../images/Eyelashes-Clipart-Set3.jpg";


function Navbar() {
    return (
            <div className="navbar">
                <div className="leftSide">
                   <img src={Logo} />
                </div>
                <div className="rightSide">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link tp="/contact">Contact</Link>
                    <Link to="/creator">Creator</Link>
                </div>
            </div>
    );
}

export default Navbar;