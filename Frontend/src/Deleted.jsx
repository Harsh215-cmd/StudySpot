import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDeleted = () => {
    const url_id = useParams();
    // console.log(url_id.id);

    useEffect(() => {
        axios.delete(`http://localhost:5000/auth/remove-student/${url_id.id}`)
            .then((result) => {
                console.log("Deleted:", result.data);
            })
            .catch((err) => {
                console.error("Error deleting student:", err);
            });
    }, [url_id.id]);

    return (
        <>
            <section className="deleted-section">
                <h1>Deleted</h1>
            </section>
        </>
    );
};

export default UserDeleted;
