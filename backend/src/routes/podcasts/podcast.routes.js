const express = require("express");
const {
  getFeed,
  addPodcast,
  getPodcast,
  deletePodcast,
  updatePodcast,
} = require("./podcast.controllers.js");
const authenticate = require("../../middleware/auth.middleware");

const podcastRouter = express.Router();

podcastRouter.use(authenticate);

// Get feed
podcastRouter.get("/", getFeed);

// POST a podcast
podcastRouter.post("/", addPodcast);

// GET a podcast
podcastRouter.get("/:id", getPodcast);

// DELETE a podcast
podcastRouter.delete("/:id", deletePodcast);

// UPDATE a feed
podcastRouter.patch("/", updatePodcast);

module.exports = podcastRouter;
