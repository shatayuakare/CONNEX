import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    profile: {

    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    type: String,
    required: true,
},
});

const User = mongoose.model("User", userSchema);


export default User