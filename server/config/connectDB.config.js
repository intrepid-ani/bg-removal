import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

dotenv.config({
  path: "./.env",
});

const DB_URI = process.env.MONGO_ATLAS_URI;

if (!DB_URI) {
  console.log("URI IS MISSING! (From .env file)", DB_URI);
}

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${DB_URI}/${DB_NAME}`);
    console.log(
      `\n MongoDB connected !! DB HOST ${
        (connectionInstance.Connection.name, null, 2)
      }`
    );
  } catch (error) {
    console.log("MONGODB connection FAILED ", error.message);
    process.exit(1);
  }
};

export default connectDB;
