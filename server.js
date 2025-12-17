const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = express();
const PORT = process.env.PORT_NO || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v3/auth", authRoutes);
app.use("/api/v3/user", userRoutes);

// Start server
app.listen(PORT, () => {
  console.log("Server started successfully on port no", PORT);
});

module.exports = app;
