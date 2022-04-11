const express = require("express");
const User = require("../models/User");
const router = express.Router();

const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/auth");

// @router api/auth
//@desc validate token
//access public
router.post("/", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userID);
    console.log("hong");
    console.log(req.userID);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "cant validation",
      });
    }
    return res.json({
      success: true,
      message: "validation successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
});

//@router api/auth/register
//@desc register new user
//access public
router.post("/register", async (req, res) => {
  const { fullname, email, phoneNumber, password } = req.body;

  //authentication
  if (!fullname || !email || !phoneNumber || !password) {
    return res.status(400).json({
      success: false,
      message: "missing value in form",
    });
  }

  try {
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "email has been taken",
      });
    }

    // hash password
    const hashPassword = await argon2.hash(password);
    const newUser = new User({
      fullname,
      email,
      password: hashPassword,
      phoneNumber,
    });
    await newUser.save();

    //return token
    const token = jwt.sign({ userID: newUser._id }, process.env.JWT_CODE);
    return res.status(200).json({
      success: true,
      message: "register successfully",
      user: newUser,
      token,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "server has somthing wrong",
    });
  }
});
//@router PUT api/auth/updateinfo
//@desc update general info
//access private
router.put("/updateprofile", verifyToken, async (req, res) => {
  const user = await User.findById(req.userID);
  const oldUser = {
    fullname: user.fullname,
    password: user.password,
    email: user.email,
    phoneNumber: user.phoneNumber,
  };

  const { fullname, email, password, phoneNumber } = req.body;
  try {
    if (!fullname || !phoneNumber) {
      return res.status(400).json({
        success: false,
        message: "not fill out this form",
      });
    }

    let updateInfo = {
      ...oldUser,
      fullname,
      email,
      phoneNumber,
    };
    updateInfo = await User.findByIdAndUpdate(req.userID, updateInfo, {
      new: true,
    });
    if (!updateInfo) {
      return res.status(400).json({
        success: false,
        message: "Cant find account",
      });
    }
    res.json({
      success: true,
      message: "update complete",
      updateInfo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server has problem",
    });
  }
});

//@router api/auth/login
//@desc login user
//access public
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // authentication
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "missing email or/and password ",
    });
  }

  // check password
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400).json({
      success: false,
      message: "user not exists",
    });
  }

  const checkPassword = await argon2.verify(user.password, password);
  if (!checkPassword) {
    return res.status(400).json({
      success: false,
      message: "invalid email or password",
    });
  }

  // return token
  const accessToken = jwt.sign({ userID: user._id }, process.env.JWT_CODE);

  return res.status(200).json({
    success: true,
    message: "login successfully",
    user,
    token: accessToken,
  });
});

module.exports = router;
