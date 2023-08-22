const express = require("express");
var userRoutes = require("./userRoutes.js");
var postRoutes = require("./postRoutes.js");

const allRoutes = express.Router();
allRoutes.use("/", userRoutes);
allRoutes.use("/", postRoutes);

module.exports = allRoutes;
