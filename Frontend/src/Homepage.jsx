import Branch from "./Branch"
import Feedback from "./Feedback"
import Footer from "./Footer"
import HomeImg from "../images/ForHome.png"
import { useEffect, useState } from "react"
import axios from "axios"
import NavbarOne from "./NavbarOne"

const Homepage = () => {
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

  return (
    <>
    <NavbarOne/>
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
      <Branch />
      <Feedback/>
      <Footer/>
    </>
  )
}
export default Homepage