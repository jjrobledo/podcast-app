require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const podcastRoutes = require("./routes/podcast.routes");
const userRoutes = require("./routes/user.routes");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/podcasts", podcastRoutes);
app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT} 🎧`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
