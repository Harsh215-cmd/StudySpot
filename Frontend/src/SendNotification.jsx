import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import NavbarThree from "./NavBarThree";

const SendNotification = () => {

    const[heading,setheading]=useState("");
    const[desc,setdesc]=useState("");

    const Notify = async () =>{
        event.preventDefault();
       const notification={
        MessageHeading:heading,
        MessageDescription:desc
       }
       axios.post("http://localhost:5000/notification/send/",notification)
       .then((res) => {
        alert("Notification Send Successfully");
       }).catch((err) => {
        alert("Something Wrong");
       });
       window.location.reload();
    }

    return (
        <>
        <NavbarThree/>
            <section className="admin-dashboard-back">
                <h1>Admin Panel</h1>
                <div className="admin-dashboard">
                    <div className="admin-dashboard-left" >
                        <ol>
                            <li><Link to="/admin-dashboard">Registered Students</Link></li>
                            <li><Link to="/admin-feedbacks">FeedBacks</Link></li>
                            <li><Link to="/send-study-material">Study Material</Link></li>
                            <li><Link to="/create-classroom">Create Classroom</Link></li>
                            <li><Link to="/view-classroom">View Classrooms</Link></li>
                            <li><Link to="/add-book">Add Book to Library</Link></li>
                            <li><Link to="/send-notification">Send Notification</Link></li>
                            <li><Link to="/view-notification">View Notification</Link></li>
                        </ol>
                    </div>
                    <div className="admin-dashboard-right" >
                        <div className="study-material-form">
                            <form onSubmit={Notify}>
                                <label htmlFor="">Enter Heading :</label> <br />
                                <input type="text" value={heading} onChange={(e)=>{setheading(e.target.value)}}/> <br /> <br />
                                <label htmlFor="">Enter Description :</label> <br />
                                <textarea name="" id="" value={desc} onChange={(e)=>{setdesc(e.target.value)}}></textarea> <br /> <br />
                                <button type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SendNotification