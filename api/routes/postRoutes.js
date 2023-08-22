const express = require("express");
const postRoutes = express.Router();
const multer = require("multer");

//const uploadMiddleware = multer({ dest: "uploads/" });

const postController = require("./../controllers/postController");

postRoutes.post(
  "/post",
  //  uploadMiddleware.single("file"),
  postController.newPost
);

postRoutes.put(
  "/post",
  //  uploadMiddleware.single("file"),
  postController.updatePost
);

postRoutes.get("/post", postController.allPost);

postRoutes.get("/postbyid/:id", postController.postById);

module.exports = postRoutes;
