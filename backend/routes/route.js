import express from "express";
const Router = express.Router();
import {
  addUser,
  getUser,
  deleteUser,
  editUser,
  singleUser,
} from "../controllers/user-controller.js";

// routes
Router.post("/add", addUser);
Router.get("/alluser", getUser);
Router.delete("/delete/:id", deleteUser);
Router.put("/edit/:id", editUser);
Router.get("/user/:id", singleUser);

export default Router;
