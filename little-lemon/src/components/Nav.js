import React, { useState, useEffect } from 'react';

function Nav() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="d-flex justify-content-center nav_container">
            {isMobile ? (
                <div className="d-flex justify-content-center nav_container">
                    <button className="menu-button">Menu</button>
                </div>
            ) : (
                <div>
                    <ul>
                        <li><a href="../../public/index.html">Home</a></li>
                        <li><a href="../../public/index.html">About</a></li>
                        <li><a href="../../public/index.html">Menu</a></li>
                        <li><a href="../../public/index.html">Reservations</a></li>
                        <li><a href="../../public/index.html">Order Online</a></li>
                        <li><a href="../../public/index.html">Login</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Nav;