import footImg from "../images/StudySpot.png"
import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <>
            <section className="footer-section">
                <footer>
                    <div className="div1">
                        <aside>
                            <img src={footImg} alt="" />
                            <span className="footCaption">
                                <h2>StudySpot</h2> <br />
                                <p>Empowering Education, <br /> Everywhere.</p>
                            </span>
                        </aside>
                    </div>
                    <div className="div2">
                        <h3>Quick Links</h3> <br />
                        <ul>
                            <li><i className="bi bi-person-circle"> </i><Link to="/"> Register</Link></li>
                            <li><i className="bi bi-book"> </i><Link to="/"> Library</Link></li>
                            <li><i className="bi bi-cast"> </i><Link to="/"> Classroom</Link></li>
                        </ul>
                    </div>
                    <div className="div4">
                        <h3>Social</h3> <br />
                        <ul>
                            <li><i className="bi bi-linkedin"></i> <Link to="/"> Linkdin</Link></li>
                            <li><i className="bi bi-info-square"></i> <Link to="/">Indeed</Link></li>
                            <li><i className="bi bi-youtube"></i> <Link to="/"> Youtube</Link></li>
                        </ul>
                    </div>
                    <div className="div3">
                        <h3>Contact</h3> <br />
                        <ul>
                            <li><i className="bi bi-envelope"></i> <Link to="/"> StudySpot@gmail.com</Link></li>
                            <li><i className="bi bi-telephone"></i> <Link to="/"> +91-7878545421</Link></li>
                            <li><i className="bi bi-ui-checks"></i> <Link to="/"> Contact Form</Link></li>
                        </ul>
                    </div>
                    <br />
                </footer>
            </section>
        </>
    )
}
export default Footer