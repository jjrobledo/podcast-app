const Podcast = require("../models/podcast.model");
const mongoose = require("mongoose");
const getPodcastFromFeed = require("podparse");

const getFeed = async (req, res) => {
  const feed = await Podcast.find({});
  res.status(200).json(feed);
};

const addPodcast = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "invalid url" });
  }

  const podcastData = await fetch(url)
    .then((res) => res.text())
    .then((data) => {
      try {
        return getPodcastFromFeed(data);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });

  try {
    const {
      meta: {
        title,
        description,
        subtitle,
        language,
        author,
        managingEditor,
        keywords,
        category,
        owner,
        image,
        explicit,
        lastBuildDate,
        link,
      },
      episodes,
    } = podcastData;

    const podcast = await Podcast.create({
      title,
      description,
      subtitle,
      language,
      author,
      managingEditor,
      keywords,
      category,
      owner,
      image,
      explicit,
      lastBuildDate,
      link,
      episodes,
      feedURL: url,
    });
    res.status(200).json(podcast);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPodcast = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "invalid podcast identifier" });
  }

  const podcast = await Podcast.findById({ _id: id });

  if (!podcast) {
    return res.status(400).json({ error: "podcast not found" });
  }

  res.status(200).json(podcast);
};

const deletePodcast = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "invalid podcast identifier" });
  }

  const podcast = await Podcast.findOneAndDelete({ _id: id });

  if (!podcast) {
    return res.status(400).json({ error: "podcast not found" });
  }

  res.status(200).json(podcast);
};

const updatePodcast = async (req, res) => {
  console.log("updating");
  const feed = await Podcast.find({});

  feed.forEach((podcast) => {
    try {
      getPodcastData(req, res, podcast);
    } catch (error) {
      console.log(error);
      return res.status(400);
    }
  });

  console.log("update complete");
  const newFeed = await Podcast.find({});
  res.status(200).json(newFeed);
};

const getPodcastData = async (req, res, podcast) => {
  const podcastData = await fetch(podcast.feedURL)
    .then((res) => res.text())
    .then((data) => {
      try {
        return getPodcastFromFeed(data);
      } catch (error) {
        console.log(error);
      }
    });

  try {
    const {
      meta: {
        title,
        description,
        subtitle,
        language,
        author,
        managingEditor,
        keywords,
        category,
        owner,
        image,
        explicit,
        lastBuildDate,
        link,
      },
      episodes,
    } = podcastData;

    const result = await Podcast.findOneAndUpdate(
      { _id: podcast._id },
      {
        title,
        description,
        subtitle,
        language,
        author,
        managingEditor,
        keywords,
        category,
        owner,
        image,
        explicit,
        lastBuildDate,
        link,
        episodes,
        feedURL: podcast.feedURL,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getFeed,
  addPodcast,
  getPodcast,
  deletePodcast,
  updatePodcast,
};
