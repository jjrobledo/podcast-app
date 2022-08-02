//const { User } = require("../models/user.model.js");

const loginUser = async (req, res) => {
  res.json({ msg: "login user" });
};

const signupUser = async (req, res) => {
  res.json({ msg: "Signup user" });
};

module.exports = { loginUser, signupUser };
