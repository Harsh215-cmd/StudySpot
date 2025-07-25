import mongoose from "mongoose";

const NofificationSchema = mongoose.Schema({
    MessageHeading: {
        type: String,
        required: true
    },
    MessageDescription: {
        type: String,
        required: true
    }
})

const NotificationModel = mongoose.model("notification", NofificationSchema);
export default NotificationModel
