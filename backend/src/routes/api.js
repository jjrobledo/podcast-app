
const express = require("express");

const userRouter = require("./users/user.routes");
const podcastRouter = require("./podcasts/podcast.routes");

const api = express.Router();

api.use("/users", userRouter);
api.use("/podcasts", podcastRouter);

module.exports = api;