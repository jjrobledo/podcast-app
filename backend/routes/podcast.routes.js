const express = require("express");
const {
  getFeed,
  addPodcast,
  getPodcast,
  deletePodcast,
  updatePodcast,
} = require("../controllers/podcast.controllers.js");
const authenticate = require("../middleware/auth.middleware");

const router = express.Router();

router.use(authenticate);

// Get feed
router.get("/", getFeed);

// POST a podcast
router.post("/", addPodcast);

// GET a podcast
router.get("/:id", getPodcast);

// DELETE a podcast
router.delete("/:id", deletePodcast);

// UPDATE a feed
router.patch("/:id", updatePodcast);

module.exports = router;
