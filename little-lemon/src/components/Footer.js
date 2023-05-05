import React from 'react';
import ReactLogo from '../logo.svg';


function Footer() {
    return (
        <footer>
            <div className="row">
                <div className="col-12 col-md-3 col-lg-6 d-flex justify-content-center">
                    <img src={ReactLogo} alt="React Logo"/>
                </div>
                <div className="col-12 col-md-9 col-lg-6 d-flex justify-content-center">
                    <table className="table table-bordered table-hover table-footer">
                        <thead>
                            <tr>
                            <th>Doormat Navigation</th>
                            <th>Contact</th>
                            <th>Social Media links</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Link 1</td>
                                <td>Address 1</td>
                                <td>Social Media Link 1</td>
                            </tr>
                            <tr>
                                <td>Link 2</td>
                                <td>Address 2</td>
                                <td>Social Media Link 2</td>
                            </tr>
                            <tr>
                                <td>Link 3</td>
                                <td>Address 3</td>
                                <td>Social Media Link 3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </footer>
    );
}

export default Footer;