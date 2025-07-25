import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDownload = () => {
    const { id } = useParams(); // gets :id from URL like /download/:id
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/library/downlode/${id}`, {
                responseType: "arraybuffer", // receive PDF as binary buffer
            })
            .then((res) => {
                const blob = new Blob([res.data], { type: "application/pdf" });
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", `Book_${id}.pdf`);
                document.body.appendChild(link);
                link.click();
                link.remove();

                setBook(true);
            })
            .catch((err) => {
                console.error("Something went wrong:", err.message);
                setBook(false);
            });
    }, [id]);

    return (
        <div className="pdf-downlode-window">
            <center >
                {book === true ? (
                    <h2>📘 PDF Downloaded Successfully</h2>
                ) : book === false ? (
                    <h2>❌ Failed to Download PDF</h2>
                ) : (
                    <h2>📥 Downloading PDF...</h2>
                )}
            </center>
        </div>
    );
};

export default BookDownload;
