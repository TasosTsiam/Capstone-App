import React from 'react';
import ReactLogo from '../logo.svg';


function Footer() {
    return (
        <div>
            <img src={ReactLogo} alt="React Logo"/>

            <table>
                <tr>
                    <th>Doormat Navigation</th>
                    <th>Contact</th>
                    <th>Social Media links</th>
                </tr>
            </table>
        </div>
    );
}

export default Footer;