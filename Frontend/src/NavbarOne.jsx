import { Link } from "react-router-dom"
import LogoImg from "../images/StudySpot.png"
import { useEffect, useState } from "react";
import axios from "axios";
const NavbarOne = () => {
      const [notification, setnotification] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/notification/notificationlist")
            .then((res) => {
                setnotification(res.data.data);
            }).catch((err) => {
                console.error("Something Wrong", err.message)
            });
    }, [])

  return (
    <>
      <nav>
        <div className="collageLogo">
          <img src={LogoImg} alt="" />
          <Link>StudySpot</Link>
        </div>
        <div className="navigation">
          <Link to="/home">Home</Link>
          <Link to="/classroom">Classroom</Link>
          <Link to="/library">Library</Link>
          <Link to="/notifications"><i className="bi bi-bell"></i><sup>{notification.length}</sup></Link>
          <Link to="/">Log-out</Link>
          <Link to="/admin-login">Admin</Link>
        </div>
      </nav>
    </>
  )
}
export default NavbarOne