import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import router from './apis/products.js';
import './db/mongodb.js'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)


console.log(`El servidor esta corriendo en el puerto ${PORT}`)

app.listen(PORT)