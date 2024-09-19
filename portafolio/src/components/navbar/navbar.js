import React from "react";
import './navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <ul className="button-list">
                    <li>
                        <button className="nav-button">Home</button>
                    </li>
                    <li>
                        <button className="nav-button">About</button>
                    </li>
                    <li>
                        <button className="nav-button">Projects</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
