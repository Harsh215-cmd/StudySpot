import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import NavbarThree from "./NavBarThree";

const ClassRoomForm = () =>{
    
    const identity = useParams();
    const[heading,setheading]=useState("");
    const[link,setlink]=useState("");
    // console.log(identity.id);

    

    const classData = () =>{
        event.preventDefault();
        const info={
         Classidentity:identity.id,
         ClassHeading:heading,
         ClassLink:link   
        }
        console.log(info);

        axios.post("http://localhost:5000/classroom/class-data",info)
        .then((res) => {
         alert("Message Sended");
        }).catch((err) => {
        alert("Something Wrong");
        });
    } 

    return(
        <>
        <NavbarThree/>
        <section className="class-room-form-section">
            <form action="" onSubmit={classData}>
              <input type="text" value={identity} className="identity" />  <br />
              <label htmlFor="" >Enter Heading</label> <br />
              <input type="text" value={heading} onChange={(e)=>{setheading(e.target.value)}} /><br /><br />
              <label htmlFor="">Paste Link</label> <br /> 
              <textarea value={link} name="" id="" onChange={(e)=>{setlink(e.target.value)}}></textarea> <br /> <br />
              <button type="submit">Send</button>
            </form>
        </section>
        </>
    )
}
export default ClassRoomForm