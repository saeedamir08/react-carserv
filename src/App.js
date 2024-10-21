import React, { useState } from "react";
import Header from "./components/Header";
import Service from "./components/Service";
import About from "./components/About";
import Booking from "./components/Booking";
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutReadMore from "./components/AboutReadMore";
import './css/style.css';
import './css/bootstrap.min.css';
import './lib/animate/animate.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import './lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function App() {
    const [showComponentA, setShowAbout] = useState(true);

    // Function to show ComponentB (on "Read More" click)
    const handleReadMore = () => {
        setShowAbout(false);
    };

    // Function to show ComponentA (on "Exit" click)
    const handleExit = () => {
        setShowAbout(true);
    };
    
    return (

        <>
            <Header />
            {showComponentA ? (
                // Show Component A by default
                <About onReadMore={handleReadMore} />
            ) : (
                // Show Component B when "Read More" is clicked
                <AboutReadMore onExit={handleExit} />
            )}
            <Service />
            <Booking />
            <Contact/>
            <Footer />
        </>
    );
}

export default App;
