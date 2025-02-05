import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sanujis1102:Taehyung2@cluster0.jsc6e.mongodb.net/food delivery').then(()=>console.log("Database connected"))
}