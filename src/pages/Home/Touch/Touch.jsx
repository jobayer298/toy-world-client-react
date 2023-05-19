import React from 'react';
import './Touch.css'

const Touch = () => {
    return (
      <div className='background-img'>
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-center font-bold text-white mb-6 text-4xl">
            GET IN TOUCH
          </h1>
          <div className="md:w-1/2 mx-auto">
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput7"
                placeholder="Name"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="email"
                className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput8"
                placeholder="Email address"
              />
            </div>
            <div className="form-group mb-6">
              <textarea
                className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                id="exampleFormControlTextarea13"
                rows="3"
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