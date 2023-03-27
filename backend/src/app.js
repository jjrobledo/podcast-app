const express = require("express");
const morgan = require("morgan");

const userRoutes = require("./routes/users/user.routes");
const podcastRoutes = require("./routes/podcasts/podcast.routes");

const api = express.Router();

app.use(morgan("dev"));

app.use(express.json());

api.use("/users", userRoutes);
api.use("/podcasts", podcastRoutes);

module.exports = api;