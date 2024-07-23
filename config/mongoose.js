import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.MONGO_URI || "mongodb://localhost:27017/ecommerceAPI";

function connectToMongoDB() {
  try {
    mongoose.connect(url);
    console.log("Mongodb connected using mongoose");
  } catch (err) {
    console.error("Error while connecting to DB:", err.message);
  }
}

connectToMongoDB();

export default mongoose;
