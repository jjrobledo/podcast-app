
const express = require("express");

const userRoutes = require("./routes/users/user.routes");
const podcastRoutes = require("./routes/podcasts/podcast.routes");

const api = express.Router();

api.use("/users", userRoutes);
api.use("/podcasts", podcastRoutes);

module.exports = api;