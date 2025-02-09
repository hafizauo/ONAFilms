import "./Footer.css"

function Footer() {
    return (
        <footer className="footer-container">
                         
                        <article className="footer-section">

                          <section className="footer-content">
                            <li className="f-list-heading">Navigation</li>
                            <div className="list-line"></div>
                            <li className="sub-list"><span className="bold-list">Summary:</span>&nbsp;<a href="index.html"> About Us</a></li>
                            <li className="sub-list"><span className="bold-list">Courses:</span>&nbsp;<a href="#Courses"> Our Courses</a></li>
                            <li className="sub-list"><span className="bold-list">Reviews:</span>&nbsp;<a href="#Review"> Our Clients</a></li>
                            <li className="sub-list"><span className="bold-list">Contact:</span>&nbsp;<a href="#Contact"> Contact Us</a></li>
                          </section>

                          <br />
                          
                          <section className="footer-content">
                            <li className="f-list-heading">Contact</li>
                            <div className="list-line"></div>
                            <li className="sub-list"><span className="bold-list">Phone:</span>&nbsp;+92 (302) 942-3749</li>
                            <li className="sub-list"><span className="bold-list">Email:</span>&nbsp;m.junaid9950@gmail.com</li>
                            <li className="sub-list"><span className="bold-list">Whatsapp:</span>&nbsp;+92 (332) 445-4134 </li>
                            <li className="sub-list"><span className="bold-list">Facebook:</span>&nbsp;Muhammad-Junaid</li>
                          </section>

                          <br />

                          <section className="footer-content">
                            <li className="f-list-heading">Business</li>
                            <div className="list-line"></div>
                            <li className="sub-list"><span className="bold-list">Location:</span>&nbsp;Pakistan, Lahore</li>
                            <li className="sub-list"><span className="bold-list">Postal:</span>&nbsp;55150</li>
                            
                          </section>

                        </article>

                        <div className="copyright">
                          <span>Last Updated: 24/11/2024</span>
                          <span>Site by <u>@Advance</u></span>
                        </div>     
                    
                  </footer>

    )
}

export default Footer;