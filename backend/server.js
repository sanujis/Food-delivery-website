import express from "express";  
import cors from "cors";
import mongoose from "mongoose";
import foodRouter from "./routes/foodRoute.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

//app config
const app = express()
const port= process.env.PORT || 4000

//middleware
app.use(express.json())
app.use(cors())

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 50000, // Increase timeout settings
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  };

//db connection
connectDB()

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images", express.static("uploads"))

app.get("/", (req, res) => {
    res.send("API working")
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)
})

//mongodb+srv://sanujis1102:Taehyung2@cluster0.jsc6e.mongodb.net/?
