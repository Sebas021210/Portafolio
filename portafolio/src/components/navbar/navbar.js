import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import './navbar.css';

function Navbar() {
    const [navColor, setNavColor] = useState("white");

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById("About").offsetTop;
            const projectsSection = document.getElementById("Projects").offsetTop;
            const currentScroll = window.scrollY;

            if (currentScroll >= aboutSection - 50 || currentScroll >= projectsSection - 50) {
                setNavColor("black");
            } else {
                setNavColor("white");
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="navbar">
            <nav>
                <ul className="button-list">
                    <li>
                        <Link
                            to="home"
                            duration={500}
                            className="nav-button"
                            style={{ color: navColor }}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about"
                            duration={500}
                            className="nav-button"
                            style={{ color: navColor }}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="projects"
                            duration={500}
                            className="nav-button"
                            style={{ color: navColor }}
                        >
                            Projects
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
