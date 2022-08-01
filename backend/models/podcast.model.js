const mongoose = require("mongoose");

const podcastSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  subtitle: String,
  language: String,
  author: String,
  managingEditor: String,
  keywords: Array,
  category: Array,
  owner: Object,
  image: Object,
  explicit: Boolean,
  lastBuildDate: String,
  link: String,
  episodes: Array,
});

module.exports = mongoose.model("Podcast", podcastSchema);
