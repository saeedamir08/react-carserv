import {React, useState} from 'react'
import Header from "./components/Header";
import About from "./components/About";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import Service from "./components/Service";
import Contact from "./components/Contact";
import AboutReadMore from "./components/AboutReadMore";

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
