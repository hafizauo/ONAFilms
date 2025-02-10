import React, { useState } from "react";
import "./Welcome.css";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="welcome-container">
      <img src={logo} alt="logo" className="logo" />
      <h1>Welcome to</h1>
      <h2>O.N.A&sup2; Films</h2>
        <p>A place to find your favorite movies online</p>
      <div className="button-container">
        <button className="login-button" onClick={handleLoginClick}>
          Log In
        </button>
        <button className="signup-button" onClick={handleLoginClick}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Welcome;
