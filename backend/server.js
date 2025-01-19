import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from 'http';
import connectDB from './config/database.js'
import {default as authRoute} from './routes/auth.js'

dotenv.config({ path: "./config/config.env" });

//initialize express
const app = express();

const server = http.createServer(app);

//middleware
app.use(cors());
app.use(express.json());

//connect to mongodb
connectDB();

//User Routes
app.use('/api/auth', authRoute)

//Message Routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
