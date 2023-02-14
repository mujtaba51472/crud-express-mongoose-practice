import userModel from "../models/userSchema.js";

export const addUser = async (req, res) => {
  const user = req.body;
  const newUser = new userModel(user);
  try {
    const resss = await newUser.save();
    res.status(201).json(newUser);
    console.log("res", resss);
  } catch (error) {
    console.log(error);
  }
  console.log("add user controller", user);
};
