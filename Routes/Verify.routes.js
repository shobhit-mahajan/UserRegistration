const express = require("express");
const router = express.Router();
const User = require("../Model/User.model");

const verifyToken = router.get("/verify-email", async (req, res) => {
  const token = req.query.token;

  if (!token) return res.status(400).send("Invalid or missing token");

  try {
    const user = await User.findOne({ verifyToken: token });

    if (!user) return res.status(400).send("Invalid or expired token");

    user.isVerified = true;
    user.verifyToken = undefined;
    await user.save();

    res.send("Email successfully verified! You can now log in.");
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = verifyToken;
