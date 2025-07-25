import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const DeletClassRoom = () => {
    const { id } = useParams(); // Destructure for cleaner syntax

    useEffect(() => {
        if (id) {
            axios.delete(`http://localhost:5000/classroom/remove-classroom/${id}`)
                .then((result) => {
                    console.log("ClassRoom deleted:", result.data);
                })
                .catch((err) => {
                    console.error("Error deleting clssroom:", err);
                });
        }
    }, [id]);

    return (
        <section className="deleted-section">
            <h1>ClassRoom Deleted</h1>
        </section>
    );
};

export default DeletClassRoom;
