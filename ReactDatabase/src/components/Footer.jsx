import "./Footer.css"

function Footer() {
    return (
        <footer className="footer-container">
                         
                        <article className="footer-section">

                          <section className="footer-content">
                            <li className="f-list-heading">Navigation</li>
                            <div className="list-line"></div>
                            <li className="sub-list"><a href="index.html">Homepage</a></li>
                            <li className="sub-list"><a href="#Courses">Favourites</a></li>
                            <li className="sub-list"><a href="#Review">About Us</a></li>
                            <li className="sub-list"><a href="#Contact">Login</a></li>
                          </section>

                          <br />
                          
                          <section className="footer-content">
                            <li className="f-list-heading">Contact</li>
                            <div className="list-line"></div>
                            <li className="sub-list"><span className="bold-list">Email:</span>&nbsp;onafilms@gmail.com</li>
                            <li className="sub-list"><span className="bold-list">Phone:</span>&nbsp;+ 1 234 5678</li>
                            <li className="sub-list"><span className="bold-list">Telegram:</span>&nbsp;OnaFilms@123</li>
                            <li className="sub-list"><span className="bold-list">Facebook:</span>&nbsp;Muhammad-Junaid</li>
                          </section>

                          <br />

                          <section className="footer-content">
                            <li className="f-list-heading">Socials</li>
                            <div className="list-line"></div>
                            <li className="sub-list"><span className="bold-list">Instagram:</span><a href="index.html">&nbsp;OnaFilms25</a></li>
                            <li className="sub-list"><span className="bold-list">Facebook:</span><a href="#Courses">&nbsp;OnaFilmss</a></li>
                            <li className="sub-list"><span className="bold-list">Twitter(X):</span><a href="#Review">&nbsp;RealOnaFilms</a></li>
                            <li className="sub-list"><span className="bold-list">TikTok:</span><a href="#Contact">&nbsp;OnaFilms</a></li>
                            
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