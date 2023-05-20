import React from "react";
import logo from "../assets/logo.avif";
import {
  FaBeer,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white">
      <div>
        <img className="w-20 h-20 rounded-full" src={logo} alt="" />
        <p>
          ZooZooToys
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Animal Kingdom</span>
        <input
          type="text"
          placeholder="Type Your Email"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <div className="flex gap-4 text-2xl text-white">
          <FaFacebook />
          <FaInstagram />
          <FaGithub />
          <FaTwitter />
        </div>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
