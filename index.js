import express from "express";
import mongoose  from "mongoose";
import dotenv from 'dotenv'
dotenv.config()


import router from "./router/userRoute.js";


const app = express();  
app.use(express.json());
app.use(router)




mongoose.connect(process.env.MONGO_URI, {

    useNewUrlParser: true,
   
    useUnifiedTopology:true,
}).then(()=>console.log('info','mongo is connected')).catch((err)=>console.log(err));

app.listen(process.env.PORT|5500,console.log(process.env.MONGO_URI));       