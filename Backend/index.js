import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import userRoute from "./route/user.route.js"
import contactRoute from "./route/contact.route.js"
import serverless from "serverless-http";

const app = express();
dotenv.config();


app.use(express.json());
app.use(cors())
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;


app.get("/", (req, res) => {
    res.json("Hello World")
})
try {
    await mongoose.connect(URI);
    // console.log("Mongo Connected")
} catch (error) {
    console.log("Mongo DB Not Connected", error)
}

export const handler = serverless(app);

app.use("/auth", userRoute)
app.use("", contactRoute)
app.listen(PORT)
