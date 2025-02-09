// import { APP_TITLE } from "../globals/global";
import { Link } from "react-router-dom";
import useHamburgerMenu from "../globals/hamburgermenu";

import "./Header.css"
import logo from "../assets/logo.svg";



function Header() {
    const { isMenuOpen, toggleMenu } = useHamburgerMenu() || {};

    return (
        // <!-- [1] Header & Navigation (GLOBAL)  -->
        <header>
            <nav>
                <Link to="/">
                    <img src={logo} className="ona-film-logo" alt="uae-flag-logo" />
                </Link>

                <ul>
                    {/* <li><Link to="/">Home</Link></li> */}
                    <li><Link to="/favourites">Favourites</Link></li>
                    <li><Link to="/about">About</Link></li>
                    {/* <li><Link to="/movie/1">Movie</Link></li> */}
                </ul>

                {/* <!-- [1.1] Hamburger Menu  --> */}
                {/* <!-- Codepen Link: https://codepen.io/ainalem/pen/LJYRxz --> */}

                <svg id="hamburger-menu" className={`ham hamRotate ham4 ${isMenuOpen ? 'active' : ''}`} viewBox="0 0 100 100" width="60" onClick={toggleMenu}>
                    <path className="line top" d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
                    <path className="line bottom" d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
                </svg>


            </nav>

            

            {/* <!-- [1.2] Overlay (w/ Hamburger Onclick)  --> */}
            <div className={`overlay ${isMenuOpen ? 'active' : ''}`} id="menuOverlay">
                <div className="overlay-content">
                    <ul>
                        <li className="menu-item"><Link to="/">Home</Link></li>
                        <li className="menu-item"><Link to="/favourites">Favourites</Link></li>
                        <li className="menu-item"><Link to="/about">About</Link></li>
                        {/* <li><Link to="/movie/1">Movie</Link></li> */}
                    </ul>
                </div>
            </div>
        </header>
    );
}
export default Header;