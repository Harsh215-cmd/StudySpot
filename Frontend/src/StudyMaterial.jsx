import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import NavbarThree from "./NavBarThree";

const StudyMaterial = () => {
    const [bookpdf, setbookpdf] = useState(null);
    const [name, setname] = useState("");
    const [discription, setdiscription] = useState("");
    const [branch, setbranch] = useState("");
    const [year, setyear] = useState("");

    const sendbook = async () => {
        event.preventDefault();

        const formdata = new FormData();
        formdata.append("MaterialPdf", bookpdf);
        formdata.append("MaterialTitle", name);
        formdata.append("MaterialDescription", discription)
        formdata.append("MaterialBranch", branch);
        formdata.append("MaterialYear", year);

        console.log(formdata.entries);

        try {
            await axios.post("http://localhost:5000/explore/material/", formdata)
                .then(() => {
                    alert("Notes Added");
                })
        } catch (error) {
            alert("something Wrong");
            console.log(error.message);
        }
    }

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
                        <div className="study-material-form">
                            <form action="" onSubmit={sendbook}>
                                <label htmlFor="">Select pdf :</label><br />
                                <input type="file" accept="application/pdf" onChange={(e) => { setbookpdf(e.target.files[0]) }} /> <br /> <br />
                                <label htmlFor="">Enter Heading: :</label> <br />
                                <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} /> <br /> <br />
                                <label htmlFor="">Enter Description :</label> <br />
                                <input type="text" value={discription} onChange={(e) => { setdiscription(e.target.value) }} /> <br /> <br />
                                <label htmlFor="">Select Branch :</label> <br />
                                <select name="" id="" value={branch} onChange={(e) => { setbranch(e.target.value) }}>
                                    <option value="" disabled>Select Branch</option>
                                    <option value="cse">Computer Engineering</option>
                                    <option value="it">Information Technology</option>
                                    <option value="entc">Electronics and Telecommunication</option>
                                </select> <br /> <br />
                                <label htmlFor="">Select Year :</label> <br />
                                <select name="" id="" value={year} onChange={(e) => { setyear(e.target.value) }}>
                                    <option value="" disabled>Select Year</option>
                                    <option value="fy">First Year</option>
                                    <option value="sy">Second Year</option>
                                    <option value="ty">Third Year</option>
                                    <option value="frty">Fourth Year</option>
                                </select> <br /> <br />
                                <button type="submit"> Add Study Material</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StudyMaterial
