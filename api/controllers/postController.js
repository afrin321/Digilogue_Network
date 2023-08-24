const { Post } = require("./../models/Post");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");

const secret = "fskfbsbkdrbgkrbgkdtgthlkthlthltrl";

const newPost = async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);

  const { token } = req.cookies;
  console.log("token", token);
  if (token) {
    jwt.verify(token, secret, {}, async (err, info) => {
      if (err) throw err;
      const { title, summary, content, file } = req.body;
      console.log("file", file);
      const newPost = new Post({
        title,
        summary,
        content,
        author: info.id,
      });

      const response = await newPost.save();
      res.json(newPost);
    });
  }
};

const updatePost = async (req, res) => {
  let newPath = null;
  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    newPath = path + "." + ext;
    fs.renameSync(path, newPath);
  }

  const { token } = req.cookies;
  console.log("token", token);
  if (token) {
    jwt.verify(token, secret, {}, async (err, info) => {
      if (err) throw err;
      const { id, title, summary, content } = req.body;
      const post = await Post.findById(id);
      const isAuthor =
        JSON.stringify(post?.author._id) == JSON.stringify(info.id);
      if (!isAuthor) {
        res.status(400).json("you are not the author");
      }
      await post.updateOne({
        title,
        summary,
        content,
        image: newPath ? newPath : Post.image,
      });

      res.json("ok");
    });
  }
};

const allPost = async (req, res) => {
  const posts = await Post.find()
    .populate("author", ["username"])
    .sort({ createdAt: -1 })
    .limit(20);
  res.json(posts);
};

const postById = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id).populate("author", ["username"]);
  res.json(post);
};

module.exports = {
  newPost,
  updatePost,
  allPost,
  postById,
};
