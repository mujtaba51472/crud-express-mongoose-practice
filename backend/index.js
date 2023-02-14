import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDb from "./dataBase/db.js";
import Router from "./routes/route.js";
const app = express();
const DATA_BASE_URL = "mongodb://localhost:27017/user";

app.use(cors());
// JSON
app.use(bodyParser.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

connectDb(DATA_BASE_URL);
app.use("/", Router);

app.listen(8000, () => {
  console.log("server listening at 8000");
});
