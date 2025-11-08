import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// performing the database connection
export const connectDB = async () => {
  try {
    const db = process.env.MONGODB_URI;
    const { connection } = await mongoose.connect(db, {
      useNewUrlParser: true
    });

    console.log(`✅ MongoDB Connected: ${connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};
