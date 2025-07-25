import axios from "axios";
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

const Myclasspass =  () => {
    const navigate = useNavigate()
    const url = useParams();
    console.log(url.id);
    const [enteredPass, setenteredPass] = useState("")
    const [password, setpassword] = useState("");

    const ChakePassWord = async () => {
        event.preventDefault();
        await axios.get(`http://localhost:5000/classroom/single/${url.id}`)
            .then((res) => {
                setpassword(res.data.data);
            }).catch((err) => {
                console.log("Something Wrong", err.message);
            });
        // console.log(password.Pass);
        if (password.Pass == enteredPass) {
            alert("PassWord Correct");
            navigate(`/myclass/${(url.id)}`)
        }
        else {
            alert("Wrong PassWord");
        }
    }
    return (
        <>
            <section className="myclass-pass">
                <div className="password">
                    <form onSubmit={ChakePassWord}>
                        <label htmlFor="" >Enter PassWord</label> <br />
                        <input type="text" value={enteredPass} onChange={(e) => { setenteredPass(e.target.value) }} /> <br /> <br />
                        <button type="submit">Join</button>
                    </form>
                </div>
            </section>
        </>
    )
}
export default Myclasspass