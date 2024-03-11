require('dotenv').config()
//mongodb
require('./config/db');

const app=require('express')();
const port=process.env.PORT||5000;

//cors
const cors=require("cors");
app.use(cors());

const UserRouter=require('./api/User');


//For accepting post from data
const bodyParser=require('express').json;
app.use(bodyParser());

app.use('/user',UserRouter)


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})