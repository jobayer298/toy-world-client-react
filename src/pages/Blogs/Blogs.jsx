import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {
    useTitle("Blogs")
    return (
      <div className="w-1/2 mx-auto my-7 ">
        <div className="mt-4">
          <h3 className="font-bold text-2xl text-indigo-500">
            1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h3>
          <p>ans:</p>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-2xl text-indigo-500">
            2. Compare SQL and NoSQL databases?
          </h3>
          <p>ans:</p>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-2xl text-indigo-500">
            3. What is express js? What is Nest JS (google it)?
          </h3>
          <p>ans:</p>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-2xl text-indigo-500">
            4. What is MongoDB aggregate and how does it work (google it)?
          </h3>
          <p>ans:</p>
        </div>
      </div>
    );
};

export default Blogs;