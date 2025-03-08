const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { saveRedirectUrl } = require("../middleware");
const User = require("../models/user");
const passport = require("passport")
const userController = require("../controller/userController");

// Sign UP  : User Registration and after logIn :
router.route("/signup")
    .get(userController.renderSignUpForm)
    .post( wrapAsync(userController.signUp))

// // Log IN : User Register and Authentication :
router.route("/login")
    .get(userController.renderLoginForm)
    .post(saveRedirectUrl,userController.logIn)

// Log Out : User Session Destroy
router.get("/logout", userController.logOut);
module.exports = router;
