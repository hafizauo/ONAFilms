import React, { useState } from 'react';
import '../pages/Login.css';
import "../index.css";

import logo from "../assets/logo.svg";
// import Google from '../assets/Google.svg';
// import Facebook from '../assets/Facebook.svg';
// import Twitter from '../assets/TwitterX.svg'


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
          <h1>Welcome back!</h1>
          <p className="account">Log Into Your Account Below</p>
        </section>

        <section className="FormContainer">

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username:"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"/>

            <input
              type="password"
              placeholder="Enter Password:"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"/>

            <p>Forgot Your Password?</p>

            <button type="submit" className="login-button">Login</button>

          </form>

          <article className='EndContainer'>

              <p>Sign In With:</p>
                <div className="LoginSocials">
                  {/* <img src={Google} alt="OnaLogo" className="SvgIcons" />
                  <img src={Facebook} alt="OnaLogo" className="SvgIcons" />
                  <img src={Twitter} alt="OnaLogo" className="SvgIcons" /> */}
                </div>
              <p className='create'>Create An Account</p>

          </article>

        </section>

    </main>
  );
};

export default LoginPage;