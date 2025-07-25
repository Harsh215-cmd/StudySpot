import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import NavbarThree from "./NavBarThree";

const ViewNotification = () => {
    const [notification, setnotification] = useState([]);
    const navigate = useNavigate();

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
                                    <th>Heading</th>
                                    <th>Discription</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    notification.length > 0 ? (
                                        notification.map((noti) => (
                                            <tr key={noti._id}>
                                                <td>{noti.MessageHeading}</td>
                                                <td>{noti.MessageDescription}</td>
                                                <td><button onClick={()=>(navigate(`/remove-notification/${noti._id}}`))}>Remove</button></td>
                                            </tr>
                                        ))) : (<tr><td>No records Found</td></tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ViewNotification