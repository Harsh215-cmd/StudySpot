import { Link } from "react-router-dom"
import img1 from "../images/1stYear.jpg";
import img2 from "../images/3rdYear.png";
import img3 from "../images/4thYear.png";
const Branch = () => {
    return (
        <>
            <section className="branch-section-back">
                <div className="branch-section">
                <div>
                    <figure>
                        <img src={img1} alt="" />
                        <figcaption>
                            <h3>Computer Engeneering</h3>
                            <Link to="/explore-cse">Explore More</Link>
                        </figcaption>
                    </figure>
                </div>
                <div>
                    <figure>
                        <img src={img2} alt="" />
                        <figcaption>
                            <h3>Information Technology</h3>
                            <Link to="/explore-it" >Explore More</Link>
                        </figcaption>
                    </figure>
                </div>
                <div>
                    <figure>
                        <img src={img3} alt="" />
                        <figcaption>
                            <h3>Electronics </h3>
                            <Link to="/explore-entc" >Explore More</Link>
                        </figcaption>
                    </figure>
                </div>
                </div>
            </section>
        </>
    )

}
export default Branch