import dotenv from "dotenv";
import connectDB from "./db/index.js"; // make sure the file exists with this name & extension

dotenv.config({
  path: "./.env",
});

connectDB();
