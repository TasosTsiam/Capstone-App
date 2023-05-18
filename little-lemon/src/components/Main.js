import React from 'react';
import ReactLogo from '../bruchetta.svg';
import image1 from '../greeksalad.jpg';
import image3 from '../lemondessert.jpg';
import image4 from '../restauranfood.jpg';
import image5 from '../customer1.jpg';
import image6 from '../customer2.jpg';
import image7 from '../customer3.jpg';
import image8 from '../customer4.jpg';


function Main() {
    return (
        <div>
            <section className="py-5 main_comp_section1">
                <div className="container">
                    <div className="row d-flex justify-content-between align-items-center s1-row-container">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 s1-card-container">
                            <h1 className="text-nowrap">Little Lemon</h1>
                            <h3 className="text-nowrap">Chicago</h3>
                            <p className="card-text text-wrap" style={{width: "15rem"}}>
                                We are a family owned
                                Mediterranean restaurant,
                                focused on traditional
                                recipes served with a modern
                                twist.
                            </p>
                            <a href="../../public/index.html" className="btn btn-primary col-8 col-sm-6 col-md-6 col-lg-4 text-nowrap">Reserve a Table</a>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-4 s1-img-container" style={{ width: '380px', height: '380px'}}>
                            <img src={image4} alt="Card" className="s1-img" style={{ width: '130%', height: '130%', objectFit: 'cover' }}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 main_comp_section2">
                <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                        <h2 className="col-12 col-md-6 col-lg-6 text-nowrap">This week's specials!</h2>
                        <a href="../../public/index.html" className="btn btn-primary col-12 col-sm-3 col-md-2 col-lg-2 text-nowrap">Online Menu</a>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="card h-100">
                                <img src={image1} alt="Card" className="card-img-top"/>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div className="row">
                                        <h5 className="col-12 col-sm-6 col-md-6 col-lg-6 card-title text-nowrap">Greek Salad</h5>
                                        <p className="col-12 col-sm-6 col-md-6 col-lg-6 card_price text-nowrap text-end">$ 12.99</p>
                                    </div>
                                    <p className="card-text">
                                        The famous greek salad of crispy lettuce, peppers, olives and our
                                        Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                                    </p>
                                    <button className="btn btn-primary col-12">
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
                                    <div className="row">
                                        <h5 className="col-12 col-sm-6 col-md-6 col-lg-6 card-title text-nowrap">Bruchetta</h5>
                                        <p className="col-12 col-sm-6 col-md-6 col-lg-6 card_price text-nowrap text-end">$ 5.99</p>
                                    </div>
                                    <p className="card-text">
                                        Our Bruschetta is made from grilled bread
                                        that has been smeared with garlic and seasoned
                                        with salt and olive oil.
                                    </p>
                                    <button className="btn btn-primary col-12">
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
                                    <div className="row">
                                        <h5 className="col-12 col-sm-6 col-md-6 col-lg-6 card-title text-nowrap">Lemon Dessert</h5>
                                        <p className="col-12 col-sm-6 col-md-6 col-lg-6 card_price text-nowrap text-end">$ 5.00</p>
                                    </div>
                                    <p className="card-text">
                                        This comes straight from grandmas recipe book,
                                        every last ingredient has been sourced
                                        and is as authentic as can be imagined.
                                    </p>
                                    <button className="btn btn-primary col-12">
                                        Order a Delivery
                                        <span class="delivery-icon">&#x1F69A;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 main_comp_section3">
                <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="card col-12 col-sm-6 col-md-3 col-lg-3">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <span className="rating-number">
                                        <i className="fas fa-star"></i> 4.5
                                    </span>
                                </h5>
                                <div className="row d-flex justify-content-between align-items-center">
                                    <img src={image5} className="col-6 customer-image" alt="Customer"/>
                                    <span className="col-6 customer-name">John Doe</span>
                                </div>
                                <p className="card-text">Great food and atmosphere. Highly recommend!</p>
                            </div>
                        </div>
                        <div className="card col-12 col-sm-6 col-md-3 col-lg-3">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <span className="rating-number">
                                        <i className="fas fa-star"></i> 4.5
                                    </span>
                                </h5>
                                <div className="row d-flex justify-content-between align-items-center">
                                    <img src={image6} className="col-6 customer-image" alt="Customer"/>
                                    <span className="col-6 customer-name">John Doe</span>
                                </div>
                                <p className="card-text">Great food and atmosphere. Highly recommend!</p>
                            </div>
                        </div>
                        <div className="card col-12 col-sm-6 col-md-3 col-lg-3">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <span className="rating-number">
                                        <i className="fas fa-star"></i> 4.5
                                    </span>
                                </h5>
                                <div className="row d-flex justify-content-between align-items-center">
                                    <img src={image7} className="col-6 customer-image" alt="Customer"/>
                                    <span className="col-6 customer-name">John Doe</span>
                                </div>
                                <p className="card-text">Great food and atmosphere. Highly recommend!</p>
                            </div>
                        </div>
                        <div className="card col-12 col-sm-6 col-md-3 col-lg-3">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <span className="rating-number">
                                        <i className="fas fa-star"></i> 4.5
                                    </span>
                                </h5>
                                <div className="row d-flex justify-content-between align-items-center">
                                    <img src={image8} className="col-6 customer-image" alt="Customer"/>
                                    <span className="col-6 customer-name">John Doe</span>
                                </div>
                                <p className="card-text">Great food and atmosphere. Highly recommend!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;