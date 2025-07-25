import express from "express";
import {LogIn, Register, RemoveStudent, ViewStudent} from "../Controller/AuthController.js";

const Auth = express.Router();

Auth.post("/register",Register); 
Auth.post("/login",LogIn);
Auth.get("/studentlist",ViewStudent);
Auth.delete("/remove-student/:id",RemoveStudent)

export default Auth;
