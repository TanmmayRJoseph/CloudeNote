import mongoose from "mongoose"; // Import mongoose
import dotenv from "dotenv"; // Import dotenv
dotenv.config(); // Load environment variables

const connectDB = async () => {
  if (!process.env.MONGO_DB_URI) {
    // Check if MONGO_DB_URI is defined
    console.log("MONGO_DB_URI is not defined"); // Log a message
    process.exit(1); // Exit the process
  }

  if (mongoose.connection.readyState === 1) {
    // Check if the database is already connected
    console.log("Database already connected"); // Log a message
    return; // Exit the function
  }

  try {
    await mongoose.connect(process.env.MONGO_DB_URI); // Connect to the database
    console.log("Database connected successfully"); // Log a message
  } catch (error) {
    // Catch any errors
    console.log("MongoDB connection error:", error.message); // Log the error
    process.exit(1); // Exit the process
  }
};

export default connectDB; // Export the function
