import React, { useState } from 'react';
import '../pages/Login.css';
import "../index.css";

import logo from "../assets/logo.svg";
import Google from '../assets/Google.svg';
import Facebook from '../assets/Facebook.svg';
import Twitter from '../assets/TwitterX.svg';
import EmailIcon from "../assets/0EmailIcon.svg";
import PassIcon from "../assets/0PasswordIcon.svg";


const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'Randy' && password === 'frogsarecool') {
      onLogin(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <main className="MainLC">
      
        <section className="MainLC2">
          <img src={logo} alt="OnaLogo" className="OnaLogo2" />
          <h1>Welcome Back!</h1>
          <p className="account">Log Into Your Account Below</p>
        </section>

        <section className="FormContainer">

          
          
          <form onSubmit={handleLogin} className='FormStandalone'>

            <article className='FormSubCon1'>
              <img src={EmailIcon} alt="FormIcon" className="FormIcon" />
              <input
                type="text"
                placeholder="Username:"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field"/>
            </article>
            
            <article className='FormSubCon2'>
              <img src={PassIcon} alt="FormIcon" className="FormIcon" />
              <input
                type="password"
                placeholder="Enter Password:"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"/>
            </article>

            <button type="submit" className="LoginButton2">Login</button>
            <p>Forgot Your&nbsp;<span className='Highlight'>Password?</span></p>

          </form>

          <br/><br/> {/* Extra Spaces */}

          <article className='EndContainer'>

              <p>Sign In With:</p>
                <div className="LoginSocials">
                  <img src={Google} alt="GoogleIcon" className="SvgIcons" />
                  <img src={Facebook} alt="FacebookIcon" className="SvgIcons" />
                  <img src={Twitter} alt="TwitterXIcon" className="SvgIcons" />
                </div>
              <p className='Create'><span className='Highlight'>Create</span>&nbsp;An Account</p>

          </article>

        </section>

    </main>
  );
};

export default LoginPage;