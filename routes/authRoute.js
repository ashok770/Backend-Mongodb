const express = require("express");
const authRoute = express.Router();
authRoute.route("/login").post();
authRoute.route("/signup").post();

module.exports = authRoute;
