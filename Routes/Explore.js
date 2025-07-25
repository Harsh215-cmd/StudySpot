import express from "express";
import { addMaterial, DownlodeNote, ViewMaterial } from "../Controller/ExploreController.js";
import uploadPdf from "../Utils/uploadPdf.js"; // fixed typo in name (uplode ➝ upload)

const Explore = express.Router();

// Route to upload study material (PDF)
Explore.post("/material", uploadPdf.single("MaterialPdf"), addMaterial);

// Route to get list of study materials
Explore.get("/materiallist", ViewMaterial);
Explore.get("/downlode/:id",DownlodeNote)

export default Explore;
