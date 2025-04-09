import mongoose from "mongoose";

export const dbConnection = () => {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    console.error(" MONGO_URI is undefined. Check your env file and dotenv config.");
    return;
  }

  mongoose
    .connect(mongoURI, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log(" Connected to MongoDB database: RESERVATIONS");
    })
    .catch((err) => {
      console.error(" Database connection error:", err.message);
    });
};
