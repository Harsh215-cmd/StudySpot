import express from "express"
import { RemoveAll, RemoveNotification, SendNotification, ViewNotification } from "../Controller/NotificationControler.js";

const Notification = express.Router();

Notification.post("/send",SendNotification);
Notification.get("/notificationlist", ViewNotification);
Notification.delete("/remove-notification/:id",RemoveNotification);
Notification.delete("/remove-all",RemoveAll);


export default Notification