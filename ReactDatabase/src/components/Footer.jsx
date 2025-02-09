import "./Footer.css"
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer-container">
                         
                        <article className="footer-section">

                          <section className="footer-content">
                            <li className="f-list-heading">Navigation</li>
                            <div className="list-line"></div>
                            <li className="sub-list"><Link to="/">Homepage</Link></li>
                            <li className="sub-list"><Link to="/favourites">Favourites</Link></li>
                            <li className="sub-list"><Link to="/about">About Us</Link></li>
                            <li className="sub-list"><Link to="/login">Login</Link></li>
                          </section>

                          <br />
                          
                          <section className="footer-content">
                            <li className="f-list-heading">Contact</li>
                            <div className="list-line"></div>
                            <li className="sub-list"><span className="bold-list">Email:</span>&nbsp;onafilms@gmail.com</li>
                            <li className="sub-list"><span className="bold-list">Phone:</span>&nbsp;+ 1 234 5678</li>
                            <li className="sub-list"><span className="bold-list">Telegram:</span>&nbsp;OnaFilms@123</li>
                            <li className="sub-list"><span className="bold-list">Facebook:</span>&nbsp;OnaFilmsFB25</li>
                          </section>

                          <br />

                          <section className="footer-content">
                            <li className="f-list-heading">Socials</li>
                            <div className="list-line"></div>
                            <li className="sub-list"><span className="bold-list">Instagram:</span><Link to="/">&nbsp;OnaFilms25</Link></li>
                            <li className="sub-list"><span className="bold-list">Facebook:</span><Link to="/">&nbsp;OnaFilmss</Link></li>
                            <li className="sub-list"><span className="bold-list">Twitter(X):</span><Link to="/">&nbsp;RealOnaFilms</Link></li>
                            <li className="sub-list"><span className="bold-list">TikTok:</span><Link to="/">&nbsp;OnaFilms</Link></li>
                          </section>

                        </article>

                        <div className="copyright">
                          <span>Last Updated: 09/02/2025</span>
                          <span>Site by <u>@BCIT-Students</u></span>
                        </div>     
                    
                  </footer>

    )
}

export default Footer;