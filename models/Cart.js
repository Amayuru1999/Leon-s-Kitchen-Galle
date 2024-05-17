const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema({
  userId: String,
  name: String,
  description: String,
  price:String,
});

const Cart=mongoose.model('Cart',CartSchema);
module.exports=Cart;