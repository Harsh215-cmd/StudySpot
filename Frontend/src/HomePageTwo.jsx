import HomeImg from "../images/ForHome.png"
import feedBackImg from "../images/Contact.png"
import img1 from "../images/1stYear.jpg";
import img2 from "../images/3rdYear.png";
import img3 from "../images/4thYear.png";
import footImg from "../images/StudySpot.png"
import { useEffect, useState } from "react"
import axios from "axios"
import NavbarTwo from "./NavBarTwo"
import { Link } from "react-router-dom";
import Footer from "./Footer";

const HomePageTwo = () => {
    //  Stuents Count
    const [studentlist, setStudentList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/auth/studentlist")
            .then((res) => {
                setStudentList(res.data.data);
            })
            .catch((err) => {
                console.error("Something Wrong:", err.message);
            });
    }, []);

    // Book List 
    const [booklist, setbooklist] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/library/booklist")
            .then((res) => {
                setbooklist(res.data.data);
            }).catch((err) => {
                console.error("Something wrong", err.message)
            });
    }, [])

    const Unlogged = () => {
        alert("please Register or Log-in First");
    }

    return (
        <>
            <NavbarTwo />
            <section className="home-back-section">
                <div className="home-section">
                    <div className="greet">
                        <div className="home-lines">
                            <h1>Learn. Access. Succeed.</h1>
                            <samp>StudySpot bridges the gap between students and resources with instant access to notes, assignments, and exam materials.</samp>
                            <div className="count">
                                <div className="student-count">
                                    <h3>Students Connected  With Us</h3> <br />
                                    <samp>{studentlist.length}+</samp>
                                </div>
                                <div className="material-count">
                                    <h3>Study Material Pdf's Available </h3> <br />
                                    <samp>{booklist.length}+</samp>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-image">
                        <img src={HomeImg} alt="" />
                    </div>
                </div>
            </section>
            <section className="branch-section-back">
                <div className="branch-section">
                    <div>
                        <figure>
                            <img src={img1} alt="" />
                            <figcaption>
                                <h3>Computer Engeneering</h3>
                                <Link onClick={Unlogged}>Explore More</Link>
                            </figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure>
                            <img src={img2} alt="" />
                            <figcaption>
                                <h3>Information Technology</h3>
                                <Link onClick={Unlogged} >Explore More</Link>
                            </figcaption>
                        </figure>
                    </div>
                    <div>
                        <figure>
                            <img src={img3} alt="" />
                            <figcaption>
                                <h3>Electronics </h3>
                                <Link onClick={Unlogged} >Explore More</Link>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>
            <section className="feedback-section-back">
                <div className="feedback-section">
                    <div>
                        <form className="feedback-form">
                            <label htmlFor="">Enter Your Name :</label> <br />
                            <input type="text" onChange={Unlogged} /> <br /> <br />
                            <div className="selection">
                                <div>
                                    <label htmlFor="branch">Select Your Branch:</label> <br />
                                    <select name="branch" id="branch" onChange={Unlogged} >
                                        <option value="" disabled>Select One</option>
                                        <option value="Computer Engineering">Computer Engineering</option>
                                        <option value="Information Technology">Information Technology</option>
                                        <option value="Electronics & Telecommunication">Electronics & Telecommunication</option>
                                    </select>
                                </div>

                                <br /><br />

                                <div>
                                    <label htmlFor="year">Select Your Year:</label> <br />
                                    <select name="year" id="year" onChange={Unlogged}>
                                        <option value="" disabled>Select One</option>
                                        <option value="First Year">First Year</option>
                                        <option value="Second Year">Second Year</option>
                                        <option value="Third Year">Third Year</option>
                                        <option value="Fourth Year">Fourth Year</option>
                                    </select>
                                </div>
                            </div>
                            <br />
                            <label htmlFor="">Enter Your Message :</label><br />
                            <textarea placeholder="Enter your message here .." onChange={Unlogged}></textarea> <br /> <br />
                            <button type="submit" onClick={Unlogged}>Send</button>
                        </form>
                    </div>
                    <div>
                        <img src={feedBackImg} alt="" />
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default HomePageTwo 
