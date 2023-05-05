import React from 'react';
import ReactLogo from '../logo.svg';

function Header() {
    return (
        <header className="d-flex justify-content-center">
            <a href="/">
                <img src={ReactLogo} alt="React Logo"/>
            </a>
        </header>
    );
}

export default Header;