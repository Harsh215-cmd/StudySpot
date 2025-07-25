import mongoose from "mongoose";

const ClassFormSchema = new mongoose.Schema({
    Classidentity: {
        type: String,
        required: true
    },
    ClassHeading: {
        type: String,
        required: true
    },
    ClassLink: {
        type: String,
        required: true
    }
})

const ClassFormModel = mongoose.model("classform", ClassFormSchema);
export default ClassFormModel