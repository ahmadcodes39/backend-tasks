import express from "express";
import dotenv from "dotenv";
import router from "./routes/user.routes.js";
import morgan from "morgan";
import path from "path"
dotenv.config();

export const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// app.use(express.static())

app.get("/home",(req,res)=>{
    res.sendFile(path.join(import.meta.dirname,"public","index.html"))
})


app.use("/api/", router);
export default app;
