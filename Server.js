import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import MondoDb from "./Utils/StudyspotDb.js";
import Auth from "./Routes/Auth.js";
import Classroom from "./Routes/Classroom.js";
import Library from "./Routes/Library.js";
import Notification from "./Routes/Notification.js";
import Explore from "./Routes/Explore.js";
import Feedback from "./Routes/FeedBack.js";


// Configuration
dotenv.config();
const PORT = process.env.PORT || 3000 ;
const app = express();

// json
app.use(cors());
app.use(express.json());

//databse Connection
MondoDb();

//Routes
app.use("/auth",Auth);
app.use("/classroom",Classroom);
app.use("/library",Library);
app.use("/notification",Notification);
app.use("/explore",Explore);
app.use("/feedback",Feedback)

app.get("/",(req,res)=>{
    res.send("Backend Started !");
})

app.listen(PORT,()=>{
    console.log("Backend Start on Server",PORT);
});