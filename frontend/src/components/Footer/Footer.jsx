import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="footer-content-left-logo">
            <img src={assets.logo} alt="" />
          </div>
          <p>
            Welcome to our food delivery service. We are committed to providing you with the best dining experience, offering a wide variety of delicious dishes delivered right to your doorstep. Our mission is to satisfy your cravings and elevate your dining experience.
          </p>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
          <li>
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Home
          </Link>
          </li>
            <li>
              <a href="#explore-menu">Menu</a>
            </li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+94-071-2345678</li>
            <li>contact@fastfeast.com</li>
          </ul>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ FastFeast.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;