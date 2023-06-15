import React from 'react';
import ReactLogo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer>
            <div className="container-fluid footer-container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <table className="table table-footer" summary="Doormat Navigation, Contact, and Social Media links">
                            <thead>
                                <tr>
                                    <th>Doormat Navigation</th>
                                    <th>Contact</th>
                                    <th>Social Media links</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Link to="/homepage">Home</Link></td>
                                    <td aria-label="Contact address">Random Street 21</td>
                                    <td className="media-icon"><FontAwesomeIcon icon={faFacebookF} aria-label="Facebook" /></td>
                                </tr>
                                <tr>
                                    <td><Link to="/homepage">About</Link></td>
                                    <td aria-label="Phone number">863 5715 559 - <FontAwesomeIcon icon={faPhone} /></td>
                                    <td className="media-icon"><FontAwesomeIcon icon={faInstagram} aria-label="Instagram" /></td>
                                </tr>
                                <tr>
                                    <td><Link to="/homepage">Menu</Link></td>
                                    <td aria-label="email">example@hotmail.com</td>
                                    <td className="media-icon"><FontAwesomeIcon icon={faTwitter} aria-label="Twitter" /></td>
                                </tr>
                                <tr>
                                    <td><Link to="/reservations">Reservations</Link></td>
                                </tr>
                                <tr>
                                    <td><Link to="/homepage">Order Online</Link></td>
                                </tr>
                                <tr>
                                    <td><Link to="/homepage">Login</Link></td>
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