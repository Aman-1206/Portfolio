import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            console.log("Already connected to database");
            return;
        }await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "formDB",
        });
        console.log("Connected to database");
    } catch (error) {
        console.error("Database connection error:", error);
    }};

export default connectDB;