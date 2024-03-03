require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const menuItemRoutes = require("./routes/menuItemRoutes");

const app = express();

app.use(bodyParser.json());

//routes
app.use("/api/foods", menuItemRoutes);

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
