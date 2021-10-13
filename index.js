import express from "express";
import mongoose from "mongoose";
import route from "./routes/index.js";
import cors from "cors";
const app = express();

mongoose.connect("mongodb://localhost:27017/rest_db");

const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', ()=> console.log("Database Connect"));

app.use(cors());
app.use(express.json());
app.use('/get', route);

app.listen('8000', () => console.log('Server Running at Port 8000'));