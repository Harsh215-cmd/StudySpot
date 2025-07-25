import FeedbackModel from "../Model/FeedBackModel.js";

const SendFeedBack = async (req, res) => {
    try {
        const { Studentname, StudentBranch, StudentYear, FeedbackMessage } = req.body;
        const Message = new FeedbackModel({ Studentname, StudentBranch, StudentYear, FeedbackMessage });
        Message.save();
        res.status(200).json({
            success: true,
            message: "Feedback Sended",
            data: Message
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something Wrong",
            error:error.message
        })
    }
}

const ViewFeedBack = async (req, res) => {
    try {
     const feedbacklist = await FeedbackModel.find();
     res.status(200).json({
        success:true,
        message:"all Feedback List",
        data:feedbacklist
     })
    } catch (error) {
   res.status(400).json({
        success:false,
        message:"Something Wrong",
        error:error.message
     })
    }
}

const RemoveFeedBack = async (req, res) => {
    try {
        const { id } = req.params; 

        const delfeedback = await FeedbackModel.findByIdAndDelete(id); 

        if (!delfeedback) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Feedback removed",
            data: delfeedback,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong",
            error: error.message,
        });
    }
};

export { SendFeedBack , ViewFeedBack ,RemoveFeedBack} 