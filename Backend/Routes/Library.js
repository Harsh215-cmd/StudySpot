import express from "express"
import { AddBook, downLodePdf, getBook } from "../Controller/LibraryController.js";
import uplodePdf from "../Utils/uploadPdf.js";

const Library = express.Router();

Library.post("/addbook",uplodePdf.single("bookpdf"), AddBook);
Library.get("/booklist",getBook);
Library.get("/downlode/:id",downLodePdf);

export default Library
