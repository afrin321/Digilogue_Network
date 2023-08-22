const express = require("express");
const userRouter = express.Router();

const userController = require("../controllers/userController");

userRouter.get("/test", userController.test);

module.exports = userRouter;
