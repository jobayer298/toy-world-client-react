import React from 'react';
import './Touch.css'

const Touch = () => {
    return (
      <div className="background-img">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-center font-bold text-white mb-6 text-4xl">
            GET IN TOUCH
          </h1>
          <div className="md:w-1/2 mx-auto">
            <div className="form-group mb-6">
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full mb-4 "
              />
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-group mb-6">
              <textarea
                className="textarea textarea-bordered textarea-lg w-full"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="form-group form-check text-center mb-6"></div>
            <button
              className="
              w-full
              px-6
              py-4
              btn btn-secondary 
              font-medium"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
};

export default Touch;