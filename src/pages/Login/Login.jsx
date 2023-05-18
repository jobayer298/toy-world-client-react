import React, { useContext } from 'react';
import img from '../../assets/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
        .then(result =>{
          console.log(result.user);
          Swal.fire({
            icon: "success",
            text: "Login successful!",
          });
          navigate(from, { replace: true });
          
        })
        .catch(err =>{
          console.log(err.message);
        })

    }
    return (
      <div className="hero py-14 ">
        <div className="hero-content grid grid-cols-1 md:grid-cols-2">
          <div className="text-center ">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                Already have an account?{" "}
                <Link className="font-bold underline" to="/register">
                  register
                </Link>
              </p>
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
    );
};

export default Login;