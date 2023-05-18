import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const toys = useLoaderData()
    console.log(toys);
    return (
      <div className="text-center font-bold text-4xl my-5 container mx-auto">
        <h2>All toys</h2>
        <div className="overflow-x-auto my-7">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{toy.sellerName}</td>
                  <td>{toy.toyName}</td>
                  <td>{toy.select}</td>
                  <td>${toy.price}</td>
                  <td>{toy.quantity}</td>
                  <td>
                    <button className='btn btn-primary btn-xs'>View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllToys;