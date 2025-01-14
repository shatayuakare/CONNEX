import express from "express";
import { getContact, getContacts, SendMessage } from "../controller/contact.controller.js";


const contactRoute = express();

contactRoute.get("/", getContacts)
contactRoute.get("/:id", getContact)
contactRoute.post("/new", SendMessage);

export default contactRoute;