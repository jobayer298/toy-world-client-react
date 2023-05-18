import React from 'react';
import img from "../../assets/login.png";
import { Link } from 'react-router-dom';

const Register = () => {
     const handleSubmit = (event) => {
       event.preventDefault();
       const form = event.target;
       const name = form.name.value;
       const photo = form.photo.value;
       const email = form.email.value;
       const password = form.password.value;
       console.log(email, password, name, photo);
     };
    return (
      <div>
        <div className="hero py-14 ">
          <div className="hero-content grid grid-cols-1 md:grid-cols-2">
            <div className="text-center ">
              <img src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo URL"
                    name="photo"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <p>Already have an account? <Link className='font-bold underline' to="/login">Login</Link></p>
                <div className="divider">Or login with</div>
              </form>
              <div className="text-center mb-5">
                <button className="btn btn-circle btn-primary btn-outline">
                  G
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;