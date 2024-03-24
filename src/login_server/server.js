require('dotenv').config()
//mongodb
require('./config/db');
const stripe = require('stripe')('sk_test_51OZRYhHXdyJ63GGlmb20Ku4ZBoj0juw0wmufE0BrzhqKbjflWgjaFKFQ0Jd8dKv6MJRxPuT4k6GbDTMS4QZNs6tM00KXUmVku1');
const express = require('express');
const app=require('express')();
const port=process.env.PORT||5000;

//cors
const cors=require("cors");
app.use(cors());
app.use(express.static('public'));

const UserRouter=require('./api/User');


//For accepting post from data
const bodyParser=require('express').json;
app.use(bodyParser());

app.use('/user',UserRouter)


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})