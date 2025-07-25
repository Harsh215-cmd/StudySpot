import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import NavbarThree from "./NavBarThree";

const ViewClassroom = () => {
    const navigate = useNavigate();
    const [classrooms, setclassrooms] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/classroom/viewclass")
            .then((res) => {
                setclassrooms(res.data.data);
            }).catch((err) => {
                console.error("Something Wrong", err.message);
            });
    }, []);
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
                                    <th>Branch</th>
                                    <th>Year</th>
                                    <th>Subject</th>
                                    <th>PassWord</th>
                                    <th>Send Message</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classrooms.length > 0 ? (
                                    classrooms.map((cls) => (
                                <tr key={cls._id}>
                                    <td>{cls.Branch}</td>
                                    <td>{cls.Year}</td>
                                    <td>{cls.Subject}</td>
                                    <td>{cls.Pass}</td>
                                    <td><button onClick={()=>{navigate(`/class-form/${cls._id}`)}} >Send Message</button></td>
                                    <td><button onClick={()=>{navigate(`/class-remove/${cls._id}`)}} >Delet Class</button></td>
                                </tr>
                                ))
                                ) : (<tr> <td>No Records Found</td></tr>

                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ViewClassroom