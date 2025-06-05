const express = require("express");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const router = express.Router();
const User = require("../Model/User.model");
const sendEmail = require("../utils/sendEmail");
const upload = require("../utils/multer");
const verifyToken = crypto.randomBytes(32).toString("hex");

const Regsiter = router.post("/register", upload.single("ProfilePic"),async (req, res) => {
  const { UserName, email, password } = req.body;
  try {
    let Email = await User.findOne({ email });
    if (Email) {
      return res.status(400).json({ msg: "User is Already Register" });
    }
    const salt = await bcrypt.genSalt(10);
    const Hashpassword = await bcrypt.hash(password, salt);
    const user = new User({
      UserName,
      email,
      password: Hashpassword,
      ProfilePic:req.file? req.file.path : null,
      verifyToken
    });
    await user.save();
    let link = `http://localhost:5000/verify-email?token=${verifyToken}`
    const emailContent = `
    <h1>Hello,${UserName}</h1>
    <p>Congratulations, on Succesfully Registered with our Platform</p>
     <p>Please confirm your email by clicking the link below:</p>
  <a href="${link}">Verify Email</a>
    `;
    await sendEmail(email,'Succesfully Regsitered !',emailContent);
    res.status(201).json({ msg: "User is Successfully Register", user });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});
module.exports = Regsiter;
