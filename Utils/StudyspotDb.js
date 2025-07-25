import mongoose from "mongoose";
const MondoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Databse Connected Successfully");
    } catch (error) {
        console.log("Something Gone Wrong :", error.message);
    }
}
export default MondoDb