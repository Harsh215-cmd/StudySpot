import NotificationModel from "../Model/NotificationModel.js";

const SendNotification = async (req, res) => {
    try {
        const { MessageHeading, MessageDescription } = req.body;

        const notification = new NotificationModel({ MessageHeading, MessageDescription });
        notification.save();
        res.status(200).json({
            success: true,
            message: "Notification Sended",
            data: notification
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something Wrong",
            error: error.message
        })
    }
}

const ViewNotification = async (req, res) => {
    try {
        const notificationList = await NotificationModel.find();
        res.status(200).json({
            success: true,
            message: "all Notification List",
            data: notificationList
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something Wrong",
            error: error.message
        })
    }
}

const RemoveNotification = async (req, res) => {
    try {
        const { id } = req.params;

        const delnotification = await NotificationModel.findByIdAndDelete(id);

        if (!delnotification) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Notification removed",
            data: delnotification,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong",
            error: error.message,
        });
    }
};

const RemoveAll = async (req, res) => {
    try {
        await NotificationModel.deleteMany({});
        res.status(200).json({
            success: true,
            message: "All notifications deleted successfully"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error deleting notifications",
            error: error.message
        });
    }
}

export { SendNotification, ViewNotification, RemoveNotification, RemoveAll }