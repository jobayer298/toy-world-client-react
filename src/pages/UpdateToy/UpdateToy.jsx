import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Swal from 'sweetalert2';
import Spinner from '../../Spinner/Spinner';
import useTitle from '../../Hooks/useTitle';

const UpdateToy = () => {
  useTitle("updateToy")
    const data = useLoaderData()
    // const navigation = useNavigation();
    // if (navigation.state === "loading") {
    //   return <Spinner></Spinner>;
    // }
    console.log(data);
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const price = parseInt(form.price.value);
        const quantity = form.quantity.value;
        const description = form.description.value;
        const info = {price, quantity, description}
        console.log(info);
        fetch(`http://localhost:5000/toys/${data._id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(info),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              icon: "success",
              text: "Updated successful!",
            });
            console.log(data);
          });
    }
    return (
      <form onSubmit={handleSubmit} className="md:w-1/2 mx-auto my-9">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            placeholder="price"
            name="price"
            defaultValue={data.price}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available quantity</span>
          </label>
          <input
            type="number"
            placeholder="quantity"
            name="quantity"
            className="input input-bordered"
            defaultValue={data.quantity}
          />
        </div>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Description"
            name="description"
            defaultValue={data.description}
          ></textarea>
        </div>
        <button className="btn btn-primary btn-block mt-3">Update Toy</button>
      </form>
    );
};

export default UpdateToy;