import React from 'react';


function Nav() {
    return (
        <nav className="d-flex justify-content-center nav_container">
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
        </nav>
    );
}

export default Nav;