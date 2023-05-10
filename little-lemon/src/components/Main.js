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
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div className="row d-flex justify-content-between align-items-center">
                                    <h5 className="card-title col-6 text-nowrap">Greek Salad</h5>
                                    <p className="card-title col-6 text-nowrap">$ Price</p>
                                </div>
                                <p className="card-text">
                                    The famous greek salad of crispy
                                    lettuce, peppers, olives and our
                                    Chicago style feta cheese, garnished
                                    with crunchy garlic and rosemary croutons.
                                </p>
                                <button className="btn btn-primary transparent-bg col-12">
                                    Order a Delivery
                                    <span class="delivery-icon">&#x1F69A;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card h-100">
                            <img src={ReactLogo} alt="React Logo" className="card-img-top"/>
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div className="row d-flex justify-content-between align-items-center">
                                    <h5 className="card-title col-6 text-nowrap">Bruchetta</h5>
                                    <p className="card-title col-6 text-nowrap">$ Price</p>
                                </div>
                                <p className="card-text">
                                    Our Bruschetta is made from grilled bread
                                    that has been smeared with garlic and seasoned
                                    with salt and olive oil.
                                </p>
                                <button className="btn btn-primary transparent-bg col-12">
                                    Order a Delivery
                                    <span class="delivery-icon">&#x1F69A;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="card h-100">
                            <img src={image3} alt="Card" className="card-img-top"/>
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div className="row d-flex justify-content-between align-items-center">
                                    <h5 className="card-title col-6 text-nowrap">Lemon Dessert</h5>
                                    <p className="card-title col-6 text-nowrap">$ Price</p>
                                </div>
                                <p className="card-text">
                                    This comes straight from grandmas recipe book,
                                    every last ingredient has been sourced
                                    and is as authentic as can be imagined.
                                </p>
                                <button className="btn btn-primary transparent-bg col-12">
                                    Order a Delivery
                                    <span class="delivery-icon">&#x1F69A;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main;