const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(400).json({
      success: false,
      message: "missing token",
    });
  }
  try {
    const decoded = await jwt.verify(token, process.env.JWT_CODE);
    if (false) {
      return res.status(400).json({
        success: false,
        message: "invalid token",
      });
    } else {
      req.userID = decoded.userID;
      next();
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "server has problemx",
    });
  }
};
module.exports = verifyToken;
