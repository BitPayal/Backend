import dotenv from "dotenv";
import connectDB from "./db/index.js"; // make sure the file exists with this name & extension
import {app} from './App.js'

dotenv.config({
  path: "./.env",
});

connectDB()

.then(()=>{
 app.listen(process.env.PORT || 8000,()=>{
       console.log(`Server is running at port :${process.env.PORT}`);
 })
})
.catch((err)=>{
  console.log("MONGO db connection failed !!!",err)
})