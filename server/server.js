const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
