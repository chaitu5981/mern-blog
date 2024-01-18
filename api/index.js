import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("Mongoose is connected"))
  .catch((err) => console.log(err));
const app = express();
app.listen(3000, () => {
  console.log("Server has started on port 3000");
});
