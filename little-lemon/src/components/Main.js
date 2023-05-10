import React from 'react';
import ReactLogo from '../bruchetta.svg';
import image1 from '../greeksalad.jpg';
import image3 from '../lemondessert.jpg';


function Main() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center">
                    <h2 className="col-12 col-sm-6 col-md-6 col-lg-6 text-nowrap">This week's specials!</h2>
                    <a href="../../public/index.html" className="btn btn-primary col-12 col-sm-3 col-md-2 col-lg-2 text-nowrap">Online Menu</a>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card h-100">
                        <img src={image1} alt="Card" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Card Title</h5>
                            <p className="card-text">Card Description</p>
                            <p className="card-text"><small className="text-muted">$ Price</small></p>
                            <button className="btn btn-primary">Button</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card h-100">
                        <img src={ReactLogo} alt="React Logo" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Card Title</h5>
                            <p className="card-text">Card Description</p>
                            <p className="card-text"><small className="text-muted">$ Price</small></p>
                            <button className="btn btn-primary">Button</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card h-100">
                        <img src={image3} alt="Card" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Card Title</h5>
                            <p className="card-text">Card Description</p>
                            <p className="card-text"><small className="text-muted">$ Price</small></p>
                            <button className="btn btn-primary">Button</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Main;