const express =require('express');
const router=express.Router();

//mongodb user model
const User=require('./../models/User');

//Password handler
const bcrypt=require('bcrypt');

//Sign up
router.post('/signup',(req,res)=>{
    let{name,email,password,mobileNumber}=req.body;
    name=name.trim();
    email=email.trim();
    password=password.trim();
    mobileNumber=mobileNumber.trim();
    const mobileRegex = /^[0-9]{10}$/;
    if(name=="" || email=="" || password=="" || mobileNumber==""){
        res.json({
            status:"FAILED",
            message:"Empty input fields"
        })
    }else if(!/^[a-zA-Z]*$/.test(name)){
        res.json({
            status:"FAILED",
            message:"Invalid name entered"
        })
    }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        res.json({
            status:"FAILED",
            message:"Invlaid email entered"
        })
    }else if (!mobileRegex.test(mobile)) {
        res.json({
            status: "FAILED",
            message: "Invalid mobile number entered"
        });
    }else if(password.length<8){
        res.json({
            status:"FAILED",
            message:"Password is too short!"
        })
    }else{
        //Checking if user already exists
        User.find({email}).then(result=>{
            if(result.length){
                //A user alreaday exists
                res.json({
                    status:"FAILED",
                    message:"User with the provided alredy exists"
                })
            }else{
                //Try to create new user
            }

        }).catch(err=>{
            console.log(err);
            res.json({
                status:"FAILED",
                message:"An error occured while checking for existing user!"
            })
        })
    }

})

//Sign in
router.post('/signin',(req,res)=>{
    
})

module.exports=router;