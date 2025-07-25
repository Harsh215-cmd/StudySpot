import axios  from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import NavbarThree from "./NavBarThree";

const AdminFeedBack = () => {
   const naviagate = useNavigate();
    const[feedbacklist,setfeedbacklist]=useState([]);

    useEffect(()=>{
      axios.get("http://localhost:5000/feedback/feedbacklist")
      .then((res) => {
        setfeedbacklist(res.data.data);
      }).catch((err) => {
        console.error("Something Wrong :",err.message);
      });
    },[])


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
                        <table border={1}>
                            <thead>
                                <tr>
                                    <th>Students Name</th>
                                    <th>Students Branch</th>
                                    <th>Students Year</th>
                                    <th>Students Feedback</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            
                              <tbody>
                                {
                                feedbacklist.length > 0 ? (
                                   feedbacklist.map((feedback)=>(
                                    <tr key={feedback._id}>
                                        <td>{feedback.Studentname}</td>
                                        <td>{feedback.StudentBranch}</td>
                                        <td>{feedback.StudentYear}</td>
                                        <td>{feedback.FeedbackMessage}</td>
                                        <td><button onClick={()=>{ naviagate(`/delet-feedback/${feedback._id}`)}}>Delet</button></td>
                                    </tr>
                                   ))
                                ) : (<tr>
                                    <td>No Records Found</td>
                                </tr>)
                                }
                              </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AdminFeedBack