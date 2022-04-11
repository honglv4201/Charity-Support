const TypeCharity = require("../models/TypeCharity");

const router = require("express").Router();

//@router POST api/type
//@desc create type Charity
//access private (admin)
router.post("/", async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      success: false,
      message: "missing name",
    });
  }
  try {
    const newType = new TypeCharity({
      name,
    });
    await newType.save();

    return res.json({
      success: true,
      message: "create new typecharity successfully",
      type: newType,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server has problem with create new type",
    });
  }
});

//@router GET api/type
//@desc get all type
//access public
router.get("/", async (req, res) => {
  try {
    const response = await TypeCharity.find();
    res.json({
      success: true,
      typeCharity: response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "fail to load type charity ",
    });
  }
});

module.exports = router;
