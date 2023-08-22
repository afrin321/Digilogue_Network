const express = require("express");
const userRoutes = express.Router();

const userController = require("./../controllers/userController");

// Mount resource routes
userRoutes.get("/test", userController.test);
userRoutes.post("/register", userController.register);
userRoutes.post("/login", userController.login);
userRoutes.post("/logout", userController.logout);
userRoutes.get("/profile", userController.profile);

module.exports = userRoutes;
