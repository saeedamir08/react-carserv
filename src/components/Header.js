import React, { useState } from 'react';

import bgcarousel1 from "../img/carousel-bg-1.jpg";
import carousel1 from "../img/carousel-1.png";
import bgcarousel2 from "../img/carousel-bg-2.jpg";
import carousel2 from "../img/carousel-2.png";

const Header = () => {
    // Define the active link state
    const [activeLink, setActiveLink] = useState('home');

    // Function to handle click and set active state
    const handleSetActive = (link) => {
        setActiveLink(link);
    };

    return (
        <div id="header">
            <div className="navbar navbar-expand-lg bg-white navbar-light shadow p-0" style={{ position: 'fixed', width: '100%', zIndex: '1000' }}>
                <a href="#header" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 text-primary"><i className="fa fa-car me-3"></i>CarServ</h2>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <a
                            href="#header"
                            className={`nav-item nav-link ${activeLink === 'home' ? 'active' : ''}`}
                            onClick={() => handleSetActive('home')}
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className={`nav-item nav-link ${activeLink === 'about' ? 'active' : ''}`}
                            onClick={() => handleSetActive('about')}
                        >
                            About
                        </a>
                        <a
                            href="#service"
                            className={`nav-item nav-link ${activeLink === 'services' ? 'active' : ''}`}
                            onClick={() => handleSetActive('services')}
                        >
                            Services
                        </a>
                        <a
                            href="#booking"
                            className={`nav-item nav-link ${activeLink === 'booking' ? 'active' : ''}`}
                            onClick={() => handleSetActive('booking')}
                        >
                            Booking
                        </a>
                        <a
                            href="#contact"
                            className={`nav-item nav-link ${activeLink === 'contact' ? 'active' : ''}`}
                            onClick={() => handleSetActive('contact')}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0 mb-5" id="slider">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src={bgcarousel1} alt="Image"/>
                            <div className="carousel-caption d-flex align-items-center">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                                        <div className="col-10 col-lg-7 text-center text-lg-start">
                                            <h6 className="text-white text-uppercase mb-3 animated slideInDown">// Car
                                                Servicing //</h6>
                                            <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified
                                                Car Repair Service Center</h1>
                                            <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">Learn
                                                More<i className="fa fa-arrow-right ms-3"></i></a>
                                        </div>
                                        <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                            <img className="img-fluid" src={carousel1}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src={bgcarousel2} alt="Image"/>
                            <div className="carousel-caption d-flex align-items-center">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                                        <div className="col-10 col-lg-7 text-center text-lg-start">
                                            <h6 className="text-white text-uppercase mb-3 animated slideInDown">// Car
                                                Servicing //</h6>
                                            <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified
                                                Car Wash Service Center</h1>
                                            <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">Learn
                                                More<i className="fa fa-arrow-right ms-3"></i></a>
                                        </div>
                                        <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                            <img className="img-fluid" src={carousel2} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
