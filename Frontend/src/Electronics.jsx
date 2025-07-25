import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import NavbarOne from "./NavbarOne";

const Electronics = () => {
    const [booklist, setbooklist] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5000/library/booklist")
            .then((res) => {
                setbooklist(res.data.data);
            }).catch((err) => {
                console.error("Something wrong", err.message)
            });
    }, [])

    // Filter for CSE branch
    const filteredBooks = booklist.filter(book => book.Branch === "entc");

    // Categorize by year
    const fyBooks = filteredBooks.filter(book => book.Year === "fy");
    const syBooks = filteredBooks.filter(book => book.Year === "sy");
    const tyBooks = filteredBooks.filter(book => book.Year === "ty");
    const finalBooks = filteredBooks.filter(book => book.Year === "final");


        return (
            <>
            <NavbarOne/>
            <section className="library-section-back">
                <div className="library-section">
                    <div className="library-section-left">
                        <ol>
                            <h1><i>Digital Library</i></h1> <br />
                            <li><Link to="/library">Computer Engineering</Link></li>
                            <li><Link to="/it">Information Technoloy</Link></li>
                            <li><Link to="/entc">Electronic & Telecommunication</Link></li>
                            <li><Link to="/general">General</Link></li>
                        </ol>
                    </div>
                    <div className="library-section-right">
                        <div className="library-heading">
                             Electronics & Telecommunication Books
                        </div>
                        <div className="books-section">

                            {/* First Year */}
                            <div>
                                <h1 className="inline-layout">First Year Books</h1>
                                <small className="inline-layout">(Click to Download book PDF)</small><br /><br />
                                <ol>
                                    {fyBooks.length > 0 ? fyBooks.map(book => (
                                        <li key={book._id}>
                                            <a onClick={() => { navigate(`/downloadBook/${book._id}`);}}>{book.BookName}</a>
                                        </li>
                                    )) : <h4>No First Year Books Found</h4>}
                                </ol>

                            </div>

                            {/* Second Year */}
                            <div>
                                <h1 className="inline-layout">Second Year Books</h1>
                                <small className="inline-layout">(Click to Download book PDF)</small><br /><br />
                                <ol>
                                    {syBooks.length > 0 ? syBooks.map(book => (
                                        <li key={book._id}>
                                            <a onClick={() => { navigate(`/downloadBook/${book._id}`);}}>{book.BookName}</a>
                                        </li>
                                    )) : <h4>No Second Year Books Found</h4>}
                                </ol>
                            </div>

                            {/* Third Year */}
                            <div>
                                <h1 className="inline-layout">Third Year Books</h1>
                                <small className="inline-layout">(Click to Download book PDF)</small><br /><br />
                                <ol>
                                    {tyBooks.length > 0 ? tyBooks.map(book => (
                                        <li key={book._id}>
                                            <a onClick={() => { navigate(`/downloadBook/${book._id}`);}}>{book.BookName}</a>
                                        </li>
                                    )) : <h4>No Third Year Books Found</h4>}
                                </ol>
                            </div>

                            {/* Fourth Year */}
                            <div>
                                <h1 className="inline-layout">Fourth Year Books</h1>
                                <small className="inline-layout">(Click to Download book PDF)</small><br /><br />
                                <ol>
                                    {finalBooks.length > 0 ? finalBooks.map(book => (
                                        <li key={book._id}>
                                            <a onClick={() => { navigate(`/downloadBook/${book._id}`);}}>{book.BookName}</a>
                                        </li>
                                    )) : <h4>No Fourth Year Books Found</h4>}
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }

    export default Electronics;
