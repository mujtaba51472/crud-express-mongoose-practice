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

export const getUser = async (req, res) => {
  const user = await userModel.find();
  console.log("userbck", user);
  try {
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

// delete user

export const deleteUser = async (req, res) => {
  console.log("iddd", req.params.id);
  const result = await userModel.findByIdAndDelete(req.params.id);
  try {
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

// edit

export const editUser = async (req, res) => {
  console.log("iddd", req.params.id);
  const result = await userModel.findOneAndUpdate(req.params.id);
  try {
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};
