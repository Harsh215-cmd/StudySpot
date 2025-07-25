import { useState } from "react";
import formImg from "../images/registration.png";
import NavbarTwo from "./NavBarTwo";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
    const navigate = useNavigate();
    const [changeForm, setchangeForm] = useState(true);

    const[name,setname]=useState("");
    const[mobile,setmobile]=useState("");
    const[mail,setmail]=useState("");
    const[password,setpassword]=useState("");

    const[logMail,setlogMail]=useState("");
    const[logPass,SetlogPass]=useState("");


    const register = (event) =>{
        event.preventDefault();
        const UserInfo = {
            StudentName:name,
            StudentNumber:mobile,
            StudentMail:mail,
            StudentPass:password
        }
        // console.log(UserInfo);
        // console.log(UserInfo);
        axios.post("http://localhost:5000/auth/register/",UserInfo)
        .then((res) => {
          alert("Registration Successfull") 
          navigate("/home");
        }).catch((err) => {
             alert("Registration Error") 
        });
    }

    const Login = (event) =>{
        event.preventDefault();
        const LoginInfo = {
            StudentMail:logMail,
            StudentPass:logPass
        }
        console.log(LoginInfo);
        axios.post("http://localhost:5000/auth/login/",LoginInfo)
        .then((res) => {
          alert("Log-in Successfull");
          navigate("/home");   
        }).catch((err) => {
             alert("Log-in Error") 
        });
    }

    const ChangeRegister = (event) => {
        event.preventDefault();
        setchangeForm(true);
    };

    const ChangeLogin = (event) => {
        event.preventDefault();
        setchangeForm(false);
    };

    return (
        <>
        <NavbarTwo/>
            <section className="registartion-section-back">
                <div className="registartion-section">
                    <div>
                        <img src={formImg} alt="registration" />
                    </div>

                    {changeForm ? (
                        <div>
                            <form className="registartion-from" onSubmit={register}>
                                <label>Enter Your Name :</label> <br />
                                <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/> <br /> <br />

                                <label>Enter Your Mobile :</label> <br />
                                <input type="number" value={mobile} onChange={(e)=>{setmobile(e.target.value)}} /> <br /> <br />

                                <label>Enter Your Email :</label> <br />
                                <input type="email" value={mail} onChange={(e)=>{setmail(e.target.value)}}/> <br /> <br />

                                <label>Enter Password :</label> <br />
                                <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/> <br /> <br />

                                <button type="submit">Register</button>
                                <br /> <br />

                                <span>
                                    Already registered?{" "}
                                    <button className="change-btn" onClick={ChangeLogin}>
                                        Log-In
                                    </button>
                                </span>
                            </form>
                        </div>
                    ) : (
                        <div>
                            <form className="log-in-form" onSubmit={Login}>
                                <label>Enter Your Email :</label> <br />
                                <input type="email" value={logMail} onChange={(e)=>{setlogMail(e.target.value)}}/> <br /> <br />

                                <label>Enter Password :</label> <br />
                                <input type="password" value={logPass} onChange={(e)=>{SetlogPass(e.target.value)}}/> <br /> <br />

                                <button type="submit">Log-in</button>
                                <br /> <br />

                                <span>
                                    Don't have an account?{" "}
                                    <button className="change-btn" onClick={ChangeRegister}>
                                        Register
                                    </button>
                                </span>
                            </form>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Registration;
