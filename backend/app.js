import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js"

const app = express();
dotenv.config({ path: "./config.env" });

app.use(
  cors({
    origin: "*", // 🔓 Accepts requests from any origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Agar cookies/via credentials use ho rahe ho to true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);
app.get("/", (req, res, next)=>{return res.status(200).json({
  success: true,
  message: "HELLO WORLD AGAIN"
})})

dbConnection();

app.use(errorMiddleware);

export default app;
