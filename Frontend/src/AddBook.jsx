import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import NavbarThree from "./NavBarThree";

const AddBook = () => {
    const[bookpdf,setbookpdf]=useState(null);
    const[name,setname]=useState("");
    const[branch,setbranch]=useState("");
    const[year,setyear]=useState("");

    const sendbook = async () =>{
        event.preventDefault();

        const formdata = new FormData();
        formdata.append("bookpdf",bookpdf);
        formdata.append("BookName",name);
        formdata.append("Branch",branch);
        formdata.append("Year",year);

        try {
           await axios.post("http://localhost:5000/library/addbook/",formdata)
            .then(()=>{
              alert("Book Added To Library");
            })
        } catch (error) {
            alert("something Wrong");
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
                                <input type="file" accept="application/pdf" onChange={(e)=>{setbookpdf(e.target.files[0])}}/> <br /> <br />
                                <label htmlFor="">Enter Book Name :</label> <br />
                                <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/> <br /> <br />
                                <label htmlFor="">Select Branch :</label> <br />
                                <select name="" id="" value={branch} onChange={(e)=>{setbranch(e.target.value)}}>
                                    <option value="" disabled>Select Branch</option>
                                    <option value="cse">Computer Engineering</option>
                                    <option value="it">Information Technology</option>
                                    <option value="entc">Electronics and Telecommunication</option>
                                    <option value="general">General</option>
                                </select> <br /> <br />
                                <label htmlFor="">Select Year :</label> <br />
                                <select name="" id="" value={year} onChange={(e)=>{setyear(e.target.value)}}>
                                    <option value="" disabled>Select Year</option>
                                    <option value="fy">First Year</option>
                                    <option value="sy">Second Year</option>
                                    <option value="ty">Third Year</option>
                                    <option value="final">Fourth Year</option>
                                </select> <br /> <br />
                                <button type="submit"> Add Book</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AddBook