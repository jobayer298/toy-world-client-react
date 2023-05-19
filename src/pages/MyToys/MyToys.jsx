import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    const url = `http://localhost:5000/toys?email=${user.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setMyToys(data);
        })
    }, [])
    return (
      <div className="text-center font-bold text-4xl my-5 container mx-auto">
        <h2>My toys</h2>
        <div className="overflow-x-auto my-7">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Seller</th>
                <th>Email</th>
                <th>Toy Name</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myToys.map((toy, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{toy.sellerName}</td>
                  <td>{toy.email}</td>
                  <td>{toy.toyName}</td>
                  <td>{toy.select}</td>
                  <td>${toy.price}</td>
                  <td>{toy.quantity}</td>
                  <td className='flex gap-2'>
                    <button className="btn btn-xs btn-success">Update</button>
                    <button className="btn btn-xs btn-error">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyToys;