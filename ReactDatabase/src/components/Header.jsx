import { APP_TITLE } from "../globals/global";
import { Link } from "react-router-dom";

import "./Header.css"

function Header() {
    return (
    
        <header>
            <h1>{ APP_TITLE } </h1>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favourites">Favourites</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/movie/1">Movie</Link></li>
                </ul>
            </nav>
        </header>
        
    )
}
export default Header;