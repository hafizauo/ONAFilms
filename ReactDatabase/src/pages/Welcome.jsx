import React, { useState } from "react";
import "./Welcome.css";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import "../index.css";


const Welcome = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <main className="MainC">
      
    
      <section className="WelcomeMain">

          <article className="WelcomeMain2">
            <img src={logo} alt="OnaFilms-Logo" className="OnaLogo" />
          </article>


          <article className="WelcomeMain3">

              <h1>Welcome To</h1>
              <h2>O.N.A&sup2; Films</h2>
              <p>A Place To Find Your Favorite Movies Online!</p>

              <div className="ButtonContainer">
                <button className="LoginButton" onClick={handleLoginClick}>Log In</button>
                <button className="SignButton" onClick={handleLoginClick}>Sign up</button>
              </div>

          </article>

      </section>

    

    </main>
  );
};

export default Welcome;
