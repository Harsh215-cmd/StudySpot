import { useState } from "react"
import feedBackImg from "../images/Contact.png"
import axios from "axios";
const Feedback = () => {

    const [name, setname] = useState("");
    const [branch, setbranch] = useState("");
    const [year, setyear] = useState("");
    const [message, setmessage] = useState("");

    const SendFeedBack = (event) => {
        event.preventDefault();
        const feedback = {
            Studentname: name,
            StudentBranch: branch,
            StudentYear: year,
            FeedbackMessage: message
        }
        // console.log(feedback);
        axios.post("http://localhost:5000/feedback/message/",feedback)
        .then((res) => {
            alert("your Feedback Send Successfully");
        }).catch((err) => {
            alert("Something Wrong",err.message);
        });
        window.location.reload();
    }

    return (
        <>
            <section className="feedback-section-back">
                <div className="feedback-section">
                    <div>
                        <form onSubmit={SendFeedBack} className="feedback-form">
                            <label htmlFor="">Enter Your Name :</label> <br />
                            <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} /> <br /> <br />
                            <div className="selection">
                                <div>
                                    <label htmlFor="branch">Select Your Branch:</label> <br />
                                    <select name="branch" id="branch" value={branch} onChange={(e) => setbranch(e.target.value)}>
                                        <option value="" disabled>Select One</option>
                                        <option value="Computer Engineering">Computer Engineering</option>
                                        <option value="Information Technology">Information Technology</option>
                                        <option value="Electronics & Telecommunication">Electronics & Telecommunication</option>
                                    </select>
                                </div>

                                <br /><br />

                                <div>
                                    <label htmlFor="year">Select Your Year:</label> <br />
                                    <select name="year" id="year" value={year} onChange={(e) => setyear(e.target.value)}>
                                        <option value="" disabled>Select One</option>
                                        <option value="First Year">First Year</option>
                                        <option value="Second Year">Second Year</option>
                                        <option value="Third Year">Third Year</option>
                                        <option value="Fourth Year">Fourth Year</option>
                                    </select>
                                </div>
                            </div>
                            <br />
                            <label htmlFor="">Enter Your Message :</label><br />
                            <textarea placeholder="Enter your message here .." value={message} onChange={(e) => { setmessage(e.target.value) }}></textarea> <br /> <br />
                            <button type="submit">Send</button>
                        </form>
                    </div>
                    <div>
                        <img src={feedBackImg} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Feedback