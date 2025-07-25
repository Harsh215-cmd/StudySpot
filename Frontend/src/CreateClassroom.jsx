import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavbarThree from "./NavBarThree";

const CreateClassroom = () => {
    const [branch, setBranch] = useState("");
    const [year, setYear] = useState("");
    const [subject, setSubject] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const classRoom = {
            Branch:branch,
            Year:year,
            Subject:subject,
            Pass:pass
        }
        axios.post("http://localhost:5000/classroom/createclass",classRoom)
        .then((res) => {
            alert("New ClassRoom Created")
        }).catch((err) => {
            alert("Something Wrong")
        });
          
    };

    return (
        <> 
        <NavbarThree/>       
        <section className="admin-dashboard-back">
            <h1>Admin Panel</h1>
            <div className="admin-dashboard">
                <div className="admin-dashboard-left">
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
                <div className="admin-dashboard-right">
                    <div className="study-material-form">
                        <form onSubmit={handleSubmit}>
                            <label>Select Branch :</label><br />
                            <select value={branch} onChange={(e) => setBranch(e.target.value)} required>
                                <option value="">Select Branch</option>
                                <option value="cse">Computer Engineering</option>
                                <option value="it">Information Technology</option>
                                <option value="entc">Electronics and Telecommunication</option>
                            </select><br /><br />

                            <label>Select Year :</label><br />
                            <select value={year} onChange={(e) => setYear(e.target.value)} required>
                                <option value="">Select Year</option>
                                <option value="First Year">First Year</option>
                                <option value="Second Year">Second Year</option>
                                <option value="Third Year">Third Year</option>
                                <option value="Fourth Year">Fourth Year</option>
                            </select><br /><br />

                            <label>Enter Subject :</label><br />
                            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required /><br /><br />

                            <label>Enter Password :</label><br />
                            <input type="text" value={pass} onChange={(e) => setPass(e.target.value)} required /><br /><br />

                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>

    );
};

export default CreateClassroom;


// import { useState } from "react"
// import { Link } from "react-router-dom"

// const CreateClassroom = () => {
//     const[branch,setbranch]=useState("");
//     const[year,setyear]=useState("");
//     const[subject,setsubject]=useState("");
//     const[pass,setpass]=useState("");


//     return (
//         <>
//             <section className="admin-dashboard-back">
//                 <h1>Admin Panel</h1>
//                 <div className="admin-dashboard">
//                     <div className="admin-dashboard-left" >
//                         <ol>
//                             <li><Link to="/admin-dashboard">Registered Students</Link></li>
//                             <li><Link to="/admin-feedbacks">FeedBacks</Link></li>
//                             <li><Link to="/send-study-material">Study Material</Link></li>
//                             <li><Link to="/create-classroom">Create Classroom</Link></li>
//                             <li><Link to="/view-classroom">View Classrooms</Link></li>
//                             <li><Link to="/add-book">Add Book to Library</Link></li>
//                             <li><Link to="/send-notification">Send Notification</Link></li>
//                             <li><Link to="/view-notification">View Notification</Link></li>
//                         </ol>
//                     </div>
//                     <div className="admin-dashboard-right" >
//                         <div className="study-material-form">
//                             <form action="">
//                                 <label htmlFor="">Select Branch :</label> <br />
//                                 <select name="" id="">
//                                     <option value="" disabled>Select Branch</option>
//                                     <option value="cse">Computer Engineering</option>
//                                     <option value="it">Information Technology</option>
//                                     <option value="entc">Electronics and Telecommunication</option>
//                                 </select> <br /> <br />
//                                 <label htmlFor="">Select Year :</label> <br />
//                                 <select name="" id="">
//                                     <option value="" disabled>Select Year</option>
//                                     <option value="First Year">First Year</option>
//                                     <option value="Second Year">Second Year</option>
//                                     <option value="Third Year">Third Year</option>
//                                     <option value="Fourth Year">Fourth Year</option>
//                                 </select> <br /> <br />
//                                 <label htmlFor="">Enter Subject :</label> <br />
//                                 <input type="text" /> <br /> <br />
//                                 <label htmlFor="">Enter PassWord :</label> <br />
//                                 <input type="text" /> <br /> <br />
//                                 <button>Send</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }
// export default CreateClassroom