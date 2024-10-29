import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./db.js";
import routes from "./routes/PostRoutes.js";
import bodyParser from "body-parser";



dotenv.config();

connect()


const app= express()



app.use(bodyParser.json())
app.use(cors())


app.use("/api/posts", routes)



const Port = process.env.PORT || 5000
app.listen(Port, ()=>{
    console.log(`server running on port ${Port}`)
})




