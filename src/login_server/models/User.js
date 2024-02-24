const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const UserSchema=new Schema({
    name:String,
    email:String,
    password:String,
    mobileNumber:String,
    verified:Boolean,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User=mongoose.model('User',UserSchema);
module.exports=User;