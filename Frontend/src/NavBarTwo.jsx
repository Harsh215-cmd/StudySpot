import { Link } from "react-router-dom"
import LogoImg from "../images/StudySpot.png"
const NavbarTwo = () => {

    const Unlogged = () =>{
        alert("please Register or Log-in First");
    }

  return (
    <>
      <nav>
        <div className="collageLogo">
          <img src={LogoImg} alt="" />
          <Link>StudySpot</Link>
        </div>
        <div className="navigation">
          <Link to="/">Home</Link>
          <Link onClick={Unlogged}>Classroom</Link>
          <Link onClick={Unlogged}>Library</Link>
          <Link onClick={Unlogged}><i className="bi bi-bell"></i></Link>
          <Link to="/register">Register</Link>
          <Link to="/admin-login">Admin</Link>
        </div>
      </nav>
    </>
  )
}
export default NavbarTwo