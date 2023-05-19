import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigation } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
import useTitle from "../../Hooks/useTitle";

const MyToys = () => {
  useTitle("myToys")
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Spinner></Spinner>;
  }
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const url = `http://localhost:5000/myToys?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = myToys.filter((m) => m._id !== id);
              setMyToys(remaining);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
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
              {/* <th>Description</th> */}
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
                {/* <td className="overflow-y-auto">{toy.description}</td> */}
                <td className="flex gap-2">
                  <Link to={`/updateToy/${toy._id}`}>
                    <button className="btn btn-xs btn-success">Update</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(toy._id)}
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </button>
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
