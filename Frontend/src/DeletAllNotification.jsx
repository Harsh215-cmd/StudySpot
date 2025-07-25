import axios from "axios";
import { useEffect } from "react";

const DeletAllNotification = () => {

    useEffect(() => {
        axios.delete("http://localhost:5000/notification/remove-all")
            .then((result) => {
                console.log("All notifications deleted:", result.data);
            })
            .catch((err) => {
                console.error("Error deleting all notifications:", err);
            });
    }, []);

    return (
        <section className="deleted-section">
            <h1>All Notifications Deleted</h1>
        </section>
    );
};

export default DeletAllNotification;
