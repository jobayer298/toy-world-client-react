import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import Gallary from '../Gallary/Gallary';
import AOS from "aos";
import "aos/dist/aos.css";
import useTitle from '../../../Hooks/useTitle';
import About from './About/About';
import Touch from '../Touch/Touch';

const Home = () => {
    useTitle("home")
    useEffect(() => {
      AOS.init();
    }, []);
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Gallary></Gallary>
            <Touch></Touch>
        </div>
    );
};

export default Home;