import mongoose from "mongoose";

const FeedbackSchema = mongoose.Schema({
    Studentname: {
        type: String,
        required: true
    },
    StudentBranch: {
        type: String,
        required: true
    },
    StudentYear: {
        type: String,
        required: true
    },
    FeedbackMessage: {
        type: String,
        required: true
    }
})
const FeedbackModel = mongoose.model("feedbacks", FeedbackSchema);
export default FeedbackModel