import React from 'react';
import ReactLogo from '../logo.svg';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex justify-content-center">
                <a className="navbar-brand col-6 col-lg-4" href="/">
                    <img src={ReactLogo} alt="React Logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse col-6 col-lg-8" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mb-2 mb-lg-0 text-nowrap">
                        <li className="nav-item"><a className="nav-link" aria-current="page" href="../../public/index.html">Home</a></li>
                        <li className="nav-item"><a className="nav-link" aria-current="page" href="../../public/index.html">About</a></li>
                        <li className="nav-item"><a className="nav-link" aria-current="page" href="../../public/index.html">Menu</a></li>
                        <li className="nav-item"><a className="nav-link" aria-current="page" href="../../public/index.html">Reservations</a></li>
                        <li className="nav-item"><a className="nav-link" aria-current="page" href="../../public/index.html">Order Online</a></li>
                        <li className="nav-item"><a className="nav-link" aria-current="page" href="../../public/index.html">Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;