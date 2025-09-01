// require('dotenv').config({path: './env'})

import connectDB from './db/index.js';
import dotenv from 'dotenv';

dotenv.config({          // we are doing this because as soon as the application load,
                        //  the env will also be loaded and available in the main file
    path: './.env'
})

connectDB();













/*import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from 'express';

const app=express();

(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error",(error)=>{
            console.log("ERRR:",error);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    }catch(error){
        console.error("Error: ",error);
        throw error;
    }
})();
*/