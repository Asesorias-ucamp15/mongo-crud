import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const url = process.env.URL_MONGO_DB

mongoose.connect(url)