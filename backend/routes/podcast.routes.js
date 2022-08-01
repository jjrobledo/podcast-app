const express = require("express");
const {
  getFeed,
  addPodcast,
  deletePodcast,
  updatePodcast,
} = require("../controllers/podcast.controllers.js");
const router = express.Router();

// Get feed
router.get("/", getFeed);

// POST a podcast
router.post("/", addPodcast);

// DELETE a podcast
router.delete("/:id", deletePodcast);

// UPDATE a feed
router.patch("/:id", updatePodcast);

module.exports = router;
