import express from "express"
import { CreateClass, RemoveClassRoom, SingleEntry, ViewClass ,classData, viewClassData} from "../Controller/ClassroomController.js";

const Classroom = express.Router();

Classroom.post("/createclass",CreateClass);
Classroom.get("/viewclass",ViewClass);
Classroom.post("/class-data",classData)
Classroom.get("/class-info",viewClassData)
Classroom.get("/single/:id",SingleEntry)
Classroom.delete("/remove-classroom/:id",RemoveClassRoom)

export default Classroom