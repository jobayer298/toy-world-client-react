import React from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';

const ToyDetails = () => {
    const navigate = useNavigate()
    const navigation = useNavigation()
    if(navigation.state === 'loading'){
        return <Spinner></Spinner>
    }
    const data = useLoaderData()
    const handleNavigate = () =>{
        navigate(-1);
    }
    console.log(data);
    return (
      <div className="container mx-auto">
        <h2 className="text-center font-bold text-4xl my-4">details</h2>
        <div className="hero  mb-5 ">
          <div className="hero-content flex gap-7">
            <img src={data.photo} className="max-w-sm rounded-lg shadow-2xl" />
            <div className="space-y-2">
              <h1 className="text-5xl font-bold">{data.toyName}</h1>
              <p className="">{data.description}</p>
              <p>Seller Name: {data.sellerName}</p>
              <p>Seller Email: {data.email}</p>
              <p>price: {data.price}</p>
              <p>Quantity: {data.quantity}</p>
              <p>Ratings: {data.rating}</p>
              <button onClick={handleNavigate} className="btn btn-primary px-8">
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ToyDetails;