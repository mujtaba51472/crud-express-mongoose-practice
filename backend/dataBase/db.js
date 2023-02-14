import mongoose from "mongoose";

const connectDb = (url) => {
  const DB_OPTIONS = {
    dbName: "user",
  };

  mongoose
    .connect(url, DB_OPTIONS)
    .then(() => {
      console.log("db connected successfully");
    })
    .catch((err) => console.log(err));
};
export default connectDb