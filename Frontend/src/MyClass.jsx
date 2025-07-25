import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import NavbarThree from "./NavBarThree";

const MyClass = () => {
    const uniqId = useParams();
    // console.log(uniqId.id);
    const [classinfo, setclassinfo] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/classroom/class-info")
            .then((res) => {
                setclassinfo(res.data.data);
            }).catch((err) => {
                console.error("Something Wrong", err.message);
            });
    }, [])

   const information = classinfo.filter(clsinfo => clsinfo.Classidentity === uniqId.id)
    return (
       
        <>
         <NavbarThree/>
            <section className="myclass-section">

                <div className="myclass-data">
                    {
                        information.length > 0 ?
                            (
                                information.map((info) => (
                                    <div className="class-info" key={info}>
                                        <h3>{info.ClassHeading}</h3>
                                        <p>{info.ClassLink}</p>
                                    </div>
                                ))
                            ) :
                            (<h2>No records Found</h2>)
                    }
                </div>
            </section>
        </>
    )
}
export default MyClass