import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import NavbarThree from "./NavBarThree";

const AdminDashboard = () => {
    const navigate = useNavigate();
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


    return (
        <>        
        <NavbarThree/>
        <section className="admin-dashboard-back">
            <h1>Admin Panel</h1>
            <div className="admin-dashboard">
                <div className="admin-dashboard-left">
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
                <div className="admin-dashboard-right">
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Student Mobile</th>
                                <th>Student Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentlist.length > 0 ? (
                                studentlist.map((student) => (
                                    <tr key={student._id}>
                                        <td>{student.StudentName}</td>
                                        <td>{student.StudentNumber}</td>
                                        <td>{student.StudentMail}</td>
                                        <td><button onClick={()=>{navigate(`/remove-user/${student._id}`)}}>Remove</button></td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4}><strong>No records found</strong></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        </>

    );
};

export default AdminDashboard;
