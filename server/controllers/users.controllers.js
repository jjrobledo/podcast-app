const { user1 } = require("../models/user.model.js");

const getPodcastFromFeed = require("podparse");

fetch(user1.feedList[0])
  .then((res) => res.text())
  .then((data) => {
    const podcast = getPodcastFromFeed(data);
    console.log(podcast.meta);
    console.log(podcast.episodes[0]);
  });
