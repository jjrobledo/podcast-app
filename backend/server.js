const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");

const app = express();
const podcastRoutes = require("./routes/podcast.routes");
const PORT = process.env.PORT;

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/podcasts", podcastRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    const db = mongoose.connection;
    db.on("error", (err) =>
      console.log(err.message + " is mongo not running?")
    );
    db.on("connected", () => console.log("mongo connected"));
    db.on("disconnected", () => console.log("mongo disconnected"));

    app.listen(PORT, () => {
      console.log(`listening on port ${PORT} 🎧`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
