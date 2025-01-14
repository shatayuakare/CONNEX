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
export const handler = serverless(app);

app.use("/auth", userRoute)
app.use("/contacts", contactRoute)
app.listen(PORT, () => {
    console.log(`Server working on port ${PORT}`)
    mongoose.connect(URI).then(() =>
        console.log("Database Connected successfully")
    ).catch(err => console.error(err.message));
})
