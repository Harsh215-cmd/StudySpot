import axios from "axios";
import { useEffect, useState } from "react";
import NavbarOne from "./NavbarOne";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
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
            <NavbarOne />
            <section className="notification-section-back">
                <div className="notification-section">
                    <div className="notification-heading">
                        <h1>Notifications</h1>
                        <button onClick={()=>{navigate("/remove-all")}}>Clear All</button>
                    </div>
                    <div className="notifications">
                        {
                            notification.length > 0 ? (
                                notification.map((noti) => (
                                    <div key={noti._id} className="notify">
                                    <div> <h3>{noti.MessageHeading}</h3> <p>{noti.MessageDescription}</p>
                                    </div>
                                    <button onClick={()=>{navigate(`/remove-notification/${noti._id}`)}}>Clear</button></div>
                                ))
                            ) : (<h2>No record found</h2>)
                        }

                    </div>
                </div>
            </section>
        </>
    )
}
export default Notifications