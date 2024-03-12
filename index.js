require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
//const stripeRoute = require("./routes/stripe");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
//app.use("/api/checkout", stripeRoute);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      //port = process.env.PORT;
      console.log("listning on port " + port + " connected to the DB");
    });
  })
  .catch((err) => {
    console.log(err);
  });

port = process.env.PORT;
