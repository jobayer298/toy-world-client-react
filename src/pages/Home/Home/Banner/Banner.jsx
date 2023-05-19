import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
      <div 
        className="hero min-h-screen banner-img"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">World Animal Day</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi some text.
            </p>
            <button className="btn btn-secondary btn-outline">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;