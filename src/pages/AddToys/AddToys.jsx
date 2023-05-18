import React from "react";
import Swal from "sweetalert2";

const AddToys = () => {
    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const price = form.price.value;
        const rating = form.rating.value; 
        const quantity = form.quantity.value; 
        const select = form.select.value
        const description = form.description.value; 
        const info = {
          toyName,
          sellerName,
          price,
          rating,
          quantity,
          description,
          select,
        };
        console.log(info);
        fetch("http://localhost:5000/allToys", {
            method: "POST",
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => {
            Swal.fire({
              icon: "success",
              text: "added successful!",
            });
            console.log(data);
        })
        
    }
  return (
    <div className=" my-5 container mx-auto">
      <h2 className="font-bold text-center  text-4xl">Add toys</h2>
      <form onSubmit={handleSubmit} className="md:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="URL"
            name="photo"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Toy name</span>
          </label>
          <input
            type="text"
            placeholder="Toy name"
            name="toyName"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller name</span>
          </label>
          <input
            type="text"
            placeholder="Seller name"
            name="sellerName"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Email</span>
          </label>
          <input
            type="email"
            placeholder="Seller Email"
            name="email"
            className="input input-bordered"
          />
        </div>
        <select name="select" className="select select-bordered w-full ">
          <option disabled selected>
            Sub Category
          </option>
          <option>Horse</option>
          <option>Lion</option>
          <option>Cat</option>
          <option>Mouse</option>
          <option>Dog</option>
        </select>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            placeholder="price"
            name="price"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Ratings</span>
          </label>
          <input
            type="text"
            placeholder="rating"
            name="rating"
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
          />
        </div>
        <div className="form-control mt-2">
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Description"
            name="description"
          ></textarea>
        </div>
        <button className="btn btn-primary btn-block mt-3">Add Toy</button>
      </form>
    </div>
  );
};

export default AddToys;
