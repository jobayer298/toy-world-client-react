import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.avif";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () =>{
    logout()
      .then()
      .catch((error) => {
        console.log(error);
      });
  }
  const menu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/all-toys">All toys</Link>
      </li>
      {user && (
        <>
          <li>
            <Link to="/my-toys">My toys</Link>
          </li>
          <li>
            <Link to="/add-toy">Add a toy</Link>
          </li>
        </>
      )}
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );

  return (
    <div className=" bg-slate-100 ">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={logo} />
              </div>
            </div>
            <Link className="text-3xl font-bold" to="/">
              ZooZooToys
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>

        <div className="navbar-end flex gap-3">
          {user ? (
            <div>
              {user && (
                <div className="flex items-center gap-4">
                  {/* <p>{user?.displayName}</p> */}
                  <div
                    className="tooltip tooltip-left"
                    data-tip={user?.displayName}
                  >
                    <img
                      className="  w-[50px] h-[50px] rounded-full "
                      src={user?.photoURL}
                      alt=""
                    />
                  </div>
                  <button
                    onClick={handleLogout}
                    className="btn btn-secondary btn-outline"
                  >
                    LogOut
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button className="btn btn-secondary btn-outline">
                <Link to="/register">Register</Link>
              </button>
              <button className="btn btn-secondary btn-outline">
                <Link to="/login">Login</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
