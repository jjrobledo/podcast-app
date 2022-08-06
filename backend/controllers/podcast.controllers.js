const Podcast = require("../models/podcast.model");
const mongoose = require("mongoose");
const getPodcastFromFeed = require("podparse");

const getFeed = async (req, res) => {
  const feed = await Podcast.find({});
  res.status(200).json(feed);
};

const addPodcast = (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "invalid url" });
  }

  const podcastData = fetch(url)
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

    const podcast = Podcast.create({
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
  console.log(req.body);
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "invalid podcast identifier" });
  }

  const podcast = await Podcast.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!podcast) {
    return res.status(400).json({ error: "podcast not found" });
  }

  res.status(200).json(podcast);
};

module.exports = {
  getFeed,
  addPodcast,
  getPodcast,
  deletePodcast,
  updatePodcast,
};
