import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import Gallary from '../Gallary/Gallary';
import AOS from "aos";
import "aos/dist/aos.css";
import useTitle from '../../../Hooks/useTitle';

const Home = () => {
    useTitle("home")
    useEffect(() => {
      AOS.init();
    }, []);
    return (
        <div>
            <Banner></Banner>
            <Gallary></Gallary>
        </div>
    );
};

export default Home;