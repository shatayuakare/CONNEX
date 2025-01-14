import express from "express";
import { getUser, getUsers, login, register } from "../controller/user.controller.js";


const userRoute = express.Router();

userRoute.get("/users", getUsers)
userRoute.get("/users/:id", getUser)
userRoute.post("/register", register)
userRoute.post("/login", login)

export default userRoute