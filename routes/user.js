const express = require("express");
const router = express.Router();
const { handleUserSignUp, handleUserLogin } = require("../controller/user");

//signup
router.get("/signup", (req, res) => res.render("signup.ejs"));
router.post("/signup", handleUserSignUp);
//login
router.get("/login", (req, res) => res.render("login.ejs"));
router.post("/login", handleUserLogin);

//success
// router.get("/success", (req, res) => res.render("success.ejs"));

module.exports = router;
