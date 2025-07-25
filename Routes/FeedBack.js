import express from "express"
import { RemoveFeedBack, SendFeedBack, ViewFeedBack } from "../Controller/FeedBackController.js";

const Feedback = express.Router();

Feedback.post("/message",SendFeedBack)
Feedback.get("/feedbacklist",ViewFeedBack)
Feedback.delete("/delet-feedback/:id",RemoveFeedBack)

export default Feedback;