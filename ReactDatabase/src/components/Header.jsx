// import { APP_TITLE } from "../globals/global";
import { Link } from "react-router-dom";

import "./Header.css"
import logo from "../assets/logo.svg";

function Header() {
    return (
    
        // <!-- [1] Header & Navigation (GLOBAL)  -->
        <header>
            <nav>
                <img src={logo} className="ona-film-logo" alt="uae-flag-logo" />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favourites">Favourites</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/movie/1">Movie</Link></li>
                </ul>
            </nav>

            {/* <!-- [1.1] Hamburger Menu  --> */}
                {/* <!-- Codepen Link: https://codepen.io/ainalem/pen/LJYRxz --> */}
                <svg id="hamburger-menu" className="ham hamRotate ham8" viewBox="0 0 100 100" width="60" onClick={() => this.classList.toggle('active')}>
                    <path className="line top" d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
                    <path className="line middle" d="m 30,50 h 40" />
                    <path className="line bottom" d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
                </svg>


            {/* <!-- [1.2] Overlay (w/ Hamburger Onclick)  --> */}
            <div className="overlay" id="menuOverlay">
                <div className="overlay-content">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favourites">Favourites</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/movie/1">Movie</Link></li>
                  </ul>
                </div>
            </div>

        </header>
        
    )
}
export default Header;