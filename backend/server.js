import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import {default as authRoute} from './routes/auth.js'

dotenv.config({ path: "./config/config.env" });

//initialize express
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//connect to mongodb
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected"))
  .catch((err) => console.log("Connection Error: ", err));

app.use('/api/auth', authRoute)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
