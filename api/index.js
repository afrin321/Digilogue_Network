const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://127.0.0.1:5173" }));
app.use(cookieParser());

app.use("/uploads", express.static(__dirname + "/uploads"));

const uri = process.env.MONGODB_URI;
const start = async () => {
  try {
    await mongoose.connect(uri);
    app.listen(4000, () => console.log("Server started on port 4000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.json("test ok");
});

const allRoutes = require("./routes/allRoutes.js");
app.use("/", allRoutes);

start();
