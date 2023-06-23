// packages imports
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
//files imports
import connectDB from './config/db.js';
import testRoutes from './routes/testRoutes.js';

// DOTENV config
dotenv.config();

//mongodb connection
connectDB();

//rest objects
const app = express();

//middelware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use('/api/v1/test', testRoutes);

//port
const PORT = process.env.PORT || 8080 ; //

//listen
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});