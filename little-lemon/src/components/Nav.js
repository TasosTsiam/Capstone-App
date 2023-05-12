import React from 'react';


function Nav() {
    return (
        <nav className="navbar navbar-expand-md nav_container">
            <a href="../../public/index.html" className="navbar-brand">Name</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#bttttn">
                <i className="bx bx-menu"></i>
            </button>
            <div className="collapse navbar-collapse" id="bttttn">
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="../../public/index.html" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="../../public/index.html" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="../../public/index.html" className="nav-link">Menu</a></li>
                    <li className="nav-item"><a href="../../public/index.html" className="nav-link">Reservations</a></li>
                    <li className="nav-item"><a href="../../public/index.html" className="nav-link">Order Online</a></li>
                    <li className="nav-item"><a href="../../public/index.html" className="nav-link">Login</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;