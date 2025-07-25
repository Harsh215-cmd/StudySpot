import { useState } from "react"
import { useNavigate } from "react-router-dom";
import adminpic from "../images/adminpic.png"
import NavbarTwo from "./NavBarTwo";

const AdminLogIn = () =>{
    const navigate = useNavigate();
    const[UserName,setUserName]=useState();
    const[Password,setPassword]=useState();
    const AdminLogIn = () =>{
        if(UserName!=="Root" || Password!=="Root"){
            alert("Wrong Username And PassWord")
        }
        else{
            alert("Log In Successfully");
            navigate("/admin-dashboard")
        }
    }
    return(
        <>
        <NavbarTwo/>
        <section className="admin-login-back">
         <div className="admin-login-section">
          <div>
            <form onSubmit={AdminLogIn}>
                <h1>Admin Login</h1> <br />
                <input type="text" placeholder="UserName Root" value={UserName} onChange={(e)=>{setUserName(e.target.value)}}/> <br /> <br />
                <input type="text" placeholder="Password Root" value={Password} onChange={(e)=>{setPassword(e.target.value)}}/> <br /> <br />
                <button>Log-in</button>
            </form>
          </div>
          <div><img src={adminpic} alt="" /></div>
         </div>
        </section>
        </>
    )
}
export default AdminLogIn