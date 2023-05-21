import React from 'react';
import { Link } from 'react-router-dom';

const TabCart = ({toy}) => {
    console.log(toy);
    return (
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="h-44" src={toy.photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-slate-600 text-[17px]">Name: {toy.toyName}</h2>
          <h2 className="text-slate-600 text-[17px]">Price: ${toy.price}</h2>
          <h2 className="text-slate-700 text-[17px]">Rating: {toy.rating}</h2>
          <div className="">
            <Link to={`/toyDetails/${toy._id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default TabCart;