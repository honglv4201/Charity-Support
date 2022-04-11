const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

//@router POST api/post/create
//@desc create new post charity
//access private (only for organization)
router.post("/create", async (req, res) => {
  const {
    image,
    title,
    typecharity,
    timeRemain,
    organization,
    donated,
    target,
  } = req.body;

  if (
    !image ||
    !title ||
    !typecharity ||
    !timeRemain ||
    !organization ||
    !donated ||
    !target
  ) {
    return res.status(400).json({
      success: false,
      message: "missing info",
    });
  }

  try {
    const newPost = new Post({
      image,
      title,
      typecharity,
      timeRemain,
      organization,
      donated,
      target,
    });
    await newPost.save();
    return res.json({
      success: true,
      message: "create post successfully",
      post: newPost,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server has problem when creating new post",
      error,
    });
  }
});

//@router GET /api/post
//@desc get all post
//access public
router.get("/", async (req, res) => {
  try {
    const allpost = await Post.find({}).populate([
      {
        path: "typecharity",
        model: "typeCharity",
      },

      "organization",
    ]);
    return res.json({
      success: true,
      post: allpost,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server has problem when loading all post",
      error: error,
    });
  }
});

module.exports = router;
