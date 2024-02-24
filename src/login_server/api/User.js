const express =require('express');
const router=express.Router();

//mongodb user model
const User=require('./../models/User');

//mongodb user verification model
const UserVerification=require('./../models/UserVerification');

//email handler
const nodemailer=require("nodemailer");

//unique string
const {v4:uuidv4}=require("uuid");

//env variables
require("dotenv").config();

//nodemailer stuff
let transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.AUTH_EMAIL,
        pass:process.env.AUTH_PASS,
    }
})

//testing success
transporter.verify((error,success)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Ready for messages");
        console.log(success);
    }
})

//Password handler
const bcrypt=require('bcrypt');

//Sign up
router.post('/signup',(req,res)=>{
    let{name,email,password,mobileNumber}=req.body;
    name = name ? name.trim() : '';
    email = email ? email.trim() : '';
    password = password ? password.trim() : '';
    mobileNumber = mobileNumber ? mobileNumber.trim() : '';
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
    }else if (!mobileRegex.test(mobileNumber)) {
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
                
                //password handling
                const saltRounds=10;
                bcrypt.hash(password,saltRounds).then(hashedPassword=>{
                    const newUser=new User({
                        name,
                        email,
                        password:hashedPassword,
                        mobileNumber,
                        verified:false
                    });
                    newUser.createdAt = new Date();

                    newUser.save().then(result=>{
                        //handle account verification
                        sendVerificationEmail(result,res);  
                    })
                    .catch(err=>{
                        res.json({
                            status:"FAILED",
                            message:"An error occured while saving user account!"
                        })
                    })
                })

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
//send verification email
const sendVerificationEmail =({_id,email},res)=>{
    //url to be used in the email
    const currentUrl="http://localhost:5000/";

    const uniqueString=uuidv4() + _id;

    //mail options
    const mailOptions={
        from:process.env.AUTH_EMAIL,
        to:email,
        subject:"Verify Your Email",
        html:`<p>Verify your email address to complete the signup and login into your account</p><p>This link
        <b>expires in 6 hours</b>.</p><p>Press <a href=${currentUrl + "user/verify/" + _id +"/"+uniqueString}>here</a>to proceed.</p>`,
    }

    //hash the uniqueString
    const saltRounds=10;
    bcrypt
        .hash(uniqueString,saltRounds)
        .then((hashedUniqueString)=>{
            //set values in userVerification collection
            const newVerification=new UserVerification({
                userId:_id,
                uniqueString:hashedUniqueString,
                createdAt:Date.now(),
                expiresAt:Date.now()+21600000,
            })

            newVerification
                .save()
                .then(()=>{
                    transporter
                        .sendMail(mailOptions)
                        .then(()=>{
                            //email sent and verification recors saved
                            res.json({
                                status:"PENDING",
                                message:"Verification email sent"
                            })
                        })
                })
                .catch((error)=>{
                    console.log(error);
                    res.json({
                        status:"FAILED",
                        message:"An error occured while hashing email data!",
                    })
                })
        })
        .catch(()=>{
            res.json({
                status:"FAILED",
                message:"An error occured while hashing email data!",
            })
        })
}
//Sign in
router.post('/signin',(req,res)=>{
    let{email,password}=req.body;
    email=email.trim();
    password=password.trim();

    if(email==""||password==""){
        res.json({
            status:"FAILED",
            message:"Empty credentials supplied"
        })

    }else{
        //Check if user exist
        User.find({email})
        .then(data=>{
            if(data.length){
                //User exists

                const hashedPassword=data[0].password;
                bcrypt.compare(password,hashedPassword).then(result=>{
                    if(result){
                        //Password match
                        res.json({
                            status:"SUCCESS",
                            message:"Signin successfull",
                            data:data
                        })
                    }else{
                        res.json({
                            status:"FAILED",
                            message:"Invalid password entered!"
                        })
                    }
                })
                .catch(err=>{
                    res.json({
                        status:"FAILED",
                        message:"An error occured while comparing passwords"
                    })
                })
            }else{
                res.json({
                    status:"FAILED",
                    message:"Invalid credentials entered!"
                })
            }
        })
        .catch(err=>{
            res.json({
                status:"FAILED",
                message:"An error occurred while checking existing user"
            })
        })
    }
    
})

module.exports=router;