const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  feedList: { type: Array },
});

const User = new mongoose.model("User", userSchema);

// Dummy data

const user1 = {
  id: "df11d34",
  username: "user31",
  email: "user31@email.com",
  feedList: [
    "https://theblogmillionaire.libsyn.com/rss",
    "https://feeds.simplecast.com/BqbsxVfO",
  ],
};

module.exports = {
  User,
};
