import mongoose from "mongoose";

let isConnected = false;
const connectionString = process.env.MONGODB_URL as string;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (!connectionString) console.log("MONGODB_URL Not found");
  if (isConnected) return console.log("Already Connected to the database");

  try {
    await mongoose.connect(connectionString);
    isConnected = true;
    console.log("Connection was established successfully");
  } catch (error) {
    console.log("🥲There was an error connecting to the database");
    console.log(error);
  }
};
