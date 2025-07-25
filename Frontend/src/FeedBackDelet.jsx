import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const FeedBackDelet = () => {
    const { id } = useParams(); // Destructure for cleaner syntax

    useEffect(() => {
        if (id) {
            axios.delete(`http://localhost:5000/feedback/delet-feedback/${id}`)
                .then((result) => {
                    console.log("Feedback deleted:", result.data);
                })
                .catch((err) => {
                    console.error("Error deleting feedback:", err);
                });
        }
    }, [id]);

    return (
        <section className="deleted-section">
            <h1>Feedback Deleted</h1>
        </section>
    );
};

export default FeedBackDelet;
