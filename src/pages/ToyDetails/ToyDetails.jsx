import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ToyDetails = () => {
    const navigate = useNavigate()
    const data = useLoaderData()
    const handleNavigate = () =>{
        navigate(-1);
    }
    console.log(data);
    return (
      <div className="container mx-auto">
        <h2 className="text-center font-bold text-4xl my-4">details</h2>
        <div className="hero  mb-5 ">
          <div className="hero-content flex">
            <img src={data.photo} className="max-w-sm rounded-lg shadow-2xl" />
            <div className='space-y-2'>
              <h1 className="text-5xl font-bold">{data.toyName}</h1>
              <p className="">{data.description}</p>
              <p>price: {data.price}</p>
              <p>Quantity: {data.quantity}</p>
              <button onClick={handleNavigate} className="btn btn-primary px-8">Back</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ToyDetails;