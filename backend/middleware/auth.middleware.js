const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;

  // check to see if a authorization prop exists in the headers
  if (!authorization) {
    return res.status(401).json({ error: "401 - Unauthorized" });
  }

  // split the token string to seperate the token from the string - eg: "bearertoken 2098347s0d98af..."
  const jwtToken = authorization.split(" ")[1];

  try {
    // verify the token is valid - jwt.verify returns token payload
    const { _id } = jwt.verify(jwtToken, process.env.SECRET);

    // find user by id stored in the token then use select method to only get the id back
    // and add a userID to the request
    req.userID = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "401 - Unauthorized" });
  }
};

module.exports = authenticate;
