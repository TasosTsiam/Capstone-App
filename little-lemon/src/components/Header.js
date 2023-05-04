import React from 'react';
import ReactLogo from '../logo.svg';

function Header() {
    return (
        <header className="header_container">
            <img src={ReactLogo} alt="React Logo"/>
        </header>
    );
}

export default Header;