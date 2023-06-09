import React, { useEffect, useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
import useTitle from "../../Hooks/useTitle";

const AllToys = () => {
  useTitle("allToys");
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {
    fetch("https://toy-server-sooty.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleSearch = () => {
    fetch(`https://toy-server-sooty.vercel.app/toySearch/${searchText}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Spinner></Spinner>;
  }
  console.log(toys);

  return (
    <div className="text-center font-bold text-4xl my-5 container mx-auto">
      <h2>All toys</h2>
      <div className="overflow-x-auto my-7">
        <div className="mb-7 flex gap-5 mx-auto w-full md:w-1/2 ">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search here"
            className="input input-bordered w-full max-w-xs "
          />
          <button onClick={handleSearch} className="btn btn-primary">
            Search
          </button>
        </div>
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
                  <Link to={`/toyDetails/${toy._id}`}>
                    <button className="btn btn-primary btn-xs">
                      View Details
                    </button>
                  </Link>
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
