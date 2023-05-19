import React from 'react';
import ReactLogo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <footer>
            <div className="container-fluid footer-container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <table className="table table-footer">
                            <thead>
                                <tr>
                                    <th>Doormat Navigation</th>
                                    <th>Contact</th>
                                    <th>Social Media links</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><a href="../../public/index.html">Home</a></td>
                                    <td>Random Street 21</td>
                                    <td className="media-icon"><FontAwesomeIcon icon={faFacebookF} /></td>
                                </tr>
                                <tr>
                                    <td><a href="../../public/index.html">About</a></td>
                                    <td>863 5715 559 - <FontAwesomeIcon icon={faPhone} /></td>
                                    <td className="media-icon"><FontAwesomeIcon icon={faInstagram} /></td>
                                </tr>
                                <tr>
                                    <td><a href="../../public/index.html">Menu</a></td>
                                    <td>example@hotmail.com</td>
                                    <td className="media-icon"><FontAwesomeIcon icon={faTwitter} /></td>
                                </tr>
                                <tr>
                                    <td><a href="../../public/index.html">Reservations</a></td>
                                </tr>
                                <tr>
                                    <td><a href="../../public/index.html">Order Online</a></td>
                                </tr>
                                <tr>
                                    <td><a href="../../public/index.html">Login</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-12 d-flex justify-content-evenly copyright-logo">
                        <img src={ReactLogo} alt="React Logo" className="d-flex align-self-center col-6"/>
                        <div className="d-flex justify-content-center align-items-center col-6">
                            <p className="text-nowrap">© 2023 Little Lemon</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;