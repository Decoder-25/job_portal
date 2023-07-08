// packages imports
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import "express-async-errors";
//files imports
import connectDB from "./config/db.js";
//routes
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";

// DOTENV config
dotenv.config();

//mongodb connection
connectDB();

//rest objects
const app = express();

// /api/v1/auth/register

//middelware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);

//validation middleware
app.use(errorMiddleware);

//port
const PORT = process.env.PORT || 8080; //

//listen
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
