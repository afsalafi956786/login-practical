// import express from 'express';
// import connectDb from './config/dbConnection.js';

// const app=express();
// connectDb('mongodb://127.0.0.1:27017')

import express from 'express'
import connectDb from './config/dbConnection.js';
import userRoute from './routes/userRouter.js'
import cors from 'cors'
const app=express();

connectDb('mongodb://127.0.0.1:27017/mini')
app.use(express.json())
app.use(cors())
app.use('/',userRoute);

app.listen(4000,()=>{
    console.log('connecting port 4000');
})



