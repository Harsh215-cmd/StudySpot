import mongoose from "mongoose";

const ClassroomSchema = new mongoose.Schema({
    Branch: {
        type: String,
        required: true
    },
    Year: {
        type: String,
        required: true
    },
    Subject: {
        type: String,
        required: true
    },
    Pass: {
        type: String,
        required: true
    }
})

const ClassroomModel = mongoose.model("classroom", ClassroomSchema);
export default ClassroomModel