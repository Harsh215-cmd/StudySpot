import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const DeletNotification = () => {
    const { id } = useParams();
    console.log(id); 

    useEffect(() => {
        if (id) {
            axios.delete(`http://localhost:5000/notification/remove-notification/${id}`)
                .then((result) => {
                    console.log("Notification deleted:", result.data);
                })
                .catch((err) => {
                    console.error("Error deleting Notification:", err);
                });
        }
    }, [id]);

    return (
        <section className="deleted-section">
            <h1>Notification Deleted</h1>
        </section>
    );
};

export default DeletNotification;
