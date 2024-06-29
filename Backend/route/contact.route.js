import express from "express";
import { SendMessage } from "../controller/contact.controller.js";


const router = express();

router.post("/contact", SendMessage);

export default router;