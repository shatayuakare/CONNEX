import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact