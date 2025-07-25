import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
    StudentName: {
        type: String,  
        required: true
    },
    StudentNumber: {
        type: Number,  
        required: true
    },
    StudentMail: {
        type: String,
        required: true,
        unique: true
    },
    StudentPass: {
        type: String,
        required: true
    }
});

const AuthModel = mongoose.model("auth", AuthSchema);
export default AuthModel;
