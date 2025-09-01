import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const DB_URI = `${process.env.MONGODB_URL}/${DB_NAME}`;

console.log(DB_URI);

const connectDB = async () => {
  try {
    const databaseResponse = await mongoose.connect(DB_URI);
    console.log("MongoDB connected");
    console.log({
      "Host: --->": databaseResponse.connection.host,
      "\nDatabase Name: --->": databaseResponse.connection.name,
    });
  } catch (error) {
    console.log("MONGODB connection FAILED ", error.message);
    process.exit(1);
  }
};

export default connectDB;
