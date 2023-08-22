const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: { type: String },
    summary: { type: String },
    image: { type: String },
    type: { type: String },
    content: { type: String },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = { Post };
