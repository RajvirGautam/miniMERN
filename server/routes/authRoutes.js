const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");
require("dotenv").config();

// Signup
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const existing = await User.findOne({ username });
  if (existing) return res.status(400).json({ msg: "User already exists" });

  const newUser = new User({ username, password });
  await newUser.save();
  res.status(201).json({ msg: "User created" });
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(401).json({ msg: "Invalid" });

  const match = await require("bcrypt").compare(password, user.password);
  if (!match) return res.status(401).json({ msg: "Wrong password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});

// Protected Dashboard
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ msg: `Welcome user ${req.userId}` });
});

module.exports = router;