import mongoose from "mongoose";
import { time } from "motion";

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: false,
    },
    message: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;
