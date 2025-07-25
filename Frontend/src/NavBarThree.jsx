import { Link } from "react-router-dom"
import LogoImg from "../images/StudySpot.png"
const NavbarThree = () => {

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
          <Link to="/">Admin Log-Out</Link>
        </div>
      </nav>
    </>
  )
}
export default NavbarThree