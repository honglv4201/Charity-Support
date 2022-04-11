const express = require("express");
const Organization = require("../models/Organization");
const router = express.Router();

//@router POST api/organization
//@desc create organization
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
    const newOrganization = new Organization(req.body);
    await newOrganization.save();

    return res.status(200).json({
      success: true,
      message: "create new organization successfully",
      organization: newOrganization,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server has problem when creating new organization",
    });
  }
});

//@router GET api/organization
router.get("/", async (req, res) => {
  try {
    const responseData = await Organization.find({});
    res.json({
      success: true,
      organization: responseData,
    });
  } catch (error) {}
});

module.exports = router;
