import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import './navbar.css';

function Navbar() {
    const [navColor, setNavColor] = useState("white");
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById("About").offsetTop;
            const projectsSection = document.getElementById("Projects").offsetTop;
            const currentScroll = window.scrollY;

            // Cambiar el color de las letras según la sección
            if (currentScroll >= aboutSection - 50 || currentScroll >= projectsSection - 50) {
                setNavColor("black");
            } else {
                setNavColor("white");
            }

            // Mostrar/ocultar el navbar según la dirección del scroll
            if (currentScroll > lastScrollY.current) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            lastScrollY.current = currentScroll;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="navbar" style={{ top: showNavbar ? '0' : '-100px', transition: 'top 0.3s ease' }}>
            <nav>
                <ul className="button-list">
                    <li>
                        <Link to="home" duration={500} className="nav-button" style={{ color: navColor }}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" duration={500} className="nav-button" style={{ color: navColor }}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" duration={500} className="nav-button" style={{ color: navColor }}>
                            Projects
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
