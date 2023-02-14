import express from "express";
const Router = express.Router();
import { addUser } from "../controllers/user-controller.js";

// routes
Router.post("/add", addUser);

export default Router;
