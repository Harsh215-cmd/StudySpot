import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import NavbarOne from "./NavbarOne";

const ClassRoom = () => {
    const [classroom, setclassroom] = useState([]);
   const navigate =  useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5000/classroom/viewclass")
            .then((res) => {
                setclassroom(res.data.data);
            }).catch((err) => {
                console.error("Something Wrong", err.message);
            });
    }, [])
    return (
        <>
        <NavbarOne/>
            <section className="classroom-section-back">
                <div className="classroom-section">
                    <h1 className="classroom-heading">ClassRoom</h1>
                    <div className="classroom-cointaner">
                            {classroom.length > 0 ?
                            (classroom.map((cls)=>(
                            <div key={cls._id} className="class-card">
                                <h2>{cls.Branch}</h2>
                                <samp>{cls.Year}</samp>
                                <p>{cls.Subject}</p>
                                <hr />
                                <button onClick={()=>{navigate(`/myclasspass/${cls._id}`)}} >Join</button>
                            </div>
                            )
                            )) : (<h2>No records Found</h2>)}
                    </div>
                </div>
            </section>
        </>
    )
}
export default ClassRoom