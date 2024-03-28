const express =require('express');
const router=express.Router();

//mongodb user model
const User=require('./../models/User');

//mongodb user verification model
const UserVerification=require('./../models/UserVerification');
const PasswordReset=require('./../models/PasswordReset');
const Cart=require('./../models/Cart')

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

//path for static verified page
const path=require("path");
const { error } = require('console');
const { errorMonitor } = require('events');

const YOUR_DOMAIN = 'http://localhost:5000';

router.post('/create-checkout-session', async (req, res) => {
  const userEmail = req.body.userEmail; // Assuming the user's email is sent in the request body

  try {
    // Retrieve items from the user's cart in the database based on the user's email
    const cartItems = await Cart.find({ userId: userEmail });

    // Create line items array based on cart items
    const lineItems = cartItems.map(item => ({
      price: item.price, // Assuming each item in the cart has a 'price' field representing the Stripe Price ID
      quantity: item.quantity, // Assuming each item in the cart has a 'quantity' field representing the quantity
    }));

    // Create a checkout session with the retrieved line items
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${YOUR_DOMAIN}/cancel`,
    });

    // Redirect the client to the checkout session URL
    res.redirect(303, session.url);
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});


// Define a route to get items based on user email
router.get('/cart/:userEmail', async (req, res) => {
    const userEmail = req.params.userEmail;
  
    try {
      // Assuming YourItemModel is your Mongoose model for items
      const items = await Cart.find({ userId: userEmail });
  
      res.json(items);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

//add item to the cart
// Inside your /cart/add route
router.post('/cart/add', async (req, res) => {
  try {
    const { userId, name, description, price } = req.body;

    // Create a new instance of Cart model
    const newCartItem = new Cart({
      userId,
      name,
      description,
      price,
    });

    // Save the new cart item to the database
    await newCartItem.save();

    res.json({
      status: "SUCCESS",
      message: "Item added to the cart successfully",
      data: newCartItem,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "FAILED",
      message: "An error occurred while adding the item to the cart",
    });
  }
});

router.post('/cart/clear', async (req, res) => {
    try {
      const userId = req.body.userId;
  
      // Clear the user's cart in the database
      await Cart.deleteMany({ userId });
  
      res.status(200).json({ message: 'Cart cleared successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: "FAILED",
        message: "An error occurred while clearing the user's cart",
      });
    }
  });

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

//verify email
router.get("/verify/:userId/:uniqueString",(req,res)=>{
    let{userId,uniqueString}=req.params;

    UserVerification
        .find({userId})
        .then((result)=>{
            if(result.length>0){
                //user verification record exists so we proceed
                const {expiresAt}=result[0];
                const hashedUniqueString=result[0].uniqueString;

                //checking for expired unique string 
                if(expiresAt<Date.now()){
                    //record has expired so we delete it
                    UserVerification
                        .deleteOne({userId})
                        .then(result=>{
                            User
                                .deleteOne({_id: userId})
                                .then(()=>{
                                    let message="Link has expired.Please sign up again";
                                    res.redirect(`/user/verified/error=true&message=${message}`);
                                })
                                .catch(error=>{
                                    let message="Clearing user with expired unique string failed";
                                    res.redirect(`/user/verified/error=true&message=${message}`);
                                })
                        })
                        .catch((error)=>{
                            console.log(error);
                            let message="An error occurred while clearing expired user verification record";
                            res.redirect(`/user/verified/error=true&message=${message}`);
                        })

                }else{
                    //valid record exists so we validate the user string
                    //First compare the hashed unique string

                    bcrypt
                        .compare(uniqueString,hashedUniqueString)
                        .then(result =>{
                            if(result){
                                //string match

                                User
                                    .updateOne({_id:userId},{verified:true})
                                    .then(()=>{
                                        UserVerification
                                            .deleteOne({userId})
                                            .then(()=>{
                                                res.sendFile(path.join(__dirname,"./../views/verified.html"))
                                            })
                                            .catch(error=>{
                                                console.log(error);
                                                let message="An error occurred while finalizing successful verification.";
                                                res.redirect(`/user/verified/error=true&message=${message}`);
                                            })
                                    })
                                    .catch(error=>{
                                        console.log(error);
                                        let message="An error occurred while updating user record to show verified.";
                                        res.redirect(`/user/verified/error=true&message=${message}`);
                                    })
                            }else{
                                //existing record but incorrect verification details passed
                                let message="Invalid verification details passed.Check your inbox.";
                            res.redirect(`/user/verified/error=true&message=${message}`);
                            }
                        })
                        .catch(error=>{
                            let message="An error occurred while comparing strings";
                            res.redirect(`/user/verified/error=true&message=${message}`);
                        })
                }

            }else{
                //user verification record doesn't exist
                let message="Account record doesn't exist or has been verified already.Please sign up or log in."
                res.redirect(`/user/verified/error=true&message=${message}`);
            }
        })
        .catch((error)=>{
            console.log(error);
            let message="An error occurred while checking for existing user verification record";
            res.redirect(`/user/verified/error=true&message=${message}`);
        })
})

//Verified page route
router.get("/verified",(req,res)=>{
    res.sendFile(path.join(__dirname,"./../views/verified.html"));
})


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

                //check if user is verified
                if(!data[0].verified){
                    res.json({
                        status:"FAILED",
                        message:"Email hasn't been verified yet.Check your inbox."
                    })
                }else{
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
                }
                
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

//Password reset stuff
router.post("/requestPasswordReset",(req,res)=>{
    const{email,redirectUrl}=req.body;
    //check if email exists
    User
        .find({email})
        .then((data)=>{
            if(data.length){
                //user exists

                //check if user is verified
                if(!data[0].verified){
                    res.json({
                        status:"FAILED",
                        message:"Email hasn't been verified yet.Check your inbox"
                    })
                }
                else{
                    //proceed with email to reset password
                    sendResetEmail(data[0],redirectUrl,res);
                }

            }else{
                res.json({
                    status:"FAILED",
                    message:"No account with supplied email"
                })
            }

        })
        .catch(err=>{
            console.log(error);
            res.json({
                status:"FAILED",
                message:"An error occurred while checking existing user"
            })
        })
})
//send password reset email
const sendResetEmail=({_id,email},redirectUrl,res)=>{
    const resetString=uuidv4()+_id;

    //First we clear all existing reset records
    PasswordReset
        .deleteMany({userId: _id})
        .then(result=>{
            //Reset records deleted successfully
            //Now we send the email
            const mailOptions={
                from:process.env.AUTH_EMAIL,
                to:email,
                subject:"Password Reset",
                html:`<p>We heard that you lost the passowrd.</p><p>Don't worry,use the link below to reset it.</p><p>This link
                <b>expires in 60 minutes.</b>.</p><p>Press <a href=${redirectUrl + "/" + _id +"/"+resetString}>here</a>to proceed.</p>`,
            }
            //hash the reset string
            const saltRounds=10;
            bcrypt
                .hash(resetString,saltRounds)
                .then(hashedResetString=>{
                    //set values in password reset collection
                    const newPasswordReset=new PasswordReset({
                        userId: _id,
                        resetString:hashedResetString,
                        createdAt:Date.now(),
                        expiresAt:Date.now()+3600000
                    })
                    newPasswordReset
                        .save()
                        .then(()=>{
                            transporter
                                .sendMail(mailOptions)
                                .then(()=>{
                                    //reset email sent and password reset record saved
                                    res.json({
                                        status:"Pending",
                                        message:"Password reset email sent",
                                    })
                                })
                        })
                        .catch(error=>{
                            console.log(error);
                            res.json({
                                status:"FAILED",
                                message:"Couldn't save password reset data!",
                            })
                        })
                })
                .catch(error=>{
                    console.log(error);
                    res.json({
                        status:"FAILED",
                        message:"An error occured while hashing the password reset data!",
                    })
                })
        })
        .catch(error=>{
            //error while clearing existing records
            console.log(error)
            res.json({
                status:"FAILED",
                message:"Clearing existing password reset records failed."
            })
        })
}

//Actually reset the password
router.post("/resetPassword",(req,res)=>{
    let{userId,resetString,newPassword}=req.body;
    PasswordReset
        .find({userId})
        .then(result=>{
            if(result.length>0){
                //password reset record exists so we proceed

                const {expiresAt}=result[0];
                const hashedResetString=result[0].resetString;

                //checking for expired reset string
                if(expiresAt<Date.now()){
                    PasswordReset
                        .deleteOne({userId})
                        .then(()=>{
                            //Reset record deleted successfully
                            res.json({
                                status:"FAILED",
                                message:"Password reset link has expired"
                            })
                        }

                        )
                        .catch(error=>{
                            //deletion failed
                            res.json({
                                status:"FAILED",
                                message:"Clearing password reset record failed."
                            })
                        })
                }else{
                    //valid reset record exists so we validate the reset string
                    //First compare the hashed reset string
                    bcrypt
                        .compare(resetString,hashedResetString)
                        .then((result)=>{
                            if(result){
                                //strings matched
                                //hash password again

                                const saltRounds=10;
                                bcrypt
                                    .hash(newPassword,saltRounds)
                                    .then(hashedNewPassword=>{
                                        //Update user password

                                        User
                                            .updateOne({_id:userId},{password:hashedNewPassword})
                                            .then(()=>{
                                                //update complete.Now delete reset record
                                                PasswordReset
                                                    .deleteOne({userId})
                                                    .then(()=>{
                                                        //both user record and reset record updated
                                                        res.json({
                                                            status:"SUCCESS",
                                                            message:"Password has been reset successfully."
                                                })
                                                    })
                                                    .catch(error=>{
                                                        console.log(error);
                                                        res.json({
                                                            status:"FAILED",
                                                            message:"An error occurred while finalizing password reset."
                                                })
                                                    })
                                            })
                                            .catch(error=>{
                                                console.log(error);
                                                res.json({
                                                    status:"FAILED",
                                                    message:"Updating user password failed."
                                                })
                                            })
                                    })
                                    .catch(error=>{
                                        console.log(error);
                                        res.json({
                                            status:"FAILED",
                                            message:"An error occured while hashing new password."
                                        })
                                    })

                            }else{
                                //Existing record but incorrect reset string passed.
                                res.json({
                                    status:"FAILED",
                                    message:"Invalid password reset details passed."
                                })
                            }
                        })
                        .catch(error=>{
                            res.json({
                                status:"FAILED",
                                message:"Comparing password reset strings failed."
                            })
                        })
                }

            }else{
                //Password reset record doesn't exist
                res.json({
                    status:"FAILED",
                    message:"Password reset request not found."
                })
            }
        })
        .catch(error=>{
            console.log(error)
            res.json({
                status:"FAILED",
                message:"Checking for existing password reset records failed."
            })
        })

})

module.exports=router;