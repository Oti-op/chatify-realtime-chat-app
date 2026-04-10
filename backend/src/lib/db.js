import mongoose from "mongoose"
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    if (!ENV.MONGO_URI) {
      throw new Error("MONGO_URI is not defined");
    }
      const conn = await mongoose.connect(ENV.MONGO_URI)
      console.log("MONGODB CONNECTED:", conn.connection.host)
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // 1 status code means fail
  }
};

export default connectDB;
