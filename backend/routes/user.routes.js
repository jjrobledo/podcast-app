const express = require("express");

const { loginUser, signupUser } = require("../src/routes/users/users.controllers");

const router = express.Router();

router.post("/login", loginUser);

router.post("/signup", signupUser);

module.exports = router;
