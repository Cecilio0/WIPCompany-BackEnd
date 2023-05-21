import "dotenv/config"
import express from "express";
import cors from "cors";
import { router } from "./routes/index";
import dbConnect from "./config/mongo";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());//de esta manera permite que todos los origenes consuman la api

app.use(express.json());
app.use(router);

dbConnect().then(() => console.log("conexion exitosa")); 


app.listen(PORT, () => {
    
});