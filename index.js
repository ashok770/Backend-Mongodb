const express = require("express");
const fs = require("fs");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 5000;

app.use("/api/v3/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
