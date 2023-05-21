import React from 'react';
import { Link, useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import useTitle from '../../Hooks/useTitle';

const ToyDetails = () => {
  useTitle("toyDetails")
    
    const back = useNavigate()
    const handleBack = () =>{
      back(-1)
    }
    const data = useLoaderData()
    console.log(data);
    const navigation = useNavigation();
    if (navigation.state === "loading") {
      return <Spinner></Spinner>;
    }
    return (
      <div className="container mx-auto">
        <h2 className="text-center font-bold text-4xl my-4">details</h2>
        <div className="hero  mb-5 ">
          <div className=" md:flex items-center px-5 gap-7">
            <img src={data.photo} className="w-full md:max-w-sm rounded-lg shadow-2xl" />
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold">{data.toyName}</h1>
              <p className="">{data.description}</p>
              <p>Seller Name: {data.sellerName}</p>
              <p>Seller Email: {data.email}</p>
              <p>price: ${data.price}</p>
              <p>Quantity: {data.quantity}</p>
              <p>Ratings: {data.rating}</p>
              <Link>
                <button onClick={handleBack} className="btn btn-primary px-8">
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ToyDetails;