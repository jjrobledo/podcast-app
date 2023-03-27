require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const podcastRoutes = require("./routes/podcast.routes");
const userRoutes = require("./routes/user.routes");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
//app.use(cors());
app.use(morgan("dev"));

app.use("/api/podcasts", podcastRoutes);
app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `➡️ Connected to MongoDb 🖥️. Server listening on port ${PORT} 🎧`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
