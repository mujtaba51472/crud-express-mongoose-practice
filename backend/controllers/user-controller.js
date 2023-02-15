import userModel from "../models/userSchema.js";

export const addUser = async (req, res) => {
  try {
    const user = req.body;
    const newUser = new userModel(user);
    const resss = await newUser.save();
    res.status("200", resss);
  } catch (error) {
    console.log(error);
  }
  // console.log("add user controller", user);
};

export const getUser = async (req, res) => {
  // console.log("userbck", user);
  try {
    const user = await userModel.find();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

// delete user

export const deleteUser = async (req, res) => {
  // console.log("iddd", req.params.id);
  try {
    const result = await userModel.findByIdAndDelete(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

// edit

export const editUser = async (req, res) => {
  console.log("reddd", req.body);
  try {
    const result = await userModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to update user data" });
  }
};

// get single user

export const singleUser = async (req, res) => {
  console.log("single");
  const id = req.params.id;
  const result = await userModel.findOne({ _id: id });
  console.log("res", result);
  try {
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
