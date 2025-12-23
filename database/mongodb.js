import mongoose from "mongoose";
import { DB_URL } from "../config/env";


if (!DB_URL) {
  throw new Error("plEASE define the DB_URL in the environment inside .env.<development/production>local.env");
}


const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  };
}



export default connectDB;