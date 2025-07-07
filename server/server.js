const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json()); // to parse JSON body

app.use("/api", authRoutes); // route prefix

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo connected"))
  .catch(err => console.log("Mongo error: ", err));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});