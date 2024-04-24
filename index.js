import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectMongoDB,* as database from "./config/database.js";
import todoRouter from "./routes/todo.router.js";

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/api/v1/todo",todoRouter)

app.listen(PORT,() => console.log(`Server is running on ${PORT}`));
connectMongoDB("mongodb+srv://root:LAROOT2@cluster0.k3wkrac.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");