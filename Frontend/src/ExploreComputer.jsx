import { useEffect, useState } from "react"
import cseimg from "../images/cse-ex.png"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import NavbarOne from "./NavbarOne"
const ExploreComputer = () => {
    const navigate = useNavigate();
    const [noteslist, setnoteslist] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/explore/materiallist")
            .then((res) => {
                setnoteslist(res.data.data);
                console.log(noteslist);
            }).catch((err) => {
                console.error(err.message);
            });
    }, [])

     const filteredNotes = noteslist.filter(note => note.MaterialBranch === "cse");
     
    return (
        <>
        <NavbarOne/>
            <section className="Explore-computer-section-back-cse">
                <div className="Explore-computer-section">
                    <div className="Explore-computer-heading">
                        <h1>Computer Engineering</h1>
                        <img src={cseimg} alt="" />
                    </div>
                    <div className="Explore-computer-body">
                        {
                            filteredNotes.length > 0 ? 
                            (
                                filteredNotes.map((notes) => (
                                    <div key={notes._id}>
                                        <small>{notes.MaterialYear}</small>
                                        <h1>{notes.MaterialTitle}</h1>
                                        <p>{notes.MaterialDescription}</p>
                                        <br />
                                            <button onClick={()=>{navigate(`/note-pdf/${notes._id}`)}}>Download Pdf</button>
                                    </div>
                                ))
                            ) : (
                                <h2>No records</h2>
                            )
                        }

                    </div>
                </div>
            </section>
        </>
    )
}
export default ExploreComputer